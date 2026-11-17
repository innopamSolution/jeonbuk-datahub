import { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Icon from '../components/Icon';
import NotificationBell from '../components/NotificationBell';
import DsSelect from '../components/DsSelect';
import DataFreshness from '../components/DataFreshness';
import {
  META, SUMMARY, PARKING_LOTS, DONG_COORDS, DONG_GU,
  CMP_MONTH_SUBCAT, CMP_MONTH_DONG, ENF_MONTH_DONG,
  SUB_ORDER, CMP_MONTHS, ENF_MONTHS, ENF_BY_MONTH,
} from '../data/jeonjuData';
import JEONJU_BJD from '../data/jeonjuBjd.json';

/* 단계구분도 색상 (연한→진한) — 지표 건수 비례 */
const CHORO = ['#fee5d9', '#fcbba1', '#fc9272', '#fb6a4a', '#de2d26', '#a50f15'];
function choroColor(v, max) {
  if (!v || v <= 0) return '#eceef1';
  const r = Math.min(1, v / max);
  return CHORO[Math.min(CHORO.length - 1, Math.floor(r * CHORO.length))];
}

/* 단속 실제 월별 총계 (주소 파싱 여부와 무관한 전체 건수) */
const ENF_MONTH_TOTAL = Object.fromEntries(ENF_BY_MONTH.map((r) => [r.month.slice(5, 7), r.count]));

const NF = (n) => (n || 0).toLocaleString('ko-KR');
const SUB_COLORS = ['#2563eb', '#f97316', '#22c55e', '#a855f7', '#14b8a6', '#eab308', '#ec4899', '#94a3b8'];
const LEVEL = { severe: { label: '심각', color: '#ef4444' }, warn: { label: '경고', color: '#f97316' }, caution: { label: '주의', color: '#3b82f6' } };

/* 선택된 조회 단위 → 대상 월('MM') 목록 (해당 데이터셋 가용월과 교집합) */
function monthsFor(unit, value, available) {
  if (unit === 'year') return available;
  if (unit === 'quarter') {
    const q = { Q1: ['01', '02', '03'], Q2: ['04', '05', '06'], Q3: ['07', '08', '09'], Q4: ['10', '11', '12'] }[value] || [];
    return q.filter((m) => available.includes(m));
  }
  return available.includes(value) ? [value] : [];
}

/* 월별 dict들을 선택 월 범위로 합산 → {key: total} */
function sumMonths(monthDict, months) {
  const out = {};
  months.forEach((m) => {
    const d = monthDict[m] || {};
    for (const k in d) out[k] = (out[k] || 0) + d[k];
  });
  return out;
}

/* 값 내림차순 순위 → 상위 백분위로 단계 분류 */
function classify(sortedVals, v) {
  const n = sortedVals.length;
  const pct = sortedVals.indexOf(v) / Math.max(1, n - 1);
  if (pct <= 0.1) return LEVEL.severe;
  if (pct <= 0.25) return LEVEL.warn;
  return LEVEL.caution;
}

/* ── Leaflet 동 단위 집계 지도 (히트맵 대체: 동 중심좌표에 건수 비례 원) ── */
function GisMap({ points, activeMetric, showParking, baseMap, focusRef, mode, valueByDong }) {
  const ref = useRef(null);
  const mapRef = useRef(null);
  const dataLayerRef = useRef(null);
  const parkingRef = useRef(null);
  const basesRef = useRef(null);
  const markersRef = useRef({});
  const selectedRef = useRef(null);

  // 지도 1회 초기화
  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, { zoomControl: false }).setView(META.center, 12);
    L.control.zoom({ position: 'topright' }).addTo(map);
    const bases = {
      normal: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }),
      satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: 'Tiles &copy; Esri' }),
    };
    basesRef.current = bases;
    bases.normal.addTo(map);

    // 주차장 레이어
    const pg = L.markerClusterGroup({ maxClusterRadius: 50, showCoverageOnHover: false });
    PARKING_LOTS.forEach((p) => {
      const icon = L.divIcon({ className: '', iconSize: [26, 26], iconAnchor: [13, 13],
        html: `<div style="width:26px;height:26px;border-radius:50%;background:#a855f7;color:#fff;border:2.5px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.28);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">P</div>` });
      const fee = p.charge === 'free' ? '무료' : '유료';
      L.marker([p.lat, p.lng], { icon }).bindPopup(
        `<div style="font-family:system-ui;min-width:170px"><b style="font-size:15px;color:#171717">${p.name}</b>
         <div style="padding:4px 0;font-size:13px;color:#70737c;border-top:1px solid rgba(112,115,124,0.08);margin-top:6px">행정동 <b style="color:#171717;float:right">${p.town || '-'}</b></div>
         <div style="padding:4px 0;font-size:13px;color:#70737c">주차 면수 <b style="color:#171717;float:right">${p.spots}면</b></div>
         <div style="padding:4px 0;font-size:13px;color:#70737c">요금 <b style="float:right;color:${p.charge === 'free' ? '#22c55e' : '#f97316'}">${fee}</b></div></div>`)
        .addTo(pg);
    });
    parkingRef.current = pg;
    mapRef.current = map;
    setTimeout(() => map.invalidateSize(), 200);
    return () => { map.remove(); mapRef.current = null; };
  }, []);

  // 데이터 레이어 갱신 (기간/지표/표현방식 변경 시)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (dataLayerRef.current) { map.removeLayer(dataLayerRef.current); dataLayerRef.current = null; }
    const markers = {};

    const popupHtml = (dong, c, e) => `<div style="font-family:system-ui;min-width:160px">
      <div style="margin-bottom:6px"><b style="font-size:15px;color:#171717">${dong}</b></div>
      <div style="padding:4px 0;font-size:13px;color:#70737c">민원 <b style="color:#171717;float:right">${NF(c)}건</b></div>
      <div style="padding:4px 0;font-size:13px;color:#70737c;border-top:1px solid rgba(112,115,124,0.08)">단속 <b style="color:#171717;float:right">${NF(e)}건</b></div></div>`;

    if (mode === 'polygon') {
      // 법정동 폴리곤 단계구분도
      const maxV = Math.max(1, ...Object.values(valueByDong).map((v) => v[activeMetric] || 0));
      const layer = L.geoJSON(JEONJU_BJD, {
        style: (f) => {
          const v = (valueByDong[f.properties.dong] || {})[activeMetric] || 0;
          return { color: '#fff', weight: 1, fillColor: choroColor(v, maxV), fillOpacity: v > 0 ? 0.78 : 0.4 };
        },
        onEachFeature: (f, lyr) => {
          const dong = f.properties.dong;
          const v = valueByDong[dong] || { complaints: 0, enforcement: 0 };
          lyr.bindTooltip(`${dong} ${NF(v[activeMetric] || 0)}건`, { sticky: true });
          lyr.bindPopup(popupHtml(dong, v.complaints, v.enforcement));
          lyr.on('mouseover', () => { if (selectedRef.current !== lyr) { lyr.setStyle({ weight: 2.5, color: '#333' }); lyr.bringToFront(); } });
          lyr.on('mouseout', () => { if (selectedRef.current !== lyr) lyr.setStyle({ weight: 1, color: '#fff' }); });
          lyr.on('click', () => {
            if (selectedRef.current && selectedRef.current !== lyr && selectedRef.current.setStyle) selectedRef.current.setStyle({ weight: 1, color: '#fff' });
            lyr.setStyle({ weight: 3.5, color: '#1d4ed8' });
            lyr.bringToFront();
            selectedRef.current = lyr;
          });
          markers[dong] = lyr;
        },
      });
      layer.addTo(map);
      dataLayerRef.current = layer;
    } else {
      // 동 중심 원
      const group = L.layerGroup();
      const pts = points.filter((d) => d[activeMetric] > 0);
      const vals = pts.map((d) => d[activeMetric]).sort((a, b) => b - a);
      const maxV = vals[0] || 1;
      pts.forEach((d) => {
        const lv = classify(vals, d[activeMetric]);
        const radius = 8 + Math.sqrt(d[activeMetric] / maxV) * 26;
        const m = L.circleMarker([d.lat, d.lng], { radius, color: lv.color, weight: 2, opacity: 0.9, fillColor: lv.color, fillOpacity: 0.35 })
          .bindTooltip(`${d.dong} ${NF(d[activeMetric])}건`, { direction: 'top' })
          .bindPopup(popupHtml(d.dong, d.complaints, d.enforcement));
        m.addTo(group);
        markers[d.dong] = m;
      });
      group.addTo(map);
      dataLayerRef.current = group;
    }
    markersRef.current = markers;
    // 목록→지도 연동
    if (focusRef) focusRef.current = (dong) => {
      const mk = markersRef.current[dong];
      if (!mk) return;
      if (mk.getLatLng) { map.flyTo(mk.getLatLng(), Math.max(map.getZoom(), 13.5), { duration: 0.7 }); }
      else if (mk.getBounds) {
        // 이전 선택 폴리곤 테두리 원복
        if (selectedRef.current && selectedRef.current.setStyle) selectedRef.current.setStyle({ weight: 1, color: '#fff' });
        // 선택 폴리곤 강조 + 위로 올리기
        mk.setStyle({ weight: 3.5, color: '#1d4ed8' });
        mk.bringToFront();
        selectedRef.current = mk;
        map.flyToBounds(mk.getBounds(), { maxZoom: 14, duration: 0.7 });
      }
      map.once('moveend', () => mk.openPopup());
    };
  }, [points, activeMetric, focusRef, mode, valueByDong]);

  // 주차장 토글
  useEffect(() => {
    const map = mapRef.current, pg = parkingRef.current;
    if (!map || !pg) return;
    if (showParking) { if (!map.hasLayer(pg)) pg.addTo(map); }
    else if (map.hasLayer(pg)) map.removeLayer(pg);
  }, [showParking]);

  // 베이스 지도 전환 (일반/위성)
  useEffect(() => {
    const map = mapRef.current, bases = basesRef.current;
    if (!map || !bases) return;
    const show = baseMap === 'satellite' ? bases.satellite : bases.normal;
    const hide = baseMap === 'satellite' ? bases.normal : bases.satellite;
    if (map.hasLayer(hide)) map.removeLayer(hide);
    if (!map.hasLayer(show)) { show.addTo(map); show.bringToBack(); }
  }, [baseMap]);

  return <div ref={ref} style={{ position: 'absolute', inset: 0 }} />;
}

