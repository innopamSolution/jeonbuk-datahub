import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as echarts from 'echarts';
import Icon from '../components/Icon';
import NotificationBell from '../components/NotificationBell';
import DsSelect from '../components/DsSelect';
import DataFreshness from '../components/DataFreshness';
import {
  SUMMARY, CMP_MONTHLY_SERIES, ENF_BY_MONTH,
  CMP_MONTH_SUBCAT, CMP_MONTH_DONG, ENF_MONTH_METHOD, ENF_MONTH_DONG,
  SUB_ORDER, METHOD_LABEL, CMP_MONTHS, ENF_MONTHS, CMP_MONTH_DONG_SUB, CMP_MONTH_WEEK_DONG_SUB, DONG_GU,
} from '../data/jeonjuData';

/* 신고 유형 색상 — 추이 차트 범례와 동일 계열 */
const SUB_COLOR = {
  '횡단보도': 'var(--series-illegal)', '인도': 'var(--series-double)',
  '교차로 모퉁이': 'var(--series-facility)', '소화전': 'var(--series-etc)',
  '버스정류소': 'var(--series-ev)', '어린이보호구역': '#eab308',
  '안전지대': '#ec4899', '기타': '#94a3b8',
};
import './Dashboard.css';

const NF = (n) => (n || 0).toLocaleString('ko-KR');
const ENF_MONTH_TOTAL = Object.fromEntries(ENF_BY_MONTH.map((r) => [r.month.slice(5, 7), r.count]));

/* 선택 조회 단위 → 대상 월('MM') 목록 (데이터셋 가용월과 교집합) */
function monthsFor(unit, value, available) {
  if (unit === 'year') return available;
  if (unit === 'quarter') {
    const q = { Q1: ['01', '02', '03'], Q2: ['04', '05', '06'], Q3: ['07', '08', '09'], Q4: ['10', '11', '12'] }[value] || [];
    return q.filter((m) => available.includes(m));
  }
  return available.includes(value) ? [value] : [];
}
function sumMonths(monthDict, months) {
  const out = {};
  months.forEach((m) => { const d = monthDict[m] || {}; for (const k in d) out[k] = (out[k] || 0) + d[k]; });
  return out;
}

/* 최근 보고서 — 샘플 (보고서 데이터 연동 전 목업) */
const RECENT_REPORTS = [
  ['2024년 주차민원 분석 리포트', '집계 2024 연간'],
  ['2025년 상반기 단속 현황 리포트', '집계 2025.01~06'],
  ['공영주차장 현황 리포트', '기준 2026.04.16'],
];

/* 최근 질문이 없을 때 보여줄 기본 추천 질문 */
const DEFAULT_AI_QUESTIONS = [
  '효자동2가에 민원이 집중되는 이유를 알려줘',
  '불법주차 집중구역 상위 3곳을 설명해줘',
  '민원 대비 단속이 부족한 동은 어디야',
];

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function resolveColor(varName, probe) {
  probe.style.color = `var(${varName})`;
  return getComputedStyle(probe).color;
}

function rgba(color, a) {
  const c = document.createElement('canvas').getContext('2d');
  c.fillStyle = color;
  const hex = c.fillStyle;
  if (hex[0] === '#') {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  return hex.replace(/rgba?\(([^)]+)\)/, (_, body) => {
    const p = body.split(',').slice(0, 3).join(',');
    return `rgba(${p},${a})`;
  });
}

const SERIES_VARS = ['--series-illegal', '--series-double', '--series-facility', '--series-etc', '--series-ev'];

