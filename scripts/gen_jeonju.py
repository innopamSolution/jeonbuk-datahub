#!/usr/bin/env python3
# -I 로 실행 권장. 전주시 실데이터 CSV → src/data/jeonjuData.js 집계 모듈 생성
import csv, collections, glob, re, json, os
from datetime import datetime, timedelta

SRC = "/Users/gyuyoung/Downloads/전북_실증데이터_표준변환_정의서_261116"
OUT = "/Users/gyuyoung/Documents/claude-test/jeonbuk-datahub/src/data/jeonjuData.js"

def g(pat):
    return sorted(glob.glob(os.path.join(SRC, pat)))

# 동 중심좌표 캐시 (scripts/geocode_dongs.py 생성)
DONG_GEO = {}
_gc = os.path.join(os.path.dirname(OUT).replace('src/data', 'scripts'), 'dong_geo.json')
_gc = os.path.join("/Users/gyuyoung/Documents/claude-test/jeonbuk-datahub/scripts", "dong_geo.json")
if os.path.exists(_gc):
    DONG_GEO = {k: v for k, v in json.load(open(_gc, encoding='utf-8')).items() if v}

def kst(iso):
    return datetime.fromisoformat(iso.replace('Z', '+00:00')) + timedelta(hours=9)

# ---- 단속 ----
enf_method = collections.Counter(); enf_month = collections.Counter()
enf_hour = [0]*24; enf_dow = [0]*7; enf_dong = collections.Counter(); enf_channel = collections.Counter()
enf_total = 0
# '효자동2가'(동+숫자+가)를 한 단위로 잡는다. '효자동'(가 없음)·'중화산2동'·읍·면도 지원.
DONG_RE = re.compile(r'([가-힣]+동\d+가|[가-힣]+\d+동|[가-힣]+동|[가-힣]+읍|[가-힣]+면)')
enf_month_dong = collections.defaultdict(collections.Counter)    # 'MM' -> dong -> n
enf_month_method = collections.defaultdict(collections.Counter)  # 'MM' -> method -> n
for f in g('illegalparkingenforcement*2025_*.csv'):
    with open(f, encoding='utf-8-sig') as fh:
        for r in csv.DictReader(fh):
            iso = r['enforcedAt']
            if not iso.startswith('2025'):
                continue  # 2024-12 유입분 제외 (단속 기준연도 2025)
            enf_total += 1
            enf_method[r['enforcementMethod']] += 1
            mm = iso[5:7]
            enf_month['2025-' + mm] += 1
            enf_month_method[mm][r['enforcementMethod']] += 1
            enf_channel['safetyReport' if r['reportChannel'] == 'safetyReport' else 'other'] += 1
            t = kst(iso); enf_hour[t.hour] += 1; enf_dow[t.weekday()] += 1
            m = DONG_RE.search(r['streetAddress'] or '')
            if m:
                enf_dong[m.group(1)] += 1
                enf_month_dong[mm][m.group(1)] += 1