export default function Complaints() {
  const [unit, setUnit] = useState('year');      // year | quarter | month
  const [qValue, setQValue] = useState('Q1');
  const [mValue, setMValue] = useState('01');
  const [metric, setMetric] = useState('complaints'); // 지도·순위 지표
  const [showParking, setShowParking] = useState(false);
  const [baseMap, setBaseMap] = useState('normal');    // normal | satellite
  const [viewMode, setViewMode] = useState('polygon'); // polygon | circle
  const [district, setDistrict] = useState('전주시');   // 전주시 | 완산구 | 덕진구
  const [activeDong, setActiveDong] = useState(null);
  const mapFocus = useRef(null);
  const inDist = (dong) => district === '전주시' || DONG_GU[dong] === district;
  const filterDong = (obj) => { const o = {}; for (const k in obj) if (inDist(k)) o[k] = obj[k]; return o; };

  const value = unit === 'quarter' ? qValue : unit === 'month' ? mValue : '2024';
  const cmpMonths = monthsFor(unit, value, CMP_MONTHS);
  const enfMonths = monthsFor(unit, value, ENF_MONTHS);

  const QUARTER_LABEL = { Q1: '1분기(1~3월)', Q2: '2분기(4~6월)', Q3: '3분기(7~9월)', Q4: '4분기(10~12월)' };
  const periodLabel = unit === 'year' ? '연간' : unit === 'quarter' ? QUARTER_LABEL[value] : `${parseInt(value, 10)}월`;

  // 기간 집계 (+ 행정구 필터)
  const subTotals = useMemo(() => sumMonths(CMP_MONTH_SUBCAT, cmpMonths), [cmpMonths]);
  const cmpDong = useMemo(() => filterDong(sumMonths(CMP_MONTH_DONG, cmpMonths)), [cmpMonths, district]);
  const enfDong = useMemo(() => filterDong(sumMonths(ENF_MONTH_DONG, enfMonths)), [enfMonths, district]);

  const cmpTotal = district === '전주시'
    ? Object.values(subTotals).reduce((a, b) => a + b, 0)
    : Object.values(cmpDong).reduce((a, b) => a + b, 0);
  const enfTotal = district === '전주시'
    ? enfMonths.reduce((a, m) => a + (ENF_MONTH_TOTAL[m] || 0), 0)
    : Object.values(enfDong).reduce((a, b) => a + b, 0);

  // 동 포인트 (좌표 조인) — 지도 + 순위 공용
  const points = useMemo(() => {
    const dongs = new Set([...Object.keys(cmpDong), ...Object.keys(enfDong)]);
    const arr = [];
    dongs.forEach((d) => {
      const co = DONG_COORDS[d];
      if (!co) return;
      arr.push({ dong: d, lat: co[0], lng: co[1], complaints: cmpDong[d] || 0, enforcement: enfDong[d] || 0 });
    });
    return arr;
  }, [cmpDong, enfDong]);

  // 폴리곤 단계구분도용: 법정동명 → {민원, 단속}
  const valueByDong = useMemo(() => {
    const o = {};
    const dongs = new Set([...Object.keys(cmpDong), ...Object.keys(enfDong)]);
    dongs.forEach((d) => { o[d] = { complaints: cmpDong[d] || 0, enforcement: enfDong[d] || 0 }; });
    return o;
  }, [cmpDong, enfDong]);

  const metricLabel = metric === 'complaints' ? '민원' : '단속';
  const ranking = useMemo(() => {
    return [...points].filter((p) => p[metric] > 0).sort((a, b) => b[metric] - a[metric]);
  }, [points, metric]);
  const rankVals = ranking.map((r) => r[metric]).sort((a, b) => b - a);

  const MONTH_OPTS = CMP_MONTHS; // '01'..'12'

  return (
    <>
      <header className="topbar">
        <div>
          <h1 className="page-title">민원현황</h1>
          <DataFreshness />
        </div>
        <div className="topbar__actions"><NotificationBell /></div>
      </header>

      <div className="filterbar">
        <span className="filterbar__label">조회 단위</span>
        <div className="segment">
          {[['year', '연도'], ['quarter', '분기'], ['month', '월']].map(([k, label]) => (
            <button key={k} type="button" className={`segment__btn ${unit === k ? 'segment__btn--active' : ''}`} onClick={() => setUnit(k)}>{label}</button>
          ))}
        </div>
        {unit === 'quarter' && (
          <div className="segment">
            {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
              <button key={q} type="button" className={`segment__btn ${qValue === q ? 'segment__btn--active' : ''}`} onClick={() => setQValue(q)}>{`${q[1]}분기`}</button>
            ))}
          </div>
        )}
        {unit === 'month' && (
          <DsSelect aria-label="조회 월" value={mValue} onChange={(e) => setMValue(e.target.value)}>
            {MONTH_OPTS.map((m) => <option key={m} value={m}>{parseInt(m, 10)}월</option>)}
          </DsSelect>
        )}
        <span className="filter-sep" />
        <span className="filterbar__label">행정구역</span>
        <DsSelect aria-label="행정구역" value={district} onChange={(e) => { setDistrict(e.target.value); setActiveDong(null); }}>
          <option value="전주시">전주시 전체</option><option value="완산구">완산구</option><option value="덕진구">덕진구</option>
        </DsSelect>
        <span className="filterbar__right">민원 <strong>2024년 {periodLabel}</strong> · 단속 <strong>2025년 {periodLabel}</strong></span>
      </div>

      <div className="content">
        <section className="stat-row">
          <div className="card stat">
            <div className="stat__icon stat__icon--blue"><Icon name="document" size={32} /></div>
            <div><div className="stat__label">주차 민원 · 2024년 {periodLabel}</div><div className="stat__value">{NF(cmpTotal)}<span className="stat__unit">건</span></div></div>
          </div>
          <div className="card stat">
            <div className="stat__icon stat__icon--red"><Icon name="warning" size={32} /></div>
            <div><div className="stat__label">주정차 단속 · 2025년 {periodLabel}</div><div className="stat__value">{NF(enfTotal)}<span className="stat__unit">건</span></div></div>
          </div>
          <div className="card stat">
            <div className="stat__icon stat__icon--green"><Icon name="car" size={32} /></div>
            <div><div className="stat__label">공영주차장</div><div className="stat__value">{NF(SUMMARY.parkingLots)}<span className="stat__unit">개소 · {NF(SUMMARY.parkingSpots)}면</span></div></div>
          </div>
        </section>

        {/* 지도 전체 배경 + 순위 플로팅 패널 */}
        <section style={{ position: 'relative', width: '100%', height: 'calc(100vh - 300px)', minHeight: 540, borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <GisMap points={points} activeMetric={metric} showParking={showParking} baseMap={baseMap} focusRef={mapFocus} mode={viewMode} valueByDong={valueByDong} />

          {/* 좌상단: 레이어 컨트롤 */}
          <div style={{ position: 'absolute', zIndex: 500, top: 12, left: 12, display: 'flex', gap: 8, background: 'var(--card-bg)', padding: 8, borderRadius: 10, boxShadow: '0 1px 6px rgba(0,0,0,0.12)' }}>
            {[['complaints', '민원 다발'], ['enforcement', '단속 집중']].map(([k, label]) => (
              <button key={k} type="button" onClick={() => setMetric(k)}
                style={{ fontSize: 12, padding: '5px 10px', borderRadius: 8, cursor: 'pointer',
                  border: '1px solid ' + (metric === k ? 'var(--primary-normal)' : 'var(--line-normal)'),
                  background: metric === k ? 'var(--blue-95, #eef3ff)' : 'var(--card-bg)',
                  color: metric === k ? 'var(--primary-normal)' : 'var(--text-alternative)', fontWeight: metric === k ? 600 : 500 }}>{label}</button>
            ))}
            <label style={{ fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--text-alternative)', paddingLeft: 4 }}>
              <input type="checkbox" checked={showParking} onChange={(e) => setShowParking(e.target.checked)} /> 공영주차장
            </label>
          </div>

          {/* 우상단: 일반/위성 전환 (줌 컨트롤 왼쪽) */}
          <div style={{ position: 'absolute', zIndex: 500, top: 12, right: 56, display: 'flex', background: 'var(--card-bg)', borderRadius: 8, boxShadow: '0 1px 6px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
            {[['normal', '일반지도'], ['satellite', '위성지도']].map(([k, label]) => (
              <button key={k} type="button" onClick={() => setBaseMap(k)}
                style={{ fontSize: 12, padding: '6px 11px', cursor: 'pointer', border: 'none',
                  background: baseMap === k ? 'var(--primary-normal, #2563eb)' : 'transparent',
                  color: baseMap === k ? '#fff' : 'var(--text-alternative)', fontWeight: baseMap === k ? 600 : 500 }}>{label}</button>
            ))}
          </div>

          {/* 좌하단: 범례 */}
          <div style={{ position: 'absolute', zIndex: 500, bottom: 12, left: 12, background: 'var(--card-bg)', padding: '8px 10px', borderRadius: 10, boxShadow: '0 1px 6px rgba(0,0,0,0.12)', fontSize: 11, color: 'var(--text-alternative)' }}>
            {viewMode === 'polygon' ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <span style={{ marginRight: 4 }}>적음</span>
                  {CHORO.map((c) => <span key={c} style={{ width: 16, height: 10, background: c, display: 'inline-block' }} />)}
                  <span style={{ marginLeft: 4 }}>많음</span>
                </div>
                <div style={{ marginTop: 4 }}>법정동별 {metricLabel} 건수 단계구분도</div>
              </>
            ) : (
              <>
                {Object.values(LEVEL).map((l) => (
                  <span key={l.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginRight: 10 }}>
                    <span style={{ width: 9, height: 9, borderRadius: '50%', background: l.color }} />{l.label}
                  </span>
                ))}
                <div style={{ marginTop: 4 }}>원 크기 = {metricLabel} 건수 · 동 중심좌표(지오코딩)</div>
              </>
            )}
          </div>

          {/* 우측: 읍·면·동 순위 플로팅 패널 */}
          <div className="card" style={{ position: 'absolute', zIndex: 500, top: 12, right: 12, bottom: 12, width: 300, padding: 16, display: 'flex', flexDirection: 'column', boxShadow: '0 4px 16px rgba(0,0,0,0.14)' }}>
            <div className="card-head"><div>
              <h2 className="card-head__title" style={{ fontSize: 16 }}>읍·면·동 {metricLabel} 순위</h2>
              <p className="card-head__sub">2024/2025년 {periodLabel} 기준</p>
            </div></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 10, flex: 1, overflowY: 'auto' }}>
              {ranking.map((r, i) => {
                const lv = classify(rankVals, r[metric]);
                const on = activeDong === r.dong;
                return (
                  <div key={r.dong} onClick={() => { setActiveDong(r.dong); mapFocus.current?.(r.dong); }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 6px', borderBottom: '1px solid var(--line-alternative)', cursor: 'pointer', borderRadius: 6, background: on ? 'var(--blue-95, #eef3ff)' : 'transparent' }}>
                    <span style={{ width: 20, textAlign: 'center', fontWeight: 700, color: i < 3 ? lv.color : 'var(--text-assistive)' }}>{i + 1}</span>
                    <span style={{ width: 9, height: 9, borderRadius: '50%', background: lv.color, flexShrink: 0 }} />
                    <span style={{ flex: 1, fontSize: 13.5, color: on ? 'var(--primary-normal)' : 'var(--text-normal)', fontWeight: on ? 600 : 400 }}>{r.dong}</span>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-normal)' }}>{NF(r[metric])}건</span>
                  </div>
                );
              })}
              {ranking.length === 0 && <p style={{ color: 'var(--text-assistive)', fontSize: 13, padding: 12 }}>해당 기간 데이터가 없습니다.</p>}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