function TrendChart({ labels, series }) {
  const hostRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;left:-9999px;top:-9999px';
    document.body.appendChild(probe);

    const fontBody = cssVar('--font-body');
    const cAxis = resolveColor('--text-assistive', probe);
    const cGrid = resolveColor('--line-alternative', probe);

    // 선택 기간의 월별 × 유형 집계
    const maxVal = Math.max(1, ...series.flatMap((s) => s.data));
    const yMax = Math.max(500, Math.ceil(maxVal / 500) * 500);
    const defs = series.map((s, i) => ({
      name: s.name,
      color: resolveColor(SERIES_VARS[i] ?? '--series-etc', probe),
      area: i === 0,
      data: s.data,
    }));
    const pd = { yMax, yInterval: yMax / 4 };

    const chartSeries = defs.map((d) => {
      const s = {
        name: d.name, type: 'line', smooth: 0.4, symbol: 'circle', symbolSize: 7,
        showSymbol: false, lineStyle: { width: 2.5, color: d.color },
        itemStyle: { color: d.color, borderColor: '#fff', borderWidth: 2 },
        emphasis: { focus: 'series' }, data: d.data, z: d.area ? 3 : 2,
      };
      if (d.area) {
        s.areaStyle = {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: rgba(d.color, 0.22) },
            { offset: 1, color: rgba(d.color, 0.0) },
          ]),
        };
      }
      return s;
    });

    const chart = echarts.init(host, null, { renderer: 'svg' });
    chartRef.current = chart;
    chart.setOption({
      color: defs.map((d) => d.color),
      textStyle: { fontFamily: fontBody },
      grid: { left: 8, right: 16, top: 16, bottom: 8, containLabel: true },
      tooltip: {
        trigger: 'axis',
        backgroundColor: resolveColor('--cool-neutral-15', probe) || '#1b1c1e',
        borderWidth: 0, padding: [10, 14],
        textStyle: { color: '#fff', fontFamily: fontBody, fontSize: 13 },
        axisPointer: { type: 'line', lineStyle: { color: cGrid, width: 1 } },
        valueFormatter: (v) => `${v}건`,
      },
      xAxis: {
        type: 'category', boundaryGap: false, data: labels,
        axisLine: { lineStyle: { color: cGrid } },
        axisTick: { show: false },
        axisLabel: { color: cAxis, fontSize: 12, fontFamily: fontBody, margin: 12 },
      },
      yAxis: {
        type: 'value', min: 0, max: pd.yMax, interval: pd.yInterval,
        axisLine: { show: false }, axisTick: { show: false },
        splitLine: { lineStyle: { color: cGrid, type: 'solid' } },
        axisLabel: { color: cAxis, fontSize: 12, fontFamily: fontBody },
      },
      series: chartSeries,
    });

    const onResize = () => chart.resize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      chart.dispose();
      probe.remove();
    };
  }, [labels, series]);

  return <div className="trend__chart" ref={hostRef} style={{ height: 300 }} />;
}

