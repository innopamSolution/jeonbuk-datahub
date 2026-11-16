#!/usr/bin/env python3
# 전국 법정동 GeoJSON → 전주시(완산구 45111·덕진구 45113)만 추출·경량화 → src/data/jeonjuBjd.json
import json, glob, os

SRC = glob.glob('/private/tmp/claude-501/*/*/scratchpad/geo/bjd.geojson')[0]
OUT = '/Users/gyuyoung/Documents/claude-test/jeonbuk-datahub/src/data/jeonjuBjd.json'

d = json.load(open(SRC, encoding='utf-8'))

def round_ring(ring, nd=5):
    out = []
    last = None
    for x, y in ring:
        p = [round(x, nd), round(y, nd)]
        if p != last:
            out.append(p)
            last = p
    # 폐합 보장
    if out and out[0] != out[-1]:
        out.append(out[0])
    return out

def simplify_geom(geom):
    t = geom['type']
    c = geom['coordinates']
    if t == 'Polygon':
        return {'type': t, 'coordinates': [round_ring(r) for r in c]}
    if t == 'MultiPolygon':
        return {'type': t, 'coordinates': [[round_ring(r) for r in poly] for poly in c]}
    return geom

feats = []
for f in d['features']:
    cd = f['properties']['EMD_CD']
    if cd[:5] in ('45111', '45113'):
        feats.append({
            'type': 'Feature',
            'properties': {
                'dong': f['properties']['EMD_KOR_NM'],
                'gu': '완산구' if cd[:5] == '45111' else '덕진구',
                'code': cd,
            },
            'geometry': simplify_geom(f['geometry']),
        })

fc = {'type': 'FeatureCollection', 'features': feats}
json.dump(fc, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('features:', len(feats), 'size(KB):', round(os.path.getsize(OUT) / 1024, 1))