# ---- 민원 ----
cmp_sub = collections.Counter(); cmp_month = collections.Counter(); cmp_dong = collections.Counter()
cmp_hour = [0]*24; cmp_dow = [0]*7; cmp_total = 0
cmp_month_sub = collections.defaultdict(collections.Counter)   # 'MM' -> subcat -> n
cmp_month_dong = collections.defaultdict(collections.Counter)  # 'MM' -> dong -> n
cmp_month_dong_sub = collections.defaultdict(lambda: collections.defaultdict(collections.Counter))  # 'MM'->dong->sub->n
# 주 단위(월 내 1~5주) × 동 × 유형 — 월 선택 시 주간 추이용
cmp_mwds = collections.defaultdict(lambda: collections.defaultdict(lambda: collections.defaultdict(collections.Counter)))  # MM->W->dong->sub->n
for f in g('parkingcomplaint*2024.csv'):
    with open(f, encoding='utf-8-sig') as fh:
        for r in csv.DictReader(fh):
            iso = r['receivedAt']
            if not iso.startswith('2024'):
                continue  # 2023-12 유입분 제외 (조회 기준연도 2024)
            cmp_total += 1
            sub = r['subCategory'] or '기타'
            cmp_sub[sub] += 1
            mm = iso[5:7]  # '01'..'12'
            cmp_month['2024-' + mm] += 1
            cmp_month_sub[mm][sub] += 1
            town = r['addressTown']
            if town:
                cmp_dong[town] += 1
                cmp_month_dong[mm][town] += 1
                cmp_month_dong_sub[mm][town][sub] += 1
                wk = str((int(iso[8:10]) - 1) // 7 + 1)  # 1~5주
                cmp_mwds[mm][wk][town][sub] += 1
            t = kst(iso); cmp_hour[t.hour] += 1; cmp_dow[t.weekday()] += 1

# ---- 주차장 ----
lots = []
for f in g('offstreetparking*.csv'):
    for r in csv.DictReader(open(f, encoding='utf-8-sig')):
        if not r['latitude'] or not r['longitude']: continue
        charge = 'free' if 'free' in r['chargeType'] else 'paid'
        lots.append({'name': r['name'], 'lat': round(float(r['latitude']), 6), 'lng': round(float(r['longitude']), 6),
                     'spots': int(r['totalSpotNumber'] or 0), 'charge': charge,
                     'category': r['category'], 'town': r['addressTown'], 'kind': 'off'})
for f in g('onstreetparking*.csv'):
    for r in csv.DictReader(open(f, encoding='utf-8-sig')):
        if not r['latitude'] or not r['longitude']: continue
        charge = 'free' if 'free' in r['chargeType'] else 'paid'
        lots.append({'name': r['name'], 'lat': round(float(r['latitude']), 6), 'lng': round(float(r['longitude']), 6),
                     'spots': int(r['totalSpotNumber'] or 0), 'charge': charge,
                     'category': r['category'], 'town': r['addressTown'], 'kind': 'on'})

parking_spots = sum(l['spots'] for l in lots)
center = [round(sum(l['lat'] for l in lots)/len(lots), 5), round(sum(l['lng'] for l in lots)/len(lots), 5)]

METHOD_LABEL = {'fixedCamera': '고정형 CCTV', 'mobileCamera': '이동형 CCTV',
                'citizenReport': '시민신고(안전신문고)', 'handheldTerminal': '단속요원(휴대단말)'}
SUB_ORDER = ['횡단보도', '인도', '교차로 모퉁이', '소화전', '버스정류소', '어린이보호구역', '안전지대', '기타']

def months_sorted(counter, prefix):
    return [{'month': k, 'count': v} for k, v in sorted(counter.items()) if k.startswith(prefix)]

# 월별 × 유형(top5) 교차 — 대시보드 추이 차트용
cmp_months_2024 = [k for k in sorted(cmp_month) if k.startswith('2024')]
TOP_SUBS = [k for k, _ in cmp_sub.most_common(5)]
cmp_monthly_series = {
    'labels': [m[5:7] + '월' for m in cmp_months_2024],
    'series': [{'name': s, 'data': [cmp_month_sub[m[5:7]].get(s, 0) for m in cmp_months_2024]} for s in TOP_SUBS],
}

data = {
    'META': {
        'center': center,
        'city': '전주시',
        'complaintYear': 2024,
        'enforcementPeriod': '2025.01~06',
        'parkingAsOf': '2026.04.16',
    },
    'SUMMARY': {
        'complaints': cmp_total,
        'enforcement': enf_total,
        'parkingLots': len(lots),
        'parkingSpots': parking_spots,
    },
    'ENF_BY_METHOD': [{'key': k, 'label': METHOD_LABEL.get(k, k), 'count': v}
                      for k, v in enf_method.most_common()],
    'ENF_BY_MONTH': months_sorted(enf_month, '2025'),
    'ENF_BY_HOUR': enf_hour,
    'ENF_BY_DOW': enf_dow,
    'ENF_BY_DONG': [{'dong': k, 'count': v} for k, v in enf_dong.most_common(12)],
    'ENF_CHANNEL': {'safetyReport': enf_channel['safetyReport'], 'other': enf_channel['other']},
    'CMP_BY_SUBCAT': [{'key': k, 'count': cmp_sub.get(k, 0)} for k in SUB_ORDER if cmp_sub.get(k, 0)],
    'CMP_BY_MONTH': months_sorted(cmp_month, '2024'),
    'CMP_MONTHLY_SERIES': cmp_monthly_series,
    'CMP_BY_HOUR': cmp_hour,
    'CMP_BY_DOW': cmp_dow,
    'CMP_BY_DONG': [{'dong': k, 'count': v} for k, v in cmp_dong.most_common(12)],
    'PARKING_LOTS': lots,
}

# 동 단위 집계 지도용: 좌표가 있는 동만, 민원+단속 건수 포함
dong_points = []
all_dongs = set(cmp_dong) | set(enf_dong)
for d in all_dongs:
    if d in DONG_GEO:
        dong_points.append({
            'dong': d, 'lat': DONG_GEO[d][0], 'lng': DONG_GEO[d][1],
            'complaints': cmp_dong.get(d, 0), 'enforcement': enf_dong.get(d, 0),
        })
dong_points.sort(key=lambda x: x['complaints'] + x['enforcement'], reverse=True)
data['DONG_POINTS'] = dong_points

# 동 중심좌표 (월·분기·연도 필터 시 UI에서 좌표 조인용)
data['DONG_COORDS'] = {d: DONG_GEO[d] for d in (set(cmp_dong) | set(enf_dong)) if d in DONG_GEO}

# 전주시 법정동 → 행정구(완산구/덕진구) 매핑. 기준동(가·숫자동 제거)으로 분류.
def base_dong(name):
    name = re.sub(r'\d+가$', '', name)
    name = re.sub(r'(\D+?)\d+동$', r'\1동', name)
    return name
WANSAN = {'경원동','고사동','교동','다가동','동서학동','동완산동','삼천동','상림동','색장동',
          '서노송동','중노송동','남노송동','서서학동','서신동','서완산동','완산동','원당동','이동',
          '전동','중앙동','중인동','중화산동','태평동','평화동','풍남동','효자동','전라감영동','대성동'}
DEOKJIN = {'강흥동','고랑동','금암동','덕진동','만성동','반월동','산정동','성덕동','송천동','여의동',
           '용정동','우아동','원동','인후동','장동','전미동','중동','진북동','팔복동','혁신동','호성동',
           '금상동','화전동','도도동','원동'}
def dong_gu(name):
    b = base_dong(name)
    if b in WANSAN: return '완산구'
    if b in DEOKJIN: return '덕진구'
    return None
_all_dongs = set(cmp_dong) | set(enf_dong)
data['DONG_GU'] = {d: dong_gu(d) for d in _all_dongs if dong_gu(d)}
_unmapped = sorted(d for d in _all_dongs if not dong_gu(d) and d in DONG_GEO)
if _unmapped:
    print('구 미매핑 동(좌표보유):', _unmapped)

# 월별 집계 (UI에서 월→분기/연도로 합산). 키는 'MM'('01'..'12').
data['CMP_MONTH_SUBCAT'] = {mm: dict(cmp_month_sub[mm]) for mm in sorted(cmp_month_sub)}
data['CMP_MONTH_DONG'] = {mm: dict(cmp_month_dong[mm]) for mm in sorted(cmp_month_dong)}
data['CMP_MONTH_DONG_SUB'] = {mm: {d: dict(cmp_month_dong_sub[mm][d]) for d in cmp_month_dong_sub[mm]} for mm in sorted(cmp_month_dong_sub)}
data['CMP_MONTH_WEEK_DONG_SUB'] = {
    mm: {wk: {d: dict(cmp_mwds[mm][wk][d]) for d in cmp_mwds[mm][wk]} for wk in sorted(cmp_mwds[mm])}
    for mm in sorted(cmp_mwds)
}
data['ENF_MONTH_METHOD'] = {mm: dict(enf_month_method[mm]) for mm in sorted(enf_month_method)}
data['ENF_MONTH_DONG'] = {mm: dict(enf_month_dong[mm]) for mm in sorted(enf_month_dong)}
data['SUB_ORDER'] = SUB_ORDER
data['METHOD_LABEL'] = METHOD_LABEL
data['CMP_MONTHS'] = [mm for mm in sorted(cmp_month_sub)]   # 민원 가용 월
data['ENF_MONTHS'] = [mm for mm in sorted(enf_month_method)]  # 단속 가용 월

banner = ("/* 전주시 실데이터 집계 (자동 생성 — scripts/gen_jeonju.py)\n"
          "   출처: 전북데이터허브 전주시 주정차단속(2025 상반기)·민원(2024)·주차장(2026.04)\n"
          "   원본 CSV는 저장소에 미포함. 수치는 제공 데이터 집계값이며 임의 생성 아님. */\n\n")
with open(OUT, 'w', encoding='utf-8') as fh:
    fh.write(banner)
    for k, v in data.items():
        fh.write(f"export const {k} = {json.dumps(v, ensure_ascii=False, indent=2)};\n\n")

print('wrote', OUT)
print('summary', data['SUMMARY'])
print('center', center)
print('enf methods', data['ENF_BY_METHOD'])
print('cmp subcat', data['CMP_BY_SUBCAT'])