const AI_ICON_DASH = (
  <svg viewBox="0 0 36 36" fill="none" width="24" height="24" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M18.6 8.4c0-2.6 2.1-4.6 4.7-4.6 0 2.6-2.1 4.6-4.7 4.6Z" fill="#3DA35D" />
    <circle cx="18" cy="21" r="12.5" fill="#F79009" />
    <circle cx="13.6" cy="19.6" r="1.4" fill="#4A3415" opacity="0.85" />
    <circle cx="22.4" cy="19.6" r="1.4" fill="#4A3415" opacity="0.85" />
    <path d="M14.9 24.2a3.9 3.9 0 0 0 6.2 0" stroke="#4A3415" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.85" />
  </svg>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const [unit, setUnit] = useState('year');   // year | quarter | month
  const [qValue, setQValue] = useState('Q1');
  const [mValue, setMValue] = useState('01');
  const value = unit === 'quarter' ? qValue : unit === 'month' ? mValue : '2024';
  const QUARTER_LABEL = { Q1: '1분기(1~3월)', Q2: '2분기(4~6월)', Q3: '3분기(7~9월)', Q4: '4분기(10~12월)' };
  const periodLabel = unit === 'year' ? '연간' : unit === 'quarter' ? QUARTER_LABEL[value] : `${parseInt(value, 10)}월`;

  const [district, setDistrict] = useState('전주시'); // 전주시 | 완산구 | 덕진구
  const inDist = (dong) => district === '전주시' || DONG_GU[dong] === district;
  const filterDong = (obj) => { const o = {}; for (const k in obj) if (inDist(k)) o[k] = obj[k]; return o; };

  const cmpMonths = monthsFor(unit, value, CMP_MONTHS);
  const enfMonths = monthsFor(unit, value, ENF_MONTHS);

  // 선택 기간의 월별 유형 집계 (구 필터 시 동×유형에서 해당 구만 합산)
  const subByMonth = (m) => {
    if (district === '전주시') return CMP_MONTH_SUBCAT[m] || {};
    const acc = {}; const dd = CMP_MONTH_DONG_SUB[m] || {};
    for (const dong in dd) if (inDist(dong)) { const s = dd[dong]; for (const k in s) acc[k] = (acc[k] || 0) + s[k]; }
    return acc;
  };

  // 기간 집계 (+ 행정구 필터)
  const subTotals = useMemo(() => { const o = {}; cmpMonths.forEach((m) => { const s = subByMonth(m); for (const k in s) o[k] = (o[k] || 0) + s[k]; }); return o; }, [cmpMonths, district]);
  const cmpDong = useMemo(() => filterDong(sumMonths(CMP_MONTH_DONG, cmpMonths)), [cmpMonths, district]);
  const enfDong = useMemo(() => filterDong(sumMonths(ENF_MONTH_DONG, enfMonths)), [enfMonths, district]);
  const enfMethod = useMemo(() => sumMonths(ENF_MONTH_METHOD, enfMonths), [enfMonths]);
  const cmpTotal = district === '전주시'
    ? Object.values(subTotals).reduce((a, b) => a + b, 0)
    : Object.values(cmpDong).reduce((a, b) => a + b, 0);
  const enfTotal = district === '전주시'
    ? enfMonths.reduce((a, m) => a + (ENF_MONTH_TOTAL[m] || 0), 0)
    : Object.values(enfDong).reduce((a, b) => a + b, 0);

  // 선택 월의 주차별 유형 집계 (구 필터 적용) — 월 조회 시 주간 추이용
  const weekSub = (mm, wk) => {
    const acc = {}; const dd = (CMP_MONTH_WEEK_DONG_SUB[mm] || {})[wk] || {};
    for (const dong in dd) if (inDist(dong)) { const s = dd[dong]; for (const k in s) acc[k] = (acc[k] || 0) + s[k]; }
    return acc;
  };

  // 추이 차트: 연/분기=월별, 월=주별(1~5주) × 유형(상위 5종)
  const trend = useMemo(() => {
    const top5 = SUB_ORDER.filter((k) => (subTotals[k] || 0) > 0).slice(0, 5);
    if (unit === 'month') {
      const weeks = Object.keys((CMP_MONTH_WEEK_DONG_SUB[value] || {})).sort();
      return {
        unit: '주',
        labels: weeks.map((w) => `${w}주`),
        series: top5.map((k) => ({ name: k, data: weeks.map((w) => weekSub(value, w)[k] || 0) })),
      };
    }
    return {
      unit: '월',
      labels: cmpMonths.map((m) => `${parseInt(m, 10)}월`),
      series: top5.map((k) => ({ name: k, data: cmpMonths.map((m) => subByMonth(m)[k] || 0) })),
    };
  }, [cmpMonths, subTotals, district, unit, value]);

  // 민원 다발 동 (상위 5) + 동 순위 (상위 8)
  const cmpDongRanked = useMemo(
    () => Object.entries(cmpDong).map(([dong, count]) => ({ dong, count })).sort((a, b) => b.count - a.count),
    [cmpDong],
  );
  const dongMax = cmpDongRanked[0]?.count || 1;

  // 불법주차 집중구역 순위 — 민원·단속 종합점수(가중 60/40, 집중구역분석과 동일 개념).
  // 민원(법정동 '효자동2가')과 단속(일반동 '효자동')의 집계 단위가 달라, 동 기준으로 롤업해 합산한다.
  const baseDong = (name) => name.replace(/\d+가$/, '').replace(/(\D+?)\d+동$/, '$1동');
  const hotspotRank = useMemo(() => {
    const roll = (src) => { const o = {}; for (const k in src) { const b = baseDong(k); o[b] = (o[b] || 0) + src[k]; } return o; };
    const c = roll(cmpDong), e = roll(enfDong);
    const keys = new Set([...Object.keys(c), ...Object.keys(e)]);
    const maxC = Math.max(1, ...Object.values(c));
    const maxE = Math.max(1, ...Object.values(e));
    return [...keys].map((d) => ({
      dong: d, c: c[d] || 0, e: e[d] || 0,
      score: Math.round((0.6 * ((c[d] || 0) / maxC) + 0.4 * ((e[d] || 0) / maxE)) * 100),
    })).sort((a, b) => b.score - a.score);
  }, [cmpDong, enfDong]);
  const HOTSPOTS = hotspotRank.slice(0, 5).map((d, i) => {
    const badge = d.score >= 70 ? 'severe' : d.score >= 40 ? 'warn' : 'caution';
    return { rank: i + 1, name: d.dong, meta: `종합 ${d.score}점 · 민원 ${NF(d.c)} · 단속 ${NF(d.e)}`, badge, label: badge === 'severe' ? '심각' : badge === 'warn' ? '경고' : '주의' };
  });
  // 동별 유형 분포 (선택 기간 합산) — 순위 카드 스택바용
  const dongSub = (dong) => {
    const acc = {};
    cmpMonths.forEach((m) => { const s = (CMP_MONTH_DONG_SUB[m] || {})[dong] || {}; for (const k in s) acc[k] = (acc[k] || 0) + s[k]; });
    return acc;
  };
  const REGIONS = cmpDongRanked.slice(0, 5).map((d, i) => {
    const sub = dongSub(d.dong);
    const total = Object.values(sub).reduce((a, b) => a + b, 0) || 1;
    const breakdown = SUB_ORDER.map((k) => ({ key: k, value: sub[k] || 0, pct: ((sub[k] || 0) / total) * 100 })).filter((b) => b.value > 0);
    return { num: i + 1, name: d.dong, value: d.count, breakdown };
  });

  // 단속 방법별 (기간)
  const enfMethodList = Object.entries(enfMethod).map(([key, count]) => ({ key, label: METHOD_LABEL[key] || key, count })).sort((a, b) => b.count - a.count);
  const enfMethodDongTotal = Object.values(enfMethod).reduce((a, b) => a + b, 0);

  const goToAiInput = (prefill) => navigate('/ai-assistant', { state: prefill ? { prefill } : { focus: true } });
  const [aiQuery, setAiQuery] = useState('');
  const submitAiQuery = () => {
    const v = aiQuery.trim();
    if (v) navigate('/ai-assistant', { state: { submit: v } });
  };
  /* AI 어시스턴트에서 제출한 최근 질문 (없으면 기본 추천 질문) */
  const recentQuestions = (() => {
    try { return JSON.parse(localStorage.getItem('aiRecentQuestions') || '[]'); }
    catch { return []; }
  })();
  const aiSuggests = recentQuestions.length > 0 ? recentQuestions.slice(0, 3) : DEFAULT_AI_QUESTIONS;

  return (
    <>
      <header className="topbar">
        <div>
          <h1 className="page-title">대시보드</h1>
          <DataFreshness />
        </div>
        <div className="topbar__actions">
          <NotificationBell />
        </div>
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
            {CMP_MONTHS.map((m) => <option key={m} value={m}>{parseInt(m, 10)}월</option>)}
          </DsSelect>
        )}
        <span className="filter-sep" />
        <span className="filterbar__label">행정구역</span>
        <DsSelect aria-label="행정구역" value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="전주시">전주시 전체</option><option value="완산구">완산구</option><option value="덕진구">덕진구</option>
        </DsSelect>
        <span className="filterbar__right">민원 <strong>2024년 {periodLabel}</strong> · 단속 <strong>2025년 {periodLabel}</strong></span>
      </div>


      <div className="content">
        <section className="stat-row">
          <div className="card stat">
            <div className="stat__icon stat__icon--blue"><Icon name="document" size={32} /></div>
            <div>
              <div className="stat__label">주차 민원 건수 · 2024년 {periodLabel}</div>
              <div className="stat__value">{NF(cmpTotal)}<span className="stat__unit">건</span></div>
            </div>
          </div>
          <div className="card stat">
            <div className="stat__icon stat__icon--red"><Icon name="warning" size={32} /></div>
            <div>
              <div className="stat__label">주정차 단속 건수 · 2025년 {periodLabel}</div>
              <div className="stat__value">{NF(enfTotal)}<span className="stat__unit">건</span></div>
            </div>
          </div>
          <div className="card stat">
            <div className="stat__icon stat__icon--green"><Icon name="car" size={32} /></div>
            <div>
              <div className="stat__label">공영주차장 현황</div>
              <div className="stat__value">{NF(SUMMARY.parkingLots)}<span className="stat__unit">개소 · {NF(SUMMARY.parkingSpots)}면</span></div>
            </div>
          </div>
        </section>

        <section className="mid-row">
          <div className="card trend">
            <div className="card-head">
              <div>
                <h2 className="card-head__title">민원 발생 추이 <span className="card-head__note">(2024년 {periodLabel} · {trend.unit === '주' ? '주별' : '월별'} · 유형별)</span></h2>
                <p className="card-head__sub">월별 주차 민원 건수 및 신고 유형별 분포</p>
              </div>
            </div>
            {trend.labels.length > 1 ? (
              <TrendChart labels={trend.labels} series={trend.series} />
            ) : (
              <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-assistive)', fontSize: 14 }}>
                월 단위 조회에서는 추이 그래프 대신 아래 유형·순위로 확인하세요. (분기·연도 선택 시 추이 표시)
              </div>
            )}
            <div className="legend">
              {trend.series.map((s, i) => (
                <span className="legend__item" key={s.name}>
                  <span className="dot" style={{ background: `var(${SERIES_VARS[i] ?? '--series-etc'})` }} />{s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="card hotspots">
            <div className="card-head">
              <div>
                <h2 className="card-head__title">불법주차 집중구역 순위</h2>
                <p className="card-head__sub">민원·단속 종합 · {periodLabel}</p>
              </div>
              <Link to="/analysis/hotspot" className="card-link">자세히 보기 <Icon name="chevron-right" size={16} /></Link>
            </div>
            <div className="hot-list">
              {HOTSPOTS.map((h) => (
                <div className="hot" key={h.rank}>
                  <span className="hot__rank">{h.rank}</span>
                  <div className="hot__body">
                    <div className="hot__name">{h.name}</div>
                    <div className="hot__meta">{h.meta}</div>
                  </div>
                  <span className={`badge badge--${h.badge}`}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="region-head">
            <div>
              <h2 className="section-title">읍·면·동 민원 순위</h2>
              <p className="section-sub">2024년 {periodLabel} · 민원 건수 및 신고 유형별 분포</p>
            </div>
            <Link to="/complaints" className="card-link">자세히 보기 <Icon name="chevron-right" size={16} /></Link>
          </div>
          <div className="region-row">
            {REGIONS.map((r) => (
              <div className="card region" key={r.num}>
                <div className="region__top">
                  <span className="region__id">
                    <span className="region__num">{r.num}</span>
                    <span className="region__name">{r.name}</span>
                  </span>
                </div>
                <div className="region__value"><b>{NF(r.value)}</b><span>건</span></div>
                <div className="stackbar" style={{ display: 'flex', width: '100%', height: 10, borderRadius: 5, overflow: 'hidden', gap: 1 }}>
                  {r.breakdown.map((b) => (
                    <span key={b.key} className="stackbar__seg" style={{ width: `${b.pct}%` }} title={`${b.key} ${NF(b.value)}건 (${Math.round(b.pct)}%)`}>
                      <i style={{ display: 'block', width: '100%', height: '100%', background: SUB_COLOR[b.key] || '#94a3b8' }} />
                    </span>
                  ))}
                </div>
                <div className="region__legend" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 10px', marginTop: 8 }}>
                  {r.breakdown.slice(0, 3).map((b) => (
                    <span key={b.key} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-assistive)' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: SUB_COLOR[b.key] || '#94a3b8' }} />{b.key} {Math.round(b.pct)}%
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom-row">
          <div className="card panel">
            <div className="card-head">
              <h2 className="card-head__title"><span className="panel__icon"><Icon name="chart" size={20} /></span>단속 방법별 현황 <span className="card-head__note">(2025 {periodLabel}{district !== '전주시' ? ' · 전주시 전체' : ''})</span></h2>
            </div>
            <div className="list">
              {enfMethodList.map((m) => (
                <div key={m.key} className="list__row">
                  <span className="name">{m.label}</span>
                  <span className="time">{NF(m.count)}건 ({enfMethodDongTotal ? Math.round((m.count / enfMethodDongTotal) * 100) : 0}%)</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card panel">
            <div className="card-head">
              <h2 className="card-head__title"><span className="panel__icon panel__icon--green"><Icon name="document" size={20} /></span>보고서</h2>
              <Link to="/reports" className="card-link">전체 <Icon name="arrow-right" size={16} /></Link>
            </div>
            {RECENT_REPORTS.length === 0 ? (
              <div className="panel-empty">
                <p>아직 생성된 보고서가 없습니다</p>
                <button type="button" className="panel-empty__btn" onClick={() => navigate('/reports')}>보고서 목록 보기</button>
              </div>
            ) : (
              <div className="list">
                {RECENT_REPORTS.map(([name, time]) => (
                  <div key={name} className="list__row list__row--link" onClick={() => navigate('/reports', { state: { highlight: name } })}>
                    <span className="name">{name}</span><span className="time">{time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card panel">
            <div className="card-head">
              <h2 className="card-head__title"><span className="panel__icon panel__icon--violet"><Icon name="sparkle" size={20} /></span>AI 어시스턴트</h2>
              <Link to="/ai-assistant" state={{ focus: true }} className="card-link">대화 열기 <Icon name="arrow-right" size={16} /></Link>
            </div>
            <div className="ai-input ai-input--live">
              <input
                type="text"
                placeholder="이번달 민원 현황을 요약해줘..."
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); submitAiQuery(); } }}
              />
              {aiQuery.trim() !== '' && (
                <button className="ai-input__send" type="button" aria-label="질문 보내기" onClick={submitAiQuery}>
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M3.6 20.3 21 12 3.6 3.7 3.6 10.2 14.5 12 3.6 13.8 3.6 20.3Z" fill="currentColor" /></svg>
                </button>
              )}
            </div>
            <div className="ai-suggest">
              {aiSuggests.map((q) => (
                <button key={q} type="button" onClick={() => goToAiInput(q)}><Icon className="chev" name="chevron-right" size={16} />{q}</button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
