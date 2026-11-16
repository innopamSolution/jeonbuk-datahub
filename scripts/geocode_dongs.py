#!/usr/bin/env python3
# 전주시 민원·단속 데이터의 고유 읍면동을 지오코딩해 중심좌표 캐시 생성.
# 결과: scripts/dong_geo.json  (dong -> [lat, lng]). 재실행 시 캐시된 항목은 건너뜀.
import csv, glob, json, os, re, time, urllib.request, urllib.parse

SRC = "/Users/gyuyoung/Downloads/전북_실증데이터_표준변환_정의서_261116"
CACHE = os.path.join(os.path.dirname(__file__), "dong_geo.json")

def g(pat):
    return sorted(glob.glob(os.path.join(SRC, pat)))

dongs = set()
# 민원: addressTown
for f in g('parkingcomplaint*2024.csv'):
    for r in csv.DictReader(open(f, encoding='utf-8-sig')):
        if r['addressTown']:
            dongs.add(r['addressTown'])
# 단속: streetAddress에서 동 파싱
DONG_RE = re.compile(r'([가-힣]+[0-9]*가?동|[가-힣]+면|[가-힣]+읍)')
for f in g('illegalparkingenforcement*2025_*.csv'):
    for r in csv.DictReader(open(f, encoding='utf-8-sig')):
        m = DONG_RE.search(r['streetAddress'] or '')
        if m:
            dongs.add(m.group(1))

cache = {}
if os.path.exists(CACHE):
    cache = json.load(open(CACHE, encoding='utf-8'))

def geo(dong):
    q = f"전북특별자치도 전주시 {dong}"
    u = 'https://nominatim.openstreetmap.org/search?' + urllib.parse.urlencode(
        {'q': q, 'format': 'json', 'limit': 1, 'countrycodes': 'kr'})
    req = urllib.request.Request(u, headers={'User-Agent': 'jeonju-parking-proto/1.0'})
    d = json.load(urllib.request.urlopen(req, timeout=15))
    if not d:
        return None
    lat, lng = float(d[0]['lat']), float(d[0]['lon'])
    # 전주시 대략 범위 밖이면 버림(오매칭 방지)
    if not (35.7 <= lat <= 35.95 and 127.0 <= lng <= 127.25):
        return None
    return [round(lat, 6), round(lng, 6)]

todo = sorted(d for d in dongs if d not in cache)
print(f"총 동 {len(dongs)}개, 신규 지오코딩 {len(todo)}개")
for i, d in enumerate(todo):
    try:
        cache[d] = geo(d)
        print(f"[{i+1}/{len(todo)}] {d} -> {cache[d]}")
    except Exception as e:
        cache[d] = None
        print(f"[{i+1}/{len(todo)}] {d} ERR {e}")
    json.dump(cache, open(CACHE, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    time.sleep(1.1)

ok = sum(1 for v in cache.values() if v)
print(f"완료: {ok}/{len(cache)} 좌표 확보 → {CACHE}")
