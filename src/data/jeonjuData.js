/* 전주시 실데이터 집계 (자동 생성 — scripts/gen_jeonju.py)
   출처: 전북데이터허브 전주시 주정차단속(2025 상반기)·민원(2024)·주차장(2026.04)
   원본 CSV는 저장소에 미포함. 수치는 제공 데이터 집계값이며 임의 생성 아님. */

export const META = {
  "center": [
    35.83076,
    127.12351
  ],
  "city": "전주시",
  "complaintYear": 2024,
  "enforcementPeriod": "2025.01~06",
  "parkingAsOf": "2026.04.16"
};

export const SUMMARY = {
  "complaints": 36807,
  "enforcement": 69917,
  "parkingLots": 117,
  "parkingSpots": 7989
};

export const ENF_BY_METHOD = [
  {
    "key": "fixedCamera",
    "label": "고정형 CCTV",
    "count": 35184
  },
  {
    "key": "mobileCamera",
    "label": "이동형 CCTV",
    "count": 20148
  },
  {
    "key": "citizenReport",
    "label": "시민신고(안전신문고)",
    "count": 13718
  },
  {
    "key": "handheldTerminal",
    "label": "단속요원(휴대단말)",
    "count": 867
  }
];

export const ENF_BY_MONTH = [
  {
    "month": "2025-01",
    "count": 16100
  },
  {
    "month": "2025-02",
    "count": 15903
  },
  {
    "month": "2025-03",
    "count": 12373
  },
  {
    "month": "2025-04",
    "count": 9523
  },
  {
    "month": "2025-05",
    "count": 9666
  },
  {
    "month": "2025-06",
    "count": 6352
  }
];

export const ENF_BY_HOUR = [
  183,
  44,
  39,
  71,
  128,
  200,
  425,
  2046,
  2042,
  3045,
  11978,
  2241,
  1890,
  1700,
  15148,
  6299,
  6484,
  5060,
  4193,
  3678,
  1268,
  1124,
  419,
  212
];

export const ENF_BY_DOW = [
  10920,
  9917,
  10033,
  11098,
  10895,
  9213,
  7841
];

export const ENF_BY_DONG = [
  {
    "dong": "서신동",
    "count": 4886
  },
  {
    "dong": "효자동2가",
    "count": 4348
  },
  {
    "dong": "효자동3가",
    "count": 3956
  },
  {
    "dong": "중화산동2가",
    "count": 2459
  },
  {
    "dong": "효자동1가",
    "count": 1779
  },
  {
    "dong": "서노송동",
    "count": 1709
  },
  {
    "dong": "삼천동1가",
    "count": 1512
  },
  {
    "dong": "평화동1가",
    "count": 1278
  },
  {
    "dong": "효자동",
    "count": 1247
  },
  {
    "dong": "평화동2가",
    "count": 1033
  },
  {
    "dong": "송천동2가",
    "count": 1004
  },
  {
    "dong": "중화산동",
    "count": 957
  }
];

export const ENF_CHANNEL = {
  "safetyReport": 11444,
  "other": 58473
};

export const CMP_BY_SUBCAT = [
  {
    "key": "횡단보도",
    "count": 15162
  },
  {
    "key": "인도",
    "count": 9828
  },
  {
    "key": "교차로 모퉁이",
    "count": 8043
  },
  {
    "key": "소화전",
    "count": 1658
  },
  {
    "key": "버스정류소",
    "count": 661
  },
  {
    "key": "어린이보호구역",
    "count": 306
  },
  {
    "key": "안전지대",
    "count": 112
  },
  {
    "key": "기타",
    "count": 1037
  }
];

export const CMP_BY_MONTH = [
  {
    "month": "2024-01",
    "count": 3408
  },
  {
    "month": "2024-02",
    "count": 3317
  },
  {
    "month": "2024-03",
    "count": 3587
  },
  {
    "month": "2024-04",
    "count": 2815
  },
  {
    "month": "2024-05",
    "count": 3071
  },
  {
    "month": "2024-06",
    "count": 2720
  },
  {
    "month": "2024-07",
    "count": 2869
  },
  {
    "month": "2024-08",
    "count": 3012
  },
  {
    "month": "2024-09",
    "count": 2939
  },
  {
    "month": "2024-10",
    "count": 3319
  },
  {
    "month": "2024-11",
    "count": 3118
  },
  {
    "month": "2024-12",
    "count": 2632
  }
];

export const CMP_MONTHLY_SERIES = {
  "labels": [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월"
  ],
  "series": [
    {
      "name": "횡단보도",
      "data": [
        1099,
        1594,
        1399,
        1186,
        1396,
        1050,
        1224,
        1189,
        1254,
        1438,
        1275,
        1058
      ]
    },
    {
      "name": "인도",
      "data": [
        727,
        824,
        994,
        705,
        699,
        783,
        851,
        873,
        743,
        888,
        881,
        860
      ]
    },
    {
      "name": "교차로 모퉁이",
      "data": [
        541,
        601,
        829,
        688,
        696,
        646,
        597,
        747,
        724,
        730,
        726,
        518
      ]
    },
    {
      "name": "소화전",
      "data": [
        194,
        146,
        169,
        115,
        160,
        132,
        108,
        122,
        126,
        125,
        131,
        130
      ]
    },
    {
      "name": "기타",
      "data": [
        744,
        19,
        31,
        27,
        33,
        19,
        12,
        25,
        23,
        55,
        28,
        21
      ]
    }
  ]
};

export const CMP_BY_HOUR = [
  498,
  341,
  224,
  302,
  293,
  446,
  887,
  1057,
  1205,
  1602,
  1950,
  2205,
  3175,
  2713,
  2179,
  2268,
  2439,
  2114,
  2308,
  2641,
  2271,
  1776,
  1259,
  654
];

export const CMP_BY_DOW = [
  5243,
  5279,
  5001,
  5630,
  5544,
  5642,
  4468
];

export const CMP_BY_DONG = [
  {
    "dong": "효자동2가",
    "count": 3208
  },
  {
    "dong": "송천동2가",
    "count": 3117
  },
  {
    "dong": "효자동3가",
    "count": 2972
  },
  {
    "dong": "평화동1가",
    "count": 2667
  },
  {
    "dong": "서신동",
    "count": 2461
  },
  {
    "dong": "중화산동2가",
    "count": 1962
  },
  {
    "dong": "평화동2가",
    "count": 1919
  },
  {
    "dong": "송천동1가",
    "count": 1721
  },
  {
    "dong": "삼천동1가",
    "count": 1628
  },
  {
    "dong": "인후동1가",
    "count": 1463
  },
  {
    "dong": "금암동",
    "count": 1197
  },
  {
    "dong": "만성동",
    "count": 966
  }
];

export const PARKING_LOTS = [
  {
    "name": "고사동 전주영화제작소 옆",
    "lat": 35.81836,
    "lng": 127.142717,
    "spots": 14,
    "charge": "free",
    "category": "public,free",
    "town": "고사동",
    "kind": "off"
  },
  {
    "name": "근영여고 앞",
    "lat": 35.817174,
    "lng": 127.123425,
    "spots": 45,
    "charge": "free",
    "category": "public,free",
    "town": "중화산동2가",
    "kind": "off"
  },
  {
    "name": "남노송동 주차장(기린대로변)",
    "lat": 35.82034,
    "lng": 127.153626,
    "spots": 25,
    "charge": "free",
    "category": "public,free",
    "town": "",
    "kind": "off"
  },
  {
    "name": "남노송동(병무청 맞은편)",
    "lat": 35.821314,
    "lng": 127.154878,
    "spots": 20,
    "charge": "free",
    "category": "public,free",
    "town": "",
    "kind": "off"
  },
  {
    "name": "노송천 주차장",
    "lat": 35.826902,
    "lng": 127.142313,
    "spots": 70,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "off"
  },
  {
    "name": "다가서당",
    "lat": 35.820729,
    "lng": 127.139143,
    "spots": 13,
    "charge": "free",
    "category": "public,free",
    "town": "다가동4가",
    "kind": "off"
  },
  {
    "name": "모악산",
    "lat": 35.758084,
    "lng": 127.086686,
    "spots": 56,
    "charge": "free",
    "category": "public,free",
    "town": "중인동",
    "kind": "off"
  },
  {
    "name": "삼천 2동",
    "lat": 35.796684,
    "lng": 127.121714,
    "spots": 194,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "삼천동1가",
    "kind": "off"
  },
  {
    "name": "색장동 만남의 광장",
    "lat": 35.78844,
    "lng": 127.193412,
    "spots": 62,
    "charge": "free",
    "category": "public,free",
    "town": "색장동",
    "kind": "off"
  },
  {
    "name": "서부신시가지 KBS옆",
    "lat": 35.821758,
    "lng": 127.102962,
    "spots": 33,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 KB은행",
    "lat": 35.815161,
    "lng": 127.107807,
    "spots": 62,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 KT&G전북본부 옆",
    "lat": 35.821758,
    "lng": 127.102962,
    "spots": 20,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 농협중앙회",
    "lat": 35.817625,
    "lng": 127.107822,
    "spots": 48,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 도청사거리",
    "lat": 35.819681,
    "lng": 127.104981,
    "spots": 20,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 도청옆",
    "lat": 35.817618,
    "lng": 127.110179,
    "spots": 43,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 롯데마트뒤",
    "lat": 35.816988,
    "lng": 127.104933,
    "spots": 36,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 마전",
    "lat": 35.827747,
    "lng": 127.105153,
    "spots": 42,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 보훈청",
    "lat": 35.815154,
    "lng": 127.10375,
    "spots": 32,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 봉곡",
    "lat": 35.812967,
    "lng": 127.101358,
    "spots": 30,
    "charge": "free",
    "category": "public,free",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 비보이광장",
    "lat": 35.816438,
    "lng": 127.110309,
    "spots": 124,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 서곡방면",
    "lat": 35.828497,
    "lng": 127.097817,
    "spots": 27,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 시티병원",
    "lat": 35.815162,
    "lng": 127.110174,
    "spots": 50,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 신한은행",
    "lat": 35.817598,
    "lng": 127.103285,
    "spots": 25,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 엘드아파트",
    "lat": 35.813166,
    "lng": 127.109622,
    "spots": 24,
    "charge": "free",
    "category": "public,free",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 여명교회뒤",
    "lat": 35.820632,
    "lng": 127.096161,
    "spots": 30,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 예다움 원룸",
    "lat": 35.821678,
    "lng": 127.101344,
    "spots": 29,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 전북경찰청옆",
    "lat": 35.823811,
    "lng": 127.102949,
    "spots": 33,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 전주대 신정문",
    "lat": 35.817223,
    "lng": 127.096672,
    "spots": 32,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 전주대 원룸옆",
    "lat": 35.812981,
    "lng": 127.094993,
    "spots": 17,
    "charge": "free",
    "category": "public,free",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서부신시가지 홍산광장",
    "lat": 35.816448,
    "lng": 127.107642,
    "spots": 120,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동3가",
    "kind": "off"
  },
  {
    "name": "서서학동 주민자치센터 뒤",
    "lat": 35.805598,
    "lng": 127.149144,
    "spots": 16,
    "charge": "free",
    "category": "public,free",
    "town": "서서학동",
    "kind": "off"
  },
  {
    "name": "서신동",
    "lat": 35.831592,
    "lng": 127.11445,
    "spots": 131,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "서신동",
    "kind": "off"
  },
  {
    "name": "서신동 서신지구대 옆",
    "lat": 35.835414,
    "lng": 127.111401,
    "spots": 28,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "서신동",
    "kind": "off"
  },
  {
    "name": "서신동 에덴교회 앞",
    "lat": 35.834521,
    "lng": 127.109052,
    "spots": 29,
    "charge": "free",
    "category": "public,free",
    "town": "서신동",
    "kind": "off"
  },
  {
    "name": "서학동 예술마을",
    "lat": 35.809296,
    "lng": 127.149007,
    "spots": 27,
    "charge": "free",
    "category": "public,free",
    "town": "서서학동",
    "kind": "off"
  },
  {
    "name": "서학동 예술마을 소규모주차장",
    "lat": 35.806465,
    "lng": 127.150942,
    "spots": 17,
    "charge": "free",
    "category": "public,free",
    "town": "서서학동",
    "kind": "off"
  },
  {
    "name": "신일강변 아파트 옆",
    "lat": 35.799102,
    "lng": 127.113569,
    "spots": 30,
    "charge": "free",
    "category": "public,free",
    "town": "삼천동1가",
    "kind": "off"
  },
  {
    "name": "역사도심",
    "lat": 35.814268,
    "lng": 127.140478,
    "spots": 11,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "다가동2가",
    "kind": "off"
  },
  {
    "name": "오거리",
    "lat": 35.82129,
    "lng": 127.145191,
    "spots": 183,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "고사동",
    "kind": "off"
  },
  {
    "name": "이중본 뒤",
    "lat": 35.81289,
    "lng": 127.122037,
    "spots": 33,
    "charge": "free",
    "category": "public,free",
    "town": "중화산동2가",
    "kind": "off"
  },
  {
    "name": "정읍방면 만남의 광장",
    "lat": 35.801358,
    "lng": 127.09313,
    "spots": 84,
    "charge": "free",
    "category": "public,free",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "중화산 2동",
    "lat": 35.817578,
    "lng": 127.115226,
    "spots": 75,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "중화산동2가",
    "kind": "off"
  },
  {
    "name": "중화산2동 공영주차장",
    "lat": 35.82019,
    "lng": 127.115082,
    "spots": 16,
    "charge": "free",
    "category": "public,free",
    "town": "중화산동2가",
    "kind": "off"
  },
  {
    "name": "태평동",
    "lat": 35.822384,
    "lng": 127.137729,
    "spots": 7,
    "charge": "free",
    "category": "public,free",
    "town": "태평동",
    "kind": "off"
  },
  {
    "name": "평화1동",
    "lat": 35.796128,
    "lng": 127.143625,
    "spots": 25,
    "charge": "free",
    "category": "public,free",
    "town": "평화동1가",
    "kind": "off"
  },
  {
    "name": "평화2동",
    "lat": 35.795879,
    "lng": 127.136703,
    "spots": 13,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "평화동1가",
    "kind": "off"
  },
  {
    "name": "풍남초 주차장",
    "lat": 35.822536,
    "lng": 127.151725,
    "spots": 28,
    "charge": "free",
    "category": "public,free",
    "town": "중노송동",
    "kind": "off"
  },
  {
    "name": "한옥마을4 공영주차장(대성동)",
    "lat": 35.800623,
    "lng": 127.168681,
    "spots": 636,
    "charge": "free",
    "category": "public,free",
    "town": "대성동",
    "kind": "off"
  },
  {
    "name": "한옥마을제3주차장",
    "lat": 35.8166,
    "lng": 127.156666,
    "spots": 72,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "off"
  },
  {
    "name": "효천지구 제1주차장",
    "lat": 35.801592,
    "lng": 127.101096,
    "spots": 44,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "효천지구 제2주차장",
    "lat": 35.801674,
    "lng": 127.106786,
    "spots": 83,
    "charge": "free",
    "category": "public,free",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "효천지구 제3주차장",
    "lat": 35.80236,
    "lng": 127.109942,
    "spots": 11,
    "charge": "free",
    "category": "public,free",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "효천지구 제4주차장",
    "lat": 35.799842,
    "lng": 127.107747,
    "spots": 33,
    "charge": "free",
    "category": "public,free",
    "town": "효자동2가",
    "kind": "off"
  },
  {
    "name": "효천지구 제5주차장",
    "lat": 35.794652,
    "lng": 127.106828,
    "spots": 51,
    "charge": "free",
    "category": "public,free",
    "town": "삼천동2가",
    "kind": "off"
  },
  {
    "name": "효자2동",
    "lat": 35.812091,
    "lng": 127.1148,
    "spots": 21,
    "charge": "free",
    "category": "public,free",
    "town": "효자동1가",
    "kind": "off"
  },
  {
    "name": "에코시티 8",
    "lat": 35.879914,
    "lng": 127.1338,
    "spots": 59,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "송천동2가",
    "kind": "off"
  },
  {
    "name": "에코시티 13",
    "lat": 35.872402,
    "lng": 127.126681,
    "spots": 28,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "송천동2가",
    "kind": "off"
  },
  {
    "name": "신복로",
    "lat": 35.855339,
    "lng": 127.10827,
    "spots": 16,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "팔복동1가",
    "kind": "off"
  },
  {
    "name": "조촌동",
    "lat": 35.874702,
    "lng": 127.0759,
    "spots": 39,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "반월동",
    "kind": "off"
  },
  {
    "name": "한옥마을1",
    "lat": 35.81825,
    "lng": 127.153677,
    "spots": 293,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "off"
  },
  {
    "name": "한옥마을2",
    "lat": 35.818324,
    "lng": 127.152854,
    "spots": 171,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "off"
  },
  {
    "name": "화산체육관",
    "lat": 35.820941,
    "lng": 127.124575,
    "spots": 256,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "off"
  },
  {
    "name": "가련산",
    "lat": 35.846075,
    "lng": 127.121047,
    "spots": 41,
    "charge": "free",
    "category": "public,free",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "건산천1",
    "lat": 35.832027,
    "lng": 127.137021,
    "spots": 77,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "진북동",
    "kind": "off"
  },
  {
    "name": "건산천2",
    "lat": 35.832942,
    "lng": 127.13472,
    "spots": 68,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "금암동",
    "kind": "off"
  },
  {
    "name": "군산익산방면 만남의 광장",
    "lat": 35.87502,
    "lng": 127.056688,
    "spots": 52,
    "charge": "free",
    "category": "public,free",
    "town": "용정동",
    "kind": "off"
  },
  {
    "name": "금암2동 주차장",
    "lat": 35.839616,
    "lng": 127.141164,
    "spots": 24,
    "charge": "free",
    "category": "public,free",
    "town": "금암동",
    "kind": "off"
  },
  {
    "name": "덕진광장",
    "lat": 35.844195,
    "lng": 127.124038,
    "spots": 33,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "off"
  },
  {
    "name": "도당산4길",
    "lat": 35.847516,
    "lng": 127.158755,
    "spots": 13,
    "charge": "free",
    "category": "public,free",
    "town": "우아동3가",
    "kind": "off"
  },
  {
    "name": "만성지구 제5주차장",
    "lat": 35.842802,
    "lng": 127.078762,
    "spots": 66,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "만성동",
    "kind": "off"
  },
  {
    "name": "만성지구 제2주차장",
    "lat": 35.841422,
    "lng": 127.074826,
    "spots": 54,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "만성동",
    "kind": "off"
  },
  {
    "name": "만성지구 제4주차장",
    "lat": 35.842719,
    "lng": 127.071558,
    "spots": 26,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "만성동",
    "kind": "off"
  },
  {
    "name": "만성지구 제7주차장",
    "lat": 35.844783,
    "lng": 127.073899,
    "spots": 65,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "만성동",
    "kind": "off"
  },
  {
    "name": "만성지구 제8주차장",
    "lat": 35.848739,
    "lng": 127.077252,
    "spots": 50,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "만성동",
    "kind": "off"
  },
  {
    "name": "무진장방면 만남의 광장",
    "lat": 35.842135,
    "lng": 127.175877,
    "spots": 69,
    "charge": "free",
    "category": "public,free",
    "town": "산정동",
    "kind": "off"
  },
  {
    "name": "송천1동 송천도서관 앞",
    "lat": 35.869388,
    "lng": 127.128128,
    "spots": 32,
    "charge": "free",
    "category": "public,free",
    "town": "송천동2가",
    "kind": "off"
  },
  {
    "name": "송천2동 공원",
    "lat": 35.864523,
    "lng": 127.118106,
    "spots": 13,
    "charge": "free",
    "category": "public,free",
    "town": "송천동1가",
    "kind": "off"
  },
  {
    "name": "송천2동 농수산시장 안",
    "lat": 35.868235,
    "lng": 127.116431,
    "spots": 82,
    "charge": "free",
    "category": "public,free",
    "town": "송천동2가",
    "kind": "off"
  },
  {
    "name": "송천2동 시영아파트 앞",
    "lat": 35.86833,
    "lng": 127.112409,
    "spots": 156,
    "charge": "free",
    "category": "public,free",
    "town": "",
    "kind": "off"
  },
  {
    "name": "송천2동 용소초교 옆",
    "lat": 35.861355,
    "lng": 127.118004,
    "spots": 17,
    "charge": "free",
    "category": "public,free",
    "town": "송천동1가",
    "kind": "off"
  },
  {
    "name": "송천2동 주민자치센터 옆",
    "lat": 35.864938,
    "lng": 127.115259,
    "spots": 17,
    "charge": "free",
    "category": "public,free",
    "town": "송천동1가",
    "kind": "off"
  },
  {
    "name": "신복마을",
    "lat": 35.855032,
    "lng": 127.106056,
    "spots": 30,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "팔복동1가",
    "kind": "off"
  },
  {
    "name": "아중지구 롯데아파트 옆",
    "lat": 35.831586,
    "lng": 127.1706,
    "spots": 70,
    "charge": "free",
    "category": "public,free",
    "town": "우아동2가",
    "kind": "off"
  },
  {
    "name": "아중지구 밀레니엄 옆",
    "lat": 35.831528,
    "lng": 127.172969,
    "spots": 73,
    "charge": "free",
    "category": "public,free",
    "town": "우아동2가",
    "kind": "off"
  },
  {
    "name": "아중지구 부영아파트 옆",
    "lat": 35.825471,
    "lng": 127.171641,
    "spots": 88,
    "charge": "free",
    "category": "public,free",
    "town": "우아동1가",
    "kind": "off"
  },
  {
    "name": "아중지구 아중도서관(산림청 옆)",
    "lat": 35.82633,
    "lng": 127.162608,
    "spots": 62,
    "charge": "free",
    "category": "public,free",
    "town": "인후동1가",
    "kind": "off"
  },
  {
    "name": "에코시티 12",
    "lat": 35.873322,
    "lng": 127.12648,
    "spots": 52,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "송천동2가",
    "kind": "off"
  },
  {
    "name": "여의동",
    "lat": 35.869809,
    "lng": 127.080543,
    "spots": 45,
    "charge": "free",
    "category": "public,free",
    "town": "여의동2가",
    "kind": "off"
  },
  {
    "name": "여의동 주민센터 옆",
    "lat": 35.871316,
    "lng": 127.075971,
    "spots": 26,
    "charge": "free",
    "category": "public,free",
    "town": "반월동",
    "kind": "off"
  },
  {
    "name": "우아2동 아중택지 개발지구",
    "lat": 35.837572,
    "lng": 127.168407,
    "spots": 69,
    "charge": "free",
    "category": "public,free",
    "town": "산정동",
    "kind": "off"
  },
  {
    "name": "우아동 주민센터 옆",
    "lat": 35.850027,
    "lng": 127.159387,
    "spots": 28,
    "charge": "free",
    "category": "public,free",
    "town": "우아동3가",
    "kind": "off"
  },
  {
    "name": "인후1동 안골",
    "lat": 35.835526,
    "lng": 127.154611,
    "spots": 32,
    "charge": "free",
    "category": "public,free",
    "town": "인후동1가",
    "kind": "off"
  },
  {
    "name": "인후2동",
    "lat": 35.842952,
    "lng": 127.150958,
    "spots": 15,
    "charge": "free",
    "category": "public,free",
    "town": "인후동2가",
    "kind": "off"
  },
  {
    "name": "인후2동 건지",
    "lat": 35.846631,
    "lng": 127.148226,
    "spots": 26,
    "charge": "free",
    "category": "public,free",
    "town": "인후동2가",
    "kind": "off"
  },
  {
    "name": "인후2동 금평",
    "lat": 35.84304,
    "lng": 127.145308,
    "spots": 26,
    "charge": "free",
    "category": "public,free",
    "town": "인후동2가",
    "kind": "off"
  },
  {
    "name": "인후2동 용수마을",
    "lat": 35.841595,
    "lng": 127.149582,
    "spots": 11,
    "charge": "free",
    "category": "public,free",
    "town": "인후동2가",
    "kind": "off"
  },
  {
    "name": "인후3동 진버들",
    "lat": 35.836321,
    "lng": 127.164751,
    "spots": 88,
    "charge": "free",
    "category": "public,free",
    "town": "인후동1가",
    "kind": "off"
  },
  {
    "name": "인후공원",
    "lat": 35.844122,
    "lng": 127.16455,
    "spots": 64,
    "charge": "free",
    "category": "public,free",
    "town": "우아동3가",
    "kind": "off"
  },
  {
    "name": "제1산업단지 주차장",
    "lat": 35.859934,
    "lng": 127.098555,
    "spots": 76,
    "charge": "free",
    "category": "public,free",
    "town": "팔복동1가",
    "kind": "off"
  },
  {
    "name": "팔복동주차장",
    "lat": 35.855957,
    "lng": 127.106254,
    "spots": 8,
    "charge": "free",
    "category": "public,free",
    "town": "팔복동1가",
    "kind": "off"
  },
  {
    "name": "하가지구 나그네교회 앞",
    "lat": 35.847722,
    "lng": 127.110518,
    "spots": 29,
    "charge": "free",
    "category": "public,free",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "하가지구 리드빌딩 옆",
    "lat": 35.841338,
    "lng": 127.111283,
    "spots": 23,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "하가지구 상가마을 주차장",
    "lat": 35.84015,
    "lng": 127.114709,
    "spots": 19,
    "charge": "free",
    "category": "public,free",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "하가지구 소소빌딩 뒤",
    "lat": 35.846686,
    "lng": 127.109782,
    "spots": 26,
    "charge": "free",
    "category": "public,free",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "하가지구 초담불고기 뒤",
    "lat": 35.846099,
    "lng": 127.109944,
    "spots": 29,
    "charge": "free",
    "category": "public,free",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "하가지구 풍경안경원 옆",
    "lat": 35.842222,
    "lng": 127.110558,
    "spots": 30,
    "charge": "free",
    "category": "public,free",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "하가지구 하가홈마트 뒤",
    "lat": 35.843308,
    "lng": 127.109714,
    "spots": 30,
    "charge": "free",
    "category": "public,free",
    "town": "덕진동2가",
    "kind": "off"
  },
  {
    "name": "호성동 만남의 광장",
    "lat": 35.867458,
    "lng": 127.147537,
    "spots": 30,
    "charge": "free",
    "category": "public,free",
    "town": "",
    "kind": "off"
  },
  {
    "name": "동물원(호랑이)/ 동물원(기린)",
    "lat": 35.857306,
    "lng": 127.144077,
    "spots": 828,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "덕진동1가",
    "kind": "off"
  },
  {
    "name": "실내체육관",
    "lat": 35.841141,
    "lng": 127.13159,
    "spots": 158,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "덕진동1가",
    "kind": "off"
  },
  {
    "name": "종합경기장(정문)/ 종합경기장(서문)",
    "lat": 35.840755,
    "lng": 127.127127,
    "spots": 638,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "덕진동1가",
    "kind": "off"
  },
  {
    "name": "객리단길(거주자우선)",
    "lat": 35.820238,
    "lng": 127.140044,
    "spots": 48,
    "charge": "paid",
    "category": "public,feeCharged,forResidents",
    "town": "고사동",
    "kind": "on"
  },
  {
    "name": "공구거리 노상",
    "lat": 35.822559,
    "lng": 127.143692,
    "spots": 40,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "고사동",
    "kind": "on"
  },
  {
    "name": "전주시청 주변 노상",
    "lat": 35.82412,
    "lng": 127.147143,
    "spots": 66,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "서노송동",
    "kind": "on"
  },
  {
    "name": "전주천",
    "lat": 35.811721,
    "lng": 127.145011,
    "spots": 117,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "on"
  },
  {
    "name": "선수촌공원",
    "lat": 35.834613,
    "lng": 127.119828,
    "spots": 75,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "",
    "kind": "on"
  },
  {
    "name": "전북대앞 노상",
    "lat": 35.843201,
    "lng": 127.128703,
    "spots": 17,
    "charge": "paid",
    "category": "public,feeCharged",
    "town": "금암동",
    "kind": "on"
  }
];

export const DONG_POINTS = [
  {
    "dong": "효자동2가",
    "lat": 35.806828,
    "lng": 127.099317,
    "complaints": 3208,
    "enforcement": 4348
  },
  {
    "dong": "서신동",
    "lat": 35.833873,
    "lng": 127.115045,
    "complaints": 2461,
    "enforcement": 4886
  },
  {
    "dong": "효자동3가",
    "lat": 35.824691,
    "lng": 127.097796,
    "complaints": 2972,
    "enforcement": 3956
  },
  {
    "dong": "중화산동2가",
    "lat": 35.817383,
    "lng": 127.122649,
    "complaints": 1962,
    "enforcement": 2459
  },
  {
    "dong": "송천동2가",
    "lat": 35.871287,
    "lng": 127.121131,
    "complaints": 3117,
    "enforcement": 1004
  },
  {
    "dong": "평화동1가",
    "lat": 35.79558,
    "lng": 127.139,
    "complaints": 2667,
    "enforcement": 1278
  },
  {
    "dong": "삼천동1가",
    "lat": 35.79758,
    "lng": 127.122023,
    "complaints": 1628,
    "enforcement": 1512
  },
  {
    "dong": "평화동2가",
    "lat": 35.785571,
    "lng": 127.134631,
    "complaints": 1919,
    "enforcement": 1033
  },
  {
    "dong": "효자동1가",
    "lat": 35.806195,
    "lng": 127.122862,
    "complaints": 888,
    "enforcement": 1779
  },
  {
    "dong": "송천동1가",
    "lat": 35.858357,
    "lng": 127.126752,
    "complaints": 1721,
    "enforcement": 677
  },
  {
    "dong": "서노송동",
    "lat": 35.827253,
    "lng": 127.145749,
    "complaints": 535,
    "enforcement": 1709
  },
  {
    "dong": "금암동",
    "lat": 35.839701,
    "lng": 127.13577,
    "complaints": 1197,
    "enforcement": 924
  },
  {
    "dong": "인후동1가",
    "lat": 35.83221,
    "lng": 127.159715,
    "complaints": 1463,
    "enforcement": 525
  },
  {
    "dong": "반월동",
    "lat": 35.878472,
    "lng": 127.069548,
    "complaints": 856,
    "enforcement": 596
  },
  {
    "dong": "만성동",
    "lat": 35.841987,
    "lng": 127.079964,
    "complaints": 966,
    "enforcement": 433
  },
  {
    "dong": "효자동",
    "lat": 35.80455,
    "lng": 127.112259,
    "complaints": 0,
    "enforcement": 1247
  },
  {
    "dong": "우아동3가",
    "lat": 35.84854,
    "lng": 127.15935,
    "complaints": 836,
    "enforcement": 375
  },
  {
    "dong": "경원동1가",
    "lat": 35.81892,
    "lng": 127.146982,
    "complaints": 208,
    "enforcement": 903
  },
  {
    "dong": "경원동3가",
    "lat": 35.820736,
    "lng": 127.148675,
    "complaints": 274,
    "enforcement": 822
  },
  {
    "dong": "중동",
    "lat": 35.83249,
    "lng": 127.063205,
    "complaints": 914,
    "enforcement": 79
  },
  {
    "dong": "고사동",
    "lat": 35.82017,
    "lng": 127.142828,
    "complaints": 376,
    "enforcement": 463
  },
  {
    "dong": "우아동2가",
    "lat": 35.832457,
    "lng": 127.171068,
    "complaints": 683,
    "enforcement": 149
  },
  {
    "dong": "인후동2가",
    "lat": 35.842233,
    "lng": 127.148961,
    "complaints": 530,
    "enforcement": 295
  },
  {
    "dong": "덕진동2가",
    "lat": 35.84536,
    "lng": 127.113927,
    "complaints": 514,
    "enforcement": 302
  },
  {
    "dong": "중앙동",
    "lat": 35.820158,
    "lng": 127.141207,
    "complaints": 0,
    "enforcement": 782
  },
  {
    "dong": "장동",
    "lat": 35.855192,
    "lng": 127.058267,
    "complaints": 579,
    "enforcement": 167
  },
  {
    "dong": "태평동",
    "lat": 35.824186,
    "lng": 127.138782,
    "complaints": 109,
    "enforcement": 581
  },
  {
    "dong": "덕진동1가",
    "lat": 35.849705,
    "lng": 127.128771,
    "complaints": 414,
    "enforcement": 276
  },
  {
    "dong": "중화산2동",
    "lat": 35.818679,
    "lng": 127.120799,
    "complaints": 0,
    "enforcement": 685
  },
  {
    "dong": "전동",
    "lat": 35.813851,
    "lng": 127.147988,
    "complaints": 174,
    "enforcement": 509
  },
  {
    "dong": "중노송동",
    "lat": 35.824955,
    "lng": 127.156957,
    "complaints": 287,
    "enforcement": 311
  },
  {
    "dong": "교동",
    "lat": 35.813138,
    "lng": 127.161179,
    "complaints": 281,
    "enforcement": 309
  },
  {
    "dong": "서서학동",
    "lat": 35.796603,
    "lng": 127.149477,
    "complaints": 304,
    "enforcement": 231
  },
  {
    "dong": "진북동",
    "lat": 35.828369,
    "lng": 127.136704,
    "complaints": 218,
    "enforcement": 306
  },
  {
    "dong": "호성동1가",
    "lat": 35.863501,
    "lng": 127.154413,
    "complaints": 233,
    "enforcement": 202
  },
  {
    "dong": "여의동2가",
    "lat": 35.867449,
    "lng": 127.085017,
    "complaints": 204,
    "enforcement": 226
  },
  {
    "dong": "효자3동",
    "lat": 35.804702,
    "lng": 127.113509,
    "complaints": 0,
    "enforcement": 388
  },
  {
    "dong": "여의동",
    "lat": 35.860348,
    "lng": 127.073921,
    "complaints": 290,
    "enforcement": 58
  },
  {
    "dong": "남노송동",
    "lat": 35.81917,
    "lng": 127.160064,
    "complaints": 172,
    "enforcement": 149
  },
  {
    "dong": "동서학동",
    "lat": 35.804468,
    "lng": 127.157994,
    "complaints": 194,
    "enforcement": 108
  },
  {
    "dong": "풍남동3가",
    "lat": 35.81609,
    "lng": 127.15257,
    "complaints": 167,
    "enforcement": 124
  },
  {
    "dong": "중화산동1가",
    "lat": 35.81451,
    "lng": 127.134157,
    "complaints": 121,
    "enforcement": 140
  },
  {
    "dong": "평화동",
    "lat": 35.783301,
    "lng": 127.127346,
    "complaints": 0,
    "enforcement": 247
  },
  {
    "dong": "산정동",
    "lat": 35.84434,
    "lng": 127.173628,
    "complaints": 79,
    "enforcement": 163
  },
  {
    "dong": "혁신동",
    "lat": 35.837619,
    "lng": 127.061316,
    "complaints": 0,
    "enforcement": 205
  },
  {
    "dong": "삼천2동",
    "lat": 35.79468,
    "lng": 127.122778,
    "complaints": 0,
    "enforcement": 177
  },
  {
    "dong": "경원동2가",
    "lat": 35.818122,
    "lng": 127.149411,
    "complaints": 117,
    "enforcement": 58
  },
  {
    "dong": "다가동3가",
    "lat": 35.817007,
    "lng": 127.140208,
    "complaints": 58,
    "enforcement": 106
  },
  {
    "dong": "팔복동1가",
    "lat": 35.857419,
    "lng": 127.105638,
    "complaints": 151,
    "enforcement": 13
  },
  {
    "dong": "우아동1가",
    "lat": 35.818644,
    "lng": 127.190823,
    "complaints": 136,
    "enforcement": 25
  },
  {
    "dong": "다가동4가",
    "lat": 35.81993,
    "lng": 127.138706,
    "complaints": 55,
    "enforcement": 93
  },
  {
    "dong": "팔복동2가",
    "lat": 35.854432,
    "lng": 127.09523,
    "complaints": 86,
    "enforcement": 52
  },
  {
    "dong": "중앙동3가",
    "lat": 35.817536,
    "lng": 127.145079,
    "complaints": 15,
    "enforcement": 118
  },
  {
    "dong": "호성동2가",
    "lat": 35.876981,
    "lng": 127.145658,
    "complaints": 24,
    "enforcement": 99
  },
  {
    "dong": "전동3가",
    "lat": 35.813171,
    "lng": 127.145097,
    "complaints": 2,
    "enforcement": 112
  },
  {
    "dong": "송천동",
    "lat": 35.867168,
    "lng": 127.113225,
    "complaints": 0,
    "enforcement": 112
  },
  {
    "dong": "다가동1가",
    "lat": 35.814834,
    "lng": 127.141782,
    "complaints": 32,
    "enforcement": 76
  },
  {
    "dong": "풍남동1가",
    "lat": 35.81863,
    "lng": 127.151067,
    "complaints": 69,
    "enforcement": 38
  },
  {
    "dong": "중앙동1가",
    "lat": 35.816727,
    "lng": 127.1423,
    "complaints": 35,
    "enforcement": 71
  },
  {
    "dong": "중앙동4가",
    "lat": 35.815268,
    "lng": 127.144481,
    "complaints": 3,
    "enforcement": 84
  },
  {
    "dong": "완산동",
    "lat": 35.809282,
    "lng": 127.134785,
    "complaints": 0,
    "enforcement": 87
  },
  {
    "dong": "팔복동3가",
    "lat": 35.846162,
    "lng": 127.094157,
    "complaints": 73,
    "enforcement": 10
  },
  {
    "dong": "송천1동",
    "lat": 35.857112,
    "lng": 127.121015,
    "complaints": 0,
    "enforcement": 77
  },
  {
    "dong": "중앙동2가",
    "lat": 35.817132,
    "lng": 127.143792,
    "complaints": 22,
    "enforcement": 35
  },
  {
    "dong": "삼천동2가",
    "lat": 35.785233,
    "lng": 127.100481,
    "complaints": 34,
    "enforcement": 20
  },
  {
    "dong": "풍남동2가",
    "lat": 35.818975,
    "lng": 127.152487,
    "complaints": 35,
    "enforcement": 11
  },
  {
    "dong": "호성동",
    "lat": 35.863683,
    "lng": 127.149614,
    "complaints": 0,
    "enforcement": 44
  },
  {
    "dong": "덕진동",
    "lat": 35.84539,
    "lng": 127.120717,
    "complaints": 0,
    "enforcement": 32
  },
  {
    "dong": "팔복동",
    "lat": 35.85366,
    "lng": 127.106273,
    "complaints": 0,
    "enforcement": 31
  },
  {
    "dong": "고랑동",
    "lat": 35.880625,
    "lng": 127.087398,
    "complaints": 13,
    "enforcement": 17
  },
  {
    "dong": "동완산동",
    "lat": 35.808834,
    "lng": 127.143791,
    "complaints": 17,
    "enforcement": 9
  },
  {
    "dong": "서완산동1가",
    "lat": 35.809214,
    "lng": 127.138556,
    "complaints": 18,
    "enforcement": 1
  },
  {
    "dong": "삼천동",
    "lat": 35.791779,
    "lng": 127.11738,
    "complaints": 0,
    "enforcement": 18
  },
  {
    "dong": "평화동3가",
    "lat": 35.77869,
    "lng": 127.125266,
    "complaints": 5,
    "enforcement": 13
  },
  {
    "dong": "다가동2가",
    "lat": 35.814173,
    "lng": 127.140536,
    "complaints": 14,
    "enforcement": 3
  },
  {
    "dong": "중인동",
    "lat": 35.761821,
    "lng": 127.091621,
    "complaints": 7,
    "enforcement": 9
  },
  {
    "dong": "팔복동4가",
    "lat": 35.864698,
    "lng": 127.101603,
    "complaints": 5,
    "enforcement": 10
  },
  {
    "dong": "용정동",
    "lat": 35.879757,
    "lng": 127.052062,
    "complaints": 1,
    "enforcement": 13
  },
  {
    "dong": "서완산동2가",
    "lat": 35.809717,
    "lng": 127.134233,
    "complaints": 7,
    "enforcement": 3
  },
  {
    "dong": "전미동1가",
    "lat": 35.890884,
    "lng": 127.123982,
    "complaints": 3,
    "enforcement": 5
  },
  {
    "dong": "전미동2가",
    "lat": 35.886758,
    "lng": 127.104128,
    "complaints": 8,
    "enforcement": 0
  },
  {
    "dong": "상림동",
    "lat": 35.818761,
    "lng": 127.072463,
    "complaints": 3,
    "enforcement": 3
  },
  {
    "dong": "효자4동",
    "lat": 35.809846,
    "lng": 127.097997,
    "complaints": 0,
    "enforcement": 6
  },
  {
    "dong": "색장동",
    "lat": 35.79529,
    "lng": 127.196212,
    "complaints": 0,
    "enforcement": 5
  },
  {
    "dong": "원당동",
    "lat": 35.762866,
    "lng": 127.112216,
    "complaints": 4,
    "enforcement": 0
  },
  {
    "dong": "원동",
    "lat": 35.86184,
    "lng": 127.036227,
    "complaints": 2,
    "enforcement": 2
  },
  {
    "dong": "이동",
    "lat": 35.813654,
    "lng": 127.111877,
    "complaints": 0,
    "enforcement": 3
  },
  {
    "dong": "삼천동3가",
    "lat": 35.796269,
    "lng": 127.080379,
    "complaints": 3,
    "enforcement": 0
  },
  {
    "dong": "풍남동",
    "lat": 35.817025,
    "lng": 127.148042,
    "complaints": 0,
    "enforcement": 1
  },
  {
    "dong": "성덕동",
    "lat": 35.877928,
    "lng": 127.036614,
    "complaints": 1,
    "enforcement": 0
  },
  {
    "dong": "강흥동",
    "lat": 35.889394,
    "lng": 127.009402,
    "complaints": 1,
    "enforcement": 0
  }
];

export const DONG_COORDS = {
  "삼천동": [
    35.791779,
    127.11738
  ],
  "효자3동": [
    35.804702,
    127.113509
  ],
  "인후동1가": [
    35.83221,
    127.159715
  ],
  "상림동": [
    35.818761,
    127.072463
  ],
  "효자동2가": [
    35.806828,
    127.099317
  ],
  "평화동1가": [
    35.79558,
    127.139
  ],
  "중앙동4가": [
    35.815268,
    127.144481
  ],
  "효자동": [
    35.80455,
    127.112259
  ],
  "송천동1가": [
    35.858357,
    127.126752
  ],
  "호성동1가": [
    35.863501,
    127.154413
  ],
  "다가동2가": [
    35.814173,
    127.140536
  ],
  "만성동": [
    35.841987,
    127.079964
  ],
  "다가동3가": [
    35.817007,
    127.140208
  ],
  "진북동": [
    35.828369,
    127.136704
  ],
  "서서학동": [
    35.796603,
    127.149477
  ],
  "태평동": [
    35.824186,
    127.138782
  ],
  "고사동": [
    35.82017,
    127.142828
  ],
  "교동": [
    35.813138,
    127.161179
  ],
  "풍남동": [
    35.817025,
    127.148042
  ],
  "중화산동2가": [
    35.817383,
    127.122649
  ],
  "우아동3가": [
    35.84854,
    127.15935
  ],
  "금암동": [
    35.839701,
    127.13577
  ],
  "팔복동3가": [
    35.846162,
    127.094157
  ],
  "전미동1가": [
    35.890884,
    127.123982
  ],
  "인후동2가": [
    35.842233,
    127.148961
  ],
  "여의동": [
    35.860348,
    127.073921
  ],
  "풍남동2가": [
    35.818975,
    127.152487
  ],
  "혁신동": [
    35.837619,
    127.061316
  ],
  "중앙동2가": [
    35.817132,
    127.143792
  ],
  "호성동2가": [
    35.876981,
    127.145658
  ],
  "팔복동": [
    35.85366,
    127.106273
  ],
  "효자동3가": [
    35.824691,
    127.097796
  ],
  "중앙동1가": [
    35.816727,
    127.1423
  ],
  "삼천2동": [
    35.79468,
    127.122778
  ],
  "덕진동": [
    35.84539,
    127.120717
  ],
  "풍남동3가": [
    35.81609,
    127.15257
  ],
  "호성동": [
    35.863683,
    127.149614
  ],
  "이동": [
    35.813654,
    127.111877
  ],
  "팔복동4가": [
    35.864698,
    127.101603
  ],
  "우아동2가": [
    35.832457,
    127.171068
  ],
  "평화동": [
    35.783301,
    127.127346
  ],
  "중앙동3가": [
    35.817536,
    127.145079
  ],
  "다가동4가": [
    35.81993,
    127.138706
  ],
  "서완산동2가": [
    35.809717,
    127.134233
  ],
  "서노송동": [
    35.827253,
    127.145749
  ],
  "효자4동": [
    35.809846,
    127.097997
  ],
  "서신동": [
    35.833873,
    127.115045
  ],
  "전동3가": [
    35.813171,
    127.145097
  ],
  "장동": [
    35.855192,
    127.058267
  ],
  "성덕동": [
    35.877928,
    127.036614
  ],
  "덕진동1가": [
    35.849705,
    127.128771
  ],
  "삼천동3가": [
    35.796269,
    127.080379
  ],
  "여의동2가": [
    35.867449,
    127.085017
  ],
  "팔복동2가": [
    35.854432,
    127.09523
  ],
  "원당동": [
    35.762866,
    127.112216
  ],
  "남노송동": [
    35.81917,
    127.160064
  ],
  "중앙동": [
    35.820158,
    127.141207
  ],
  "전미동2가": [
    35.886758,
    127.104128
  ],
  "완산동": [
    35.809282,
    127.134785
  ],
  "용정동": [
    35.879757,
    127.052062
  ],
  "삼천동1가": [
    35.79758,
    127.122023
  ],
  "다가동1가": [
    35.814834,
    127.141782
  ],
  "동서학동": [
    35.804468,
    127.157994
  ],
  "동완산동": [
    35.808834,
    127.143791
  ],
  "중동": [
    35.83249,
    127.063205
  ],
  "전동": [
    35.813851,
    127.147988
  ],
  "경원동2가": [
    35.818122,
    127.149411
  ],
  "반월동": [
    35.878472,
    127.069548
  ],
  "경원동1가": [
    35.81892,
    127.146982
  ],
  "우아동1가": [
    35.818644,
    127.190823
  ],
  "풍남동1가": [
    35.81863,
    127.151067
  ],
  "중인동": [
    35.761821,
    127.091621
  ],
  "중노송동": [
    35.824955,
    127.156957
  ],
  "색장동": [
    35.79529,
    127.196212
  ],
  "산정동": [
    35.84434,
    127.173628
  ],
  "송천동2가": [
    35.871287,
    127.121131
  ],
  "경원동3가": [
    35.820736,
    127.148675
  ],
  "송천1동": [
    35.857112,
    127.121015
  ],
  "중화산동1가": [
    35.81451,
    127.134157
  ],
  "효자동1가": [
    35.806195,
    127.122862
  ],
  "강흥동": [
    35.889394,
    127.009402
  ],
  "평화동2가": [
    35.785571,
    127.134631
  ],
  "고랑동": [
    35.880625,
    127.087398
  ],
  "덕진동2가": [
    35.84536,
    127.113927
  ],
  "서완산동1가": [
    35.809214,
    127.138556
  ],
  "평화동3가": [
    35.77869,
    127.125266
  ],
  "삼천동2가": [
    35.785233,
    127.100481
  ],
  "원동": [
    35.86184,
    127.036227
  ],
  "중화산2동": [
    35.818679,
    127.120799
  ],
  "송천동": [
    35.867168,
    127.113225
  ],
  "팔복동1가": [
    35.857419,
    127.105638
  ]
};

export const DONG_GU = {
  "중화산동": "완산구",
  "삼천동": "완산구",
  "효자3동": "완산구",
  "인후동1가": "덕진구",
  "상림동": "완산구",
  "효자동2가": "완산구",
  "평화동1가": "완산구",
  "중앙동4가": "완산구",
  "효자동": "완산구",
  "송천동1가": "덕진구",
  "호성동1가": "덕진구",
  "다가동2가": "완산구",
  "만성동": "덕진구",
  "다가동3가": "완산구",
  "진북동": "덕진구",
  "서서학동": "완산구",
  "태평동": "완산구",
  "고사동": "완산구",
  "교동": "완산구",
  "풍남동": "완산구",
  "중화산동2가": "완산구",
  "우아동3가": "덕진구",
  "금암동": "덕진구",
  "팔복동3가": "덕진구",
  "전미동1가": "덕진구",
  "인후동2가": "덕진구",
  "여의동": "덕진구",
  "풍남동2가": "완산구",
  "혁신동": "덕진구",
  "중앙동2가": "완산구",
  "호성동2가": "덕진구",
  "팔복동": "덕진구",
  "효자동3가": "완산구",
  "중앙동1가": "완산구",
  "삼천2동": "완산구",
  "덕진동": "덕진구",
  "풍남동3가": "완산구",
  "호성동": "덕진구",
  "이동": "완산구",
  "팔복동4가": "덕진구",
  "우아동2가": "덕진구",
  "평화동": "완산구",
  "중앙동3가": "완산구",
  "다가동4가": "완산구",
  "서완산동2가": "완산구",
  "서노송동": "완산구",
  "효자4동": "완산구",
  "서신동": "완산구",
  "전동3가": "완산구",
  "장동": "덕진구",
  "성덕동": "덕진구",
  "덕진동1가": "덕진구",
  "삼천동3가": "완산구",
  "여의동2가": "덕진구",
  "팔복동2가": "덕진구",
  "원당동": "완산구",
  "남노송동": "완산구",
  "중앙동": "완산구",
  "전미동2가": "덕진구",
  "완산동": "완산구",
  "용정동": "덕진구",
  "삼천동1가": "완산구",
  "다가동1가": "완산구",
  "동서학동": "완산구",
  "동완산동": "완산구",
  "중동": "덕진구",
  "전동": "완산구",
  "경원동2가": "완산구",
  "반월동": "덕진구",
  "경원동1가": "완산구",
  "평화1동": "완산구",
  "우아동1가": "덕진구",
  "풍남동1가": "완산구",
  "중인동": "완산구",
  "중노송동": "완산구",
  "색장동": "완산구",
  "산정동": "덕진구",
  "송천동2가": "덕진구",
  "경원동3가": "완산구",
  "인후동": "덕진구",
  "송천1동": "덕진구",
  "효자1동": "완산구",
  "호성동3가": "덕진구",
  "중화산동1가": "완산구",
  "효자동1가": "완산구",
  "강흥동": "덕진구",
  "평화동2가": "완산구",
  "고랑동": "덕진구",
  "덕진동2가": "덕진구",
  "서완산동1가": "완산구",
  "평화동3가": "완산구",
  "삼천동2가": "완산구",
  "원동": "덕진구",
  "중화산2동": "완산구",
  "전라감영동": "완산구",
  "송천동": "덕진구",
  "팔복동1가": "덕진구"
};

export const CMP_MONTH_SUBCAT = {
  "01": {
    "인도": 727,
    "기타": 744,
    "소화전": 194,
    "횡단보도": 1099,
    "버스정류소": 49,
    "교차로 모퉁이": 541,
    "어린이보호구역": 41,
    "안전지대": 13
  },
  "02": {
    "횡단보도": 1594,
    "인도": 824,
    "소화전": 146,
    "교차로 모퉁이": 601,
    "어린이보호구역": 39,
    "버스정류소": 79,
    "기타": 19,
    "안전지대": 15
  },
  "03": {
    "인도": 994,
    "교차로 모퉁이": 829,
    "횡단보도": 1399,
    "버스정류소": 89,
    "안전지대": 22,
    "소화전": 169,
    "기타": 31,
    "어린이보호구역": 54
  },
  "04": {
    "교차로 모퉁이": 688,
    "횡단보도": 1186,
    "인도": 705,
    "어린이보호구역": 18,
    "소화전": 115,
    "버스정류소": 66,
    "기타": 27,
    "안전지대": 10
  },
  "05": {
    "교차로 모퉁이": 696,
    "인도": 699,
    "횡단보도": 1396,
    "소화전": 160,
    "기타": 33,
    "안전지대": 6,
    "어린이보호구역": 19,
    "버스정류소": 62
  },
  "06": {
    "횡단보도": 1050,
    "인도": 783,
    "교차로 모퉁이": 646,
    "버스정류소": 47,
    "소화전": 132,
    "기타": 19,
    "안전지대": 12,
    "어린이보호구역": 31
  },
  "07": {
    "인도": 851,
    "버스정류소": 50,
    "횡단보도": 1224,
    "교차로 모퉁이": 597,
    "안전지대": 10,
    "소화전": 108,
    "기타": 12,
    "어린이보호구역": 17
  },
  "08": {
    "횡단보도": 1189,
    "교차로 모퉁이": 747,
    "소화전": 122,
    "인도": 873,
    "버스정류소": 37,
    "기타": 25,
    "어린이보호구역": 13,
    "안전지대": 6
  },
  "09": {
    "횡단보도": 1254,
    "인도": 743,
    "교차로 모퉁이": 724,
    "소화전": 126,
    "버스정류소": 50,
    "기타": 23,
    "어린이보호구역": 18,
    "안전지대": 1
  },
  "10": {
    "횡단보도": 1438,
    "인도": 888,
    "소화전": 125,
    "교차로 모퉁이": 730,
    "기타": 55,
    "버스정류소": 51,
    "어린이보호구역": 23,
    "안전지대": 9
  },
  "11": {
    "인도": 881,
    "횡단보도": 1275,
    "소화전": 131,
    "교차로 모퉁이": 726,
    "버스정류소": 45,
    "기타": 28,
    "어린이보호구역": 30,
    "안전지대": 2
  },
  "12": {
    "횡단보도": 1058,
    "기타": 21,
    "소화전": 130,
    "인도": 860,
    "교차로 모퉁이": 518,
    "버스정류소": 36,
    "안전지대": 6,
    "어린이보호구역": 3
  }
};

export const CMP_MONTH_DONG = {
  "01": {
    "서신동": 423,
    "인후동1가": 201,
    "효자동1가": 66,
    "중동": 72,
    "교동": 12,
    "송천동2가": 337,
    "서서학동": 35,
    "중화산동2가": 214,
    "중노송동": 22,
    "고사동": 36,
    "만성동": 142,
    "효자동2가": 228,
    "평화동1가": 188,
    "진북동": 19,
    "우아동3가": 102,
    "금암동": 72,
    "효자동3가": 227,
    "삼천동1가": 99,
    "송천동1가": 124,
    "덕진동2가": 96,
    "경원동1가": 19,
    "호성동1가": 18,
    "중앙동1가": 1,
    "동완산동": 3,
    "반월동": 60,
    "다가동2가": 1,
    "덕진동1가": 42,
    "태평동": 13,
    "평화동2가": 115,
    "경원동3가": 18,
    "여의동": 9,
    "경원동2가": 17,
    "중화산동1가": 8,
    "인후동2가": 48,
    "서노송동": 62,
    "다가동4가": 5,
    "팔복동2가": 7,
    "풍남동3가": 10,
    "풍남동2가": 9,
    "풍남동1가": 12,
    "남노송동": 13,
    "중앙동3가": 1,
    "다가동1가": 3,
    "장동": 22,
    "팔복동3가": 2,
    "우아동2가": 110,
    "우아동1가": 16,
    "동서학동": 7,
    "중앙동2가": 4,
    "호성동2가": 1,
    "전동": 6,
    "팔복동1가": 4,
    "서완산동1가": 3,
    "다가동3가": 8,
    "여의동2가": 9,
    "산정동": 3
  },
  "02": {
    "금암동": 62,
    "송천동1가": 201,
    "중동": 56,
    "효자동2가": 215,
    "삼천동1가": 76,
    "인후동2가": 61,
    "인후동1가": 160,
    "경원동3가": 15,
    "서서학동": 24,
    "효자동3가": 225,
    "중노송동": 23,
    "송천동2가": 547,
    "고사동": 18,
    "중화산동2가": 174,
    "효자동1가": 44,
    "전동": 11,
    "서신동": 196,
    "평화동2가": 149,
    "서노송동": 36,
    "만성동": 119,
    "장동": 34,
    "평화동1가": 151,
    "반월동": 179,
    "남노송동": 12,
    "덕진동2가": 108,
    "우아동2가": 82,
    "경원동1가": 22,
    "동서학동": 3,
    "중앙동3가": 1,
    "동완산동": 5,
    "우아동1가": 3,
    "우아동3가": 31,
    "다가동1가": 3,
    "호성동1가": 13,
    "태평동": 9,
    "팔복동3가": 3,
    "호성동2가": 3,
    "다가동4가": 7,
    "고랑동": 1,
    "팔복동2가": 6,
    "산정동": 11,
    "중앙동1가": 3,
    "교동": 30,
    "풍남동3가": 11,
    "경원동2가": 17,
    "덕진동1가": 19,
    "진북동": 16,
    "여의동": 27,
    "중앙동4가": 1,
    "풍남동1가": 8,
    "풍남동2가": 3,
    "여의동2가": 37,
    "중화산동1가": 12,
    "삼천동2가": 7,
    "팔복동1가": 16,
    "다가동3가": 4,
    "중인동": 1,
    "서완산동1가": 1,
    "중앙동2가": 1,
    "다가동2가": 2
  },
  "03": {
    "고사동": 20,
    "여의동": 32,
    "삼천동1가": 118,
    "평화동1가": 301,
    "평화동2가": 158,
    "송천동1가": 193,
    "호성동1가": 45,
    "중동": 98,
    "효자동2가": 154,
    "금암동": 96,
    "동서학동": 18,
    "서신동": 243,
    "전동": 22,
    "장동": 74,
    "교동": 13,
    "송천동2가": 568,
    "인후동1가": 100,
    "진북동": 35,
    "반월동": 116,
    "경원동1가": 22,
    "풍남동3가": 9,
    "효자동3가": 258,
    "덕진동2가": 32,
    "우아동2가": 66,
    "효자동1가": 69,
    "풍남동2가": 1,
    "만성동": 91,
    "덕진동1가": 42,
    "중화산동2가": 190,
    "우아동3가": 57,
    "남노송동": 27,
    "인후동2가": 44,
    "서서학동": 26,
    "여의동2가": 32,
    "경원동3가": 25,
    "팔복동1가": 23,
    "삼천동2가": 5,
    "서노송동": 21,
    "경원동2가": 7,
    "태평동": 9,
    "중노송동": 42,
    "우아동1가": 11,
    "팔복동3가": 14,
    "중앙동1가": 8,
    "중화산동1가": 7,
    "다가동4가": 3,
    "풍남동1가": 4,
    "서완산동2가": 2,
    "고랑동": 2,
    "호성동2가": 3,
    "팔복동2가": 10,
    "산정동": 5,
    "다가동2가": 1,
    "다가동1가": 4,
    "용정동": 1,
    "다가동3가": 2,
    "서완산동1가": 4,
    "전미동2가": 2,
    "중앙동3가": 1
  },
  "04": {
    "송천동2가": 228,
    "송천동1가": 150,
    "금암동": 68,
    "태평동": 7,
    "평화동1가": 230,
    "효자동2가": 240,
    "전동": 11,
    "팔복동1가": 20,
    "서신동": 178,
    "인후동1가": 100,
    "효자동3가": 194,
    "경원동2가": 7,
    "고사동": 15,
    "동서학동": 18,
    "만성동": 61,
    "삼천동1가": 118,
    "평화동2가": 172,
    "덕진동2가": 32,
    "중화산동2가": 99,
    "경원동1가": 11,
    "반월동": 87,
    "중노송동": 17,
    "남노송동": 15,
    "덕진동1가": 36,
    "서서학동": 26,
    "호성동1가": 28,
    "우아동3가": 55,
    "여의동": 30,
    "장동": 66,
    "중동": 112,
    "우아동2가": 58,
    "효자동1가": 41,
    "서노송동": 27,
    "팔복동3가": 12,
    "여의동2가": 18,
    "전미동2가": 3,
    "다가동1가": 6,
    "인후동2가": 57,
    "경원동3가": 16,
    "서완산동1가": 3,
    "진북동": 19,
    "산정동": 10,
    "풍남동3가": 14,
    "삼천동2가": 4,
    "팔복동2가": 2,
    "풍남동1가": 3,
    "교동": 18,
    "우아동1가": 18,
    "다가동3가": 15,
    "풍남동2가": 8,
    "중화산동1가": 11,
    "중앙동1가": 2,
    "동완산동": 6,
    "다가동2가": 2,
    "서완산동2가": 1,
    "중앙동3가": 2,
    "고랑동": 2,
    "중앙동2가": 2,
    "호성동2가": 1,
    "원당동": 1
  },
  "05": {
    "효자동3가": 173,
    "효자동2가": 341,
    "송천동1가": 194,
    "평화동2가": 217,
    "덕진동1가": 23,
    "우아동3가": 94,
    "효자동1가": 79,
    "서노송동": 23,
    "송천동2가": 220,
    "중노송동": 18,
    "삼천동1가": 161,
    "진북동": 22,
    "중동": 94,
    "팔복동2가": 8,
    "풍남동3가": 20,
    "남노송동": 12,
    "중화산동2가": 91,
    "우아동2가": 65,
    "인후동2가": 59,
    "장동": 54,
    "서신동": 213,
    "금암동": 90,
    "반월동": 84,
    "서서학동": 27,
    "인후동1가": 123,
    "평화동1가": 151,
    "팔복동1가": 25,
    "여의동": 21,
    "경원동2가": 7,
    "여의동2가": 32,
    "동서학동": 21,
    "만성동": 39,
    "덕진동2가": 52,
    "고사동": 15,
    "다가동2가": 1,
    "경원동3가": 16,
    "우아동1가": 32,
    "팔복동3가": 16,
    "중앙동1가": 2,
    "풍남동1가": 8,
    "다가동3가": 3,
    "중화산동1가": 14,
    "교동": 30,
    "호성동1가": 25,
    "팔복동4가": 1,
    "경원동1가": 18,
    "풍남동2가": 1,
    "전동": 7,
    "태평동": 8,
    "삼천동2가": 3,
    "다가동1가": 4,
    "산정동": 1,
    "고랑동": 1,
    "상림동": 1,
    "서완산동1가": 4,
    "호성동2가": 3,
    "중앙동3가": 1,
    "동완산동": 1,
    "전미동2가": 1
  },
  "06": {
    "서신동": 131,
    "서서학동": 49,
    "덕진동1가": 27,
    "송천동1가": 140,
    "남노송동": 16,
    "송천동2가": 172,
    "풍남동3가": 12,
    "인후동1가": 131,
    "효자동2가": 224,
    "만성동": 59,
    "금암동": 71,
    "효자동3가": 174,
    "경원동1가": 10,
    "경원동2가": 16,
    "호성동1가": 16,
    "교동": 28,
    "평화동2가": 174,
    "중화산동2가": 127,
    "중앙동3가": 6,
    "경원동3가": 21,
    "인후동2가": 44,
    "우아동2가": 52,
    "전동": 11,
    "삼천동1가": 114,
    "장동": 45,
    "평화동1가": 219,
    "고사동": 35,
    "우아동3가": 67,
    "중화산동1가": 15,
    "팔복동2가": 4,
    "중동": 117,
    "덕진동2가": 45,
    "삼천동2가": 2,
    "반월동": 67,
    "팔복동1가": 9,
    "풍남동2가": 4,
    "진북동": 23,
    "서노송동": 31,
    "여의동2가": 16,
    "효자동1가": 87,
    "중노송동": 20,
    "다가동1가": 2,
    "여의동": 25,
    "태평동": 11,
    "풍남동1가": 6,
    "다가동4가": 5,
    "팔복동3가": 6,
    "중앙동1가": 3,
    "중앙동2가": 1,
    "중인동": 1,
    "동완산동": 1,
    "우아동1가": 10,
    "고랑동": 2,
    "동서학동": 6,
    "원당동": 1,
    "강흥동": 1,
    "다가동2가": 1,
    "다가동3가": 2,
    "산정동": 3,
    "평화동3가": 1
  },
  "07": {
    "경원동3가": 39,
    "만성동": 58,
    "송천동2가": 168,
    "효자동2가": 383,
    "태평동": 12,
    "평화동2가": 137,
    "중화산동2가": 146,
    "금암동": 111,
    "삼천동2가": 1,
    "인후동1가": 98,
    "효자동1가": 83,
    "서신동": 181,
    "효자동3가": 215,
    "서노송동": 65,
    "평화동1가": 175,
    "팔복동4가": 2,
    "우아동3가": 55,
    "우아동2가": 49,
    "중동": 77,
    "송천동1가": 131,
    "경원동1가": 21,
    "중노송동": 23,
    "동서학동": 9,
    "중앙동3가": 1,
    "반월동": 52,
    "인후동2가": 44,
    "장동": 44,
    "팔복동1가": 11,
    "덕진동2가": 33,
    "여의동2가": 14,
    "고사동": 44,
    "산정동": 8,
    "삼천동1가": 168,
    "진북동": 19,
    "여의동": 18,
    "팔복동2가": 8,
    "우아동1가": 15,
    "호성동1가": 12,
    "서서학동": 15,
    "전동": 8,
    "경원동2가": 10,
    "호성동2가": 4,
    "풍남동2가": 3,
    "풍남동3가": 14,
    "교동": 20,
    "중앙동1가": 2,
    "원당동": 2,
    "팔복동3가": 2,
    "덕진동1가": 23,
    "다가동2가": 2,
    "다가동4가": 4,
    "다가동1가": 1,
    "중인동": 1,
    "다가동3가": 2,
    "남노송동": 12,
    "풍남동1가": 1,
    "중화산동1가": 5,
    "성덕동": 1,
    "고랑동": 1,
    "서완산동1가": 1
  },
  "08": {
    "송천동2가": 223,
    "중화산동2가": 177,
    "경원동2가": 11,
    "반월동": 19,
    "우아동3가": 58,
    "효자동3가": 314,
    "교동": 20,
    "서신동": 143,
    "여의동": 20,
    "금암동": 134,
    "효자동2가": 231,
    "고사동": 45,
    "전동": 17,
    "송천동1가": 124,
    "덕진동1가": 47,
    "팔복동1가": 8,
    "효자동1가": 70,
    "서노송동": 41,
    "삼천동1가": 171,
    "경원동3가": 12,
    "평화동2가": 181,
    "풍남동1가": 6,
    "평화동1가": 189,
    "인후동1가": 127,
    "다가동3가": 9,
    "호성동2가": 5,
    "남노송동": 17,
    "중화산동1가": 21,
    "우아동2가": 41,
    "장동": 96,
    "산정동": 12,
    "풍남동3가": 21,
    "진북동": 16,
    "덕진동2가": 34,
    "호성동1가": 14,
    "중동": 68,
    "경원동1가": 17,
    "인후동2가": 44,
    "서서학동": 34,
    "고랑동": 3,
    "여의동2가": 12,
    "우아동1가": 12,
    "만성동": 61,
    "중노송동": 20,
    "다가동4가": 3,
    "평화동3가": 1,
    "동서학동": 33,
    "태평동": 5,
    "팔복동2가": 4,
    "중앙동4가": 1,
    "다가동1가": 4,
    "전미동2가": 1,
    "중앙동1가": 5,
    "삼천동3가": 1,
    "삼천동2가": 1,
    "전동3가": 1,
    "팔복동3가": 3,
    "상림동": 1
  },
  "09": {
    "서노송동": 30,
    "금암동": 115,
    "우아동3가": 78,
    "효자동3가": 263,
    "평화동2가": 137,
    "송천동1가": 181,
    "동서학동": 31,
    "효자동2가": 268,
    "인후동1가": 126,
    "삼천동1가": 151,
    "진북동": 5,
    "경원동1가": 16,
    "장동": 46,
    "서신동": 122,
    "고사동": 27,
    "송천동2가": 275,
    "중화산동2가": 200,
    "서완산동2가": 2,
    "반월동": 59,
    "여의동": 23,
    "교동": 36,
    "효자동1가": 58,
    "우아동2가": 38,
    "호성동2가": 2,
    "만성동": 94,
    "인후동2가": 14,
    "덕진동1가": 41,
    "중동": 93,
    "여의동2가": 9,
    "팔복동2가": 7,
    "경원동2가": 7,
    "호성동1가": 25,
    "평화동1가": 196,
    "우아동1가": 6,
    "서서학동": 24,
    "전동": 10,
    "덕진동2가": 22,
    "풍남동3가": 18,
    "팔복동1가": 7,
    "평화동3가": 1,
    "다가동3가": 3,
    "중노송동": 12,
    "산정동": 7,
    "풍남동1가": 3,
    "중인동": 2,
    "다가동2가": 4,
    "경원동3가": 4,
    "다가동4가": 4,
    "중화산동1가": 6,
    "동완산동": 1,
    "태평동": 4,
    "중앙동1가": 1,
    "남노송동": 16,
    "다가동1가": 1,
    "전미동1가": 1,
    "서완산동1가": 1,
    "팔복동3가": 1,
    "중앙동3가": 1,
    "삼천동2가": 1
  },
  "10": {
    "호성동1가": 9,
    "서노송동": 61,
    "송천동2가": 137,
    "삼천동1가": 163,
    "중노송동": 35,
    "평화동2가": 210,
    "교동": 33,
    "평화동1가": 384,
    "반월동": 52,
    "송천동1가": 82,
    "인후동1가": 142,
    "중화산동1가": 7,
    "효자동3가": 353,
    "효자동2가": 304,
    "서신동": 207,
    "중화산동2가": 210,
    "중동": 50,
    "인후동2가": 46,
    "우아동3가": 96,
    "고사동": 54,
    "만성동": 70,
    "금암동": 120,
    "효자동1가": 66,
    "서서학동": 19,
    "우아동2가": 37,
    "삼천동2가": 3,
    "장동": 41,
    "경원동2가": 7,
    "팔복동2가": 12,
    "우아동1가": 5,
    "풍남동3가": 19,
    "동서학동": 20,
    "산정동": 5,
    "전동": 21,
    "경원동1가": 22,
    "남노송동": 17,
    "여의동": 34,
    "덕진동1가": 38,
    "경원동3가": 28,
    "팔복동3가": 5,
    "덕진동2가": 28,
    "중앙동1가": 2,
    "풍남동2가": 2,
    "중앙동2가": 5,
    "풍남동1가": 3,
    "다가동1가": 1,
    "팔복동4가": 2,
    "다가동3가": 3,
    "팔복동1가": 15,
    "중앙동3가": 1,
    "서완산동1가": 1,
    "다가동4가": 3,
    "진북동": 14,
    "여의동2가": 4,
    "서완산동2가": 1,
    "태평동": 3,
    "삼천동3가": 2,
    "전미동1가": 2,
    "호성동2가": 1,
    "원동": 1
  },
  "11": {
    "덕진동1가": 39,
    "효자동2가": 373,
    "송천동1가": 95,
    "서신동": 200,
    "서노송동": 42,
    "효자동1가": 112,
    "반월동": 37,
    "중화산동2가": 200,
    "만성동": 77,
    "금암동": 134,
    "인후동1가": 98,
    "중화산동1가": 9,
    "산정동": 10,
    "중노송동": 23,
    "우아동2가": 47,
    "삼천동1가": 175,
    "풍남동3가": 12,
    "전동": 24,
    "중동": 53,
    "진북동": 13,
    "효자동3가": 315,
    "평화동2가": 155,
    "평화동1가": 319,
    "우아동3가": 90,
    "송천동2가": 118,
    "여의동": 35,
    "남노송동": 10,
    "덕진동2가": 15,
    "우아동1가": 6,
    "고사동": 34,
    "전동3가": 1,
    "인후동2가": 31,
    "호성동1가": 17,
    "교동": 30,
    "장동": 25,
    "경원동1가": 11,
    "서서학동": 9,
    "팔복동1가": 9,
    "팔복동2가": 8,
    "풍남동1가": 9,
    "팔복동3가": 8,
    "풍남동2가": 3,
    "원동": 1,
    "다가동3가": 3,
    "여의동2가": 11,
    "동서학동": 12,
    "경원동3가": 31,
    "태평동": 9,
    "삼천동2가": 5,
    "상림동": 1,
    "중앙동1가": 4,
    "평화동3가": 2,
    "경원동2가": 2,
    "중앙동2가": 1,
    "다가동4가": 2,
    "전미동2가": 1
  },
  "12": {
    "동서학동": 16,
    "서신동": 224,
    "효자동3가": 261,
    "중화산동2가": 134,
    "효자동1가": 113,
    "산정동": 4,
    "전동": 26,
    "우아동3가": 53,
    "장동": 32,
    "우아동2가": 38,
    "인후동2가": 38,
    "팔복동2가": 10,
    "금암동": 124,
    "호성동1가": 11,
    "인후동1가": 57,
    "평화동2가": 114,
    "만성동": 95,
    "삼천동1가": 114,
    "고사동": 33,
    "태평동": 19,
    "송천동1가": 106,
    "평화동1가": 164,
    "효자동2가": 247,
    "중화산동1가": 6,
    "호성동2가": 1,
    "남노송동": 5,
    "덕진동2가": 17,
    "중노송동": 32,
    "중인동": 2,
    "덕진동1가": 37,
    "송천동2가": 124,
    "서노송동": 96,
    "중동": 24,
    "다가동4가": 19,
    "여의동": 16,
    "다가동3가": 4,
    "진북동": 17,
    "경원동3가": 49,
    "우아동1가": 2,
    "경원동2가": 9,
    "서서학동": 16,
    "중앙동1가": 2,
    "반월동": 44,
    "경원동1가": 19,
    "삼천동2가": 2,
    "풍남동3가": 7,
    "여의동2가": 10,
    "팔복동3가": 1,
    "서완산동2가": 1,
    "교동": 11,
    "중앙동2가": 8,
    "고랑동": 1,
    "중앙동4가": 1,
    "팔복동1가": 4,
    "다가동1가": 3,
    "풍남동1가": 6,
    "풍남동2가": 1
  }
};

export const CMP_MONTH_DONG_SUB = {
  "01": {
    "서신동": {
      "인도": 57,
      "소화전": 81,
      "횡단보도": 165,
      "교차로 모퉁이": 104,
      "기타": 14,
      "버스정류소": 2
    },
    "인후동1가": {
      "기타": 73,
      "횡단보도": 44,
      "교차로 모퉁이": 15,
      "소화전": 14,
      "버스정류소": 9,
      "인도": 21,
      "어린이보호구역": 25
    },
    "효자동1가": {
      "인도": 21,
      "횡단보도": 26,
      "교차로 모퉁이": 13,
      "기타": 1,
      "어린이보호구역": 3,
      "버스정류소": 1,
      "소화전": 1
    },
    "중동": {
      "기타": 44,
      "소화전": 2,
      "횡단보도": 23,
      "인도": 3
    },
    "교동": {
      "소화전": 2,
      "인도": 7,
      "횡단보도": 2,
      "기타": 1
    },
    "송천동2가": {
      "기타": 179,
      "소화전": 21,
      "교차로 모퉁이": 23,
      "버스정류소": 6,
      "횡단보도": 97,
      "인도": 11
    },
    "서서학동": {
      "인도": 12,
      "횡단보도": 13,
      "소화전": 4,
      "기타": 2,
      "교차로 모퉁이": 2,
      "버스정류소": 2
    },
    "중화산동2가": {
      "횡단보도": 90,
      "소화전": 19,
      "인도": 50,
      "교차로 모퉁이": 54,
      "버스정류소": 1
    },
    "중노송동": {
      "횡단보도": 5,
      "인도": 17
    },
    "고사동": {
      "인도": 33,
      "횡단보도": 2,
      "교차로 모퉁이": 1
    },
    "만성동": {
      "기타": 64,
      "횡단보도": 10,
      "인도": 68
    },
    "효자동2가": {
      "인도": 66,
      "횡단보도": 124,
      "교차로 모퉁이": 34,
      "버스정류소": 3,
      "소화전": 1
    },
    "평화동1가": {
      "버스정류소": 8,
      "횡단보도": 51,
      "인도": 27,
      "교차로 모퉁이": 101,
      "소화전": 1
    },
    "진북동": {
      "기타": 11,
      "인도": 3,
      "횡단보도": 4,
      "교차로 모퉁이": 1
    },
    "우아동3가": {
      "기타": 45,
      "횡단보도": 12,
      "안전지대": 8,
      "교차로 모퉁이": 15,
      "인도": 20,
      "소화전": 2
    },
    "금암동": {
      "기타": 32,
      "횡단보도": 20,
      "교차로 모퉁이": 10,
      "어린이보호구역": 1,
      "인도": 8,
      "소화전": 1
    },
    "효자동3가": {
      "교차로 모퉁이": 27,
      "횡단보도": 77,
      "소화전": 18,
      "인도": 87,
      "어린이보호구역": 2,
      "버스정류소": 7,
      "기타": 9
    },
    "삼천동1가": {
      "인도": 33,
      "교차로 모퉁이": 24,
      "소화전": 4,
      "버스정류소": 2,
      "어린이보호구역": 1,
      "횡단보도": 35
    },
    "송천동1가": {
      "기타": 40,
      "소화전": 13,
      "교차로 모퉁이": 13,
      "횡단보도": 37,
      "인도": 20,
      "버스정류소": 1
    },
    "덕진동2가": {
      "기타": 62,
      "횡단보도": 23,
      "교차로 모퉁이": 7,
      "인도": 4
    },
    "경원동1가": {
      "인도": 2,
      "횡단보도": 1,
      "교차로 모퉁이": 16
    },
    "호성동1가": {
      "기타": 6,
      "횡단보도": 10,
      "인도": 2
    },
    "중앙동1가": {
      "인도": 1
    },
    "동완산동": {
      "횡단보도": 2,
      "버스정류소": 1
    },
    "반월동": {
      "기타": 37,
      "인도": 3,
      "횡단보도": 17,
      "교차로 모퉁이": 3
    },
    "다가동2가": {
      "인도": 1
    },
    "덕진동1가": {
      "기타": 25,
      "인도": 7,
      "소화전": 5,
      "횡단보도": 3,
      "교차로 모퉁이": 2
    },
    "태평동": {
      "횡단보도": 9,
      "인도": 4
    },
    "평화동2가": {
      "인도": 18,
      "교차로 모퉁이": 20,
      "횡단보도": 59,
      "버스정류소": 4,
      "안전지대": 5,
      "어린이보호구역": 9
    },
    "경원동3가": {
      "횡단보도": 8,
      "인도": 8,
      "교차로 모퉁이": 2
    },
    "여의동": {
      "기타": 6,
      "횡단보도": 2,
      "교차로 모퉁이": 1
    },
    "경원동2가": {
      "교차로 모퉁이": 11,
      "횡단보도": 4,
      "인도": 2
    },
    "중화산동1가": {
      "횡단보도": 2,
      "교차로 모퉁이": 1,
      "인도": 5
    },
    "인후동2가": {
      "기타": 24,
      "인도": 7,
      "교차로 모퉁이": 4,
      "횡단보도": 13
    },
    "서노송동": {
      "인도": 31,
      "교차로 모퉁이": 8,
      "횡단보도": 22,
      "버스정류소": 1
    },
    "다가동4가": {
      "인도": 5
    },
    "팔복동2가": {
      "기타": 2,
      "교차로 모퉁이": 1,
      "소화전": 3,
      "횡단보도": 1
    },
    "풍남동3가": {
      "인도": 7,
      "횡단보도": 2,
      "교차로 모퉁이": 1
    },
    "풍남동2가": {
      "교차로 모퉁이": 2,
      "인도": 6,
      "횡단보도": 1
    },
    "풍남동1가": {
      "교차로 모퉁이": 3,
      "인도": 7,
      "횡단보도": 2
    },
    "남노송동": {
      "인도": 5,
      "교차로 모퉁이": 3,
      "횡단보도": 5
    },
    "중앙동3가": {
      "교차로 모퉁이": 1
    },
    "다가동1가": {
      "인도": 2,
      "횡단보도": 1
    },
    "장동": {
      "기타": 13,
      "횡단보도": 6,
      "인도": 2,
      "교차로 모퉁이": 1
    },
    "팔복동3가": {
      "기타": 2
    },
    "우아동2가": {
      "기타": 38,
      "횡단보도": 53,
      "교차로 모퉁이": 5,
      "인도": 11,
      "소화전": 2,
      "버스정류소": 1
    },
    "우아동1가": {
      "기타": 7,
      "인도": 2,
      "교차로 모퉁이": 2,
      "횡단보도": 5
    },
    "동서학동": {
      "횡단보도": 3,
      "교차로 모퉁이": 2,
      "인도": 1,
      "기타": 1
    },
    "중앙동2가": {
      "인도": 4
    },
    "호성동2가": {
      "기타": 1
    },
    "전동": {
      "인도": 5,
      "교차로 모퉁이": 1
    },
    "팔복동1가": {
      "기타": 3,
      "횡단보도": 1
    },
    "서완산동1가": {
      "인도": 3
    },
    "다가동3가": {
      "인도": 6,
      "교차로 모퉁이": 2
    },
    "여의동2가": {
      "기타": 2,
      "인도": 2,
      "횡단보도": 5
    },
    "산정동": {
      "횡단보도": 1,
      "교차로 모퉁이": 2
    }
  },
  "02": {
    "금암동": {
      "횡단보도": 27,
      "인도": 25,
      "교차로 모퉁이": 10
    },
    "송천동1가": {
      "인도": 34,
      "교차로 모퉁이": 55,
      "횡단보도": 79,
      "소화전": 28,
      "버스정류소": 4,
      "어린이보호구역": 1
    },
    "중동": {
      "횡단보도": 42,
      "인도": 7,
      "소화전": 1,
      "교차로 모퉁이": 5,
      "버스정류소": 1
    },
    "효자동2가": {
      "소화전": 5,
      "인도": 73,
      "횡단보도": 112,
      "교차로 모퉁이": 24,
      "버스정류소": 1
    },
    "삼천동1가": {
      "교차로 모퉁이": 19,
      "인도": 17,
      "횡단보도": 31,
      "소화전": 1,
      "버스정류소": 8
    },
    "인후동2가": {
      "횡단보도": 25,
      "인도": 20,
      "교차로 모퉁이": 14,
      "버스정류소": 2
    },
    "인후동1가": {
      "인도": 38,
      "횡단보도": 77,
      "어린이보호구역": 12,
      "버스정류소": 8,
      "소화전": 8,
      "교차로 모퉁이": 17
    },
    "경원동3가": {
      "횡단보도": 13,
      "인도": 2
    },
    "서서학동": {
      "인도": 13,
      "교차로 모퉁이": 1,
      "횡단보도": 7,
      "기타": 1,
      "소화전": 2
    },
    "효자동3가": {
      "횡단보도": 84,
      "기타": 15,
      "인도": 77,
      "버스정류소": 14,
      "교차로 모퉁이": 34,
      "소화전": 1
    },
    "중노송동": {
      "인도": 13,
      "횡단보도": 8,
      "교차로 모퉁이": 1,
      "소화전": 1
    },
    "송천동2가": {
      "버스정류소": 17,
      "인도": 65,
      "교차로 모퉁이": 83,
      "횡단보도": 314,
      "소화전": 54,
      "어린이보호구역": 14
    },
    "고사동": {
      "인도": 14,
      "교차로 모퉁이": 1,
      "횡단보도": 2,
      "소화전": 1
    },
    "중화산동2가": {
      "인도": 27,
      "소화전": 7,
      "교차로 모퉁이": 42,
      "횡단보도": 98
    },
    "효자동1가": {
      "인도": 12,
      "횡단보도": 18,
      "교차로 모퉁이": 12,
      "어린이보호구역": 2
    },
    "전동": {
      "교차로 모퉁이": 1,
      "인도": 8,
      "버스정류소": 1,
      "횡단보도": 1
    },
    "서신동": {
      "교차로 모퉁이": 19,
      "소화전": 12,
      "횡단보도": 95,
      "인도": 65,
      "기타": 1,
      "어린이보호구역": 1,
      "버스정류소": 3
    },
    "평화동2가": {
      "횡단보도": 78,
      "인도": 37,
      "교차로 모퉁이": 23,
      "버스정류소": 1,
      "기타": 1,
      "어린이보호구역": 9
    },
    "서노송동": {
      "인도": 23,
      "횡단보도": 11,
      "교차로 모퉁이": 2
    },
    "만성동": {
      "인도": 95,
      "횡단보도": 17,
      "교차로 모퉁이": 2,
      "소화전": 5
    },
    "장동": {
      "횡단보도": 28,
      "교차로 모퉁이": 3,
      "인도": 3
    },
    "평화동1가": {
      "횡단보도": 32,
      "인도": 7,
      "교차로 모퉁이": 102,
      "버스정류소": 10
    },
    "반월동": {
      "횡단보도": 119,
      "교차로 모퉁이": 19,
      "인도": 19,
      "소화전": 7,
      "안전지대": 15
    },
    "남노송동": {
      "인도": 7,
      "교차로 모퉁이": 2,
      "횡단보도": 3
    },
    "덕진동2가": {
      "횡단보도": 78,
      "교차로 모퉁이": 26,
      "인도": 4
    },
    "우아동2가": {
      "횡단보도": 64,
      "교차로 모퉁이": 9,
      "버스정류소": 5,
      "인도": 3,
      "소화전": 1
    },
    "경원동1가": {
      "교차로 모퉁이": 20,
      "인도": 2
    },
    "동서학동": {
      "횡단보도": 2,
      "기타": 1
    },
    "중앙동3가": {
      "인도": 1
    },
    "동완산동": {
      "횡단보도": 4,
      "인도": 1
    },
    "우아동1가": {
      "횡단보도": 3
    },
    "우아동3가": {
      "인도": 10,
      "교차로 모퉁이": 11,
      "횡단보도": 10
    },
    "다가동1가": {
      "교차로 모퉁이": 1,
      "인도": 1,
      "횡단보도": 1
    },
    "호성동1가": {
      "횡단보도": 6,
      "버스정류소": 3,
      "인도": 4
    },
    "태평동": {
      "인도": 5,
      "횡단보도": 4
    },
    "팔복동3가": {
      "횡단보도": 3
    },
    "호성동2가": {
      "횡단보도": 3
    },
    "다가동4가": {
      "인도": 5,
      "횡단보도": 1,
      "소화전": 1
    },
    "고랑동": {
      "교차로 모퉁이": 1
    },
    "팔복동2가": {
      "횡단보도": 2,
      "인도": 3,
      "교차로 모퉁이": 1
    },
    "산정동": {
      "횡단보도": 9,
      "인도": 1,
      "교차로 모퉁이": 1
    },
    "중앙동1가": {
      "인도": 3
    },
    "교동": {
      "인도": 28,
      "횡단보도": 1,
      "교차로 모퉁이": 1
    },
    "풍남동3가": {
      "인도": 6,
      "소화전": 2,
      "횡단보도": 1,
      "교차로 모퉁이": 2
    },
    "경원동2가": {
      "인도": 4,
      "횡단보도": 3,
      "교차로 모퉁이": 10
    },
    "덕진동1가": {
      "횡단보도": 7,
      "인도": 5,
      "소화전": 5,
      "교차로 모퉁이": 2
    },
    "진북동": {
      "버스정류소": 1,
      "인도": 5,
      "횡단보도": 7,
      "소화전": 1,
      "교차로 모퉁이": 2
    },
    "여의동": {
      "횡단보도": 22,
      "교차로 모퉁이": 5
    },
    "중앙동4가": {
      "횡단보도": 1
    },
    "풍남동1가": {
      "인도": 4,
      "소화전": 1,
      "교차로 모퉁이": 3
    },
    "풍남동2가": {
      "인도": 2,
      "교차로 모퉁이": 1
    },
    "여의동2가": {
      "횡단보도": 33,
      "인도": 4
    },
    "중화산동1가": {
      "교차로 모퉁이": 2,
      "인도": 8,
      "소화전": 2
    },
    "삼천동2가": {
      "교차로 모퉁이": 5,
      "횡단보도": 2
    },
    "팔복동1가": {
      "횡단보도": 5,
      "인도": 6,
      "교차로 모퉁이": 5
    },
    "다가동3가": {
      "인도": 4
    },
    "중인동": {
      "교차로 모퉁이": 1
    },
    "서완산동1가": {
      "인도": 1
    },
    "중앙동2가": {
      "인도": 1
    },
    "다가동2가": {
      "인도": 2
    }
  },
  "03": {
    "고사동": {
      "인도": 17,
      "횡단보도": 2,
      "교차로 모퉁이": 1
    },
    "여의동": {
      "교차로 모퉁이": 3,
      "인도": 13,
      "횡단보도": 12,
      "버스정류소": 4
    },
    "삼천동1가": {
      "횡단보도": 45,
      "교차로 모퉁이": 34,
      "인도": 33,
      "소화전": 4,
      "버스정류소": 2
    },
    "평화동1가": {
      "교차로 모퉁이": 197,
      "횡단보도": 74,
      "버스정류소": 6,
      "인도": 24
    },
    "평화동2가": {
      "횡단보도": 91,
      "인도": 32,
      "교차로 모퉁이": 28,
      "어린이보호구역": 5,
      "버스정류소": 1,
      "기타": 1
    },
    "송천동1가": {
      "교차로 모퉁이": 59,
      "횡단보도": 77,
      "인도": 17,
      "소화전": 36,
      "버스정류소": 4
    },
    "호성동1가": {
      "횡단보도": 23,
      "인도": 7,
      "버스정류소": 4,
      "교차로 모퉁이": 10,
      "소화전": 1
    },
    "중동": {
      "횡단보도": 64,
      "인도": 10,
      "교차로 모퉁이": 15,
      "소화전": 9
    },
    "효자동2가": {
      "횡단보도": 53,
      "인도": 68,
      "교차로 모퉁이": 20,
      "소화전": 9,
      "어린이보호구역": 1,
      "버스정류소": 3
    },
    "금암동": {
      "인도": 37,
      "횡단보도": 31,
      "교차로 모퉁이": 18,
      "버스정류소": 5,
      "안전지대": 4,
      "어린이보호구역": 1
    },
    "동서학동": {
      "횡단보도": 3,
      "인도": 13,
      "교차로 모퉁이": 2
    },
    "서신동": {
      "교차로 모퉁이": 50,
      "인도": 93,
      "횡단보도": 71,
      "버스정류소": 3,
      "소화전": 12,
      "기타": 11,
      "어린이보호구역": 3
    },
    "전동": {
      "인도": 18,
      "버스정류소": 4
    },
    "장동": {
      "인도": 16,
      "교차로 모퉁이": 9,
      "횡단보도": 44,
      "소화전": 4,
      "버스정류소": 1
    },
    "교동": {
      "횡단보도": 2,
      "인도": 8,
      "기타": 2,
      "교차로 모퉁이": 1
    },
    "송천동2가": {
      "횡단보도": 272,
      "소화전": 52,
      "인도": 76,
      "버스정류소": 12,
      "교차로 모퉁이": 143,
      "어린이보호구역": 10,
      "안전지대": 3
    },
    "인후동1가": {
      "인도": 35,
      "횡단보도": 37,
      "교차로 모퉁이": 11,
      "소화전": 9,
      "버스정류소": 4,
      "어린이보호구역": 4
    },
    "진북동": {
      "인도": 3,
      "횡단보도": 8,
      "교차로 모퉁이": 13,
      "안전지대": 10,
      "버스정류소": 1
    },
    "반월동": {
      "안전지대": 5,
      "횡단보도": 63,
      "인도": 28,
      "소화전": 10,
      "교차로 모퉁이": 9,
      "어린이보호구역": 1
    },
    "경원동1가": {
      "인도": 4,
      "교차로 모퉁이": 18
    },
    "풍남동3가": {
      "인도": 6,
      "교차로 모퉁이": 1,
      "소화전": 1,
      "버스정류소": 1
    },
    "효자동3가": {
      "횡단보도": 79,
      "인도": 122,
      "버스정류소": 13,
      "기타": 10,
      "교차로 모퉁이": 33,
      "소화전": 1
    },
    "덕진동2가": {
      "횡단보도": 14,
      "교차로 모퉁이": 12,
      "인도": 6
    },
    "우아동2가": {
      "횡단보도": 47,
      "교차로 모퉁이": 10,
      "인도": 7,
      "버스정류소": 2
    },
    "효자동1가": {
      "횡단보도": 19,
      "인도": 18,
      "교차로 모퉁이": 26,
      "어린이보호구역": 1,
      "기타": 4,
      "버스정류소": 1
    },
    "풍남동2가": {
      "교차로 모퉁이": 1
    },
    "만성동": {
      "횡단보도": 24,
      "인도": 61,
      "교차로 모퉁이": 5,
      "소화전": 1
    },
    "덕진동1가": {
      "인도": 11,
      "횡단보도": 25,
      "교차로 모퉁이": 3,
      "소화전": 2,
      "버스정류소": 1
    },
    "중화산동2가": {
      "횡단보도": 89,
      "소화전": 9,
      "교차로 모퉁이": 32,
      "버스정류소": 5,
      "인도": 31,
      "어린이보호구역": 24
    },
    "우아동3가": {
      "교차로 모퉁이": 10,
      "횡단보도": 19,
      "인도": 26,
      "버스정류소": 2
    },
    "남노송동": {
      "인도": 20,
      "교차로 모퉁이": 2,
      "횡단보도": 4,
      "소화전": 1
    },
    "인후동2가": {
      "교차로 모퉁이": 20,
      "인도": 10,
      "횡단보도": 14
    },
    "서서학동": {
      "기타": 2,
      "횡단보도": 6,
      "인도": 10,
      "소화전": 4,
      "교차로 모퉁이": 3,
      "버스정류소": 1
    },
    "여의동2가": {
      "인도": 12,
      "횡단보도": 20
    },
    "경원동3가": {
      "인도": 18,
      "횡단보도": 7
    },
    "팔복동1가": {
      "교차로 모퉁이": 8,
      "인도": 9,
      "횡단보도": 6
    },
    "삼천동2가": {
      "버스정류소": 3,
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "서노송동": {
      "횡단보도": 9,
      "인도": 11,
      "교차로 모퉁이": 1
    },
    "경원동2가": {
      "교차로 모퉁이": 4,
      "횡단보도": 2,
      "인도": 1
    },
    "태평동": {
      "기타": 1,
      "어린이보호구역": 2,
      "횡단보도": 3,
      "인도": 1,
      "교차로 모퉁이": 2
    },
    "중노송동": {
      "인도": 36,
      "횡단보도": 6
    },
    "우아동1가": {
      "횡단보도": 10,
      "교차로 모퉁이": 1
    },
    "팔복동3가": {
      "횡단보도": 9,
      "인도": 5
    },
    "중앙동1가": {
      "교차로 모퉁이": 6,
      "인도": 2
    },
    "중화산동1가": {
      "교차로 모퉁이": 4,
      "어린이보호구역": 2,
      "인도": 1
    },
    "다가동4가": {
      "인도": 1,
      "교차로 모퉁이": 2
    },
    "풍남동1가": {
      "인도": 4
    },
    "서완산동2가": {
      "인도": 2
    },
    "고랑동": {
      "횡단보도": 2
    },
    "호성동2가": {
      "횡단보도": 1,
      "소화전": 1,
      "버스정류소": 1
    },
    "팔복동2가": {
      "횡단보도": 7,
      "버스정류소": 2,
      "소화전": 1
    },
    "산정동": {
      "버스정류소": 2,
      "인도": 1,
      "소화전": 1,
      "횡단보도": 1
    },
    "다가동2가": {
      "인도": 1
    },
    "다가동1가": {
      "인도": 4
    },
    "용정동": {
      "버스정류소": 1
    },
    "다가동3가": {
      "교차로 모퉁이": 1,
      "인도": 1
    },
    "서완산동1가": {
      "인도": 3,
      "소화전": 1
    },
    "전미동2가": {
      "횡단보도": 2
    },
    "중앙동3가": {
      "인도": 1
    }
  },
  "04": {
    "송천동2가": {
      "교차로 모퉁이": 44,
      "횡단보도": 126,
      "소화전": 25,
      "인도": 27,
      "버스정류소": 6
    },
    "송천동1가": {
      "횡단보도": 70,
      "교차로 모퉁이": 28,
      "소화전": 26,
      "인도": 20,
      "버스정류소": 4,
      "어린이보호구역": 2
    },
    "금암동": {
      "교차로 모퉁이": 11,
      "횡단보도": 28,
      "인도": 27,
      "어린이보호구역": 2
    },
    "태평동": {
      "횡단보도": 4,
      "기타": 2,
      "인도": 1
    },
    "평화동1가": {
      "인도": 20,
      "교차로 모퉁이": 152,
      "횡단보도": 48,
      "버스정류소": 10
    },
    "효자동2가": {
      "교차로 모퉁이": 49,
      "인도": 98,
      "횡단보도": 92,
      "버스정류소": 1
    },
    "전동": {
      "인도": 5,
      "횡단보도": 2,
      "교차로 모퉁이": 1,
      "소화전": 1,
      "버스정류소": 2
    },
    "팔복동1가": {
      "인도": 5,
      "소화전": 1,
      "교차로 모퉁이": 6,
      "횡단보도": 8
    },
    "서신동": {
      "어린이보호구역": 3,
      "교차로 모퉁이": 55,
      "인도": 12,
      "횡단보도": 77,
      "기타": 15,
      "소화전": 15,
      "버스정류소": 1
    },
    "인후동1가": {
      "인도": 24,
      "횡단보도": 48,
      "버스정류소": 8,
      "교차로 모퉁이": 16,
      "소화전": 3,
      "어린이보호구역": 1
    },
    "효자동3가": {
      "횡단보도": 54,
      "교차로 모퉁이": 38,
      "인도": 90,
      "기타": 4,
      "소화전": 3,
      "버스정류소": 5
    },
    "경원동2가": {
      "교차로 모퉁이": 6,
      "횡단보도": 1
    },
    "고사동": {
      "인도": 14,
      "횡단보도": 1
    },
    "동서학동": {
      "교차로 모퉁이": 2,
      "인도": 13,
      "횡단보도": 3
    },
    "만성동": {
      "소화전": 1,
      "인도": 36,
      "횡단보도": 20,
      "버스정류소": 1,
      "교차로 모퉁이": 3
    },
    "삼천동1가": {
      "교차로 모퉁이": 32,
      "횡단보도": 46,
      "인도": 29,
      "기타": 1,
      "소화전": 5,
      "버스정류소": 5
    },
    "평화동2가": {
      "인도": 17,
      "교차로 모퉁이": 77,
      "횡단보도": 70,
      "버스정류소": 4,
      "어린이보호구역": 4
    },
    "덕진동2가": {
      "횡단보도": 15,
      "인도": 7,
      "교차로 모퉁이": 8,
      "버스정류소": 2
    },
    "중화산동2가": {
      "횡단보도": 51,
      "인도": 17,
      "교차로 모퉁이": 21,
      "소화전": 6,
      "어린이보호구역": 2,
      "버스정류소": 2
    },
    "경원동1가": {
      "교차로 모퉁이": 10,
      "인도": 1
    },
    "반월동": {
      "횡단보도": 54,
      "소화전": 6,
      "인도": 18,
      "교차로 모퉁이": 6,
      "안전지대": 2,
      "어린이보호구역": 1
    },
    "중노송동": {
      "인도": 15,
      "어린이보호구역": 1,
      "횡단보도": 1
    },
    "남노송동": {
      "인도": 10,
      "교차로 모퉁이": 1,
      "횡단보도": 4
    },
    "덕진동1가": {
      "인도": 7,
      "교차로 모퉁이": 7,
      "횡단보도": 20,
      "소화전": 2
    },
    "서서학동": {
      "횡단보도": 7,
      "인도": 13,
      "교차로 모퉁이": 4,
      "소화전": 1,
      "버스정류소": 1
    },
    "호성동1가": {
      "인도": 10,
      "횡단보도": 17,
      "어린이보호구역": 1
    },
    "우아동3가": {
      "교차로 모퉁이": 14,
      "횡단보도": 14,
      "인도": 16,
      "버스정류소": 4,
      "안전지대": 7
    },
    "여의동": {
      "횡단보도": 19,
      "인도": 4,
      "교차로 모퉁이": 3,
      "버스정류소": 3,
      "어린이보호구역": 1
    },
    "장동": {
      "횡단보도": 56,
      "교차로 모퉁이": 3,
      "소화전": 2,
      "버스정류소": 1,
      "인도": 4
    },
    "중동": {
      "횡단보도": 77,
      "교차로 모퉁이": 17,
      "인도": 6,
      "소화전": 11,
      "버스정류소": 1
    },
    "우아동2가": {
      "횡단보도": 42,
      "버스정류소": 1,
      "교차로 모퉁이": 8,
      "인도": 7
    },
    "효자동1가": {
      "인도": 9,
      "횡단보도": 17,
      "교차로 모퉁이": 15
    },
    "서노송동": {
      "인도": 17,
      "횡단보도": 6,
      "교차로 모퉁이": 3,
      "소화전": 1
    },
    "팔복동3가": {
      "인도": 6,
      "횡단보도": 6
    },
    "여의동2가": {
      "횡단보도": 15,
      "인도": 3
    },
    "전미동2가": {
      "인도": 2,
      "버스정류소": 1
    },
    "다가동1가": {
      "인도": 5,
      "교차로 모퉁이": 1
    },
    "인후동2가": {
      "교차로 모퉁이": 26,
      "횡단보도": 20,
      "인도": 10,
      "버스정류소": 1
    },
    "경원동3가": {
      "인도": 11,
      "횡단보도": 5
    },
    "서완산동1가": {
      "횡단보도": 1,
      "인도": 1,
      "교차로 모퉁이": 1
    },
    "진북동": {
      "교차로 모퉁이": 9,
      "횡단보도": 7,
      "인도": 3
    },
    "산정동": {
      "횡단보도": 7,
      "소화전": 1,
      "교차로 모퉁이": 1,
      "인도": 1
    },
    "풍남동3가": {
      "인도": 7,
      "소화전": 4,
      "교차로 모퉁이": 2,
      "횡단보도": 1
    },
    "삼천동2가": {
      "교차로 모퉁이": 2,
      "횡단보도": 1,
      "인도": 1
    },
    "팔복동2가": {
      "횡단보도": 1,
      "인도": 1
    },
    "풍남동1가": {
      "인도": 2,
      "횡단보도": 1
    },
    "교동": {
      "인도": 7,
      "기타": 5,
      "횡단보도": 3,
      "교차로 모퉁이": 2,
      "버스정류소": 1
    },
    "우아동1가": {
      "인도": 6,
      "횡단보도": 11,
      "교차로 모퉁이": 1
    },
    "다가동3가": {
      "인도": 13,
      "교차로 모퉁이": 2
    },
    "풍남동2가": {
      "인도": 8
    },
    "중화산동1가": {
      "인도": 11
    },
    "중앙동1가": {
      "인도": 1,
      "횡단보도": 1
    },
    "동완산동": {
      "횡단보도": 5,
      "교차로 모퉁이": 1
    },
    "다가동2가": {
      "횡단보도": 1,
      "인도": 1
    },
    "서완산동2가": {
      "인도": 1
    },
    "중앙동3가": {
      "인도": 2
    },
    "고랑동": {
      "인도": 1,
      "버스정류소": 1
    },
    "중앙동2가": {
      "인도": 2
    },
    "호성동2가": {
      "횡단보도": 1
    },
    "원당동": {
      "안전지대": 1
    }
  },
  "05": {
    "효자동3가": {
      "교차로 모퉁이": 45,
      "횡단보도": 61,
      "인도": 47,
      "버스정류소": 3,
      "기타": 8,
      "소화전": 7,
      "어린이보호구역": 2
    },
    "효자동2가": {
      "교차로 모퉁이": 58,
      "인도": 135,
      "횡단보도": 145,
      "버스정류소": 1,
      "소화전": 2
    },
    "송천동1가": {
      "교차로 모퉁이": 55,
      "횡단보도": 82,
      "소화전": 27,
      "인도": 24,
      "버스정류소": 6
    },
    "평화동2가": {
      "교차로 모퉁이": 61,
      "횡단보도": 98,
      "안전지대": 6,
      "어린이보호구역": 7,
      "인도": 19,
      "버스정류소": 7,
      "기타": 2,
      "소화전": 17
    },
    "덕진동1가": {
      "교차로 모퉁이": 5,
      "횡단보도": 14,
      "인도": 4
    },
    "우아동3가": {
      "횡단보도": 20,
      "인도": 49,
      "교차로 모퉁이": 22,
      "소화전": 1,
      "버스정류소": 1,
      "어린이보호구역": 1
    },
    "효자동1가": {
      "횡단보도": 38,
      "교차로 모퉁이": 17,
      "소화전": 4,
      "인도": 17,
      "버스정류소": 1,
      "어린이보호구역": 1,
      "기타": 1
    },
    "서노송동": {
      "인도": 15,
      "횡단보도": 6,
      "교차로 모퉁이": 2
    },
    "송천동2가": {
      "횡단보도": 121,
      "인도": 34,
      "교차로 모퉁이": 30,
      "소화전": 28,
      "버스정류소": 7
    },
    "중노송동": {
      "횡단보도": 11,
      "인도": 5,
      "교차로 모퉁이": 2
    },
    "삼천동1가": {
      "교차로 모퉁이": 46,
      "횡단보도": 95,
      "인도": 17,
      "소화전": 2,
      "버스정류소": 1
    },
    "진북동": {
      "교차로 모퉁이": 6,
      "횡단보도": 9,
      "인도": 6,
      "버스정류소": 1
    },
    "중동": {
      "횡단보도": 66,
      "교차로 모퉁이": 11,
      "소화전": 7,
      "인도": 9,
      "버스정류소": 1
    },
    "팔복동2가": {
      "횡단보도": 4,
      "인도": 3,
      "소화전": 1
    },
    "풍남동3가": {
      "인도": 11,
      "소화전": 8,
      "교차로 모퉁이": 1
    },
    "남노송동": {
      "교차로 모퉁이": 2,
      "인도": 6,
      "횡단보도": 3,
      "소화전": 1
    },
    "중화산동2가": {
      "교차로 모퉁이": 23,
      "소화전": 12,
      "횡단보도": 48,
      "인도": 7,
      "어린이보호구역": 1
    },
    "우아동2가": {
      "교차로 모퉁이": 8,
      "횡단보도": 54,
      "인도": 2,
      "버스정류소": 1
    },
    "인후동2가": {
      "교차로 모퉁이": 35,
      "횡단보도": 13,
      "인도": 11
    },
    "장동": {
      "교차로 모퉁이": 1,
      "횡단보도": 49,
      "소화전": 1,
      "인도": 3
    },
    "서신동": {
      "교차로 모퉁이": 54,
      "기타": 16,
      "소화전": 10,
      "횡단보도": 108,
      "인도": 20,
      "버스정류소": 4,
      "어린이보호구역": 1
    },
    "금암동": {
      "인도": 45,
      "횡단보도": 28,
      "버스정류소": 2,
      "교차로 모퉁이": 11,
      "어린이보호구역": 3,
      "소화전": 1
    },
    "반월동": {
      "소화전": 8,
      "횡단보도": 58,
      "교차로 모퉁이": 7,
      "인도": 11
    },
    "서서학동": {
      "인도": 19,
      "교차로 모퉁이": 4,
      "횡단보도": 3,
      "소화전": 1
    },
    "인후동1가": {
      "횡단보도": 61,
      "버스정류소": 7,
      "인도": 25,
      "소화전": 7,
      "어린이보호구역": 3,
      "교차로 모퉁이": 20
    },
    "평화동1가": {
      "교차로 모퉁이": 100,
      "횡단보도": 27,
      "소화전": 3,
      "버스정류소": 6,
      "인도": 15
    },
    "팔복동1가": {
      "인도": 9,
      "횡단보도": 10,
      "교차로 모퉁이": 6
    },
    "여의동": {
      "인도": 3,
      "버스정류소": 4,
      "교차로 모퉁이": 7,
      "횡단보도": 7
    },
    "경원동2가": {
      "인도": 3,
      "횡단보도": 1,
      "교차로 모퉁이": 3
    },
    "여의동2가": {
      "횡단보도": 22,
      "인도": 5,
      "버스정류소": 3,
      "교차로 모퉁이": 1,
      "소화전": 1
    },
    "동서학동": {
      "인도": 12,
      "횡단보도": 6,
      "교차로 모퉁이": 2,
      "기타": 1
    },
    "만성동": {
      "횡단보도": 13,
      "인도": 23,
      "교차로 모퉁이": 2,
      "소화전": 1
    },
    "덕진동2가": {
      "교차로 모퉁이": 20,
      "횡단보도": 19,
      "인도": 10,
      "소화전": 3
    },
    "고사동": {
      "인도": 9,
      "횡단보도": 2,
      "교차로 모퉁이": 2,
      "소화전": 2
    },
    "다가동2가": {
      "인도": 1
    },
    "경원동3가": {
      "횡단보도": 11,
      "교차로 모퉁이": 1,
      "인도": 4
    },
    "우아동1가": {
      "교차로 모퉁이": 1,
      "횡단보도": 28,
      "인도": 3
    },
    "팔복동3가": {
      "인도": 4,
      "횡단보도": 8,
      "교차로 모퉁이": 4
    },
    "중앙동1가": {
      "인도": 1,
      "교차로 모퉁이": 1
    },
    "풍남동1가": {
      "횡단보도": 2,
      "교차로 모퉁이": 1,
      "인도": 5
    },
    "다가동3가": {
      "인도": 3
    },
    "중화산동1가": {
      "인도": 5,
      "교차로 모퉁이": 5,
      "소화전": 2,
      "횡단보도": 2
    },
    "교동": {
      "인도": 17,
      "기타": 5,
      "횡단보도": 7,
      "교차로 모퉁이": 1
    },
    "호성동1가": {
      "횡단보도": 17,
      "인도": 4,
      "버스정류소": 3,
      "교차로 모퉁이": 1
    },
    "팔복동4가": {
      "버스정류소": 1
    },
    "경원동1가": {
      "교차로 모퉁이": 12,
      "횡단보도": 3,
      "인도": 3
    },
    "풍남동2가": {
      "인도": 1
    },
    "전동": {
      "인도": 4,
      "소화전": 1,
      "횡단보도": 2
    },
    "태평동": {
      "횡단보도": 8
    },
    "삼천동2가": {
      "횡단보도": 1,
      "인도": 2
    },
    "다가동1가": {
      "횡단보도": 1,
      "인도": 3
    },
    "산정동": {
      "인도": 1
    },
    "고랑동": {
      "인도": 1
    },
    "상림동": {
      "인도": 1
    },
    "서완산동1가": {
      "소화전": 2,
      "인도": 2
    },
    "호성동2가": {
      "횡단보도": 3
    },
    "중앙동3가": {
      "인도": 1
    },
    "동완산동": {
      "버스정류소": 1
    },
    "전미동2가": {
      "버스정류소": 1
    }
  },
  "06": {
    "서신동": {
      "횡단보도": 73,
      "교차로 모퉁이": 33,
      "소화전": 2,
      "기타": 5,
      "버스정류소": 5,
      "인도": 12,
      "어린이보호구역": 1
    },
    "서서학동": {
      "인도": 32,
      "횡단보도": 8,
      "기타": 1,
      "교차로 모퉁이": 5,
      "버스정류소": 3
    },
    "덕진동1가": {
      "인도": 8,
      "횡단보도": 13,
      "교차로 모퉁이": 4,
      "소화전": 2
    },
    "송천동1가": {
      "교차로 모퉁이": 44,
      "소화전": 24,
      "횡단보도": 63,
      "인도": 6,
      "버스정류소": 3
    },
    "남노송동": {
      "인도": 9,
      "횡단보도": 4,
      "교차로 모퉁이": 3
    },
    "송천동2가": {
      "버스정류소": 3,
      "횡단보도": 76,
      "인도": 20,
      "교차로 모퉁이": 43,
      "소화전": 28,
      "어린이보호구역": 2
    },
    "풍남동3가": {
      "인도": 5,
      "교차로 모퉁이": 2,
      "소화전": 5
    },
    "인후동1가": {
      "교차로 모퉁이": 16,
      "횡단보도": 85,
      "버스정류소": 6,
      "인도": 18,
      "소화전": 4,
      "어린이보호구역": 2
    },
    "효자동2가": {
      "인도": 111,
      "교차로 모퉁이": 27,
      "버스정류소": 2,
      "소화전": 6,
      "횡단보도": 78
    },
    "만성동": {
      "인도": 37,
      "횡단보도": 14,
      "교차로 모퉁이": 7,
      "소화전": 1
    },
    "금암동": {
      "소화전": 1,
      "교차로 모퉁이": 11,
      "인도": 38,
      "횡단보도": 19,
      "어린이보호구역": 2
    },
    "효자동3가": {
      "기타": 8,
      "교차로 모퉁이": 39,
      "횡단보도": 56,
      "인도": 64,
      "소화전": 6,
      "버스정류소": 1
    },
    "경원동1가": {
      "인도": 5,
      "교차로 모퉁이": 4,
      "횡단보도": 1
    },
    "경원동2가": {
      "인도": 4,
      "교차로 모퉁이": 9,
      "횡단보도": 3
    },
    "호성동1가": {
      "횡단보도": 12,
      "인도": 2,
      "교차로 모퉁이": 1,
      "소화전": 1
    },
    "교동": {
      "기타": 4,
      "인도": 18,
      "횡단보도": 2,
      "교차로 모퉁이": 4
    },
    "평화동2가": {
      "소화전": 7,
      "인도": 25,
      "횡단보도": 98,
      "교차로 모퉁이": 30,
      "어린이보호구역": 11,
      "안전지대": 3
    },
    "중화산동2가": {
      "소화전": 13,
      "횡단보도": 38,
      "인도": 47,
      "교차로 모퉁이": 28,
      "버스정류소": 1
    },
    "중앙동3가": {
      "교차로 모퉁이": 2,
      "인도": 4
    },
    "경원동3가": {
      "횡단보도": 15,
      "교차로 모퉁이": 2,
      "인도": 4
    },
    "인후동2가": {
      "인도": 19,
      "교차로 모퉁이": 14,
      "횡단보도": 11
    },
    "우아동2가": {
      "횡단보도": 37,
      "교차로 모퉁이": 4,
      "버스정류소": 1,
      "인도": 10
    },
    "전동": {
      "버스정류소": 1,
      "인도": 8,
      "소화전": 1,
      "횡단보도": 1
    },
    "삼천동1가": {
      "횡단보도": 17,
      "교차로 모퉁이": 52,
      "소화전": 7,
      "인도": 31,
      "버스정류소": 6,
      "기타": 1
    },
    "장동": {
      "횡단보도": 34,
      "교차로 모퉁이": 4,
      "인도": 7
    },
    "평화동1가": {
      "교차로 모퉁이": 152,
      "횡단보도": 49,
      "버스정류소": 7,
      "인도": 8,
      "소화전": 3
    },
    "고사동": {
      "인도": 30,
      "소화전": 3,
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "우아동3가": {
      "교차로 모퉁이": 15,
      "인도": 31,
      "버스정류소": 2,
      "횡단보도": 14,
      "안전지대": 4,
      "소화전": 1
    },
    "중화산동1가": {
      "교차로 모퉁이": 5,
      "인도": 9,
      "횡단보도": 1
    },
    "팔복동2가": {
      "인도": 2,
      "횡단보도": 2
    },
    "중동": {
      "횡단보도": 89,
      "인도": 5,
      "교차로 모퉁이": 15,
      "버스정류소": 1,
      "소화전": 7
    },
    "덕진동2가": {
      "교차로 모퉁이": 23,
      "인도": 9,
      "횡단보도": 11,
      "소화전": 2
    },
    "삼천동2가": {
      "교차로 모퉁이": 1,
      "인도": 1
    },
    "반월동": {
      "인도": 15,
      "횡단보도": 45,
      "소화전": 5,
      "안전지대": 1,
      "교차로 모퉁이": 1
    },
    "팔복동1가": {
      "횡단보도": 3,
      "교차로 모퉁이": 4,
      "인도": 2
    },
    "풍남동2가": {
      "인도": 4
    },
    "진북동": {
      "교차로 모퉁이": 10,
      "횡단보도": 9,
      "인도": 3,
      "버스정류소": 1
    },
    "서노송동": {
      "인도": 22,
      "횡단보도": 6,
      "교차로 모퉁이": 3
    },
    "여의동2가": {
      "횡단보도": 12,
      "안전지대": 3,
      "인도": 1
    },
    "효자동1가": {
      "인도": 56,
      "교차로 모퉁이": 12,
      "어린이보호구역": 1,
      "안전지대": 1,
      "소화전": 3,
      "횡단보도": 13,
      "버스정류소": 1
    },
    "중노송동": {
      "횡단보도": 9,
      "교차로 모퉁이": 5,
      "인도": 5,
      "어린이보호구역": 1
    },
    "다가동1가": {
      "인도": 2
    },
    "여의동": {
      "인도": 6,
      "횡단보도": 9,
      "어린이보호구역": 3,
      "교차로 모퉁이": 5,
      "버스정류소": 2
    },
    "태평동": {
      "인도": 1,
      "어린이보호구역": 8,
      "횡단보도": 2
    },
    "풍남동1가": {
      "인도": 5,
      "교차로 모퉁이": 1
    },
    "다가동4가": {
      "인도": 5
    },
    "팔복동3가": {
      "횡단보도": 2,
      "인도": 4
    },
    "중앙동1가": {
      "교차로 모퉁이": 1,
      "인도": 2
    },
    "중앙동2가": {
      "인도": 1
    },
    "중인동": {
      "인도": 1
    },
    "동완산동": {
      "인도": 1
    },
    "우아동1가": {
      "횡단보도": 10
    },
    "고랑동": {
      "횡단보도": 2
    },
    "동서학동": {
      "인도": 4,
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "원당동": {
      "교차로 모퉁이": 1
    },
    "강흥동": {
      "버스정류소": 1
    },
    "다가동2가": {
      "인도": 1
    },
    "다가동3가": {
      "인도": 2
    },
    "산정동": {
      "교차로 모퉁이": 1,
      "횡단보도": 2
    },
    "평화동3가": {
      "인도": 1
    }
  },
  "07": {
    "경원동3가": {
      "인도": 22,
      "횡단보도": 16,
      "교차로 모퉁이": 1
    },
    "만성동": {
      "인도": 28,
      "횡단보도": 16,
      "교차로 모퉁이": 10,
      "소화전": 4
    },
    "송천동2가": {
      "버스정류소": 6,
      "교차로 모퉁이": 26,
      "소화전": 32,
      "횡단보도": 81,
      "인도": 23
    },
    "효자동2가": {
      "인도": 178,
      "횡단보도": 162,
      "교차로 모퉁이": 41,
      "소화전": 1,
      "버스정류소": 1
    },
    "태평동": {
      "버스정류소": 1,
      "횡단보도": 7,
      "인도": 2,
      "교차로 모퉁이": 1,
      "어린이보호구역": 1
    },
    "평화동2가": {
      "횡단보도": 75,
      "인도": 40,
      "교차로 모퉁이": 17,
      "안전지대": 1,
      "버스정류소": 3,
      "어린이보호구역": 1
    },
    "중화산동2가": {
      "횡단보도": 65,
      "교차로 모퉁이": 26,
      "소화전": 12,
      "인도": 41,
      "안전지대": 1,
      "버스정류소": 1
    },
    "금암동": {
      "인도": 35,
      "교차로 모퉁이": 39,
      "횡단보도": 35,
      "버스정류소": 1,
      "어린이보호구역": 1
    },
    "삼천동2가": {
      "인도": 1
    },
    "인후동1가": {
      "횡단보도": 31,
      "교차로 모퉁이": 8,
      "버스정류소": 14,
      "인도": 37,
      "어린이보호구역": 5,
      "소화전": 3
    },
    "효자동1가": {
      "횡단보도": 35,
      "인도": 26,
      "교차로 모퉁이": 19,
      "안전지대": 2,
      "어린이보호구역": 1
    },
    "서신동": {
      "교차로 모퉁이": 35,
      "횡단보도": 117,
      "소화전": 5,
      "인도": 16,
      "기타": 3,
      "어린이보호구역": 3,
      "버스정류소": 2
    },
    "효자동3가": {
      "횡단보도": 117,
      "인도": 49,
      "교차로 모퉁이": 33,
      "버스정류소": 4,
      "소화전": 4,
      "어린이보호구역": 2,
      "기타": 6
    },
    "서노송동": {
      "인도": 39,
      "횡단보도": 10,
      "소화전": 1,
      "교차로 모퉁이": 15
    },
    "평화동1가": {
      "인도": 25,
      "횡단보도": 43,
      "교차로 모퉁이": 101,
      "버스정류소": 5,
      "어린이보호구역": 1
    },
    "팔복동4가": {
      "횡단보도": 1,
      "버스정류소": 1
    },
    "우아동3가": {
      "교차로 모퉁이": 16,
      "안전지대": 3,
      "인도": 26,
      "버스정류소": 2,
      "횡단보도": 8
    },
    "우아동2가": {
      "횡단보도": 39,
      "인도": 8,
      "교차로 모퉁이": 2
    },
    "중동": {
      "횡단보도": 65,
      "교차로 모퉁이": 10,
      "소화전": 2
    },
    "송천동1가": {
      "교차로 모퉁이": 50,
      "소화전": 24,
      "인도": 14,
      "횡단보도": 41,
      "버스정류소": 2
    },
    "경원동1가": {
      "인도": 5,
      "횡단보도": 9,
      "교차로 모퉁이": 7
    },
    "중노송동": {
      "인도": 16,
      "횡단보도": 6,
      "버스정류소": 1
    },
    "동서학동": {
      "인도": 7,
      "횡단보도": 2
    },
    "중앙동3가": {
      "인도": 1
    },
    "반월동": {
      "횡단보도": 34,
      "인도": 15,
      "교차로 모퉁이": 1,
      "소화전": 2
    },
    "인후동2가": {
      "교차로 모퉁이": 21,
      "횡단보도": 11,
      "인도": 11,
      "소화전": 1
    },
    "장동": {
      "횡단보도": 40,
      "인도": 2,
      "교차로 모퉁이": 2
    },
    "팔복동1가": {
      "인도": 3,
      "횡단보도": 3,
      "교차로 모퉁이": 4,
      "소화전": 1
    },
    "덕진동2가": {
      "교차로 모퉁이": 10,
      "횡단보도": 14,
      "인도": 6,
      "소화전": 3
    },
    "여의동2가": {
      "인도": 4,
      "횡단보도": 8,
      "교차로 모퉁이": 2
    },
    "고사동": {
      "인도": 44
    },
    "산정동": {
      "횡단보도": 4,
      "소화전": 2,
      "교차로 모퉁이": 1,
      "인도": 1
    },
    "삼천동1가": {
      "교차로 모퉁이": 67,
      "인도": 32,
      "횡단보도": 64,
      "소화전": 5
    },
    "진북동": {
      "교차로 모퉁이": 11,
      "인도": 4,
      "횡단보도": 2,
      "버스정류소": 2
    },
    "여의동": {
      "인도": 3,
      "횡단보도": 8,
      "교차로 모퉁이": 4,
      "어린이보호구역": 2,
      "버스정류소": 1
    },
    "팔복동2가": {
      "횡단보도": 3,
      "소화전": 3,
      "인도": 2
    },
    "우아동1가": {
      "횡단보도": 10,
      "교차로 모퉁이": 1,
      "버스정류소": 2,
      "인도": 2
    },
    "호성동1가": {
      "인도": 5,
      "횡단보도": 7
    },
    "서서학동": {
      "인도": 11,
      "횡단보도": 4
    },
    "전동": {
      "교차로 모퉁이": 3,
      "인도": 3,
      "횡단보도": 2
    },
    "경원동2가": {
      "횡단보도": 5,
      "인도": 4,
      "교차로 모퉁이": 1
    },
    "호성동2가": {
      "횡단보도": 3,
      "인도": 1
    },
    "풍남동2가": {
      "인도": 3
    },
    "풍남동3가": {
      "인도": 10,
      "교차로 모퉁이": 2,
      "횡단보도": 1,
      "소화전": 1
    },
    "교동": {
      "인도": 12,
      "기타": 3,
      "교차로 모퉁이": 5
    },
    "중앙동1가": {
      "인도": 2
    },
    "원당동": {
      "안전지대": 2
    },
    "팔복동3가": {
      "인도": 2
    },
    "덕진동1가": {
      "인도": 6,
      "횡단보도": 13,
      "교차로 모퉁이": 2,
      "소화전": 2
    },
    "다가동2가": {
      "인도": 2
    },
    "다가동4가": {
      "인도": 4
    },
    "다가동1가": {
      "교차로 모퉁이": 1
    },
    "중인동": {
      "인도": 1
    },
    "다가동3가": {
      "인도": 2
    },
    "남노송동": {
      "안전지대": 1,
      "인도": 5,
      "횡단보도": 6
    },
    "풍남동1가": {
      "인도": 1
    },
    "중화산동1가": {
      "인도": 5
    },
    "성덕동": {
      "인도": 1
    },
    "고랑동": {
      "버스정류소": 1
    },
    "서완산동1가": {
      "교차로 모퉁이": 1
    }
  },
  "08": {
    "송천동2가": {
      "횡단보도": 108,
      "인도": 38,
      "교차로 모퉁이": 47,
      "소화전": 26,
      "안전지대": 1,
      "버스정류소": 3
    },
    "중화산동2가": {
      "횡단보도": 61,
      "교차로 모퉁이": 58,
      "인도": 42,
      "소화전": 15,
      "어린이보호구역": 1
    },
    "경원동2가": {
      "교차로 모퉁이": 2,
      "횡단보도": 7,
      "인도": 2
    },
    "반월동": {
      "소화전": 3,
      "횡단보도": 11,
      "인도": 4,
      "교차로 모퉁이": 1
    },
    "우아동3가": {
      "교차로 모퉁이": 18,
      "인도": 19,
      "횡단보도": 20,
      "버스정류소": 1
    },
    "효자동3가": {
      "인도": 64,
      "횡단보도": 122,
      "교차로 모퉁이": 111,
      "기타": 16,
      "소화전": 1
    },
    "교동": {
      "횡단보도": 8,
      "기타": 6,
      "인도": 6
    },
    "서신동": {
      "인도": 26,
      "소화전": 10,
      "횡단보도": 69,
      "교차로 모퉁이": 35,
      "어린이보호구역": 2,
      "기타": 1
    },
    "여의동": {
      "인도": 2,
      "횡단보도": 16,
      "교차로 모퉁이": 2
    },
    "금암동": {
      "교차로 모퉁이": 35,
      "횡단보도": 31,
      "인도": 68
    },
    "효자동2가": {
      "횡단보도": 72,
      "교차로 모퉁이": 34,
      "인도": 119,
      "소화전": 4,
      "버스정류소": 2
    },
    "고사동": {
      "인도": 40,
      "버스정류소": 3,
      "횡단보도": 2
    },
    "전동": {
      "인도": 14,
      "교차로 모퉁이": 2,
      "횡단보도": 1
    },
    "송천동1가": {
      "횡단보도": 53,
      "소화전": 19,
      "교차로 모퉁이": 28,
      "버스정류소": 1,
      "인도": 23
    },
    "덕진동1가": {
      "횡단보도": 21,
      "교차로 모퉁이": 11,
      "인도": 15
    },
    "팔복동1가": {
      "횡단보도": 1,
      "교차로 모퉁이": 2,
      "소화전": 3,
      "인도": 2
    },
    "효자동1가": {
      "교차로 모퉁이": 24,
      "인도": 18,
      "횡단보도": 21,
      "안전지대": 4,
      "소화전": 1,
      "기타": 2
    },
    "서노송동": {
      "인도": 21,
      "횡단보도": 11,
      "교차로 모퉁이": 9
    },
    "삼천동1가": {
      "소화전": 5,
      "횡단보도": 54,
      "인도": 44,
      "교차로 모퉁이": 66,
      "버스정류소": 2
    },
    "경원동3가": {
      "횡단보도": 5,
      "교차로 모퉁이": 3,
      "인도": 4
    },
    "평화동2가": {
      "횡단보도": 94,
      "교차로 모퉁이": 43,
      "인도": 35,
      "버스정류소": 2,
      "어린이보호구역": 6,
      "안전지대": 1
    },
    "풍남동1가": {
      "인도": 4,
      "교차로 모퉁이": 2
    },
    "평화동1가": {
      "인도": 26,
      "교차로 모퉁이": 106,
      "횡단보도": 50,
      "버스정류소": 5,
      "어린이보호구역": 2
    },
    "인후동1가": {
      "소화전": 15,
      "횡단보도": 67,
      "버스정류소": 9,
      "교차로 모퉁이": 14,
      "인도": 20,
      "어린이보호구역": 2
    },
    "다가동3가": {
      "인도": 9
    },
    "호성동2가": {
      "인도": 5
    },
    "남노송동": {
      "인도": 10,
      "횡단보도": 6,
      "교차로 모퉁이": 1
    },
    "중화산동1가": {
      "인도": 15,
      "교차로 모퉁이": 6
    },
    "우아동2가": {
      "횡단보도": 32,
      "인도": 5,
      "교차로 모퉁이": 4
    },
    "장동": {
      "횡단보도": 81,
      "인도": 5,
      "교차로 모퉁이": 5,
      "소화전": 4,
      "버스정류소": 1
    },
    "산정동": {
      "횡단보도": 6,
      "교차로 모퉁이": 2,
      "버스정류소": 2,
      "인도": 2
    },
    "풍남동3가": {
      "인도": 18,
      "소화전": 2,
      "교차로 모퉁이": 1
    },
    "진북동": {
      "인도": 1,
      "교차로 모퉁이": 9,
      "횡단보도": 6
    },
    "덕진동2가": {
      "인도": 7,
      "교차로 모퉁이": 15,
      "횡단보도": 10,
      "소화전": 2
    },
    "호성동1가": {
      "교차로 모퉁이": 2,
      "소화전": 1,
      "횡단보도": 6,
      "인도": 5
    },
    "중동": {
      "교차로 모퉁이": 8,
      "횡단보도": 50,
      "소화전": 6,
      "인도": 3,
      "버스정류소": 1
    },
    "경원동1가": {
      "인도": 4,
      "횡단보도": 8,
      "교차로 모퉁이": 5
    },
    "인후동2가": {
      "교차로 모퉁이": 13,
      "횡단보도": 11,
      "인도": 20
    },
    "서서학동": {
      "인도": 23,
      "교차로 모퉁이": 7,
      "버스정류소": 2,
      "횡단보도": 2
    },
    "고랑동": {
      "횡단보도": 1,
      "인도": 2
    },
    "여의동2가": {
      "인도": 1,
      "횡단보도": 10,
      "교차로 모퉁이": 1
    },
    "우아동1가": {
      "횡단보도": 11,
      "버스정류소": 1
    },
    "만성동": {
      "인도": 38,
      "횡단보도": 11,
      "소화전": 4,
      "교차로 모퉁이": 8
    },
    "중노송동": {
      "교차로 모퉁이": 3,
      "횡단보도": 3,
      "인도": 14
    },
    "다가동4가": {
      "인도": 3
    },
    "평화동3가": {
      "횡단보도": 1
    },
    "동서학동": {
      "횡단보도": 20,
      "인도": 13
    },
    "태평동": {
      "버스정류소": 2,
      "인도": 1,
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "팔복동2가": {
      "교차로 모퉁이": 1,
      "인도": 1,
      "횡단보도": 2
    },
    "중앙동4가": {
      "인도": 1
    },
    "다가동1가": {
      "인도": 4
    },
    "전미동2가": {
      "교차로 모퉁이": 1
    },
    "중앙동1가": {
      "인도": 4,
      "교차로 모퉁이": 1
    },
    "삼천동3가": {
      "인도": 1
    },
    "삼천동2가": {
      "횡단보도": 1
    },
    "전동3가": {
      "인도": 1
    },
    "팔복동3가": {
      "횡단보도": 3
    },
    "상림동": {
      "소화전": 1
    }
  },
  "09": {
    "서노송동": {
      "횡단보도": 11,
      "인도": 10,
      "기타": 5,
      "교차로 모퉁이": 4
    },
    "금암동": {
      "인도": 34,
      "횡단보도": 30,
      "교차로 모퉁이": 51
    },
    "우아동3가": {
      "횡단보도": 27,
      "인도": 19,
      "교차로 모퉁이": 29,
      "버스정류소": 3
    },
    "효자동3가": {
      "교차로 모퉁이": 76,
      "횡단보도": 121,
      "인도": 51,
      "버스정류소": 3,
      "기타": 8,
      "어린이보호구역": 2,
      "소화전": 2
    },
    "평화동2가": {
      "교차로 모퉁이": 28,
      "횡단보도": 77,
      "인도": 26,
      "버스정류소": 3,
      "어린이보호구역": 3
    },
    "송천동1가": {
      "횡단보도": 94,
      "교차로 모퉁이": 47,
      "소화전": 20,
      "인도": 17,
      "버스정류소": 3
    },
    "동서학동": {
      "횡단보도": 11,
      "교차로 모퉁이": 1,
      "인도": 19
    },
    "효자동2가": {
      "교차로 모퉁이": 36,
      "인도": 110,
      "횡단보도": 117,
      "소화전": 4,
      "버스정류소": 1
    },
    "인후동1가": {
      "소화전": 4,
      "교차로 모퉁이": 26,
      "횡단보도": 64,
      "버스정류소": 9,
      "인도": 23
    },
    "삼천동1가": {
      "교차로 모퉁이": 55,
      "횡단보도": 47,
      "소화전": 3,
      "인도": 45,
      "버스정류소": 1
    },
    "진북동": {
      "버스정류소": 2,
      "인도": 3
    },
    "경원동1가": {
      "교차로 모퉁이": 6,
      "인도": 4,
      "횡단보도": 6
    },
    "장동": {
      "횡단보도": 36,
      "인도": 5,
      "교차로 모퉁이": 4,
      "버스정류소": 1
    },
    "서신동": {
      "횡단보도": 70,
      "인도": 14,
      "교차로 모퉁이": 28,
      "소화전": 3,
      "버스정류소": 5,
      "기타": 2
    },
    "고사동": {
      "횡단보도": 3,
      "인도": 23,
      "교차로 모퉁이": 1
    },
    "송천동2가": {
      "교차로 모퉁이": 85,
      "횡단보도": 110,
      "인도": 39,
      "소화전": 39,
      "버스정류소": 2
    },
    "중화산동2가": {
      "인도": 27,
      "횡단보도": 76,
      "교차로 모퉁이": 78,
      "소화전": 16,
      "버스정류소": 1,
      "어린이보호구역": 2
    },
    "서완산동2가": {
      "인도": 1,
      "횡단보도": 1
    },
    "반월동": {
      "횡단보도": 41,
      "인도": 14,
      "소화전": 4
    },
    "여의동": {
      "횡단보도": 14,
      "인도": 4,
      "어린이보호구역": 1,
      "교차로 모퉁이": 4
    },
    "교동": {
      "인도": 25,
      "교차로 모퉁이": 1,
      "횡단보도": 6,
      "기타": 4
    },
    "효자동1가": {
      "인도": 17,
      "소화전": 3,
      "교차로 모퉁이": 12,
      "횡단보도": 25,
      "안전지대": 1
    },
    "우아동2가": {
      "횡단보도": 31,
      "인도": 6,
      "교차로 모퉁이": 1
    },
    "호성동2가": {
      "횡단보도": 1,
      "인도": 1
    },
    "만성동": {
      "인도": 68,
      "소화전": 5,
      "횡단보도": 15,
      "교차로 모퉁이": 4,
      "버스정류소": 2
    },
    "인후동2가": {
      "횡단보도": 8,
      "인도": 6
    },
    "덕진동1가": {
      "횡단보도": 23,
      "교차로 모퉁이": 9,
      "인도": 6,
      "버스정류소": 1,
      "소화전": 2
    },
    "중동": {
      "횡단보도": 66,
      "교차로 모퉁이": 10,
      "소화전": 12,
      "인도": 3,
      "어린이보호구역": 2
    },
    "여의동2가": {
      "횡단보도": 5,
      "인도": 4
    },
    "팔복동2가": {
      "인도": 2,
      "횡단보도": 4,
      "교차로 모퉁이": 1
    },
    "경원동2가": {
      "교차로 모퉁이": 3,
      "횡단보도": 2,
      "인도": 2
    },
    "호성동1가": {
      "횡단보도": 12,
      "인도": 12,
      "버스정류소": 1
    },
    "평화동1가": {
      "인도": 29,
      "어린이보호구역": 1,
      "교차로 모퉁이": 97,
      "횡단보도": 62,
      "버스정류소": 6,
      "기타": 1
    },
    "우아동1가": {
      "횡단보도": 4,
      "인도": 1,
      "버스정류소": 1
    },
    "서서학동": {
      "인도": 12,
      "횡단보도": 7,
      "교차로 모퉁이": 4,
      "소화전": 1
    },
    "전동": {
      "인도": 8,
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "덕진동2가": {
      "교차로 모퉁이": 12,
      "횡단보도": 7,
      "소화전": 2,
      "인도": 1
    },
    "풍남동3가": {
      "교차로 모퉁이": 2,
      "인도": 14,
      "소화전": 2
    },
    "팔복동1가": {
      "인도": 3,
      "교차로 모퉁이": 2,
      "횡단보도": 2
    },
    "평화동3가": {
      "횡단보도": 1
    },
    "다가동3가": {
      "인도": 3
    },
    "중노송동": {
      "기타": 2,
      "횡단보도": 6,
      "어린이보호구역": 1,
      "인도": 3
    },
    "산정동": {
      "인도": 2,
      "소화전": 1,
      "버스정류소": 3,
      "횡단보도": 1
    },
    "풍남동1가": {
      "횡단보도": 1,
      "인도": 2
    },
    "중인동": {
      "인도": 2
    },
    "다가동2가": {
      "인도": 4
    },
    "경원동3가": {
      "인도": 1,
      "횡단보도": 2,
      "교차로 모퉁이": 1
    },
    "다가동4가": {
      "소화전": 1,
      "인도": 2,
      "횡단보도": 1
    },
    "중화산동1가": {
      "교차로 모퉁이": 3,
      "소화전": 1,
      "횡단보도": 1,
      "인도": 1
    },
    "동완산동": {
      "버스정류소": 1
    },
    "태평동": {
      "어린이보호구역": 1,
      "횡단보도": 2,
      "기타": 1
    },
    "중앙동1가": {
      "인도": 1
    },
    "남노송동": {
      "인도": 8,
      "어린이보호구역": 5,
      "소화전": 1,
      "횡단보도": 2
    },
    "다가동1가": {
      "인도": 1
    },
    "전미동1가": {
      "버스정류소": 1
    },
    "서완산동1가": {
      "인도": 1
    },
    "팔복동3가": {
      "인도": 1
    },
    "중앙동3가": {
      "인도": 1
    },
    "삼천동2가": {
      "인도": 1
    }
  },
  "10": {
    "호성동1가": {
      "횡단보도": 5,
      "인도": 1,
      "소화전": 3
    },
    "서노송동": {
      "인도": 32,
      "횡단보도": 22,
      "기타": 1,
      "소화전": 3,
      "교차로 모퉁이": 3
    },
    "송천동2가": {
      "횡단보도": 91,
      "소화전": 13,
      "인도": 16,
      "교차로 모퉁이": 17
    },
    "삼천동1가": {
      "인도": 57,
      "횡단보도": 55,
      "교차로 모퉁이": 42,
      "소화전": 2,
      "버스정류소": 7
    },
    "중노송동": {
      "인도": 27,
      "횡단보도": 4,
      "기타": 1,
      "교차로 모퉁이": 3
    },
    "평화동2가": {
      "인도": 34,
      "소화전": 4,
      "횡단보도": 85,
      "교차로 모퉁이": 69,
      "버스정류소": 6,
      "어린이보호구역": 4,
      "기타": 1,
      "안전지대": 7
    },
    "교동": {
      "인도": 19,
      "교차로 모퉁이": 1,
      "기타": 8,
      "횡단보도": 5
    },
    "평화동1가": {
      "교차로 모퉁이": 178,
      "횡단보도": 159,
      "인도": 24,
      "버스정류소": 8,
      "기타": 9,
      "소화전": 3,
      "어린이보호구역": 1,
      "안전지대": 2
    },
    "반월동": {
      "인도": 10,
      "소화전": 4,
      "횡단보도": 34,
      "버스정류소": 1,
      "교차로 모퉁이": 3
    },
    "송천동1가": {
      "횡단보도": 48,
      "교차로 모퉁이": 15,
      "인도": 5,
      "소화전": 13,
      "버스정류소": 1
    },
    "인후동1가": {
      "횡단보도": 52,
      "인도": 44,
      "교차로 모퉁이": 20,
      "소화전": 22,
      "버스정류소": 4
    },
    "중화산동1가": {
      "횡단보도": 4,
      "인도": 3
    },
    "효자동3가": {
      "교차로 모퉁이": 97,
      "인도": 87,
      "횡단보도": 138,
      "기타": 15,
      "버스정류소": 6,
      "소화전": 6,
      "어린이보호구역": 4
    },
    "효자동2가": {
      "인도": 130,
      "횡단보도": 136,
      "교차로 모퉁이": 35,
      "소화전": 2,
      "버스정류소": 1
    },
    "서신동": {
      "소화전": 12,
      "교차로 모퉁이": 43,
      "기타": 16,
      "인도": 36,
      "횡단보도": 98,
      "버스정류소": 2
    },
    "중화산동2가": {
      "인도": 24,
      "교차로 모퉁이": 53,
      "횡단보도": 109,
      "버스정류소": 2,
      "소화전": 16,
      "어린이보호구역": 6
    },
    "중동": {
      "횡단보도": 33,
      "인도": 4,
      "소화전": 7,
      "교차로 모퉁이": 5,
      "버스정류소": 1
    },
    "인후동2가": {
      "인도": 28,
      "횡단보도": 15,
      "소화전": 1,
      "교차로 모퉁이": 2
    },
    "우아동3가": {
      "횡단보도": 47,
      "인도": 18,
      "교차로 모퉁이": 31
    },
    "고사동": {
      "인도": 50,
      "소화전": 1,
      "횡단보도": 3
    },
    "만성동": {
      "인도": 58,
      "소화전": 2,
      "버스정류소": 1,
      "횡단보도": 9
    },
    "금암동": {
      "횡단보도": 35,
      "인도": 45,
      "교차로 모퉁이": 39,
      "소화전": 1
    },
    "효자동1가": {
      "횡단보도": 41,
      "인도": 10,
      "교차로 모퉁이": 11,
      "기타": 2,
      "어린이보호구역": 1,
      "소화전": 1
    },
    "서서학동": {
      "횡단보도": 7,
      "인도": 11,
      "교차로 모퉁이": 1
    },
    "우아동2가": {
      "횡단보도": 28,
      "인도": 7,
      "교차로 모퉁이": 1,
      "소화전": 1
    },
    "삼천동2가": {
      "횡단보도": 3
    },
    "장동": {
      "횡단보도": 30,
      "교차로 모퉁이": 2,
      "인도": 7,
      "소화전": 2
    },
    "경원동2가": {
      "교차로 모퉁이": 3,
      "인도": 1,
      "횡단보도": 3
    },
    "팔복동2가": {
      "교차로 모퉁이": 2,
      "횡단보도": 6,
      "인도": 4
    },
    "우아동1가": {
      "버스정류소": 2,
      "횡단보도": 3
    },
    "풍남동3가": {
      "인도": 12,
      "교차로 모퉁이": 4,
      "소화전": 1,
      "횡단보도": 2
    },
    "동서학동": {
      "횡단보도": 11,
      "인도": 3,
      "기타": 2,
      "교차로 모퉁이": 4
    },
    "산정동": {
      "버스정류소": 1,
      "인도": 2,
      "소화전": 1,
      "횡단보도": 1
    },
    "전동": {
      "교차로 모퉁이": 8,
      "횡단보도": 4,
      "인도": 9
    },
    "경원동1가": {
      "교차로 모퉁이": 9,
      "인도": 5,
      "횡단보도": 8
    },
    "남노송동": {
      "인도": 5,
      "교차로 모퉁이": 1,
      "횡단보도": 7,
      "어린이보호구역": 4
    },
    "여의동": {
      "횡단보도": 25,
      "인도": 2,
      "어린이보호구역": 3,
      "교차로 모퉁이": 4
    },
    "덕진동1가": {
      "횡단보도": 22,
      "소화전": 2,
      "교차로 모퉁이": 5,
      "인도": 5,
      "버스정류소": 4
    },
    "경원동3가": {
      "횡단보도": 12,
      "인도": 16
    },
    "팔복동3가": {
      "횡단보도": 5
    },
    "덕진동2가": {
      "횡단보도": 12,
      "교차로 모퉁이": 10,
      "인도": 5,
      "소화전": 1
    },
    "중앙동1가": {
      "인도": 1,
      "교차로 모퉁이": 1
    },
    "풍남동2가": {
      "인도": 2
    },
    "중앙동2가": {
      "인도": 5
    },
    "풍남동1가": {
      "인도": 3
    },
    "다가동1가": {
      "인도": 1
    },
    "팔복동4가": {
      "인도": 1,
      "횡단보도": 1
    },
    "다가동3가": {
      "인도": 3
    },
    "팔복동1가": {
      "횡단보도": 10,
      "교차로 모퉁이": 2,
      "인도": 3
    },
    "중앙동3가": {
      "인도": 1
    },
    "서완산동1가": {
      "인도": 1
    },
    "다가동4가": {
      "인도": 1,
      "교차로 모퉁이": 2
    },
    "진북동": {
      "횡단보도": 7,
      "인도": 2,
      "버스정류소": 1,
      "교차로 모퉁이": 3,
      "소화전": 1
    },
    "여의동2가": {
      "인도": 2,
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "서완산동2가": {
      "인도": 1
    },
    "태평동": {
      "횡단보도": 1,
      "인도": 1,
      "버스정류소": 1
    },
    "삼천동3가": {
      "인도": 2
    },
    "전미동1가": {
      "버스정류소": 1,
      "인도": 1
    },
    "호성동2가": {
      "버스정류소": 1
    },
    "원동": {
      "인도": 1
    }
  },
  "11": {
    "덕진동1가": {
      "인도": 1,
      "횡단보도": 22,
      "교차로 모퉁이": 3,
      "버스정류소": 12,
      "소화전": 1
    },
    "효자동2가": {
      "인도": 184,
      "횡단보도": 134,
      "교차로 모퉁이": 49,
      "소화전": 5,
      "어린이보호구역": 1
    },
    "송천동1가": {
      "횡단보도": 54,
      "인도": 11,
      "소화전": 14,
      "교차로 모퉁이": 16
    },
    "서신동": {
      "인도": 25,
      "횡단보도": 103,
      "교차로 모퉁이": 46,
      "기타": 9,
      "버스정류소": 6,
      "소화전": 11
    },
    "서노송동": {
      "횡단보도": 11,
      "인도": 23,
      "소화전": 3,
      "교차로 모퉁이": 5
    },
    "효자동1가": {
      "횡단보도": 56,
      "인도": 26,
      "교차로 모퉁이": 28,
      "소화전": 1,
      "기타": 1
    },
    "반월동": {
      "횡단보도": 26,
      "인도": 7,
      "교차로 모퉁이": 2,
      "소화전": 2
    },
    "중화산동2가": {
      "소화전": 38,
      "인도": 35,
      "횡단보도": 47,
      "교차로 모퉁이": 76,
      "어린이보호구역": 2,
      "기타": 2
    },
    "만성동": {
      "횡단보도": 13,
      "인도": 58,
      "소화전": 3,
      "버스정류소": 1,
      "교차로 모퉁이": 2
    },
    "금암동": {
      "인도": 64,
      "교차로 모퉁이": 39,
      "횡단보도": 27,
      "소화전": 3,
      "버스정류소": 1
    },
    "인후동1가": {
      "인도": 27,
      "횡단보도": 48,
      "교차로 모퉁이": 12,
      "어린이보호구역": 1,
      "소화전": 9,
      "버스정류소": 1
    },
    "중화산동1가": {
      "횡단보도": 1,
      "교차로 모퉁이": 1,
      "소화전": 3,
      "인도": 4
    },
    "산정동": {
      "횡단보도": 4,
      "소화전": 5,
      "버스정류소": 1
    },
    "중노송동": {
      "인도": 20,
      "횡단보도": 3
    },
    "우아동2가": {
      "횡단보도": 39,
      "버스정류소": 1,
      "소화전": 1,
      "인도": 4,
      "교차로 모퉁이": 2
    },
    "삼천동1가": {
      "횡단보도": 72,
      "교차로 모퉁이": 41,
      "인도": 53,
      "버스정류소": 5,
      "어린이보호구역": 2,
      "소화전": 2
    },
    "풍남동3가": {
      "횡단보도": 3,
      "교차로 모퉁이": 2,
      "인도": 7
    },
    "전동": {
      "인도": 16,
      "횡단보도": 6,
      "교차로 모퉁이": 2
    },
    "중동": {
      "인도": 3,
      "소화전": 6,
      "횡단보도": 38,
      "교차로 모퉁이": 5,
      "버스정류소": 1
    },
    "진북동": {
      "횡단보도": 5,
      "인도": 6,
      "소화전": 2
    },
    "효자동3가": {
      "인도": 70,
      "횡단보도": 136,
      "교차로 모퉁이": 82,
      "소화전": 6,
      "기타": 12,
      "버스정류소": 7,
      "어린이보호구역": 2
    },
    "평화동2가": {
      "횡단보도": 87,
      "교차로 모퉁이": 39,
      "인도": 16,
      "어린이보호구역": 11,
      "안전지대": 1,
      "버스정류소": 1
    },
    "평화동1가": {
      "횡단보도": 103,
      "교차로 모퉁이": 190,
      "인도": 23,
      "소화전": 1,
      "기타": 1,
      "안전지대": 1
    },
    "우아동3가": {
      "횡단보도": 32,
      "교차로 모퉁이": 28,
      "인도": 23,
      "버스정류소": 7
    },
    "송천동2가": {
      "인도": 31,
      "소화전": 12,
      "교차로 모퉁이": 10,
      "횡단보도": 65
    },
    "여의동": {
      "교차로 모퉁이": 5,
      "횡단보도": 14,
      "인도": 5,
      "어린이보호구역": 11
    },
    "남노송동": {
      "인도": 4,
      "횡단보도": 4,
      "교차로 모퉁이": 2
    },
    "덕진동2가": {
      "횡단보도": 7,
      "인도": 6,
      "교차로 모퉁이": 2
    },
    "우아동1가": {
      "횡단보도": 6
    },
    "고사동": {
      "인도": 32,
      "횡단보도": 2
    },
    "전동3가": {
      "횡단보도": 1
    },
    "인후동2가": {
      "인도": 10,
      "교차로 모퉁이": 10,
      "횡단보도": 10,
      "소화전": 1
    },
    "호성동1가": {
      "횡단보도": 11,
      "교차로 모퉁이": 6
    },
    "교동": {
      "인도": 22,
      "기타": 3,
      "횡단보도": 2,
      "교차로 모퉁이": 3
    },
    "장동": {
      "인도": 6,
      "소화전": 2,
      "횡단보도": 16,
      "버스정류소": 1
    },
    "경원동1가": {
      "인도": 6,
      "횡단보도": 5
    },
    "서서학동": {
      "횡단보도": 3,
      "교차로 모퉁이": 2,
      "인도": 4
    },
    "팔복동1가": {
      "인도": 1,
      "횡단보도": 8
    },
    "팔복동2가": {
      "인도": 3,
      "횡단보도": 5
    },
    "풍남동1가": {
      "인도": 7,
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "팔복동3가": {
      "횡단보도": 7,
      "인도": 1
    },
    "풍남동2가": {
      "인도": 2,
      "교차로 모퉁이": 1
    },
    "원동": {
      "인도": 1
    },
    "다가동3가": {
      "횡단보도": 1,
      "인도": 2
    },
    "여의동2가": {
      "인도": 4,
      "교차로 모퉁이": 1,
      "횡단보도": 6
    },
    "동서학동": {
      "횡단보도": 5,
      "교차로 모퉁이": 2,
      "인도": 5
    },
    "경원동3가": {
      "인도": 10,
      "교차로 모퉁이": 1,
      "횡단보도": 20
    },
    "태평동": {
      "횡단보도": 2,
      "교차로 모퉁이": 4,
      "인도": 3
    },
    "삼천동2가": {
      "교차로 모퉁이": 3,
      "횡단보도": 1,
      "인도": 1
    },
    "상림동": {
      "인도": 1
    },
    "중앙동1가": {
      "교차로 모퉁이": 2,
      "인도": 2
    },
    "평화동3가": {
      "횡단보도": 1,
      "인도": 1
    },
    "경원동2가": {
      "인도": 2
    },
    "중앙동2가": {
      "인도": 1
    },
    "다가동4가": {
      "교차로 모퉁이": 1,
      "횡단보도": 1
    },
    "전미동2가": {
      "인도": 1
    }
  },
  "12": {
    "동서학동": {
      "횡단보도": 8,
      "인도": 8
    },
    "서신동": {
      "기타": 11,
      "인도": 22,
      "횡단보도": 115,
      "교차로 모퉁이": 57,
      "소화전": 11,
      "버스정류소": 7,
      "어린이보호구역": 1
    },
    "효자동3가": {
      "횡단보도": 102,
      "인도": 70,
      "교차로 모퉁이": 84,
      "기타": 5
    },
    "중화산동2가": {
      "소화전": 37,
      "교차로 모퉁이": 20,
      "인도": 24,
      "횡단보도": 52,
      "기타": 1
    },
    "효자동1가": {
      "인도": 20,
      "횡단보도": 72,
      "교차로 모퉁이": 16,
      "소화전": 4,
      "안전지대": 1
    },
    "산정동": {
      "소화전": 1,
      "횡단보도": 2,
      "인도": 1
    },
    "전동": {
      "인도": 17,
      "교차로 모퉁이": 5,
      "횡단보도": 1,
      "기타": 1,
      "소화전": 1,
      "버스정류소": 1
    },
    "우아동3가": {
      "교차로 모퉁이": 22,
      "횡단보도": 20,
      "인도": 10,
      "버스정류소": 1
    },
    "장동": {
      "인도": 12,
      "횡단보도": 19,
      "소화전": 1
    },
    "우아동2가": {
      "횡단보도": 29,
      "인도": 4,
      "버스정류소": 1,
      "소화전": 3,
      "교차로 모퉁이": 1
    },
    "인후동2가": {
      "인도": 21,
      "소화전": 2,
      "횡단보도": 9,
      "교차로 모퉁이": 5,
      "버스정류소": 1
    },
    "팔복동2가": {
      "횡단보도": 4,
      "교차로 모퉁이": 4,
      "인도": 2
    },
    "금암동": {
      "횡단보도": 29,
      "인도": 71,
      "교차로 모퉁이": 21,
      "소화전": 2,
      "버스정류소": 1
    },
    "호성동1가": {
      "횡단보도": 6,
      "버스정류소": 1,
      "교차로 모퉁이": 1,
      "인도": 3
    },
    "인후동1가": {
      "횡단보도": 27,
      "버스정류소": 5,
      "교차로 모퉁이": 5,
      "인도": 14,
      "소화전": 6
    },
    "평화동2가": {
      "횡단보도": 68,
      "버스정류소": 4,
      "교차로 모퉁이": 23,
      "인도": 17,
      "어린이보호구역": 2
    },
    "만성동": {
      "인도": 82,
      "횡단보도": 11,
      "교차로 모퉁이": 2
    },
    "삼천동1가": {
      "교차로 모퉁이": 34,
      "횡단보도": 51,
      "버스정류소": 2,
      "인도": 25,
      "소화전": 2
    },
    "고사동": {
      "인도": 33
    },
    "태평동": {
      "인도": 6,
      "교차로 모퉁이": 8,
      "횡단보도": 5
    },
    "송천동1가": {
      "소화전": 19,
      "교차로 모퉁이": 28,
      "횡단보도": 47,
      "인도": 11,
      "버스정류소": 1
    },
    "평화동1가": {
      "횡단보도": 47,
      "인도": 20,
      "교차로 모퉁이": 91,
      "버스정류소": 5,
      "소화전": 1
    },
    "효자동2가": {
      "횡단보도": 91,
      "인도": 127,
      "교차로 모퉁이": 29
    },
    "중화산동1가": {
      "인도": 3,
      "소화전": 2,
      "횡단보도": 1
    },
    "호성동2가": {
      "횡단보도": 1
    },
    "남노송동": {
      "횡단보도": 4,
      "인도": 1
    },
    "덕진동2가": {
      "교차로 모퉁이": 3,
      "횡단보도": 7,
      "소화전": 3,
      "인도": 4
    },
    "중노송동": {
      "횡단보도": 13,
      "인도": 18,
      "교차로 모퉁이": 1
    },
    "중인동": {
      "인도": 2
    },
    "덕진동1가": {
      "인도": 9,
      "횡단보도": 17,
      "버스정류소": 5,
      "소화전": 6
    },
    "송천동2가": {
      "인도": 31,
      "교차로 모퉁이": 14,
      "횡단보도": 58,
      "소화전": 16,
      "안전지대": 5
    },
    "서노송동": {
      "교차로 모퉁이": 4,
      "인도": 70,
      "횡단보도": 20,
      "소화전": 2
    },
    "중동": {
      "횡단보도": 13,
      "소화전": 6,
      "인도": 3,
      "교차로 모퉁이": 2
    },
    "다가동4가": {
      "교차로 모퉁이": 3,
      "인도": 16
    },
    "여의동": {
      "횡단보도": 11,
      "교차로 모퉁이": 3,
      "인도": 2
    },
    "다가동3가": {
      "교차로 모퉁이": 2,
      "인도": 2
    },
    "진북동": {
      "횡단보도": 9,
      "교차로 모퉁이": 5,
      "인도": 3
    },
    "경원동3가": {
      "횡단보도": 22,
      "교차로 모퉁이": 3,
      "인도": 24
    },
    "우아동1가": {
      "횡단보도": 1,
      "버스정류소": 1
    },
    "경원동2가": {
      "인도": 5,
      "횡단보도": 3,
      "교차로 모퉁이": 1
    },
    "서서학동": {
      "인도": 3,
      "소화전": 1,
      "횡단보도": 11,
      "교차로 모퉁이": 1
    },
    "중앙동1가": {
      "인도": 2
    },
    "반월동": {
      "인도": 6,
      "횡단보도": 34,
      "교차로 모퉁이": 2,
      "소화전": 2
    },
    "경원동1가": {
      "횡단보도": 3,
      "인도": 4,
      "교차로 모퉁이": 12
    },
    "삼천동2가": {
      "횡단보도": 2
    },
    "풍남동3가": {
      "인도": 5,
      "교차로 모퉁이": 2
    },
    "여의동2가": {
      "횡단보도": 8,
      "인도": 2
    },
    "팔복동3가": {
      "소화전": 1
    },
    "서완산동2가": {
      "횡단보도": 1
    },
    "교동": {
      "교차로 모퉁이": 1,
      "인도": 4,
      "기타": 3,
      "횡단보도": 2,
      "소화전": 1
    },
    "중앙동2가": {
      "인도": 7,
      "교차로 모퉁이": 1
    },
    "고랑동": {
      "인도": 1
    },
    "중앙동4가": {
      "인도": 1
    },
    "팔복동1가": {
      "인도": 2,
      "횡단보도": 2
    },
    "다가동1가": {
      "인도": 3
    },
    "풍남동1가": {
      "인도": 5,
      "교차로 모퉁이": 1
    },
    "풍남동2가": {
      "인도": 1
    }
  }
};

export const CMP_MONTH_WEEK_DONG_SUB = {
  "01": {
    "1": {
      "서신동": {
        "인도": 8,
        "소화전": 28,
        "횡단보도": 47,
        "교차로 모퉁이": 9,
        "기타": 2
      },
      "인후동1가": {
        "기타": 17
      },
      "효자동1가": {
        "인도": 5,
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "중동": {
        "기타": 8
      },
      "교동": {
        "소화전": 2,
        "인도": 2
      },
      "송천동2가": {
        "기타": 26
      },
      "서서학동": {
        "인도": 5,
        "횡단보도": 4,
        "소화전": 2,
        "기타": 1
      },
      "중화산동2가": {
        "횡단보도": 18,
        "소화전": 5,
        "인도": 9,
        "교차로 모퉁이": 10,
        "버스정류소": 1
      },
      "중노송동": {
        "횡단보도": 2,
        "인도": 5
      },
      "고사동": {
        "인도": 26
      },
      "만성동": {
        "기타": 8
      },
      "효자동2가": {
        "인도": 14,
        "횡단보도": 30,
        "교차로 모퉁이": 4
      },
      "평화동1가": {
        "버스정류소": 5,
        "횡단보도": 13,
        "인도": 3,
        "교차로 모퉁이": 26
      },
      "진북동": {
        "기타": 4
      },
      "우아동3가": {
        "기타": 12
      },
      "금암동": {
        "기타": 7
      },
      "효자동3가": {
        "교차로 모퉁이": 9,
        "횡단보도": 25,
        "소화전": 8,
        "인도": 22,
        "어린이보호구역": 1
      },
      "삼천동1가": {
        "인도": 3,
        "교차로 모퉁이": 4,
        "소화전": 1,
        "버스정류소": 2,
        "어린이보호구역": 1,
        "횡단보도": 2
      },
      "송천동1가": {
        "기타": 18
      },
      "덕진동2가": {
        "기타": 35
      },
      "경원동1가": {
        "인도": 1,
        "횡단보도": 1
      },
      "호성동1가": {
        "기타": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "동완산동": {
        "횡단보도": 1
      },
      "반월동": {
        "기타": 16
      },
      "다가동2가": {
        "인도": 1
      },
      "덕진동1가": {
        "기타": 10
      },
      "태평동": {
        "횡단보도": 2,
        "인도": 1
      },
      "평화동2가": {
        "인도": 3,
        "교차로 모퉁이": 5,
        "횡단보도": 15,
        "버스정류소": 2,
        "안전지대": 5
      },
      "경원동3가": {
        "횡단보도": 1
      },
      "여의동": {
        "기타": 2
      },
      "경원동2가": {
        "교차로 모퉁이": 3
      },
      "중화산동1가": {
        "횡단보도": 2
      },
      "인후동2가": {
        "기타": 6
      },
      "서노송동": {
        "인도": 5,
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "다가동4가": {
        "인도": 2
      },
      "팔복동2가": {
        "기타": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "풍남동2가": {
        "교차로 모퉁이": 1
      },
      "풍남동1가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "남노송동": {
        "인도": 3,
        "교차로 모퉁이": 2
      },
      "중앙동3가": {
        "교차로 모퉁이": 1
      },
      "다가동1가": {
        "인도": 2
      },
      "장동": {
        "기타": 1
      },
      "팔복동3가": {
        "기타": 1
      },
      "우아동2가": {
        "기타": 8
      },
      "우아동1가": {
        "기타": 4
      },
      "동서학동": {
        "횡단보도": 1
      },
      "중앙동2가": {
        "인도": 4
      },
      "호성동2가": {
        "기타": 1
      },
      "전동": {
        "인도": 1
      },
      "팔복동1가": {
        "기타": 1
      }
    },
    "2": {
      "중동": {
        "기타": 18
      },
      "호성동1가": {
        "기타": 3
      },
      "여의동": {
        "기타": 3
      },
      "서신동": {
        "인도": 6,
        "횡단보도": 44,
        "소화전": 23,
        "교차로 모퉁이": 33,
        "기타": 4,
        "버스정류소": 1
      },
      "효자동3가": {
        "횡단보도": 13,
        "소화전": 5,
        "인도": 20,
        "교차로 모퉁이": 6,
        "버스정류소": 1,
        "기타": 2
      },
      "만성동": {
        "기타": 33
      },
      "삼천동1가": {
        "인도": 14,
        "교차로 모퉁이": 5,
        "횡단보도": 9,
        "소화전": 1
      },
      "평화동1가": {
        "인도": 12,
        "교차로 모퉁이": 56,
        "횡단보도": 19,
        "버스정류소": 1,
        "소화전": 1
      },
      "중노송동": {
        "인도": 3
      },
      "효자동2가": {
        "횡단보도": 17,
        "인도": 14,
        "버스정류소": 2,
        "교차로 모퉁이": 8
      },
      "평화동2가": {
        "인도": 4,
        "횡단보도": 14,
        "버스정류소": 1,
        "교차로 모퉁이": 7
      },
      "장동": {
        "기타": 8
      },
      "우아동3가": {
        "기타": 13
      },
      "서노송동": {
        "인도": 9,
        "횡단보도": 5
      },
      "서서학동": {
        "소화전": 1,
        "교차로 모퉁이": 1,
        "인도": 1,
        "횡단보도": 1
      },
      "중화산동2가": {
        "횡단보도": 19,
        "인도": 9,
        "소화전": 5,
        "교차로 모퉁이": 6
      },
      "덕진동2가": {
        "기타": 8
      },
      "인후동1가": {
        "기타": 32
      },
      "금암동": {
        "기타": 14
      },
      "송천동2가": {
        "기타": 102
      },
      "효자동1가": {
        "인도": 5,
        "교차로 모퉁이": 4,
        "횡단보도": 5,
        "기타": 1
      },
      "덕진동1가": {
        "기타": 12
      },
      "우아동1가": {
        "기타": 3
      },
      "우아동2가": {
        "기타": 26
      },
      "송천동1가": {
        "기타": 14
      },
      "경원동3가": {
        "인도": 1,
        "횡단보도": 1,
        "교차로 모퉁이": 2
      },
      "서완산동1가": {
        "인도": 1
      },
      "태평동": {
        "횡단보도": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 4
      },
      "풍남동3가": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "인도": 4
      },
      "반월동": {
        "기타": 17
      },
      "인후동2가": {
        "기타": 7
      },
      "교동": {
        "인도": 1,
        "횡단보도": 1
      },
      "고사동": {
        "인도": 2,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "남노송동": {
        "인도": 2
      },
      "동완산동": {
        "횡단보도": 1
      },
      "팔복동1가": {
        "기타": 1
      },
      "여의동2가": {
        "기타": 2
      },
      "동서학동": {
        "횡단보도": 1,
        "교차로 모퉁이": 2
      },
      "풍남동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "경원동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "진북동": {
        "기타": 3
      },
      "전동": {
        "인도": 1
      },
      "팔복동2가": {
        "기타": 1
      }
    },
    "3": {
      "반월동": {
        "기타": 4
      },
      "평화동2가": {
        "교차로 모퉁이": 4,
        "횡단보도": 10,
        "인도": 8,
        "어린이보호구역": 4
      },
      "효자동3가": {
        "인도": 23,
        "교차로 모퉁이": 3,
        "횡단보도": 20,
        "소화전": 2,
        "기타": 4,
        "버스정류소": 1
      },
      "중동": {
        "기타": 18,
        "소화전": 1
      },
      "덕진동2가": {
        "기타": 19,
        "횡단보도": 10,
        "교차로 모퉁이": 2
      },
      "인후동2가": {
        "기타": 11,
        "인도": 2
      },
      "서노송동": {
        "횡단보도": 5,
        "교차로 모퉁이": 1,
        "인도": 5
      },
      "장동": {
        "기타": 4,
        "횡단보도": 2
      },
      "중화산동2가": {
        "인도": 25,
        "횡단보도": 25,
        "교차로 모퉁이": 19,
        "소화전": 4
      },
      "효자동2가": {
        "횡단보도": 50,
        "교차로 모퉁이": 16,
        "인도": 14,
        "소화전": 1
      },
      "경원동3가": {
        "횡단보도": 1,
        "인도": 3
      },
      "서신동": {
        "소화전": 20,
        "횡단보도": 51,
        "교차로 모퉁이": 32,
        "인도": 23,
        "기타": 6
      },
      "교동": {
        "인도": 1
      },
      "송천동1가": {
        "기타": 8,
        "소화전": 2,
        "교차로 모퉁이": 6,
        "횡단보도": 14,
        "인도": 3,
        "버스정류소": 1
      },
      "만성동": {
        "기타": 23,
        "횡단보도": 2
      },
      "송천동2가": {
        "기타": 51,
        "소화전": 6,
        "교차로 모퉁이": 4,
        "버스정류소": 3,
        "횡단보도": 28,
        "인도": 1
      },
      "우아동3가": {
        "기타": 20,
        "횡단보도": 4,
        "안전지대": 3
      },
      "태평동": {
        "인도": 1,
        "횡단보도": 1
      },
      "평화동1가": {
        "횡단보도": 6,
        "교차로 모퉁이": 10,
        "인도": 3
      },
      "인후동1가": {
        "기타": 24,
        "횡단보도": 17,
        "교차로 모퉁이": 6,
        "소화전": 5,
        "버스정류소": 4,
        "인도": 4
      },
      "서서학동": {
        "횡단보도": 5,
        "인도": 2,
        "버스정류소": 2
      },
      "호성동1가": {
        "기타": 2,
        "횡단보도": 1
      },
      "진북동": {
        "기타": 4,
        "인도": 1,
        "횡단보도": 2
      },
      "효자동1가": {
        "교차로 모퉁이": 5,
        "횡단보도": 6,
        "인도": 4,
        "어린이보호구역": 2
      },
      "삼천동1가": {
        "인도": 4,
        "횡단보도": 9,
        "교차로 모퉁이": 4
      },
      "금암동": {
        "기타": 11,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 5,
        "인도": 1
      },
      "중노송동": {
        "인도": 3,
        "횡단보도": 2
      },
      "우아동2가": {
        "기타": 4,
        "횡단보도": 34,
        "교차로 모퉁이": 3,
        "인도": 8,
        "소화전": 1,
        "버스정류소": 1
      },
      "팔복동1가": {
        "기타": 1,
        "횡단보도": 1
      },
      "덕진동1가": {
        "기타": 3,
        "인도": 1,
        "소화전": 4,
        "횡단보도": 1
      },
      "여의동": {
        "기타": 1
      },
      "팔복동3가": {
        "기타": 1
      },
      "동서학동": {
        "횡단보도": 1,
        "인도": 1
      },
      "다가동3가": {
        "인도": 3
      },
      "다가동1가": {
        "횡단보도": 1
      },
      "풍남동1가": {
        "교차로 모퉁이": 1
      },
      "서완산동1가": {
        "인도": 2
      },
      "여의동2가": {
        "인도": 2
      },
      "고사동": {
        "인도": 1
      },
      "남노송동": {
        "횡단보도": 1
      },
      "우아동1가": {
        "인도": 2,
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "중화산동1가": {
        "인도": 2
      },
      "산정동": {
        "횡단보도": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 1
      },
      "전동": {
        "인도": 1
      }
    },
    "4": {
      "평화동2가": {
        "어린이보호구역": 3,
        "인도": 3,
        "횡단보도": 8,
        "버스정류소": 1
      },
      "송천동1가": {
        "횡단보도": 19,
        "인도": 9,
        "소화전": 7,
        "교차로 모퉁이": 4
      },
      "서신동": {
        "횡단보도": 17,
        "소화전": 9,
        "교차로 모퉁이": 25,
        "기타": 1,
        "인도": 14,
        "버스정류소": 1
      },
      "송천동2가": {
        "교차로 모퉁이": 19,
        "횡단보도": 58,
        "소화전": 13,
        "인도": 6
      },
      "우아동3가": {
        "교차로 모퉁이": 14,
        "인도": 17,
        "횡단보도": 8,
        "안전지대": 5,
        "소화전": 1
      },
      "효자동2가": {
        "횡단보도": 17,
        "인도": 18,
        "버스정류소": 1,
        "교차로 모퉁이": 4
      },
      "인후동1가": {
        "인도": 11,
        "어린이보호구역": 12,
        "소화전": 7,
        "횡단보도": 20,
        "교차로 모퉁이": 7,
        "버스정류소": 5
      },
      "삼천동1가": {
        "교차로 모퉁이": 8,
        "횡단보도": 13,
        "인도": 11,
        "소화전": 2
      },
      "만성동": {
        "인도": 47,
        "횡단보도": 6
      },
      "금암동": {
        "교차로 모퉁이": 7,
        "횡단보도": 8,
        "어린이보호구역": 1,
        "인도": 5,
        "소화전": 1
      },
      "효자동1가": {
        "횡단보도": 8,
        "교차로 모퉁이": 2,
        "인도": 5,
        "버스정류소": 1,
        "소화전": 1
      },
      "효자동3가": {
        "교차로 모퉁이": 8,
        "인도": 14,
        "횡단보도": 13,
        "버스정류소": 5,
        "기타": 2,
        "어린이보호구역": 1,
        "소화전": 3
      },
      "인후동2가": {
        "인도": 4,
        "교차로 모퉁이": 3,
        "횡단보도": 11
      },
      "호성동1가": {
        "인도": 2,
        "횡단보도": 7
      },
      "중화산동2가": {
        "인도": 6,
        "횡단보도": 27,
        "교차로 모퉁이": 18,
        "소화전": 5
      },
      "중화산동1가": {
        "인도": 2
      },
      "서노송동": {
        "교차로 모퉁이": 4,
        "인도": 8,
        "횡단보도": 2,
        "버스정류소": 1
      },
      "덕진동2가": {
        "인도": 4,
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "태평동": {
        "횡단보도": 4,
        "인도": 2
      },
      "반월동": {
        "인도": 1,
        "횡단보도": 3
      },
      "경원동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "인도": 2
      },
      "우아동2가": {
        "소화전": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 15,
        "인도": 2
      },
      "덕진동1가": {
        "인도": 6,
        "횡단보도": 2,
        "소화전": 1,
        "교차로 모퉁이": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 6
      },
      "팔복동2가": {
        "교차로 모퉁이": 1,
        "소화전": 3,
        "횡단보도": 1
      },
      "장동": {
        "횡단보도": 4,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "중동": {
        "횡단보도": 20,
        "소화전": 1,
        "인도": 1
      },
      "중노송동": {
        "인도": 5,
        "횡단보도": 1
      },
      "경원동3가": {
        "인도": 3,
        "횡단보도": 5
      },
      "여의동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "고사동": {
        "인도": 3
      },
      "진북동": {
        "인도": 2,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "평화동1가": {
        "횡단보도": 9,
        "인도": 8,
        "교차로 모퉁이": 3,
        "버스정류소": 1
      },
      "다가동3가": {
        "교차로 모퉁이": 2,
        "인도": 2
      },
      "교동": {
        "인도": 3,
        "기타": 1,
        "횡단보도": 1
      },
      "다가동4가": {
        "인도": 3
      },
      "서서학동": {
        "횡단보도": 3,
        "인도": 2
      },
      "남노송동": {
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "풍남동1가": {
        "인도": 3,
        "횡단보도": 1
      },
      "전동": {
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 2
      },
      "산정동": {
        "교차로 모퉁이": 1
      },
      "동서학동": {
        "기타": 1
      },
      "풍남동2가": {
        "인도": 3,
        "횡단보도": 1
      },
      "우아동1가": {
        "횡단보도": 3
      },
      "풍남동3가": {
        "인도": 1
      }
    },
    "5": {
      "효자동1가": {
        "어린이보호구역": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 3,
        "인도": 2
      },
      "만성동": {
        "인도": 21,
        "횡단보도": 2
      },
      "우아동3가": {
        "교차로 모퉁이": 1,
        "소화전": 1,
        "인도": 3
      },
      "반월동": {
        "횡단보도": 14,
        "교차로 모퉁이": 3,
        "인도": 2
      },
      "인후동1가": {
        "횡단보도": 7,
        "어린이보호구역": 13,
        "교차로 모퉁이": 2,
        "인도": 6,
        "소화전": 2
      },
      "중동": {
        "인도": 2,
        "횡단보도": 3
      },
      "효자동2가": {
        "횡단보도": 10,
        "인도": 6,
        "교차로 모퉁이": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 1,
        "인도": 1,
        "횡단보도": 1
      },
      "서신동": {
        "교차로 모퉁이": 5,
        "횡단보도": 6,
        "인도": 6,
        "기타": 1,
        "소화전": 1
      },
      "서노송동": {
        "교차로 모퉁이": 1,
        "횡단보도": 8,
        "인도": 4
      },
      "풍남동2가": {
        "교차로 모퉁이": 1,
        "인도": 3
      },
      "서서학동": {
        "소화전": 1,
        "교차로 모퉁이": 1,
        "기타": 1,
        "인도": 2
      },
      "남노송동": {
        "횡단보도": 1
      },
      "금암동": {
        "횡단보도": 10,
        "인도": 3,
        "교차로 모퉁이": 2
      },
      "평화동2가": {
        "횡단보도": 12,
        "어린이보호구역": 2,
        "교차로 모퉁이": 4
      },
      "덕진동2가": {
        "횡단보도": 9,
        "교차로 모퉁이": 4
      },
      "송천동1가": {
        "인도": 8,
        "소화전": 4,
        "교차로 모퉁이": 3,
        "횡단보도": 4
      },
      "경원동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 5
      },
      "평화동1가": {
        "횡단보도": 4,
        "인도": 1,
        "버스정류소": 1,
        "교차로 모퉁이": 6
      },
      "삼천동1가": {
        "횡단보도": 2,
        "교차로 모퉁이": 3,
        "인도": 1
      },
      "전동": {
        "인도": 2
      },
      "송천동2가": {
        "횡단보도": 11,
        "인도": 4,
        "소화전": 2,
        "버스정류소": 3
      },
      "풍남동1가": {
        "인도": 3
      },
      "효자동3가": {
        "인도": 8,
        "횡단보도": 6,
        "기타": 1,
        "교차로 모퉁이": 1
      },
      "경원동3가": {
        "인도": 1
      },
      "호성동1가": {
        "횡단보도": 2
      },
      "인후동2가": {
        "횡단보도": 2,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "장동": {
        "인도": 1
      },
      "중노송동": {
        "인도": 1
      },
      "우아동2가": {
        "인도": 1,
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 3
      },
      "동완산동": {
        "버스정류소": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "고사동": {
        "인도": 1
      },
      "산정동": {
        "교차로 모퉁이": 1
      },
      "진북동": {
        "횡단보도": 1
      }
    }
  },
  "02": {
    "1": {
      "금암동": {
        "횡단보도": 7,
        "인도": 5,
        "교차로 모퉁이": 1
      },
      "송천동1가": {
        "인도": 15,
        "교차로 모퉁이": 13,
        "횡단보도": 19,
        "소화전": 7,
        "버스정류소": 1
      },
      "중동": {
        "횡단보도": 13,
        "인도": 1
      },
      "효자동2가": {
        "소화전": 3,
        "인도": 19,
        "횡단보도": 10,
        "교차로 모퉁이": 4
      },
      "삼천동1가": {
        "교차로 모퉁이": 7,
        "인도": 9,
        "횡단보도": 2
      },
      "인후동2가": {
        "횡단보도": 7,
        "인도": 5,
        "교차로 모퉁이": 3
      },
      "인후동1가": {
        "인도": 17,
        "횡단보도": 12,
        "어린이보호구역": 7,
        "버스정류소": 2,
        "소화전": 3,
        "교차로 모퉁이": 2
      },
      "경원동3가": {
        "횡단보도": 5
      },
      "서서학동": {
        "인도": 4,
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "기타": 1,
        "소화전": 1
      },
      "효자동3가": {
        "횡단보도": 18,
        "기타": 4,
        "인도": 25,
        "버스정류소": 9,
        "교차로 모퉁이": 8
      },
      "중노송동": {
        "인도": 8,
        "횡단보도": 3,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "송천동2가": {
        "버스정류소": 5,
        "인도": 1,
        "교차로 모퉁이": 10,
        "횡단보도": 19,
        "소화전": 5
      },
      "고사동": {
        "인도": 4,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "중화산동2가": {
        "인도": 9,
        "소화전": 3,
        "교차로 모퉁이": 7,
        "횡단보도": 19
      },
      "효자동1가": {
        "인도": 7,
        "횡단보도": 4
      },
      "전동": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "서신동": {
        "교차로 모퉁이": 7,
        "소화전": 5,
        "횡단보도": 16,
        "인도": 8,
        "기타": 1,
        "어린이보호구역": 1
      },
      "평화동2가": {
        "횡단보도": 21,
        "인도": 12,
        "교차로 모퉁이": 1,
        "버스정류소": 1,
        "기타": 1
      },
      "서노송동": {
        "인도": 6,
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "만성동": {
        "인도": 35,
        "횡단보도": 8,
        "교차로 모퉁이": 2
      },
      "장동": {
        "횡단보도": 4,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "평화동1가": {
        "횡단보도": 10,
        "인도": 2,
        "교차로 모퉁이": 17,
        "버스정류소": 2
      },
      "반월동": {
        "횡단보도": 20,
        "교차로 모퉁이": 3,
        "인도": 4
      },
      "남노송동": {
        "인도": 2
      },
      "덕진동2가": {
        "횡단보도": 42,
        "교차로 모퉁이": 14,
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 6,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 6
      },
      "동서학동": {
        "횡단보도": 1
      },
      "중앙동3가": {
        "인도": 1
      },
      "동완산동": {
        "횡단보도": 2
      },
      "우아동1가": {
        "횡단보도": 2
      },
      "우아동3가": {
        "인도": 4,
        "교차로 모퉁이": 4,
        "횡단보도": 1
      },
      "다가동1가": {
        "교차로 모퉁이": 1
      },
      "호성동1가": {
        "횡단보도": 2,
        "버스정류소": 1,
        "인도": 2
      },
      "태평동": {
        "인도": 3,
        "횡단보도": 1
      },
      "팔복동3가": {
        "횡단보도": 3
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "다가동4가": {
        "인도": 1
      },
      "고랑동": {
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "횡단보도": 1,
        "인도": 1
      },
      "산정동": {
        "횡단보도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "교동": {
        "인도": 9
      },
      "풍남동3가": {
        "인도": 2,
        "소화전": 1
      },
      "경원동2가": {
        "인도": 1,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "덕진동1가": {
        "횡단보도": 3,
        "인도": 2
      },
      "진북동": {
        "버스정류소": 1,
        "인도": 2
      },
      "여의동": {
        "횡단보도": 1
      },
      "중앙동4가": {
        "횡단보도": 1
      },
      "풍남동1가": {
        "인도": 3
      },
      "풍남동2가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 1
      },
      "삼천동2가": {
        "교차로 모퉁이": 2
      },
      "팔복동1가": {
        "횡단보도": 1
      }
    },
    "2": {
      "인후동1가": {
        "인도": 6,
        "어린이보호구역": 2,
        "교차로 모퉁이": 6,
        "횡단보도": 26,
        "버스정류소": 2,
        "소화전": 3
      },
      "우아동3가": {
        "인도": 1,
        "횡단보도": 4,
        "교차로 모퉁이": 4
      },
      "삼천동1가": {
        "교차로 모퉁이": 5,
        "횡단보도": 17,
        "소화전": 1,
        "버스정류소": 6,
        "인도": 1
      },
      "인후동2가": {
        "횡단보도": 5,
        "인도": 5,
        "교차로 모퉁이": 6,
        "버스정류소": 1
      },
      "평화동2가": {
        "횡단보도": 15,
        "교차로 모퉁이": 4,
        "인도": 2
      },
      "평화동1가": {
        "인도": 1,
        "교차로 모퉁이": 47,
        "버스정류소": 6,
        "횡단보도": 12
      },
      "동완산동": {
        "인도": 1
      },
      "중동": {
        "소화전": 1,
        "횡단보도": 1,
        "인도": 2
      },
      "송천동1가": {
        "횡단보도": 35,
        "인도": 8,
        "소화전": 4,
        "교차로 모퉁이": 13,
        "버스정류소": 1
      },
      "송천동2가": {
        "횡단보도": 68,
        "교차로 모퉁이": 12,
        "소화전": 9,
        "인도": 17
      },
      "여의동": {
        "횡단보도": 13,
        "교차로 모퉁이": 2
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "효자동1가": {
        "횡단보도": 7,
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "덕진동1가": {
        "인도": 3,
        "횡단보도": 3,
        "소화전": 5
      },
      "효자동2가": {
        "인도": 6,
        "횡단보도": 14,
        "교차로 모퉁이": 2,
        "소화전": 1
      },
      "서신동": {
        "인도": 4,
        "횡단보도": 17,
        "버스정류소": 2,
        "소화전": 4
      },
      "효자동3가": {
        "횡단보도": 14,
        "인도": 9,
        "교차로 모퉁이": 7,
        "버스정류소": 3,
        "기타": 5
      },
      "만성동": {
        "인도": 19,
        "횡단보도": 2,
        "소화전": 1
      },
      "중화산동1가": {
        "인도": 2,
        "소화전": 1
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 4
      },
      "금암동": {
        "횡단보도": 5,
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "중화산동2가": {
        "횡단보도": 24,
        "교차로 모퉁이": 6,
        "인도": 5
      },
      "덕진동2가": {
        "횡단보도": 24,
        "인도": 1,
        "교차로 모퉁이": 3
      },
      "우아동2가": {
        "횡단보도": 32,
        "교차로 모퉁이": 4,
        "버스정류소": 2
      },
      "반월동": {
        "횡단보도": 50,
        "교차로 모퉁이": 8,
        "인도": 5,
        "소화전": 2,
        "안전지대": 9
      },
      "다가동4가": {
        "인도": 3
      },
      "여의동2가": {
        "횡단보도": 18,
        "인도": 1
      },
      "팔복동1가": {
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "서서학동": {
        "횡단보도": 4,
        "인도": 4,
        "소화전": 1
      },
      "진북동": {
        "횡단보도": 1,
        "인도": 1,
        "소화전": 1
      },
      "중노송동": {
        "횡단보도": 2,
        "인도": 2
      },
      "전동": {
        "버스정류소": 1
      },
      "경원동2가": {
        "인도": 3,
        "횡단보도": 1,
        "교차로 모퉁이": 5
      },
      "풍남동1가": {
        "인도": 1,
        "소화전": 1
      },
      "교동": {
        "인도": 16
      },
      "동서학동": {
        "기타": 1
      },
      "장동": {
        "횡단보도": 6
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "태평동": {
        "횡단보도": 2
      },
      "산정동": {
        "횡단보도": 7,
        "인도": 1
      },
      "호성동1가": {
        "버스정류소": 1,
        "인도": 1,
        "횡단보도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "서노송동": {
        "인도": 5,
        "횡단보도": 2
      },
      "풍남동3가": {
        "인도": 2
      },
      "고사동": {
        "인도": 1
      },
      "중인동": {
        "교차로 모퉁이": 1
      },
      "서완산동1가": {
        "인도": 1
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "중앙동1가": {
        "인도": 1
      }
    },
    "3": {
      "평화동2가": {
        "어린이보호구역": 3,
        "횡단보도": 12,
        "인도": 9,
        "교차로 모퉁이": 10
      },
      "금암동": {
        "횡단보도": 7,
        "인도": 12,
        "교차로 모퉁이": 4
      },
      "인후동1가": {
        "횡단보도": 21,
        "어린이보호구역": 2,
        "인도": 4,
        "교차로 모퉁이": 3,
        "버스정류소": 2
      },
      "효자동2가": {
        "교차로 모퉁이": 6,
        "횡단보도": 22,
        "인도": 12,
        "소화전": 1
      },
      "인후동2가": {
        "횡단보도": 10,
        "인도": 6,
        "교차로 모퉁이": 2
      },
      "평화동1가": {
        "교차로 모퉁이": 27,
        "횡단보도": 5,
        "인도": 1
      },
      "서노송동": {
        "인도": 9,
        "교차로 모퉁이": 1,
        "횡단보도": 3
      },
      "서서학동": {
        "인도": 5,
        "횡단보도": 1
      },
      "반월동": {
        "인도": 3,
        "횡단보도": 13,
        "교차로 모퉁이": 3,
        "소화전": 1,
        "안전지대": 1
      },
      "송천동2가": {
        "횡단보도": 88,
        "소화전": 17,
        "교차로 모퉁이": 26,
        "인도": 17,
        "버스정류소": 4
      },
      "풍남동3가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "산정동": {
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "인도": 1,
        "횡단보도": 6,
        "소화전": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 9,
        "인도": 2,
        "횡단보도": 17,
        "소화전": 1
      },
      "우아동3가": {
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "서신동": {
        "횡단보도": 22,
        "인도": 11,
        "교차로 모퉁이": 6,
        "소화전": 1
      },
      "만성동": {
        "인도": 26,
        "소화전": 2,
        "횡단보도": 2
      },
      "효자동3가": {
        "인도": 23,
        "횡단보도": 30,
        "기타": 3,
        "교차로 모퉁이": 9,
        "소화전": 1,
        "버스정류소": 2
      },
      "송천동1가": {
        "어린이보호구역": 1,
        "소화전": 6,
        "교차로 모퉁이": 12,
        "횡단보도": 9,
        "인도": 4
      },
      "남노송동": {
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "중동": {
        "횡단보도": 7,
        "인도": 2,
        "교차로 모퉁이": 4
      },
      "팔복동1가": {
        "횡단보도": 4,
        "교차로 모퉁이": 3
      },
      "장동": {
        "횡단보도": 11,
        "인도": 2
      },
      "중앙동2가": {
        "인도": 1
      },
      "효자동1가": {
        "횡단보도": 2,
        "어린이보호구역": 1,
        "교차로 모퉁이": 5
      },
      "경원동3가": {
        "인도": 1,
        "횡단보도": 1
      },
      "삼천동2가": {
        "교차로 모퉁이": 3,
        "횡단보도": 1
      },
      "덕진동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "진북동": {
        "횡단보도": 3,
        "인도": 1
      },
      "삼천동1가": {
        "인도": 2,
        "횡단보도": 2,
        "교차로 모퉁이": 4
      },
      "경원동2가": {
        "교차로 모퉁이": 2
      },
      "전동": {
        "인도": 5,
        "횡단보도": 1
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "여의동2가": {
        "인도": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 4,
        "인도": 2
      },
      "여의동": {
        "교차로 모퉁이": 1,
        "횡단보도": 3
      },
      "고사동": {
        "인도": 3
      },
      "중화산동1가": {
        "인도": 4
      },
      "풍남동1가": {
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "인도": 1
      },
      "동완산동": {
        "횡단보도": 1
      },
      "다가동4가": {
        "인도": 1
      },
      "호성동1가": {
        "인도": 1
      },
      "태평동": {
        "횡단보도": 1
      },
      "덕진동2가": {
        "횡단보도": 10,
        "교차로 모퉁이": 3
      },
      "다가동1가": {
        "인도": 1,
        "횡단보도": 1
      },
      "중노송동": {
        "횡단보도": 1
      },
      "동서학동": {
        "횡단보도": 1
      }
    },
    "4": {
      "송천동2가": {
        "횡단보도": 121,
        "교차로 모퉁이": 29,
        "인도": 29,
        "어린이보호구역": 11,
        "소화전": 22,
        "버스정류소": 5
      },
      "고사동": {
        "인도": 6,
        "횡단보도": 1,
        "소화전": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 8,
        "버스정류소": 2,
        "횡단보도": 4,
        "인도": 3
      },
      "서노송동": {
        "인도": 2,
        "횡단보도": 3
      },
      "중동": {
        "횡단보도": 21,
        "버스정류소": 1,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "효자동3가": {
        "횡단보도": 21,
        "교차로 모퉁이": 9,
        "인도": 17,
        "기타": 3
      },
      "중노송동": {
        "횡단보도": 2
      },
      "효자동2가": {
        "횡단보도": 65,
        "인도": 33,
        "교차로 모퉁이": 12,
        "버스정류소": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 19,
        "인도": 10,
        "횡단보도": 38,
        "소화전": 3
      },
      "만성동": {
        "횡단보도": 4,
        "소화전": 2,
        "인도": 15
      },
      "우아동3가": {
        "횡단보도": 4,
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "여의동": {
        "횡단보도": 5,
        "교차로 모퉁이": 2
      },
      "풍남동3가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "평화동2가": {
        "횡단보도": 27,
        "교차로 모퉁이": 8,
        "인도": 13,
        "어린이보호구역": 6
      },
      "교동": {
        "인도": 3,
        "횡단보도": 1
      },
      "인후동1가": {
        "인도": 7,
        "버스정류소": 2,
        "교차로 모퉁이": 4,
        "횡단보도": 15,
        "소화전": 2
      },
      "삼천동1가": {
        "인도": 5,
        "버스정류소": 2,
        "횡단보도": 10,
        "교차로 모퉁이": 3
      },
      "경원동1가": {
        "교차로 모퉁이": 5
      },
      "송천동1가": {
        "인도": 6,
        "소화전": 10,
        "교차로 모퉁이": 13,
        "횡단보도": 16,
        "버스정류소": 2
      },
      "금암동": {
        "횡단보도": 7,
        "교차로 모퉁이": 3,
        "인도": 2
      },
      "효자동1가": {
        "인도": 3,
        "교차로 모퉁이": 3,
        "어린이보호구역": 1,
        "횡단보도": 3
      },
      "팔복동2가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "반월동": {
        "횡단보도": 25,
        "교차로 모퉁이": 3,
        "소화전": 3,
        "인도": 4,
        "안전지대": 3
      },
      "서신동": {
        "인도": 35,
        "횡단보도": 38,
        "교차로 모퉁이": 6,
        "소화전": 2,
        "버스정류소": 1
      },
      "풍남동1가": {
        "교차로 모퉁이": 2
      },
      "인후동2가": {
        "교차로 모퉁이": 3,
        "인도": 3,
        "버스정류소": 1,
        "횡단보도": 3
      },
      "장동": {
        "횡단보도": 7,
        "교차로 모퉁이": 2
      },
      "진북동": {
        "인도": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "여의동2가": {
        "횡단보도": 11
      },
      "산정동": {
        "횡단보도": 1
      },
      "호성동1가": {
        "횡단보도": 2,
        "버스정류소": 1
      },
      "태평동": {
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 20,
        "교차로 모퉁이": 4,
        "버스정류소": 2,
        "인도": 2
      },
      "팔복동1가": {
        "인도": 2
      },
      "중화산동1가": {
        "인도": 2
      },
      "덕진동2가": {
        "교차로 모퉁이": 6,
        "횡단보도": 2,
        "인도": 1
      },
      "전동": {
        "인도": 2
      },
      "다가동2가": {
        "인도": 2
      },
      "남노송동": {
        "횡단보도": 3,
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "동완산동": {
        "횡단보도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "다가동4가": {
        "횡단보도": 1,
        "소화전": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 2
      },
      "다가동3가": {
        "인도": 1
      },
      "경원동3가": {
        "횡단보도": 4
      },
      "덕진동1가": {
        "교차로 모퉁이": 1
      }
    },
    "5": {
      "팔복동1가": {
        "인도": 3
      },
      "서신동": {
        "횡단보도": 2,
        "인도": 7
      },
      "진북동": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "평화동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 3
      },
      "중화산동2가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "효자동2가": {
        "횡단보도": 1,
        "인도": 3
      },
      "평화동2가": {
        "횡단보도": 3,
        "인도": 1
      },
      "우아동3가": {
        "횡단보도": 1
      },
      "만성동": {
        "횡단보도": 1
      },
      "효자동3가": {
        "인도": 3,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "인후동1가": {
        "교차로 모퉁이": 2,
        "인도": 4,
        "횡단보도": 3,
        "어린이보호구역": 1
      },
      "송천동2가": {
        "버스정류소": 3,
        "횡단보도": 18,
        "소화전": 1,
        "교차로 모퉁이": 6,
        "어린이보호구역": 3,
        "인도": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 1
      },
      "호성동1가": {
        "횡단보도": 1
      },
      "서노송동": {
        "인도": 1
      },
      "교동": {
        "교차로 모퉁이": 1
      },
      "효자동1가": {
        "교차로 모퉁이": 2,
        "횡단보도": 2,
        "인도": 1
      },
      "송천동1가": {
        "인도": 1,
        "소화전": 1,
        "교차로 모퉁이": 4
      },
      "중화산동1가": {
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "금암동": {
        "횡단보도": 1,
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "인후동2가": {
        "인도": 1
      },
      "여의동2가": {
        "횡단보도": 3,
        "인도": 2
      },
      "풍남동3가": {
        "소화전": 1
      },
      "다가동3가": {
        "인도": 2
      },
      "중노송동": {
        "인도": 3
      },
      "반월동": {
        "횡단보도": 11,
        "교차로 모퉁이": 2,
        "소화전": 1,
        "인도": 3,
        "안전지대": 2
      }
    }
  },
  "03": {
    "1": {
      "고사동": {
        "인도": 6
      },
      "여의동": {
        "교차로 모퉁이": 1,
        "인도": 4,
        "횡단보도": 3,
        "버스정류소": 1
      },
      "삼천동1가": {
        "횡단보도": 8,
        "교차로 모퉁이": 4,
        "인도": 3
      },
      "평화동1가": {
        "교차로 모퉁이": 25,
        "횡단보도": 9,
        "버스정류소": 3,
        "인도": 2
      },
      "평화동2가": {
        "횡단보도": 32,
        "인도": 8,
        "교차로 모퉁이": 3
      },
      "송천동1가": {
        "교차로 모퉁이": 11,
        "횡단보도": 17,
        "인도": 2,
        "소화전": 4
      },
      "호성동1가": {
        "횡단보도": 2,
        "인도": 3,
        "버스정류소": 1
      },
      "중동": {
        "횡단보도": 10,
        "인도": 1,
        "교차로 모퉁이": 2,
        "소화전": 2
      },
      "효자동2가": {
        "횡단보도": 15,
        "인도": 19,
        "교차로 모퉁이": 7,
        "소화전": 4
      },
      "금암동": {
        "인도": 5,
        "횡단보도": 6,
        "교차로 모퉁이": 5,
        "버스정류소": 5,
        "안전지대": 4
      },
      "동서학동": {
        "횡단보도": 1,
        "인도": 5,
        "교차로 모퉁이": 2
      },
      "서신동": {
        "교차로 모퉁이": 21,
        "인도": 41,
        "횡단보도": 23,
        "버스정류소": 1,
        "소화전": 3
      },
      "전동": {
        "인도": 7,
        "버스정류소": 3
      },
      "장동": {
        "인도": 7,
        "교차로 모퉁이": 2,
        "횡단보도": 3
      },
      "교동": {
        "횡단보도": 1,
        "인도": 1
      },
      "송천동2가": {
        "횡단보도": 68,
        "소화전": 15,
        "인도": 21,
        "버스정류소": 1,
        "교차로 모퉁이": 47,
        "어린이보호구역": 1
      },
      "인후동1가": {
        "인도": 8,
        "횡단보도": 16,
        "교차로 모퉁이": 4,
        "소화전": 4,
        "버스정류소": 1
      },
      "진북동": {
        "인도": 1,
        "횡단보도": 3,
        "교차로 모퉁이": 6,
        "안전지대": 10,
        "버스정류소": 1
      },
      "반월동": {
        "안전지대": 5,
        "횡단보도": 14,
        "인도": 3,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "경원동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "풍남동3가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "효자동3가": {
        "횡단보도": 18,
        "인도": 27,
        "버스정류소": 5,
        "기타": 2,
        "교차로 모퉁이": 5,
        "소화전": 1
      },
      "덕진동2가": {
        "횡단보도": 2,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "우아동2가": {
        "횡단보도": 7,
        "교차로 모퉁이": 1
      },
      "효자동1가": {
        "횡단보도": 3,
        "인도": 1,
        "교차로 모퉁이": 5,
        "어린이보호구역": 1,
        "기타": 1
      },
      "풍남동2가": {
        "교차로 모퉁이": 1
      },
      "만성동": {
        "횡단보도": 9,
        "인도": 6,
        "교차로 모퉁이": 1
      },
      "덕진동1가": {
        "인도": 6,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "중화산동2가": {
        "횡단보도": 14,
        "소화전": 1,
        "교차로 모퉁이": 6,
        "버스정류소": 1,
        "인도": 4,
        "어린이보호구역": 3
      },
      "우아동3가": {
        "교차로 모퉁이": 2,
        "횡단보도": 4,
        "인도": 4
      },
      "남노송동": {
        "인도": 5,
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "인후동2가": {
        "교차로 모퉁이": 3,
        "인도": 5
      },
      "서서학동": {
        "기타": 1,
        "횡단보도": 1,
        "인도": 4,
        "소화전": 1
      },
      "여의동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "경원동3가": {
        "인도": 7,
        "횡단보도": 1
      },
      "팔복동1가": {
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "삼천동2가": {
        "버스정류소": 2
      },
      "서노송동": {
        "횡단보도": 2
      },
      "경원동2가": {
        "교차로 모퉁이": 1
      },
      "태평동": {
        "기타": 1,
        "어린이보호구역": 2
      },
      "중노송동": {
        "인도": 12,
        "횡단보도": 1
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "팔복동3가": {
        "횡단보도": 3,
        "인도": 1
      },
      "중앙동1가": {
        "교차로 모퉁이": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 1
      },
      "다가동4가": {
        "인도": 1
      }
    },
    "2": {
      "평화동2가": {
        "어린이보호구역": 3,
        "횡단보도": 20,
        "인도": 6,
        "교차로 모퉁이": 1
      },
      "평화동1가": {
        "횡단보도": 31,
        "교차로 모퉁이": 54,
        "인도": 7
      },
      "효자동1가": {
        "인도": 4,
        "버스정류소": 1,
        "교차로 모퉁이": 8,
        "횡단보도": 6,
        "기타": 1
      },
      "금암동": {
        "교차로 모퉁이": 7,
        "횡단보도": 7,
        "인도": 5,
        "어린이보호구역": 1
      },
      "남노송동": {
        "소화전": 1,
        "횡단보도": 1,
        "인도": 4
      },
      "중동": {
        "횡단보도": 20,
        "교차로 모퉁이": 4,
        "소화전": 2
      },
      "송천동1가": {
        "소화전": 9,
        "교차로 모퉁이": 13,
        "인도": 4,
        "횡단보도": 16,
        "버스정류소": 4
      },
      "팔복동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 4,
        "인도": 1
      },
      "효자동3가": {
        "인도": 24,
        "횡단보도": 22,
        "교차로 모퉁이": 8,
        "버스정류소": 3,
        "기타": 3
      },
      "인후동1가": {
        "인도": 6,
        "어린이보호구역": 2,
        "횡단보도": 7,
        "교차로 모퉁이": 2,
        "버스정류소": 1
      },
      "효자동2가": {
        "횡단보도": 8,
        "인도": 10,
        "교차로 모퉁이": 6,
        "어린이보호구역": 1,
        "소화전": 1
      },
      "우아동3가": {
        "인도": 10,
        "교차로 모퉁이": 2,
        "횡단보도": 4
      },
      "경원동1가": {
        "교차로 모퉁이": 9,
        "인도": 1
      },
      "삼천동1가": {
        "인도": 16,
        "교차로 모퉁이": 4,
        "소화전": 1,
        "횡단보도": 7,
        "버스정류소": 1
      },
      "중화산동2가": {
        "횡단보도": 38,
        "인도": 14,
        "교차로 모퉁이": 13,
        "버스정류소": 2,
        "어린이보호구역": 13,
        "소화전": 2
      },
      "경원동3가": {
        "인도": 4,
        "횡단보도": 2
      },
      "팔복동3가": {
        "인도": 1
      },
      "송천동2가": {
        "횡단보도": 116,
        "교차로 모퉁이": 56,
        "어린이보호구역": 9,
        "소화전": 16,
        "인도": 25,
        "버스정류소": 5,
        "안전지대": 3
      },
      "호성동1가": {
        "버스정류소": 1,
        "인도": 2,
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "덕진동2가": {
        "횡단보도": 7,
        "교차로 모퉁이": 6
      },
      "만성동": {
        "인도": 28,
        "횡단보도": 8,
        "교차로 모퉁이": 1
      },
      "반월동": {
        "인도": 8,
        "횡단보도": 19,
        "소화전": 2,
        "교차로 모퉁이": 4
      },
      "여의동2가": {
        "횡단보도": 7,
        "인도": 4
      },
      "장동": {
        "횡단보도": 15,
        "교차로 모퉁이": 2,
        "인도": 3,
        "소화전": 1
      },
      "진북동": {
        "인도": 1,
        "횡단보도": 1,
        "교차로 모퉁이": 2
      },
      "서신동": {
        "인도": 21,
        "횡단보도": 8,
        "교차로 모퉁이": 9,
        "기타": 7,
        "소화전": 2
      },
      "중화산동1가": {
        "교차로 모퉁이": 1,
        "어린이보호구역": 2
      },
      "풍남동1가": {
        "인도": 2
      },
      "인후동2가": {
        "교차로 모퉁이": 8,
        "횡단보도": 4
      },
      "전동": {
        "버스정류소": 1,
        "인도": 3
      },
      "서서학동": {
        "횡단보도": 3,
        "인도": 1,
        "소화전": 1
      },
      "덕진동1가": {
        "인도": 2,
        "소화전": 2,
        "횡단보도": 3
      },
      "서완산동2가": {
        "인도": 2
      },
      "태평동": {
        "횡단보도": 1,
        "인도": 1
      },
      "우아동2가": {
        "횡단보도": 8,
        "인도": 2,
        "교차로 모퉁이": 3
      },
      "고사동": {
        "횡단보도": 1,
        "인도": 1
      },
      "고랑동": {
        "횡단보도": 1
      },
      "중노송동": {
        "인도": 16,
        "횡단보도": 2
      },
      "동서학동": {
        "인도": 5,
        "횡단보도": 2
      },
      "서노송동": {
        "인도": 3,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "여의동": {
        "횡단보도": 6,
        "인도": 2,
        "버스정류소": 1
      },
      "교동": {
        "인도": 4
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "팔복동2가": {
        "횡단보도": 2,
        "버스정류소": 2
      },
      "삼천동2가": {
        "버스정류소": 1
      },
      "산정동": {
        "버스정류소": 1
      },
      "다가동2가": {
        "인도": 1
      }
    },
    "3": {
      "인후동1가": {
        "교차로 모퉁이": 4,
        "인도": 13,
        "횡단보도": 6,
        "버스정류소": 1,
        "소화전": 1,
        "어린이보호구역": 1
      },
      "효자동3가": {
        "횡단보도": 12,
        "인도": 34,
        "교차로 모퉁이": 5,
        "버스정류소": 2,
        "기타": 1
      },
      "송천동1가": {
        "소화전": 8,
        "횡단보도": 18,
        "교차로 모퉁이": 10,
        "인도": 6
      },
      "송천동2가": {
        "소화전": 12,
        "횡단보도": 41,
        "교차로 모퉁이": 23,
        "인도": 21,
        "버스정류소": 2
      },
      "평화동1가": {
        "횡단보도": 16,
        "교차로 모퉁이": 46,
        "인도": 8
      },
      "서신동": {
        "인도": 17,
        "소화전": 3,
        "교차로 모퉁이": 7,
        "횡단보도": 12,
        "버스정류소": 1,
        "어린이보호구역": 3,
        "기타": 1
      },
      "효자동2가": {
        "교차로 모퉁이": 3,
        "인도": 15,
        "횡단보도": 18,
        "버스정류소": 1
      },
      "평화동2가": {
        "횡단보도": 13,
        "교차로 모퉁이": 7,
        "인도": 3,
        "어린이보호구역": 1
      },
      "중노송동": {
        "횡단보도": 3,
        "인도": 7
      },
      "중화산동2가": {
        "어린이보호구역": 6,
        "교차로 모퉁이": 7,
        "인도": 5,
        "횡단보도": 14,
        "소화전": 3
      },
      "금암동": {
        "횡단보도": 6,
        "인도": 5,
        "교차로 모퉁이": 2
      },
      "덕진동2가": {
        "인도": 3,
        "교차로 모퉁이": 3,
        "횡단보도": 3
      },
      "팔복동3가": {
        "횡단보도": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 3
      },
      "고사동": {
        "인도": 3,
        "횡단보도": 1
      },
      "우아동3가": {
        "인도": 8,
        "교차로 모퉁이": 6,
        "횡단보도": 6,
        "버스정류소": 1
      },
      "산정동": {
        "인도": 1,
        "버스정류소": 1
      },
      "반월동": {
        "소화전": 4,
        "횡단보도": 10,
        "교차로 모퉁이": 1,
        "인도": 8
      },
      "다가동1가": {
        "인도": 2
      },
      "전동": {
        "인도": 2
      },
      "장동": {
        "횡단보도": 12,
        "인도": 3,
        "버스정류소": 1,
        "교차로 모퉁이": 2
      },
      "경원동2가": {
        "횡단보도": 1,
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "효자동1가": {
        "교차로 모퉁이": 8,
        "인도": 8,
        "횡단보도": 6
      },
      "팔복동1가": {
        "횡단보도": 2,
        "인도": 5,
        "교차로 모퉁이": 1
      },
      "풍남동3가": {
        "인도": 3
      },
      "만성동": {
        "교차로 모퉁이": 2,
        "인도": 17,
        "횡단보도": 1,
        "소화전": 1
      },
      "삼천동1가": {
        "횡단보도": 12,
        "교차로 모퉁이": 10,
        "인도": 6,
        "소화전": 1
      },
      "우아동2가": {
        "인도": 4,
        "횡단보도": 14,
        "교차로 모퉁이": 3,
        "버스정류소": 2
      },
      "남노송동": {
        "인도": 5
      },
      "서노송동": {
        "인도": 5,
        "횡단보도": 1
      },
      "호성동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "중동": {
        "횡단보도": 13,
        "교차로 모퉁이": 3,
        "소화전": 1
      },
      "중화산동1가": {
        "인도": 1
      },
      "덕진동1가": {
        "횡단보도": 12,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "교동": {
        "기타": 2
      },
      "용정동": {
        "버스정류소": 1
      },
      "인후동2가": {
        "교차로 모퉁이": 3,
        "횡단보도": 6,
        "인도": 1
      },
      "태평동": {
        "횡단보도": 1
      },
      "풍남동1가": {
        "인도": 2
      },
      "우아동1가": {
        "횡단보도": 5,
        "교차로 모퉁이": 1
      },
      "중앙동1가": {
        "교차로 모퉁이": 2
      },
      "여의동": {
        "횡단보도": 1
      },
      "서서학동": {
        "소화전": 1,
        "기타": 1,
        "교차로 모퉁이": 3,
        "횡단보도": 1,
        "인도": 1
      },
      "여의동2가": {
        "횡단보도": 4,
        "인도": 1
      },
      "진북동": {
        "횡단보도": 3,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "경원동3가": {
        "인도": 1
      },
      "다가동3가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "삼천동2가": {
        "교차로 모퉁이": 1
      },
      "동서학동": {
        "인도": 3
      },
      "팔복동2가": {
        "횡단보도": 3
      },
      "다가동4가": {
        "교차로 모퉁이": 1
      }
    },
    "4": {
      "삼천동1가": {
        "교차로 모퉁이": 15,
        "횡단보도": 17,
        "인도": 6,
        "버스정류소": 1,
        "소화전": 2
      },
      "중동": {
        "인도": 6,
        "횡단보도": 15,
        "교차로 모퉁이": 6,
        "소화전": 3
      },
      "인후동1가": {
        "소화전": 3,
        "횡단보도": 6,
        "어린이보호구역": 1,
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "평화동1가": {
        "횡단보도": 5,
        "교차로 모퉁이": 1,
        "인도": 2,
        "버스정류소": 3
      },
      "효자동2가": {
        "인도": 20,
        "교차로 모퉁이": 2,
        "버스정류소": 2,
        "소화전": 4,
        "횡단보도": 7
      },
      "송천동2가": {
        "횡단보도": 37,
        "교차로 모퉁이": 12,
        "소화전": 6,
        "버스정류소": 4,
        "인도": 9
      },
      "팔복동3가": {
        "횡단보도": 3
      },
      "팔복동2가": {
        "횡단보도": 2,
        "소화전": 1
      },
      "진북동": {
        "교차로 모퉁이": 3,
        "횡단보도": 1
      },
      "팔복동1가": {
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "중화산동2가": {
        "어린이보호구역": 2,
        "교차로 모퉁이": 5,
        "횡단보도": 17,
        "인도": 4,
        "버스정류소": 1,
        "소화전": 2
      },
      "서신동": {
        "인도": 14,
        "기타": 1,
        "횡단보도": 18,
        "버스정류소": 1,
        "교차로 모퉁이": 7
      },
      "우아동3가": {
        "인도": 4,
        "횡단보도": 2
      },
      "경원동2가": {
        "횡단보도": 1
      },
      "호성동2가": {
        "소화전": 1,
        "버스정류소": 1
      },
      "효자동3가": {
        "인도": 29,
        "횡단보도": 16,
        "교차로 모퉁이": 8,
        "버스정류소": 3,
        "기타": 3
      },
      "경원동1가": {
        "교차로 모퉁이": 5
      },
      "평화동2가": {
        "횡단보도": 24,
        "인도": 12,
        "어린이보호구역": 1,
        "교차로 모퉁이": 11
      },
      "금암동": {
        "횡단보도": 10,
        "인도": 19,
        "교차로 모퉁이": 4
      },
      "인후동2가": {
        "인도": 3,
        "교차로 모퉁이": 3,
        "횡단보도": 2
      },
      "만성동": {
        "인도": 6,
        "횡단보도": 5,
        "교차로 모퉁이": 1
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 4
      },
      "중앙동1가": {
        "교차로 모퉁이": 3
      },
      "서노송동": {
        "인도": 3,
        "횡단보도": 3
      },
      "장동": {
        "횡단보도": 11,
        "교차로 모퉁이": 2,
        "소화전": 1,
        "인도": 1
      },
      "교동": {
        "교차로 모퉁이": 1,
        "인도": 3,
        "횡단보도": 1
      },
      "전동": {
        "인도": 4
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "송천동1가": {
        "교차로 모퉁이": 17,
        "횡단보도": 17,
        "인도": 4,
        "소화전": 8
      },
      "효자동1가": {
        "교차로 모퉁이": 3,
        "기타": 2,
        "인도": 4,
        "횡단보도": 3
      },
      "반월동": {
        "소화전": 2,
        "교차로 모퉁이": 3,
        "횡단보도": 18,
        "인도": 8,
        "어린이보호구역": 1
      },
      "풍남동3가": {
        "소화전": 1,
        "버스정류소": 1
      },
      "여의동2가": {
        "횡단보도": 8,
        "인도": 6
      },
      "서서학동": {
        "인도": 4
      },
      "우아동2가": {
        "교차로 모퉁이": 3,
        "인도": 1,
        "횡단보도": 14
      },
      "서완산동1가": {
        "인도": 3,
        "소화전": 1
      },
      "덕진동1가": {
        "횡단보도": 8,
        "인도": 1,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "고사동": {
        "인도": 5,
        "교차로 모퉁이": 1
      },
      "호성동1가": {
        "횡단보도": 3,
        "버스정류소": 2
      },
      "우아동1가": {
        "횡단보도": 4
      },
      "여의동": {
        "교차로 모퉁이": 2,
        "버스정류소": 1
      },
      "남노송동": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "태평동": {
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "다가동1가": {
        "인도": 2
      },
      "산정동": {
        "소화전": 1
      },
      "덕진동2가": {
        "인도": 2
      },
      "다가동4가": {
        "교차로 모퉁이": 1
      },
      "전미동2가": {
        "횡단보도": 2
      }
    },
    "5": {
      "장동": {
        "교차로 모퉁이": 1,
        "소화전": 2,
        "횡단보도": 3,
        "인도": 2
      },
      "송천동1가": {
        "횡단보도": 9,
        "교차로 모퉁이": 8,
        "인도": 1,
        "소화전": 7
      },
      "송천동2가": {
        "교차로 모퉁이": 5,
        "횡단보도": 10,
        "소화전": 3
      },
      "중동": {
        "인도": 3,
        "횡단보도": 6,
        "소화전": 1
      },
      "효자동2가": {
        "횡단보도": 5,
        "인도": 4,
        "교차로 모퉁이": 2
      },
      "평화동1가": {
        "횡단보도": 13,
        "인도": 5,
        "교차로 모퉁이": 71
      },
      "고사동": {
        "인도": 2
      },
      "경원동3가": {
        "인도": 2,
        "횡단보도": 1
      },
      "여의동": {
        "버스정류소": 1,
        "횡단보도": 2,
        "인도": 7
      },
      "평화동2가": {
        "교차로 모퉁이": 6,
        "횡단보도": 2,
        "인도": 3,
        "버스정류소": 1,
        "기타": 1
      },
      "효자동3가": {
        "교차로 모퉁이": 7,
        "인도": 8,
        "횡단보도": 11,
        "기타": 1
      },
      "인후동1가": {
        "인도": 5,
        "버스정류소": 1,
        "횡단보도": 2,
        "소화전": 1
      },
      "만성동": {
        "인도": 4,
        "횡단보도": 1
      },
      "금암동": {
        "횡단보도": 2,
        "인도": 3
      },
      "전동": {
        "인도": 2
      },
      "중화산동2가": {
        "인도": 4,
        "횡단보도": 6,
        "소화전": 1,
        "버스정류소": 1,
        "교차로 모퉁이": 1
      },
      "덕진동2가": {
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "진북동": {
        "교차로 모퉁이": 1
      },
      "서신동": {
        "횡단보도": 10,
        "소화전": 4,
        "기타": 2,
        "교차로 모퉁이": 6
      },
      "반월동": {
        "횡단보도": 2,
        "소화전": 1,
        "인도": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 1
      },
      "효자동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "인후동2가": {
        "교차로 모퉁이": 3,
        "횡단보도": 2,
        "인도": 1
      },
      "산정동": {
        "횡단보도": 1
      },
      "우아동3가": {
        "버스정류소": 1,
        "횡단보도": 3
      },
      "삼천동1가": {
        "교차로 모퉁이": 1,
        "인도": 2,
        "횡단보도": 1
      },
      "남노송동": {
        "인도": 5,
        "횡단보도": 1
      },
      "중노송동": {
        "인도": 1
      },
      "호성동1가": {
        "인도": 2,
        "횡단보도": 12,
        "교차로 모퉁이": 8,
        "소화전": 1
      },
      "서노송동": {
        "횡단보도": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 2
      },
      "우아동2가": {
        "횡단보도": 4
      },
      "서서학동": {
        "횡단보도": 1,
        "소화전": 1,
        "버스정류소": 1
      },
      "팔복동3가": {
        "인도": 3,
        "횡단보도": 1
      },
      "경원동1가": {
        "인도": 2
      },
      "팔복동1가": {
        "횡단보도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "중앙동3가": {
        "인도": 1
      },
      "고랑동": {
        "횡단보도": 1
      }
    }
  },
  "04": {
    "1": {
      "송천동2가": {
        "교차로 모퉁이": 4,
        "횡단보도": 17,
        "소화전": 3,
        "인도": 3,
        "버스정류소": 3
      },
      "송천동1가": {
        "횡단보도": 13,
        "교차로 모퉁이": 5,
        "소화전": 5,
        "인도": 2
      },
      "금암동": {
        "교차로 모퉁이": 4,
        "횡단보도": 5,
        "인도": 6
      },
      "태평동": {
        "횡단보도": 1,
        "기타": 1
      },
      "평화동1가": {
        "인도": 16,
        "교차로 모퉁이": 108,
        "횡단보도": 30
      },
      "효자동2가": {
        "교차로 모퉁이": 14,
        "인도": 22,
        "횡단보도": 19
      },
      "전동": {
        "인도": 2,
        "횡단보도": 1,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "팔복동1가": {
        "인도": 1,
        "소화전": 1,
        "교차로 모퉁이": 2
      },
      "서신동": {
        "어린이보호구역": 1,
        "교차로 모퉁이": 12,
        "인도": 7,
        "횡단보도": 17,
        "기타": 1,
        "소화전": 2
      },
      "인후동1가": {
        "인도": 9,
        "횡단보도": 10,
        "버스정류소": 1,
        "교차로 모퉁이": 2
      },
      "효자동3가": {
        "횡단보도": 10,
        "교차로 모퉁이": 6,
        "인도": 15,
        "기타": 1,
        "소화전": 1,
        "버스정류소": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 4
      },
      "고사동": {
        "인도": 8
      },
      "동서학동": {
        "교차로 모퉁이": 1,
        "인도": 1,
        "횡단보도": 2
      },
      "만성동": {
        "소화전": 1,
        "인도": 6,
        "횡단보도": 10
      },
      "삼천동1가": {
        "교차로 모퉁이": 10,
        "횡단보도": 14,
        "인도": 11,
        "기타": 1,
        "소화전": 1
      },
      "평화동2가": {
        "인도": 2,
        "교차로 모퉁이": 17,
        "횡단보도": 13
      },
      "덕진동2가": {
        "횡단보도": 7,
        "인도": 3,
        "교차로 모퉁이": 2,
        "버스정류소": 1
      },
      "중화산동2가": {
        "횡단보도": 15,
        "인도": 6,
        "교차로 모퉁이": 4,
        "소화전": 4,
        "어린이보호구역": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 5
      },
      "반월동": {
        "횡단보도": 4,
        "소화전": 1,
        "인도": 2
      },
      "중노송동": {
        "인도": 10,
        "어린이보호구역": 1
      },
      "남노송동": {
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "덕진동1가": {
        "인도": 1,
        "교차로 모퉁이": 2,
        "횡단보도": 4
      },
      "서서학동": {
        "횡단보도": 4,
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "호성동1가": {
        "인도": 3,
        "횡단보도": 2
      },
      "우아동3가": {
        "교차로 모퉁이": 3,
        "횡단보도": 2,
        "인도": 3
      },
      "여의동": {
        "횡단보도": 4,
        "인도": 4
      },
      "장동": {
        "횡단보도": 11,
        "교차로 모퉁이": 2,
        "소화전": 2
      },
      "중동": {
        "횡단보도": 9,
        "교차로 모퉁이": 6,
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 6,
        "버스정류소": 1,
        "교차로 모퉁이": 2
      },
      "효자동1가": {
        "인도": 2,
        "횡단보도": 3,
        "교차로 모퉁이": 2
      },
      "서노송동": {
        "인도": 5,
        "횡단보도": 3
      },
      "팔복동3가": {
        "인도": 2
      },
      "여의동2가": {
        "횡단보도": 4
      },
      "전미동2가": {
        "인도": 2
      },
      "다가동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "인후동2가": {
        "교차로 모퉁이": 8,
        "횡단보도": 2,
        "인도": 5
      },
      "경원동3가": {
        "인도": 3,
        "횡단보도": 2
      },
      "서완산동1가": {
        "횡단보도": 1
      },
      "진북동": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "산정동": {
        "횡단보도": 6,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "풍남동3가": {
        "인도": 3,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "삼천동2가": {
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "풍남동1가": {
        "인도": 1
      },
      "교동": {
        "인도": 2,
        "기타": 2
      }
    },
    "2": {
      "서신동": {
        "인도": 3,
        "횡단보도": 18,
        "교차로 모퉁이": 5,
        "버스정류소": 1,
        "소화전": 2,
        "기타": 5
      },
      "효자동3가": {
        "인도": 21,
        "횡단보도": 11,
        "소화전": 1,
        "기타": 1,
        "교차로 모퉁이": 7,
        "버스정류소": 3
      },
      "중화산동2가": {
        "횡단보도": 6,
        "인도": 5,
        "교차로 모퉁이": 5,
        "버스정류소": 1
      },
      "삼천동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "진북동": {
        "횡단보도": 1,
        "인도": 2,
        "교차로 모퉁이": 2
      },
      "인후동1가": {
        "인도": 2,
        "횡단보도": 11,
        "교차로 모퉁이": 3
      },
      "서완산동1가": {
        "인도": 1
      },
      "장동": {
        "횡단보도": 21
      },
      "우아동1가": {
        "인도": 5,
        "횡단보도": 3
      },
      "효자동2가": {
        "횡단보도": 20,
        "인도": 27,
        "교차로 모퉁이": 8
      },
      "평화동2가": {
        "횡단보도": 21,
        "교차로 모퉁이": 14,
        "인도": 5
      },
      "여의동2가": {
        "횡단보도": 2,
        "인도": 1
      },
      "우아동2가": {
        "횡단보도": 8,
        "인도": 2
      },
      "평화동1가": {
        "횡단보도": 12,
        "교차로 모퉁이": 26,
        "버스정류소": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 4,
        "소화전": 2,
        "버스정류소": 3,
        "횡단보도": 6,
        "인도": 8
      },
      "만성동": {
        "인도": 9,
        "버스정류소": 1,
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "송천동1가": {
        "인도": 4,
        "교차로 모퉁이": 12,
        "횡단보도": 13,
        "소화전": 6
      },
      "다가동3가": {
        "인도": 1
      },
      "송천동2가": {
        "횡단보도": 26,
        "인도": 3,
        "소화전": 9,
        "교차로 모퉁이": 2
      },
      "덕진동2가": {
        "횡단보도": 4,
        "인도": 2,
        "버스정류소": 1
      },
      "반월동": {
        "소화전": 2,
        "횡단보도": 20,
        "교차로 모퉁이": 2,
        "인도": 10,
        "안전지대": 2,
        "어린이보호구역": 1
      },
      "우아동3가": {
        "버스정류소": 1,
        "횡단보도": 2,
        "인도": 2,
        "교차로 모퉁이": 2
      },
      "풍남동2가": {
        "인도": 4
      },
      "남노송동": {
        "횡단보도": 3
      },
      "중동": {
        "횡단보도": 22,
        "교차로 모퉁이": 6,
        "소화전": 1,
        "인도": 1
      },
      "풍남동3가": {
        "인도": 2,
        "소화전": 1
      },
      "중화산동1가": {
        "인도": 4
      },
      "금암동": {
        "인도": 3,
        "교차로 모퉁이": 2,
        "횡단보도": 3
      },
      "경원동1가": {
        "교차로 모퉁이": 1
      },
      "덕진동1가": {
        "인도": 5,
        "횡단보도": 5,
        "교차로 모퉁이": 1
      },
      "서노송동": {
        "인도": 3,
        "횡단보도": 2
      },
      "인후동2가": {
        "인도": 2,
        "교차로 모퉁이": 5,
        "버스정류소": 1,
        "횡단보도": 1
      },
      "호성동1가": {
        "횡단보도": 2,
        "인도": 1
      },
      "태평동": {
        "기타": 1,
        "횡단보도": 2,
        "인도": 1
      },
      "여의동": {
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "효자동1가": {
        "횡단보도": 8,
        "인도": 1
      },
      "교동": {
        "인도": 3,
        "기타": 2,
        "횡단보도": 2
      },
      "고사동": {
        "횡단보도": 1,
        "인도": 2
      },
      "경원동3가": {
        "인도": 3
      },
      "서서학동": {
        "인도": 3,
        "횡단보도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "동서학동": {
        "인도": 5,
        "교차로 모퉁이": 1
      },
      "중노송동": {
        "인도": 1
      },
      "팔복동1가": {
        "교차로 모퉁이": 1
      },
      "풍남동1가": {
        "횡단보도": 1
      },
      "경원동2가": {
        "횡단보도": 1
      },
      "동완산동": {
        "횡단보도": 1
      },
      "산정동": {
        "횡단보도": 1
      }
    },
    "3": {
      "서신동": {
        "횡단보도": 6,
        "기타": 7,
        "소화전": 2,
        "교차로 모퉁이": 12
      },
      "우아동2가": {
        "인도": 2,
        "횡단보도": 20,
        "교차로 모퉁이": 3
      },
      "효자동1가": {
        "교차로 모퉁이": 4,
        "횡단보도": 4,
        "인도": 2
      },
      "우아동3가": {
        "횡단보도": 5,
        "교차로 모퉁이": 4,
        "인도": 2,
        "안전지대": 5,
        "버스정류소": 1
      },
      "인후동1가": {
        "횡단보도": 16,
        "교차로 모퉁이": 6,
        "소화전": 1,
        "인도": 5,
        "버스정류소": 3
      },
      "호성동1가": {
        "어린이보호구역": 1,
        "인도": 3
      },
      "금암동": {
        "횡단보도": 8,
        "인도": 8,
        "어린이보호구역": 2,
        "교차로 모퉁이": 3
      },
      "송천동2가": {
        "인도": 13,
        "횡단보도": 50,
        "교차로 모퉁이": 20,
        "소화전": 7,
        "버스정류소": 1
      },
      "만성동": {
        "인도": 3,
        "횡단보도": 2
      },
      "평화동2가": {
        "횡단보도": 13,
        "교차로 모퉁이": 23,
        "인도": 5,
        "버스정류소": 2,
        "어린이보호구역": 1
      },
      "덕진동1가": {
        "횡단보도": 3,
        "소화전": 2,
        "교차로 모퉁이": 3
      },
      "효자동3가": {
        "기타": 2,
        "인도": 27,
        "횡단보도": 12,
        "교차로 모퉁이": 12,
        "버스정류소": 1
      },
      "진북동": {
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "팔복동3가": {
        "횡단보도": 3,
        "인도": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 14,
        "버스정류소": 7,
        "인도": 3
      },
      "효자동2가": {
        "인도": 22,
        "교차로 모퉁이": 11,
        "횡단보도": 13,
        "버스정류소": 1
      },
      "삼천동1가": {
        "횡단보도": 8,
        "교차로 모퉁이": 6,
        "인도": 7,
        "버스정류소": 2
      },
      "풍남동3가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1,
        "소화전": 1
      },
      "반월동": {
        "소화전": 1,
        "횡단보도": 19,
        "인도": 4
      },
      "서서학동": {
        "인도": 5,
        "교차로 모퉁이": 3,
        "소화전": 1,
        "횡단보도": 1
      },
      "동서학동": {
        "인도": 3,
        "횡단보도": 1
      },
      "인후동2가": {
        "횡단보도": 5,
        "교차로 모퉁이": 7,
        "인도": 1
      },
      "중동": {
        "교차로 모퉁이": 2,
        "횡단보도": 31,
        "소화전": 3,
        "인도": 2
      },
      "송천동1가": {
        "횡단보도": 20,
        "인도": 3,
        "소화전": 8,
        "버스정류소": 2,
        "교차로 모퉁이": 2
      },
      "전동": {
        "인도": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 4,
        "인도": 2
      },
      "장동": {
        "횡단보도": 11,
        "버스정류소": 1,
        "인도": 1
      },
      "남노송동": {
        "인도": 3
      },
      "서노송동": {
        "횡단보도": 1,
        "인도": 1
      },
      "여의동2가": {
        "인도": 2,
        "횡단보도": 3
      },
      "중화산동2가": {
        "횡단보도": 9,
        "교차로 모퉁이": 7,
        "소화전": 2,
        "인도": 2
      },
      "교동": {
        "횡단보도": 1,
        "교차로 모퉁이": 2,
        "버스정류소": 1
      },
      "동완산동": {
        "횡단보도": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 2
      },
      "여의동": {
        "횡단보도": 6,
        "교차로 모퉁이": 1,
        "버스정류소": 2
      },
      "팔복동1가": {
        "인도": 1,
        "교차로 모퉁이": 3
      },
      "팔복동2가": {
        "인도": 1
      },
      "고사동": {
        "인도": 2
      },
      "경원동3가": {
        "인도": 4,
        "횡단보도": 1
      },
      "중노송동": {
        "인도": 1,
        "횡단보도": 1
      },
      "중앙동1가": {
        "횡단보도": 1
      },
      "다가동2가": {
        "횡단보도": 1
      },
      "중화산동1가": {
        "인도": 1
      },
      "서완산동2가": {
        "인도": 1
      },
      "다가동3가": {
        "인도": 11,
        "교차로 모퉁이": 1
      },
      "중앙동3가": {
        "인도": 2
      },
      "다가동1가": {
        "인도": 4
      },
      "고랑동": {
        "인도": 1
      },
      "삼천동2가": {
        "인도": 1
      },
      "풍남동1가": {
        "인도": 1
      },
      "풍남동2가": {
        "인도": 2
      },
      "우아동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 1,
        "인도": 1
      }
    },
    "4": {
      "서노송동": {
        "교차로 모퉁이": 3,
        "인도": 6
      },
      "삼천동1가": {
        "횡단보도": 16,
        "교차로 모퉁이": 12,
        "소화전": 1,
        "인도": 1
      },
      "평화동2가": {
        "인도": 5,
        "횡단보도": 20,
        "교차로 모퉁이": 20,
        "어린이보호구역": 3,
        "버스정류소": 2
      },
      "전동": {
        "인도": 2,
        "버스정류소": 2,
        "횡단보도": 1
      },
      "중화산동2가": {
        "횡단보도": 18,
        "교차로 모퉁이": 4,
        "인도": 2,
        "버스정류소": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 4,
        "횡단보도": 2,
        "버스정류소": 2,
        "인도": 1
      },
      "송천동1가": {
        "인도": 9,
        "어린이보호구역": 2,
        "횡단보도": 18,
        "버스정류소": 2,
        "교차로 모퉁이": 9,
        "소화전": 6
      },
      "인후동1가": {
        "횡단보도": 10,
        "인도": 3,
        "버스정류소": 4,
        "교차로 모퉁이": 4,
        "어린이보호구역": 1,
        "소화전": 1
      },
      "송천동2가": {
        "교차로 모퉁이": 13,
        "횡단보도": 22,
        "소화전": 4,
        "인도": 8,
        "버스정류소": 1
      },
      "효자동1가": {
        "교차로 모퉁이": 5,
        "인도": 2,
        "횡단보도": 2
      },
      "효자동2가": {
        "횡단보도": 38,
        "인도": 25,
        "교차로 모퉁이": 14
      },
      "서신동": {
        "횡단보도": 30,
        "교차로 모퉁이": 23,
        "기타": 1,
        "어린이보호구역": 2,
        "소화전": 7,
        "인도": 2
      },
      "효자동3가": {
        "교차로 모퉁이": 11,
        "인도": 21,
        "횡단보도": 18
      },
      "경원동2가": {
        "교차로 모퉁이": 2
      },
      "중앙동2가": {
        "인도": 2
      },
      "우아동3가": {
        "버스정류소": 2,
        "인도": 6,
        "교차로 모퉁이": 5,
        "횡단보도": 4
      },
      "장동": {
        "인도": 2,
        "횡단보도": 11
      },
      "금암동": {
        "횡단보도": 6,
        "교차로 모퉁이": 1,
        "인도": 9
      },
      "만성동": {
        "인도": 16,
        "횡단보도": 5,
        "교차로 모퉁이": 2
      },
      "여의동2가": {
        "횡단보도": 4
      },
      "호성동1가": {
        "인도": 2,
        "횡단보도": 9
      },
      "중노송동": {
        "인도": 3
      },
      "인후동2가": {
        "인도": 2,
        "횡단보도": 11,
        "교차로 모퉁이": 6
      },
      "서서학동": {
        "인도": 2
      },
      "다가동3가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "진북동": {
        "교차로 모퉁이": 3,
        "횡단보도": 2,
        "인도": 1
      },
      "중화산동1가": {
        "인도": 5
      },
      "동완산동": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "우아동2가": {
        "횡단보도": 6,
        "인도": 1,
        "교차로 모퉁이": 3
      },
      "여의동": {
        "버스정류소": 1,
        "어린이보호구역": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 5
      },
      "경원동3가": {
        "인도": 1,
        "횡단보도": 2
      },
      "팔복동3가": {
        "인도": 3,
        "횡단보도": 3
      },
      "반월동": {
        "횡단보도": 4,
        "교차로 모퉁이": 1,
        "소화전": 2
      },
      "중동": {
        "횡단보도": 11,
        "버스정류소": 1,
        "소화전": 5,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "우아동1가": {
        "횡단보도": 4
      },
      "남노송동": {
        "인도": 3
      },
      "동서학동": {
        "인도": 2
      },
      "풍남동3가": {
        "인도": 2,
        "소화전": 1
      },
      "산정동": {
        "인도": 1
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "서완산동1가": {
        "교차로 모퉁이": 1
      },
      "다가동2가": {
        "인도": 1
      },
      "경원동1가": {
        "인도": 1
      },
      "덕진동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 7,
        "인도": 1
      },
      "전미동2가": {
        "버스정류소": 1
      },
      "교동": {
        "기타": 1,
        "인도": 2
      },
      "덕진동2가": {
        "교차로 모퉁이": 1
      },
      "팔복동1가": {
        "횡단보도": 7,
        "인도": 1
      },
      "풍남동2가": {
        "인도": 2
      },
      "고사동": {
        "인도": 2
      },
      "태평동": {
        "횡단보도": 1
      }
    },
    "5": {
      "삼천동1가": {
        "인도": 2,
        "횡단보도": 2,
        "소화전": 1
      },
      "서신동": {
        "횡단보도": 6,
        "기타": 1,
        "소화전": 2,
        "교차로 모퉁이": 3
      },
      "금암동": {
        "횡단보도": 6,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "효자동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 2,
        "인도": 2
      },
      "평화동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 3
      },
      "송천동1가": {
        "인도": 2,
        "횡단보도": 6,
        "소화전": 1
      },
      "중동": {
        "횡단보도": 4,
        "교차로 모퉁이": 2,
        "소화전": 2
      },
      "송천동2가": {
        "횡단보도": 11,
        "소화전": 2,
        "교차로 모퉁이": 5,
        "버스정류소": 1
      },
      "효자동3가": {
        "횡단보도": 3,
        "인도": 6,
        "교차로 모퉁이": 2,
        "소화전": 1
      },
      "중화산동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "우아동3가": {
        "인도": 3,
        "횡단보도": 1,
        "안전지대": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 2
      },
      "인후동1가": {
        "인도": 5,
        "횡단보도": 1,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "팔복동1가": {
        "인도": 2,
        "횡단보도": 1
      },
      "호성동1가": {
        "인도": 1,
        "횡단보도": 4
      },
      "서서학동": {
        "횡단보도": 1,
        "버스정류소": 1
      },
      "효자동1가": {
        "교차로 모퉁이": 4,
        "인도": 2
      },
      "반월동": {
        "교차로 모퉁이": 3,
        "횡단보도": 7,
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 2,
        "인도": 2
      },
      "덕진동2가": {
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "평화동1가": {
        "횡단보도": 4
      },
      "만성동": {
        "인도": 2
      },
      "남노송동": {
        "횡단보도": 1
      },
      "장동": {
        "인도": 1,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "서노송동": {
        "인도": 2,
        "소화전": 1
      },
      "동서학동": {
        "인도": 2
      },
      "원당동": {
        "안전지대": 1
      },
      "중화산동1가": {
        "인도": 1
      },
      "고랑동": {
        "버스정류소": 1
      },
      "진북동": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 2
      },
      "덕진동1가": {
        "횡단보도": 1
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "인후동2가": {
        "횡단보도": 1
      }
    }
  },
  "05": {
    "1": {
      "효자동3가": {
        "교차로 모퉁이": 17,
        "횡단보도": 10,
        "인도": 9,
        "버스정류소": 1,
        "기타": 1
      },
      "효자동2가": {
        "교차로 모퉁이": 9,
        "인도": 20,
        "횡단보도": 34
      },
      "송천동1가": {
        "교차로 모퉁이": 11,
        "횡단보도": 14,
        "소화전": 6,
        "인도": 8,
        "버스정류소": 1
      },
      "평화동2가": {
        "교차로 모퉁이": 15,
        "횡단보도": 35,
        "안전지대": 3,
        "어린이보호구역": 4,
        "인도": 3,
        "버스정류소": 3,
        "기타": 1
      },
      "덕진동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "우아동3가": {
        "횡단보도": 6,
        "인도": 8,
        "교차로 모퉁이": 4,
        "소화전": 1,
        "버스정류소": 1
      },
      "효자동1가": {
        "횡단보도": 13,
        "교차로 모퉁이": 4,
        "소화전": 2,
        "인도": 3
      },
      "서노송동": {
        "인도": 6,
        "횡단보도": 1
      },
      "송천동2가": {
        "횡단보도": 24,
        "인도": 8,
        "교차로 모퉁이": 4,
        "소화전": 2
      },
      "중노송동": {
        "횡단보도": 2
      },
      "삼천동1가": {
        "교차로 모퉁이": 11,
        "횡단보도": 14,
        "인도": 1
      },
      "진북동": {
        "교차로 모퉁이": 2,
        "횡단보도": 5,
        "인도": 4,
        "버스정류소": 1
      },
      "중동": {
        "횡단보도": 16,
        "교차로 모퉁이": 2,
        "소화전": 2
      },
      "팔복동2가": {
        "횡단보도": 3
      },
      "풍남동3가": {
        "인도": 2,
        "소화전": 5,
        "교차로 모퉁이": 1
      },
      "남노송동": {
        "교차로 모퉁이": 2,
        "인도": 3
      },
      "중화산동2가": {
        "교차로 모퉁이": 4,
        "소화전": 6,
        "횡단보도": 3,
        "인도": 2
      },
      "우아동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 18
      },
      "인후동2가": {
        "교차로 모퉁이": 11,
        "횡단보도": 4,
        "인도": 5
      },
      "장동": {
        "교차로 모퉁이": 1,
        "횡단보도": 4
      },
      "서신동": {
        "교차로 모퉁이": 9,
        "기타": 2,
        "소화전": 5,
        "횡단보도": 18
      },
      "금암동": {
        "인도": 4,
        "횡단보도": 6,
        "버스정류소": 1,
        "교차로 모퉁이": 2
      },
      "반월동": {
        "소화전": 1,
        "횡단보도": 7,
        "교차로 모퉁이": 3
      },
      "서서학동": {
        "인도": 4,
        "교차로 모퉁이": 3,
        "횡단보도": 1,
        "소화전": 1
      },
      "인후동1가": {
        "횡단보도": 22,
        "버스정류소": 3,
        "인도": 7,
        "소화전": 2,
        "어린이보호구역": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 21,
        "횡단보도": 5,
        "소화전": 1,
        "버스정류소": 1
      },
      "팔복동1가": {
        "인도": 4,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "여의동": {
        "인도": 2,
        "버스정류소": 3,
        "교차로 모퉁이": 2
      },
      "경원동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 5,
        "인도": 2,
        "버스정류소": 1
      },
      "동서학동": {
        "인도": 1
      },
      "만성동": {
        "횡단보도": 2,
        "인도": 4
      },
      "덕진동2가": {
        "교차로 모퉁이": 1
      },
      "고사동": {
        "인도": 1,
        "횡단보도": 1
      },
      "다가동2가": {
        "인도": 1
      },
      "경원동3가": {
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "우아동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "팔복동3가": {
        "인도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "풍남동1가": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "중화산동1가": {
        "인도": 1
      },
      "교동": {
        "인도": 2,
        "기타": 1
      },
      "호성동1가": {
        "횡단보도": 3,
        "인도": 1
      },
      "팔복동4가": {
        "버스정류소": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "전동": {
        "인도": 1
      }
    },
    "2": {
      "삼천동1가": {
        "교차로 모퉁이": 15,
        "인도": 5,
        "횡단보도": 47,
        "소화전": 1
      },
      "서신동": {
        "교차로 모퉁이": 10,
        "횡단보도": 22,
        "소화전": 2,
        "인도": 2,
        "기타": 5
      },
      "효자동2가": {
        "인도": 29,
        "횡단보도": 22,
        "교차로 모퉁이": 6,
        "버스정류소": 1
      },
      "진북동": {
        "횡단보도": 3
      },
      "송천동1가": {
        "교차로 모퉁이": 13,
        "횡단보도": 20,
        "인도": 5,
        "소화전": 6,
        "버스정류소": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 1,
        "소화전": 1,
        "인도": 1
      },
      "우아동3가": {
        "교차로 모퉁이": 4,
        "인도": 13,
        "횡단보도": 3
      },
      "금암동": {
        "어린이보호구역": 2,
        "교차로 모퉁이": 1,
        "인도": 10,
        "횡단보도": 4
      },
      "효자동3가": {
        "인도": 7,
        "횡단보도": 11,
        "교차로 모퉁이": 5,
        "기타": 4,
        "소화전": 1,
        "버스정류소": 1
      },
      "덕진동2가": {
        "횡단보도": 6
      },
      "인후동2가": {
        "인도": 3,
        "교차로 모퉁이": 6,
        "횡단보도": 6
      },
      "효자동1가": {
        "교차로 모퉁이": 4,
        "횡단보도": 15,
        "인도": 5,
        "소화전": 1
      },
      "송천동2가": {
        "교차로 모퉁이": 10,
        "소화전": 4,
        "인도": 4,
        "횡단보도": 32,
        "버스정류소": 1
      },
      "인후동1가": {
        "인도": 6,
        "어린이보호구역": 1,
        "횡단보도": 10,
        "교차로 모퉁이": 7
      },
      "덕진동1가": {
        "교차로 모퉁이": 1,
        "인도": 1,
        "횡단보도": 3
      },
      "중화산동2가": {
        "교차로 모퉁이": 6,
        "인도": 1,
        "횡단보도": 12,
        "소화전": 1,
        "어린이보호구역": 1
      },
      "중동": {
        "횡단보도": 22,
        "교차로 모퉁이": 5,
        "인도": 1,
        "소화전": 2
      },
      "태평동": {
        "횡단보도": 2
      },
      "여의동2가": {
        "횡단보도": 11,
        "인도": 1
      },
      "팔복동3가": {
        "횡단보도": 1,
        "인도": 1
      },
      "호성동1가": {
        "횡단보도": 12,
        "인도": 2
      },
      "우아동1가": {
        "횡단보도": 9,
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 16,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "평화동2가": {
        "횡단보도": 18,
        "어린이보호구역": 3,
        "교차로 모퉁이": 6,
        "인도": 2,
        "버스정류소": 2
      },
      "팔복동2가": {
        "인도": 2,
        "횡단보도": 1
      },
      "경원동3가": {
        "인도": 1,
        "횡단보도": 4
      },
      "만성동": {
        "횡단보도": 2,
        "인도": 8
      },
      "팔복동1가": {
        "인도": 1,
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "전동": {
        "인도": 1
      },
      "장동": {
        "횡단보도": 14,
        "소화전": 1
      },
      "중노송동": {
        "인도": 2
      },
      "경원동1가": {
        "횡단보도": 1
      },
      "평화동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 5,
        "인도": 2,
        "버스정류소": 4
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "다가동1가": {
        "횡단보도": 1,
        "인도": 1
      },
      "교동": {
        "인도": 4,
        "기타": 1
      },
      "반월동": {
        "횡단보도": 19,
        "인도": 8,
        "소화전": 3,
        "교차로 모퉁이": 2
      },
      "서노송동": {
        "인도": 1
      },
      "풍남동3가": {
        "인도": 3,
        "소화전": 2
      },
      "경원동2가": {
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "동서학동": {
        "인도": 1,
        "횡단보도": 1
      },
      "서서학동": {
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "산정동": {
        "인도": 1
      },
      "고사동": {
        "인도": 3
      },
      "여의동": {
        "횡단보도": 2
      },
      "남노송동": {
        "인도": 1
      }
    },
    "3": {
      "서신동": {
        "횡단보도": 11,
        "버스정류소": 3,
        "인도": 2,
        "어린이보호구역": 1,
        "교차로 모퉁이": 11,
        "기타": 1,
        "소화전": 1
      },
      "효자동2가": {
        "횡단보도": 43,
        "교차로 모퉁이": 18,
        "인도": 24,
        "소화전": 1
      },
      "송천동1가": {
        "횡단보도": 20,
        "인도": 6,
        "교차로 모퉁이": 16,
        "소화전": 7,
        "버스정류소": 1
      },
      "풍남동3가": {
        "인도": 4,
        "소화전": 1
      },
      "팔복동3가": {
        "인도": 2,
        "횡단보도": 6,
        "교차로 모퉁이": 2
      },
      "중동": {
        "횡단보도": 12,
        "교차로 모퉁이": 2,
        "소화전": 2,
        "버스정류소": 1
      },
      "교동": {
        "횡단보도": 7,
        "인도": 8,
        "기타": 3
      },
      "동서학동": {
        "교차로 모퉁이": 2,
        "횡단보도": 3,
        "인도": 2
      },
      "남노송동": {
        "횡단보도": 1,
        "소화전": 1
      },
      "경원동3가": {
        "횡단보도": 1,
        "인도": 1
      },
      "서노송동": {
        "횡단보도": 2,
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "평화동1가": {
        "횡단보도": 13,
        "인도": 8,
        "교차로 모퉁이": 52,
        "소화전": 2
      },
      "우아동3가": {
        "인도": 14,
        "교차로 모퉁이": 6,
        "횡단보도": 7
      },
      "덕진동1가": {
        "인도": 3,
        "횡단보도": 5,
        "교차로 모퉁이": 2
      },
      "삼천동1가": {
        "횡단보도": 28,
        "교차로 모퉁이": 7,
        "인도": 3,
        "소화전": 1,
        "버스정류소": 1
      },
      "우아동2가": {
        "버스정류소": 1,
        "교차로 모퉁이": 4,
        "횡단보도": 6,
        "인도": 1
      },
      "인후동2가": {
        "교차로 모퉁이": 13,
        "인도": 2,
        "횡단보도": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 6,
        "인도": 3,
        "소화전": 1
      },
      "인후동1가": {
        "인도": 7,
        "횡단보도": 12,
        "버스정류소": 2,
        "교차로 모퉁이": 3,
        "소화전": 3
      },
      "우아동1가": {
        "횡단보도": 9,
        "인도": 1
      },
      "반월동": {
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "금암동": {
        "교차로 모퉁이": 6,
        "횡단보도": 7,
        "인도": 4,
        "소화전": 1,
        "버스정류소": 1
      },
      "효자동3가": {
        "횡단보도": 26,
        "기타": 3,
        "교차로 모퉁이": 12,
        "인도": 14,
        "소화전": 3,
        "어린이보호구역": 1
      },
      "고사동": {
        "교차로 모퉁이": 1,
        "소화전": 2,
        "인도": 2
      },
      "여의동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "평화동2가": {
        "교차로 모퉁이": 21,
        "횡단보도": 27,
        "인도": 4,
        "버스정류소": 1,
        "소화전": 5
      },
      "팔복동2가": {
        "인도": 1
      },
      "경원동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 5
      },
      "효자동1가": {
        "버스정류소": 1,
        "횡단보도": 7,
        "교차로 모퉁이": 5,
        "인도": 1,
        "소화전": 1
      },
      "여의동2가": {
        "버스정류소": 2,
        "교차로 모퉁이": 1,
        "횡단보도": 3,
        "인도": 1,
        "소화전": 1
      },
      "삼천동2가": {
        "인도": 1
      },
      "중노송동": {
        "횡단보도": 5,
        "인도": 3,
        "교차로 모퉁이": 2
      },
      "중화산동2가": {
        "횡단보도": 10,
        "교차로 모퉁이": 4,
        "인도": 2,
        "소화전": 3
      },
      "팔복동1가": {
        "횡단보도": 4,
        "교차로 모퉁이": 3,
        "인도": 2
      },
      "송천동2가": {
        "횡단보도": 27,
        "소화전": 10,
        "교차로 모퉁이": 10,
        "인도": 8
      },
      "서서학동": {
        "인도": 4,
        "횡단보도": 1
      },
      "고랑동": {
        "인도": 1
      },
      "진북동": {
        "교차로 모퉁이": 2
      },
      "만성동": {
        "교차로 모퉁이": 1,
        "인도": 3,
        "횡단보도": 3
      },
      "경원동2가": {
        "교차로 모퉁이": 1
      },
      "태평동": {
        "횡단보도": 6
      },
      "장동": {
        "횡단보도": 7,
        "인도": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 2,
        "횡단보도": 2,
        "인도": 1
      },
      "전동": {
        "인도": 1,
        "소화전": 1
      }
    },
    "4": {
      "삼천동1가": {
        "교차로 모퉁이": 10,
        "인도": 7,
        "횡단보도": 6
      },
      "여의동2가": {
        "횡단보도": 2,
        "인도": 1
      },
      "우아동3가": {
        "어린이보호구역": 1,
        "횡단보도": 3,
        "교차로 모퉁이": 4,
        "인도": 11
      },
      "평화동2가": {
        "횡단보도": 14,
        "소화전": 10,
        "교차로 모퉁이": 12,
        "기타": 1,
        "인도": 6,
        "버스정류소": 1,
        "안전지대": 3
      },
      "송천동2가": {
        "인도": 10,
        "횡단보도": 24,
        "소화전": 10,
        "버스정류소": 4,
        "교차로 모퉁이": 6
      },
      "상림동": {
        "인도": 1
      },
      "효자동3가": {
        "인도": 14,
        "횡단보도": 9,
        "교차로 모퉁이": 6,
        "소화전": 1,
        "버스정류소": 1
      },
      "인후동1가": {
        "횡단보도": 14,
        "버스정류소": 1,
        "소화전": 1,
        "교차로 모퉁이": 6,
        "인도": 4,
        "어린이보호구역": 1
      },
      "효자동2가": {
        "횡단보도": 42,
        "인도": 48,
        "교차로 모퉁이": 18
      },
      "덕진동2가": {
        "교차로 모퉁이": 13,
        "횡단보도": 12,
        "소화전": 2,
        "인도": 6
      },
      "만성동": {
        "인도": 6,
        "횡단보도": 2,
        "소화전": 1
      },
      "동서학동": {
        "인도": 8,
        "횡단보도": 2,
        "기타": 1
      },
      "금암동": {
        "횡단보도": 7,
        "인도": 22,
        "교차로 모퉁이": 2,
        "어린이보호구역": 1
      },
      "팔복동2가": {
        "소화전": 1
      },
      "풍남동3가": {
        "인도": 2
      },
      "팔복동1가": {
        "횡단보도": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 7,
        "횡단보도": 17,
        "소화전": 2,
        "인도": 1
      },
      "경원동1가": {
        "횡단보도": 1,
        "인도": 3,
        "교차로 모퉁이": 4
      },
      "평화동1가": {
        "인도": 5,
        "교차로 모퉁이": 17,
        "횡단보도": 5,
        "버스정류소": 1
      },
      "중화산동1가": {
        "인도": 2,
        "교차로 모퉁이": 2
      },
      "송천동1가": {
        "소화전": 7,
        "횡단보도": 18,
        "교차로 모퉁이": 11,
        "버스정류소": 3,
        "인도": 3
      },
      "호성동1가": {
        "횡단보도": 2,
        "버스정류소": 3,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "서신동": {
        "교차로 모퉁이": 19,
        "소화전": 2,
        "횡단보도": 50,
        "인도": 11,
        "기타": 4,
        "버스정류소": 1
      },
      "장동": {
        "횡단보도": 17,
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 13
      },
      "우아동1가": {
        "횡단보도": 7
      },
      "반월동": {
        "횡단보도": 13,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "서노송동": {
        "인도": 3,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "서완산동1가": {
        "소화전": 2,
        "인도": 1
      },
      "중동": {
        "횡단보도": 12,
        "교차로 모퉁이": 2,
        "인도": 4
      },
      "고사동": {
        "인도": 2,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "교동": {
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "팔복동3가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "호성동2가": {
        "횡단보도": 3
      },
      "인후동2가": {
        "교차로 모퉁이": 4,
        "횡단보도": 1,
        "인도": 1
      },
      "진북동": {
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "중노송동": {
        "횡단보도": 3
      },
      "중앙동3가": {
        "인도": 1
      },
      "효자동1가": {
        "교차로 모퉁이": 2,
        "횡단보도": 2,
        "어린이보호구역": 1,
        "기타": 1,
        "인도": 4
      },
      "덕진동1가": {
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "전동": {
        "횡단보도": 2,
        "인도": 1
      },
      "여의동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "경원동3가": {
        "인도": 2
      },
      "경원동2가": {
        "인도": 1
      },
      "삼천동2가": {
        "인도": 1
      },
      "다가동1가": {
        "인도": 1
      },
      "다가동3가": {
        "인도": 2
      },
      "풍남동1가": {
        "인도": 4
      },
      "동완산동": {
        "버스정류소": 1
      },
      "남노송동": {
        "횡단보도": 2,
        "인도": 1
      },
      "서서학동": {
        "인도": 1
      }
    },
    "5": {
      "경원동3가": {
        "횡단보도": 2
      },
      "효자동2가": {
        "교차로 모퉁이": 7,
        "인도": 14,
        "횡단보도": 4,
        "소화전": 1
      },
      "만성동": {
        "인도": 2,
        "교차로 모퉁이": 1,
        "횡단보도": 4
      },
      "인후동1가": {
        "인도": 1,
        "횡단보도": 3,
        "교차로 모퉁이": 4,
        "버스정류소": 1,
        "소화전": 1
      },
      "중동": {
        "인도": 4,
        "횡단보도": 4,
        "소화전": 1
      },
      "평화동2가": {
        "횡단보도": 4,
        "인도": 4,
        "교차로 모퉁이": 7,
        "소화전": 2
      },
      "서서학동": {
        "인도": 6,
        "횡단보도": 1
      },
      "팔복동1가": {
        "횡단보도": 2,
        "인도": 2
      },
      "효자동3가": {
        "소화전": 2,
        "횡단보도": 5,
        "교차로 모퉁이": 5,
        "인도": 3,
        "어린이보호구역": 1
      },
      "서노송동": {
        "횡단보도": 2,
        "인도": 1
      },
      "효자동1가": {
        "인도": 4,
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "송천동2가": {
        "횡단보도": 14,
        "버스정류소": 2,
        "인도": 4,
        "소화전": 2
      },
      "송천동1가": {
        "교차로 모퉁이": 4,
        "횡단보도": 10,
        "소화전": 1,
        "인도": 2
      },
      "중화산동1가": {
        "소화전": 1
      },
      "서신동": {
        "교차로 모퉁이": 5,
        "인도": 5,
        "횡단보도": 7,
        "기타": 4
      },
      "팔복동3가": {
        "교차로 모퉁이": 1
      },
      "금암동": {
        "횡단보도": 4,
        "인도": 5
      },
      "우아동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "고사동": {
        "인도": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 2
      },
      "중화산동2가": {
        "횡단보도": 6,
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "평화동1가": {
        "교차로 모퉁이": 5,
        "횡단보도": 1
      },
      "진북동": {
        "인도": 1,
        "횡단보도": 1
      },
      "인후동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "우아동3가": {
        "횡단보도": 1,
        "교차로 모퉁이": 4,
        "인도": 3
      },
      "장동": {
        "횡단보도": 7
      },
      "반월동": {
        "횡단보도": 15,
        "소화전": 3,
        "인도": 3
      },
      "여의동": {
        "교차로 모퉁이": 3,
        "횡단보도": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 3,
        "인도": 1
      },
      "중앙동1가": {
        "교차로 모퉁이": 1
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "전미동2가": {
        "버스정류소": 1
      },
      "중노송동": {
        "횡단보도": 1
      },
      "덕진동1가": {
        "횡단보도": 2
      },
      "덕진동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "서완산동1가": {
        "인도": 1
      },
      "다가동1가": {
        "인도": 1
      },
      "남노송동": {
        "인도": 1
      }
    }
  },
  "06": {
    "1": {
      "서신동": {
        "횡단보도": 14,
        "교차로 모퉁이": 10,
        "소화전": 1,
        "기타": 2,
        "버스정류소": 2,
        "인도": 1
      },
      "서서학동": {
        "인도": 11,
        "횡단보도": 4,
        "기타": 1,
        "교차로 모퉁이": 2
      },
      "덕진동1가": {
        "인도": 4,
        "횡단보도": 4
      },
      "송천동1가": {
        "교차로 모퉁이": 15,
        "소화전": 7,
        "횡단보도": 15,
        "인도": 1,
        "버스정류소": 1
      },
      "남노송동": {
        "인도": 7,
        "횡단보도": 3
      },
      "송천동2가": {
        "버스정류소": 1,
        "횡단보도": 13,
        "인도": 5,
        "교차로 모퉁이": 2,
        "소화전": 1
      },
      "풍남동3가": {
        "인도": 4
      },
      "인후동1가": {
        "교차로 모퉁이": 7,
        "횡단보도": 33,
        "버스정류소": 3,
        "인도": 4
      },
      "효자동2가": {
        "인도": 25,
        "교차로 모퉁이": 6,
        "버스정류소": 2,
        "소화전": 2,
        "횡단보도": 5
      },
      "만성동": {
        "인도": 7,
        "횡단보도": 2
      },
      "금암동": {
        "소화전": 1,
        "교차로 모퉁이": 2,
        "인도": 11
      },
      "효자동3가": {
        "기타": 3,
        "교차로 모퉁이": 17,
        "횡단보도": 8,
        "인도": 6,
        "소화전": 2
      },
      "경원동1가": {
        "인도": 2,
        "교차로 모퉁이": 2
      },
      "경원동2가": {
        "인도": 2,
        "교차로 모퉁이": 2
      },
      "호성동1가": {
        "횡단보도": 4,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "교동": {
        "기타": 2,
        "인도": 4
      },
      "평화동2가": {
        "소화전": 4,
        "인도": 2,
        "횡단보도": 9,
        "교차로 모퉁이": 7,
        "어린이보호구역": 1
      },
      "중화산동2가": {
        "소화전": 5,
        "횡단보도": 9,
        "인도": 7,
        "교차로 모퉁이": 6
      },
      "중앙동3가": {
        "교차로 모퉁이": 1,
        "인도": 3
      },
      "경원동3가": {
        "횡단보도": 5,
        "교차로 모퉁이": 1
      },
      "인후동2가": {
        "인도": 5,
        "교차로 모퉁이": 3,
        "횡단보도": 2
      },
      "우아동2가": {
        "횡단보도": 11,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "전동": {
        "버스정류소": 1,
        "인도": 2
      },
      "삼천동1가": {
        "횡단보도": 2,
        "교차로 모퉁이": 5,
        "소화전": 2,
        "인도": 3
      },
      "장동": {
        "횡단보도": 6,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 13,
        "횡단보도": 3,
        "버스정류소": 3
      },
      "고사동": {
        "인도": 11,
        "소화전": 2
      },
      "우아동3가": {
        "교차로 모퉁이": 3,
        "인도": 6,
        "버스정류소": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 2
      },
      "팔복동2가": {
        "인도": 1
      },
      "중동": {
        "횡단보도": 9,
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 4,
        "인도": 4,
        "횡단보도": 3
      },
      "삼천동2가": {
        "교차로 모퉁이": 1
      },
      "반월동": {
        "인도": 4,
        "횡단보도": 15,
        "소화전": 2
      },
      "팔복동1가": {
        "횡단보도": 2,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "풍남동2가": {
        "인도": 2
      },
      "진북동": {
        "교차로 모퉁이": 4,
        "횡단보도": 2,
        "인도": 1
      },
      "서노송동": {
        "인도": 2,
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 1,
        "안전지대": 1
      },
      "효자동1가": {
        "인도": 2,
        "교차로 모퉁이": 1,
        "어린이보호구역": 1
      },
      "중노송동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "다가동1가": {
        "인도": 1
      },
      "여의동": {
        "인도": 1,
        "횡단보도": 1
      },
      "태평동": {
        "인도": 1
      },
      "풍남동1가": {
        "인도": 1
      },
      "다가동4가": {
        "인도": 1
      },
      "팔복동3가": {
        "횡단보도": 1
      },
      "중앙동1가": {
        "교차로 모퉁이": 1
      }
    },
    "2": {
      "서서학동": {
        "인도": 11,
        "횡단보도": 2
      },
      "덕진동2가": {
        "인도": 1,
        "횡단보도": 1,
        "교차로 모퉁이": 5
      },
      "인후동2가": {
        "인도": 4,
        "교차로 모퉁이": 3,
        "횡단보도": 1
      },
      "평화동2가": {
        "횡단보도": 12,
        "소화전": 3,
        "인도": 4,
        "교차로 모퉁이": 4,
        "어린이보호구역": 3
      },
      "만성동": {
        "인도": 12,
        "횡단보도": 6,
        "교차로 모퉁이": 2
      },
      "서신동": {
        "횡단보도": 14,
        "교차로 모퉁이": 5,
        "버스정류소": 1,
        "기타": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 12,
        "버스정류소": 2,
        "횡단보도": 2,
        "인도": 5,
        "소화전": 2
      },
      "송천동2가": {
        "횡단보도": 11,
        "교차로 모퉁이": 12,
        "소화전": 8,
        "인도": 4,
        "버스정류소": 1
      },
      "중화산동2가": {
        "소화전": 2,
        "인도": 20,
        "횡단보도": 10,
        "교차로 모퉁이": 8
      },
      "평화동1가": {
        "횡단보도": 8,
        "교차로 모퉁이": 26,
        "인도": 1
      },
      "경원동3가": {
        "횡단보도": 2,
        "인도": 2
      },
      "남노송동": {
        "횡단보도": 1,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "팔복동3가": {
        "횡단보도": 1
      },
      "진북동": {
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "버스정류소": 1
      },
      "풍남동3가": {
        "교차로 모퉁이": 1,
        "소화전": 5
      },
      "효자동2가": {
        "인도": 29,
        "교차로 모퉁이": 7,
        "횡단보도": 20,
        "소화전": 1
      },
      "금암동": {
        "인도": 6,
        "횡단보도": 2,
        "교차로 모퉁이": 5
      },
      "여의동2가": {
        "인도": 1,
        "횡단보도": 4,
        "안전지대": 1
      },
      "효자동1가": {
        "교차로 모퉁이": 5,
        "인도": 23,
        "안전지대": 1,
        "소화전": 3,
        "횡단보도": 4
      },
      "우아동3가": {
        "인도": 5,
        "교차로 모퉁이": 6,
        "횡단보도": 2
      },
      "효자동3가": {
        "인도": 15,
        "교차로 모퉁이": 4,
        "횡단보도": 12,
        "기타": 2
      },
      "우아동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 9,
        "인도": 1
      },
      "교동": {
        "횡단보도": 1,
        "인도": 1
      },
      "송천동1가": {
        "횡단보도": 9,
        "교차로 모퉁이": 6,
        "소화전": 7,
        "인도": 4
      },
      "중앙동2가": {
        "인도": 1
      },
      "팔복동1가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "고사동": {
        "인도": 3
      },
      "반월동": {
        "횡단보도": 9,
        "소화전": 2,
        "인도": 7
      },
      "인후동1가": {
        "교차로 모퉁이": 4,
        "인도": 4,
        "횡단보도": 28,
        "소화전": 1
      },
      "호성동1가": {
        "횡단보도": 2,
        "인도": 1
      },
      "중동": {
        "횡단보도": 19,
        "인도": 1,
        "버스정류소": 1,
        "소화전": 4,
        "교차로 모퉁이": 5
      },
      "중인동": {
        "인도": 1
      },
      "다가동4가": {
        "인도": 2
      },
      "덕진동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 3
      },
      "서노송동": {
        "인도": 6,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "동완산동": {
        "인도": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "중노송동": {
        "교차로 모퉁이": 1,
        "인도": 2,
        "횡단보도": 1
      },
      "장동": {
        "교차로 모퉁이": 2,
        "횡단보도": 8,
        "인도": 1
      },
      "우아동1가": {
        "횡단보도": 4
      },
      "여의동": {
        "어린이보호구역": 2,
        "인도": 2,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "태평동": {
        "어린이보호구역": 6
      },
      "중화산동1가": {
        "인도": 6
      },
      "고랑동": {
        "횡단보도": 1
      },
      "동서학동": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "삼천동2가": {
        "인도": 1
      },
      "경원동1가": {
        "횡단보도": 1
      },
      "전동": {
        "인도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "풍남동1가": {
        "인도": 4
      },
      "풍남동2가": {
        "인도": 1
      }
    },
    "3": {
      "서신동": {
        "횡단보도": 11,
        "교차로 모퉁이": 8,
        "소화전": 1,
        "인도": 3,
        "기타": 1
      },
      "평화동2가": {
        "교차로 모퉁이": 12,
        "인도": 7,
        "횡단보도": 15,
        "어린이보호구역": 2
      },
      "서서학동": {
        "인도": 8
      },
      "중동": {
        "횡단보도": 35,
        "교차로 모퉁이": 3,
        "인도": 1,
        "소화전": 1
      },
      "송천동2가": {
        "횡단보도": 26,
        "소화전": 10,
        "인도": 7,
        "교차로 모퉁이": 20
      },
      "인후동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 17,
        "인도": 2,
        "버스정류소": 1
      },
      "송천동1가": {
        "교차로 모퉁이": 14,
        "소화전": 6,
        "횡단보도": 17,
        "인도": 1
      },
      "우아동3가": {
        "교차로 모퉁이": 4,
        "인도": 7,
        "안전지대": 3,
        "횡단보도": 6,
        "소화전": 1
      },
      "경원동3가": {
        "횡단보도": 5,
        "인도": 1
      },
      "중노송동": {
        "횡단보도": 2,
        "교차로 모퉁이": 2,
        "어린이보호구역": 1,
        "인도": 1
      },
      "서노송동": {
        "인도": 7,
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "원당동": {
        "교차로 모퉁이": 1
      },
      "평화동1가": {
        "횡단보도": 17,
        "버스정류소": 3,
        "교차로 모퉁이": 44,
        "소화전": 2,
        "인도": 3
      },
      "교동": {
        "교차로 모퉁이": 3,
        "인도": 4,
        "기타": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 4,
        "소화전": 2,
        "인도": 1,
        "횡단보도": 1
      },
      "효자동2가": {
        "교차로 모퉁이": 4,
        "횡단보도": 26,
        "인도": 24
      },
      "중화산동2가": {
        "횡단보도": 8,
        "교차로 모퉁이": 9,
        "인도": 1,
        "소화전": 1
      },
      "인후동2가": {
        "인도": 6,
        "횡단보도": 5,
        "교차로 모퉁이": 5
      },
      "효자동1가": {
        "인도": 17,
        "교차로 모퉁이": 2,
        "버스정류소": 1,
        "횡단보도": 3
      },
      "전동": {
        "인도": 2,
        "소화전": 1
      },
      "효자동3가": {
        "횡단보도": 13,
        "인도": 19,
        "교차로 모퉁이": 8,
        "기타": 1,
        "소화전": 3
      },
      "진북동": {
        "횡단보도": 1,
        "교차로 모퉁이": 5,
        "인도": 2
      },
      "우아동2가": {
        "인도": 2,
        "횡단보도": 8,
        "교차로 모퉁이": 1
      },
      "삼천동1가": {
        "버스정류소": 2,
        "인도": 11,
        "교차로 모퉁이": 12,
        "횡단보도": 5,
        "소화전": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "강흥동": {
        "버스정류소": 1
      },
      "호성동1가": {
        "횡단보도": 4
      },
      "장동": {
        "인도": 2,
        "횡단보도": 7,
        "교차로 모퉁이": 1
      },
      "만성동": {
        "교차로 모퉁이": 3,
        "인도": 7,
        "횡단보도": 3
      },
      "금암동": {
        "인도": 15,
        "횡단보도": 4,
        "교차로 모퉁이": 3
      },
      "고사동": {
        "인도": 2
      },
      "반월동": {
        "횡단보도": 14,
        "인도": 1,
        "안전지대": 1
      },
      "여의동": {
        "횡단보도": 1,
        "교차로 모퉁이": 2,
        "어린이보호구역": 1
      },
      "여의동2가": {
        "횡단보도": 4,
        "안전지대": 1
      },
      "팔복동3가": {
        "인도": 3
      },
      "경원동2가": {
        "인도": 1,
        "교차로 모퉁이": 3
      },
      "태평동": {
        "어린이보호구역": 2,
        "횡단보도": 1
      },
      "덕진동1가": {
        "횡단보도": 2,
        "교차로 모퉁이": 2,
        "인도": 3,
        "소화전": 1
      },
      "우아동1가": {
        "횡단보도": 5
      },
      "팔복동2가": {
        "횡단보도": 1,
        "인도": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 1
      },
      "경원동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "동서학동": {
        "횡단보도": 1
      },
      "다가동4가": {
        "인도": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "다가동1가": {
        "인도": 1
      },
      "중앙동3가": {
        "교차로 모퉁이": 1
      }
    },
    "4": {
      "효자동1가": {
        "인도": 13,
        "교차로 모퉁이": 4,
        "횡단보도": 6
      },
      "평화동2가": {
        "횡단보도": 52,
        "인도": 11,
        "교차로 모퉁이": 7,
        "어린이보호구역": 4,
        "안전지대": 3
      },
      "우아동3가": {
        "인도": 13,
        "버스정류소": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 3
      },
      "효자동3가": {
        "인도": 23,
        "기타": 2,
        "횡단보도": 21,
        "교차로 모퉁이": 9,
        "버스정류소": 1,
        "소화전": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "교동": {
        "교차로 모퉁이": 1,
        "인도": 6,
        "횡단보도": 1
      },
      "반월동": {
        "인도": 3,
        "횡단보도": 4,
        "소화전": 1
      },
      "중동": {
        "횡단보도": 22,
        "교차로 모퉁이": 5,
        "소화전": 1
      },
      "송천동2가": {
        "교차로 모퉁이": 9,
        "횡단보도": 20,
        "소화전": 4,
        "버스정류소": 1,
        "어린이보호구역": 2,
        "인도": 1
      },
      "인후동1가": {
        "인도": 6,
        "횡단보도": 3,
        "버스정류소": 2,
        "교차로 모퉁이": 2,
        "소화전": 2,
        "어린이보호구역": 2
      },
      "덕진동2가": {
        "인도": 3,
        "횡단보도": 5,
        "교차로 모퉁이": 9
      },
      "동서학동": {
        "인도": 3
      },
      "인후동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 3,
        "인도": 4
      },
      "평화동1가": {
        "인도": 4,
        "소화전": 1,
        "교차로 모퉁이": 35,
        "횡단보도": 11,
        "버스정류소": 1
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 22,
        "횡단보도": 8,
        "버스정류소": 2,
        "인도": 11,
        "기타": 1,
        "소화전": 2
      },
      "중노송동": {
        "횡단보도": 4,
        "인도": 1
      },
      "풍남동1가": {
        "교차로 모퉁이": 1
      },
      "송천동1가": {
        "횡단보도": 16,
        "교차로 모퉁이": 9,
        "소화전": 3,
        "버스정류소": 1
      },
      "중화산동2가": {
        "소화전": 3,
        "인도": 17,
        "횡단보도": 11,
        "버스정류소": 1,
        "교차로 모퉁이": 4
      },
      "서신동": {
        "횡단보도": 31,
        "교차로 모퉁이": 9,
        "인도": 5,
        "버스정류소": 2,
        "기타": 1,
        "어린이보호구역": 1
      },
      "여의동": {
        "횡단보도": 6,
        "인도": 3,
        "버스정류소": 1,
        "교차로 모퉁이": 1
      },
      "다가동2가": {
        "인도": 1
      },
      "경원동1가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "횡단보도": 9,
        "인도": 6,
        "교차로 모퉁이": 1
      },
      "덕진동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 1,
        "소화전": 1,
        "인도": 1
      },
      "다가동3가": {
        "인도": 2
      },
      "장동": {
        "인도": 2,
        "횡단보도": 8
      },
      "풍남동3가": {
        "교차로 모퉁이": 1
      },
      "효자동2가": {
        "횡단보도": 22,
        "인도": 32,
        "교차로 모퉁이": 10,
        "소화전": 3
      },
      "전동": {
        "횡단보도": 1,
        "인도": 3
      },
      "태평동": {
        "횡단보도": 1
      },
      "서서학동": {
        "교차로 모퉁이": 2,
        "횡단보도": 1,
        "버스정류소": 1,
        "인도": 1
      },
      "서노송동": {
        "인도": 7,
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "산정동": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "금암동": {
        "인도": 4,
        "횡단보도": 10,
        "어린이보호구역": 2
      },
      "경원동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "인도": 1
      },
      "만성동": {
        "횡단보도": 2,
        "인도": 11,
        "교차로 모퉁이": 2,
        "소화전": 1
      },
      "팔복동3가": {
        "인도": 1
      },
      "진북동": {
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 2
      },
      "고사동": {
        "교차로 모퉁이": 1,
        "인도": 7,
        "소화전": 1
      },
      "팔복동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "남노송동": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "호성동1가": {
        "횡단보도": 2,
        "소화전": 1
      },
      "중앙동3가": {
        "인도": 1
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "다가동4가": {
        "인도": 1
      }
    },
    "5": {
      "장동": {
        "인도": 1,
        "횡단보도": 5
      },
      "금암동": {
        "횡단보도": 3,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "송천동2가": {
        "횡단보도": 6,
        "인도": 3,
        "소화전": 5
      },
      "중화산동1가": {
        "인도": 2,
        "횡단보도": 1
      },
      "효자동2가": {
        "횡단보도": 5,
        "인도": 1
      },
      "평화동3가": {
        "인도": 1
      },
      "중화산동2가": {
        "인도": 2,
        "소화전": 2,
        "교차로 모퉁이": 1
      },
      "송천동1가": {
        "버스정류소": 1,
        "소화전": 1,
        "횡단보도": 6
      },
      "교동": {
        "인도": 3,
        "기타": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 34,
        "횡단보도": 10
      },
      "서신동": {
        "횡단보도": 3,
        "교차로 모퉁이": 1,
        "인도": 3
      },
      "반월동": {
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "효자동1가": {
        "인도": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 1
      },
      "여의동": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "서서학동": {
        "인도": 1,
        "버스정류소": 2,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "중동": {
        "횡단보도": 4,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "평화동2가": {
        "횡단보도": 10,
        "인도": 1,
        "어린이보호구역": 1
      },
      "진북동": {
        "횡단보도": 3
      },
      "고사동": {
        "횡단보도": 1,
        "인도": 7
      },
      "덕진동1가": {
        "횡단보도": 1
      },
      "삼천동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "만성동": {
        "횡단보도": 1
      },
      "고랑동": {
        "횡단보도": 1
      },
      "효자동3가": {
        "인도": 1,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "인후동1가": {
        "소화전": 1,
        "인도": 2,
        "횡단보도": 4,
        "교차로 모퉁이": 2
      },
      "풍남동3가": {
        "인도": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "우아동3가": {
        "횡단보도": 3,
        "안전지대": 1,
        "교차로 모퉁이": 1
      },
      "중노송동": {
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "인도": 1
      }
    }
  },
  "07": {
    "1": {
      "경원동3가": {
        "인도": 2,
        "횡단보도": 3
      },
      "만성동": {
        "인도": 8,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "송천동2가": {
        "버스정류소": 3,
        "교차로 모퉁이": 9,
        "소화전": 11,
        "횡단보도": 23,
        "인도": 5
      },
      "효자동2가": {
        "인도": 43,
        "횡단보도": 22,
        "교차로 모퉁이": 6,
        "소화전": 1
      },
      "태평동": {
        "버스정류소": 1,
        "횡단보도": 1
      },
      "평화동2가": {
        "횡단보도": 15,
        "인도": 9,
        "교차로 모퉁이": 1
      },
      "중화산동2가": {
        "횡단보도": 10,
        "교차로 모퉁이": 5,
        "소화전": 4,
        "인도": 4
      },
      "금암동": {
        "인도": 8,
        "교차로 모퉁이": 6,
        "횡단보도": 6,
        "버스정류소": 1
      },
      "삼천동2가": {
        "인도": 1
      },
      "인후동1가": {
        "횡단보도": 8,
        "교차로 모퉁이": 3,
        "버스정류소": 3,
        "인도": 6,
        "어린이보호구역": 1,
        "소화전": 1
      },
      "효자동1가": {
        "횡단보도": 4,
        "인도": 4,
        "교차로 모퉁이": 2
      },
      "서신동": {
        "교차로 모퉁이": 4,
        "횡단보도": 16,
        "소화전": 3,
        "인도": 5,
        "기타": 2
      },
      "효자동3가": {
        "횡단보도": 9,
        "인도": 6,
        "교차로 모퉁이": 3,
        "버스정류소": 1
      },
      "서노송동": {
        "인도": 12,
        "횡단보도": 4,
        "소화전": 1
      },
      "평화동1가": {
        "인도": 8,
        "횡단보도": 9,
        "교차로 모퉁이": 35
      },
      "팔복동4가": {
        "횡단보도": 1,
        "버스정류소": 1
      },
      "우아동3가": {
        "교차로 모퉁이": 1,
        "안전지대": 3,
        "인도": 2,
        "버스정류소": 1,
        "횡단보도": 1
      },
      "우아동2가": {
        "횡단보도": 6,
        "인도": 2
      },
      "중동": {
        "횡단보도": 14,
        "교차로 모퉁이": 2
      },
      "송천동1가": {
        "교차로 모퉁이": 19,
        "소화전": 8,
        "인도": 3,
        "횡단보도": 9
      },
      "경원동1가": {
        "인도": 2,
        "횡단보도": 5,
        "교차로 모퉁이": 1
      },
      "중노송동": {
        "인도": 5,
        "횡단보도": 1,
        "버스정류소": 1
      },
      "동서학동": {
        "인도": 4,
        "횡단보도": 1
      },
      "중앙동3가": {
        "인도": 1
      },
      "반월동": {
        "횡단보도": 14,
        "인도": 4
      },
      "인후동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 1,
        "인도": 2,
        "소화전": 1
      },
      "장동": {
        "횡단보도": 15,
        "인도": 1
      },
      "팔복동1가": {
        "인도": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 3,
        "인도": 1
      },
      "여의동2가": {
        "인도": 3,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "고사동": {
        "인도": 11
      },
      "산정동": {
        "횡단보도": 1,
        "소화전": 2
      },
      "삼천동1가": {
        "교차로 모퉁이": 16,
        "인도": 5,
        "횡단보도": 14
      },
      "진북동": {
        "교차로 모퉁이": 5,
        "인도": 1,
        "횡단보도": 1,
        "버스정류소": 2
      },
      "여의동": {
        "인도": 2,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "횡단보도": 1,
        "소화전": 1,
        "인도": 1
      },
      "우아동1가": {
        "횡단보도": 3
      },
      "호성동1가": {
        "인도": 1,
        "횡단보도": 1
      },
      "서서학동": {
        "인도": 3,
        "횡단보도": 2
      },
      "전동": {
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "경원동2가": {
        "횡단보도": 1
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "교동": {
        "인도": 1,
        "기타": 1,
        "교차로 모퉁이": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "원당동": {
        "안전지대": 2
      }
    },
    "2": {
      "효자동2가": {
        "횡단보도": 31,
        "인도": 27,
        "교차로 모퉁이": 5
      },
      "고사동": {
        "인도": 8
      },
      "삼천동1가": {
        "교차로 모퉁이": 16,
        "인도": 8,
        "횡단보도": 10
      },
      "중화산동2가": {
        "안전지대": 1,
        "횡단보도": 13,
        "소화전": 3,
        "인도": 8,
        "교차로 모퉁이": 4
      },
      "경원동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "여의동2가": {
        "횡단보도": 2,
        "인도": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "효자동3가": {
        "횡단보도": 40,
        "소화전": 4,
        "인도": 16,
        "교차로 모퉁이": 9,
        "어린이보호구역": 2,
        "기타": 3,
        "버스정류소": 2
      },
      "금암동": {
        "횡단보도": 9,
        "교차로 모퉁이": 5,
        "인도": 6
      },
      "우아동3가": {
        "교차로 모퉁이": 6,
        "인도": 11,
        "횡단보도": 2
      },
      "중동": {
        "교차로 모퉁이": 5,
        "횡단보도": 16,
        "소화전": 2
      },
      "서신동": {
        "횡단보도": 25,
        "교차로 모퉁이": 8,
        "어린이보호구역": 1,
        "버스정류소": 1,
        "인도": 4,
        "소화전": 2
      },
      "만성동": {
        "인도": 8,
        "횡단보도": 2,
        "소화전": 1
      },
      "덕진동2가": {
        "횡단보도": 3,
        "인도": 2,
        "소화전": 2
      },
      "송천동2가": {
        "횡단보도": 16,
        "인도": 5,
        "교차로 모퉁이": 7,
        "소화전": 10,
        "버스정류소": 1
      },
      "평화동1가": {
        "인도": 4,
        "교차로 모퉁이": 26,
        "횡단보도": 6,
        "버스정류소": 3
      },
      "전동": {
        "인도": 1
      },
      "서노송동": {
        "인도": 2,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "평화동2가": {
        "인도": 6,
        "횡단보도": 15,
        "안전지대": 1,
        "교차로 모퉁이": 4,
        "버스정류소": 1
      },
      "효자동1가": {
        "횡단보도": 12,
        "안전지대": 1,
        "인도": 8,
        "교차로 모퉁이": 2
      },
      "인후동1가": {
        "인도": 3,
        "소화전": 1,
        "어린이보호구역": 1,
        "버스정류소": 2,
        "횡단보도": 3
      },
      "송천동1가": {
        "횡단보도": 6,
        "교차로 모퉁이": 8,
        "인도": 1,
        "소화전": 7,
        "버스정류소": 1
      },
      "여의동": {
        "교차로 모퉁이": 1,
        "어린이보호구역": 1
      },
      "태평동": {
        "인도": 2,
        "횡단보도": 5
      },
      "팔복동1가": {
        "인도": 1,
        "횡단보도": 1,
        "교차로 모퉁이": 2
      },
      "반월동": {
        "횡단보도": 4,
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "인후동2가": {
        "인도": 1,
        "횡단보도": 3,
        "교차로 모퉁이": 4
      },
      "서서학동": {
        "인도": 1,
        "횡단보도": 1
      },
      "팔복동3가": {
        "인도": 2
      },
      "덕진동1가": {
        "인도": 1,
        "횡단보도": 3
      },
      "진북동": {
        "교차로 모퉁이": 2
      },
      "교동": {
        "교차로 모퉁이": 2,
        "인도": 3
      },
      "경원동3가": {
        "인도": 3,
        "횡단보도": 1
      },
      "중노송동": {
        "인도": 5
      },
      "장동": {
        "교차로 모퉁이": 1,
        "횡단보도": 4
      },
      "경원동2가": {
        "횡단보도": 1,
        "인도": 1
      },
      "우아동2가": {
        "인도": 2,
        "횡단보도": 9
      },
      "우아동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "산정동": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "다가동2가": {
        "인도": 2
      },
      "팔복동2가": {
        "소화전": 1
      },
      "동서학동": {
        "인도": 2
      }
    },
    "3": {
      "고사동": {
        "인도": 12
      },
      "평화동2가": {
        "어린이보호구역": 1,
        "횡단보도": 23,
        "교차로 모퉁이": 5,
        "인도": 9,
        "버스정류소": 1
      },
      "효자동2가": {
        "인도": 58,
        "횡단보도": 58,
        "교차로 모퉁이": 19
      },
      "중동": {
        "횡단보도": 14,
        "교차로 모퉁이": 2
      },
      "평화동1가": {
        "교차로 모퉁이": 13,
        "인도": 9,
        "어린이보호구역": 1,
        "버스정류소": 2,
        "횡단보도": 1
      },
      "금암동": {
        "인도": 13,
        "교차로 모퉁이": 6,
        "횡단보도": 6,
        "어린이보호구역": 1
      },
      "서신동": {
        "횡단보도": 31,
        "어린이보호구역": 2,
        "교차로 모퉁이": 7,
        "인도": 1
      },
      "덕진동1가": {
        "인도": 3,
        "교차로 모퉁이": 2,
        "횡단보도": 6,
        "소화전": 2
      },
      "팔복동1가": {
        "횡단보도": 2,
        "인도": 1,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 12,
        "인도": 9,
        "횡단보도": 16,
        "소화전": 3
      },
      "중화산동2가": {
        "횡단보도": 18,
        "인도": 15,
        "교차로 모퉁이": 8,
        "소화전": 3,
        "버스정류소": 1
      },
      "중노송동": {
        "인도": 3,
        "횡단보도": 2
      },
      "우아동3가": {
        "교차로 모퉁이": 4,
        "인도": 5,
        "횡단보도": 2
      },
      "여의동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "인후동1가": {
        "횡단보도": 9,
        "인도": 11,
        "버스정류소": 1,
        "어린이보호구역": 1,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "서노송동": {
        "횡단보도": 2,
        "인도": 6,
        "교차로 모퉁이": 2
      },
      "송천동1가": {
        "횡단보도": 17,
        "교차로 모퉁이": 13,
        "인도": 4,
        "소화전": 4
      },
      "경원동2가": {
        "인도": 3,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "횡단보도": 11,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "송천동2가": {
        "소화전": 7,
        "횡단보도": 21,
        "교차로 모퉁이": 6,
        "인도": 6
      },
      "반월동": {
        "횡단보도": 9,
        "인도": 4
      },
      "우아동1가": {
        "횡단보도": 2,
        "버스정류소": 2,
        "인도": 1
      },
      "만성동": {
        "소화전": 2,
        "횡단보도": 3,
        "교차로 모퉁이": 3,
        "인도": 4
      },
      "효자동3가": {
        "교차로 모퉁이": 7,
        "횡단보도": 41,
        "인도": 13,
        "기타": 1
      },
      "진북동": {
        "교차로 모퉁이": 2
      },
      "효자동1가": {
        "인도": 8,
        "어린이보호구역": 1,
        "횡단보도": 6,
        "교차로 모퉁이": 1
      },
      "다가동4가": {
        "인도": 1
      },
      "덕진동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 3,
        "인도": 1
      },
      "경원동3가": {
        "횡단보도": 1,
        "인도": 3
      },
      "다가동1가": {
        "교차로 모퉁이": 1
      },
      "교동": {
        "인도": 2
      },
      "전동": {
        "횡단보도": 2
      },
      "인후동2가": {
        "인도": 2,
        "횡단보도": 5,
        "교차로 모퉁이": 8
      },
      "중인동": {
        "인도": 1
      },
      "산정동": {
        "횡단보도": 1,
        "인도": 1
      },
      "여의동": {
        "어린이보호구역": 1,
        "횡단보도": 4,
        "버스정류소": 1,
        "교차로 모퉁이": 1
      },
      "경원동1가": {
        "횡단보도": 2,
        "인도": 1
      },
      "풍남동3가": {
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "장동": {
        "횡단보도": 6,
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "호성동1가": {
        "횡단보도": 1,
        "인도": 1
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "남노송동": {
        "안전지대": 1,
        "인도": 3,
        "횡단보도": 1
      },
      "서서학동": {
        "횡단보도": 1
      },
      "풍남동1가": {
        "인도": 1
      }
    },
    "4": {
      "호성동1가": {
        "인도": 2,
        "횡단보도": 5
      },
      "경원동3가": {
        "횡단보도": 10,
        "인도": 12
      },
      "고사동": {
        "인도": 9
      },
      "송천동1가": {
        "소화전": 5,
        "인도": 4,
        "횡단보도": 7,
        "교차로 모퉁이": 6,
        "버스정류소": 1
      },
      "평화동1가": {
        "횡단보도": 14,
        "인도": 4,
        "교차로 모퉁이": 9
      },
      "교동": {
        "교차로 모퉁이": 1,
        "인도": 6,
        "기타": 2
      },
      "중화산동2가": {
        "인도": 12,
        "교차로 모퉁이": 4,
        "횡단보도": 13,
        "소화전": 2
      },
      "인후동1가": {
        "인도": 10,
        "어린이보호구역": 1,
        "버스정류소": 6,
        "교차로 모퉁이": 3,
        "횡단보도": 8
      },
      "평화동2가": {
        "횡단보도": 19,
        "인도": 5,
        "교차로 모퉁이": 3,
        "버스정류소": 1
      },
      "효자동2가": {
        "인도": 39,
        "횡단보도": 33,
        "교차로 모퉁이": 5,
        "버스정류소": 1
      },
      "금암동": {
        "횡단보도": 10,
        "교차로 모퉁이": 19,
        "인도": 4
      },
      "인후동2가": {
        "인도": 5,
        "교차로 모퉁이": 6,
        "횡단보도": 2
      },
      "서노송동": {
        "인도": 17,
        "교차로 모퉁이": 12,
        "횡단보도": 3
      },
      "삼천동1가": {
        "횡단보도": 17,
        "교차로 모퉁이": 16,
        "소화전": 1,
        "인도": 7
      },
      "효자동1가": {
        "횡단보도": 10,
        "교차로 모퉁이": 13,
        "인도": 4,
        "안전지대": 1
      },
      "만성동": {
        "횡단보도": 9,
        "인도": 7,
        "소화전": 1,
        "교차로 모퉁이": 4
      },
      "전동": {
        "교차로 모퉁이": 2
      },
      "송천동2가": {
        "횡단보도": 15,
        "소화전": 4,
        "버스정류소": 2,
        "인도": 7
      },
      "효자동3가": {
        "횡단보도": 19,
        "인도": 10,
        "교차로 모퉁이": 10,
        "기타": 2,
        "버스정류소": 1
      },
      "우아동3가": {
        "인도": 6,
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "중화산동1가": {
        "인도": 4
      },
      "반월동": {
        "인도": 2,
        "횡단보도": 5,
        "소화전": 1
      },
      "풍남동3가": {
        "인도": 3,
        "소화전": 1
      },
      "중동": {
        "횡단보도": 13
      },
      "우아동2가": {
        "인도": 3,
        "횡단보도": 10
      },
      "우아동1가": {
        "횡단보도": 4
      },
      "진북동": {
        "교차로 모퉁이": 2,
        "인도": 2,
        "횡단보도": 1
      },
      "서신동": {
        "기타": 1,
        "횡단보도": 28,
        "교차로 모퉁이": 14,
        "인도": 4,
        "버스정류소": 1
      },
      "덕진동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 5,
        "인도": 2,
        "소화전": 1
      },
      "장동": {
        "횡단보도": 12,
        "인도": 1
      },
      "남노송동": {
        "횡단보도": 4,
        "인도": 2
      },
      "여의동": {
        "인도": 1,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "경원동2가": {
        "횡단보도": 2
      },
      "서서학동": {
        "인도": 7
      },
      "태평동": {
        "교차로 모퉁이": 1,
        "횡단보도": 1,
        "어린이보호구역": 1
      },
      "경원동1가": {
        "인도": 2,
        "교차로 모퉁이": 4
      },
      "중노송동": {
        "횡단보도": 3,
        "인도": 3
      },
      "덕진동1가": {
        "인도": 2,
        "횡단보도": 3
      },
      "중앙동1가": {
        "인도": 1
      },
      "다가동4가": {
        "인도": 2
      },
      "팔복동1가": {
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "인도": 1,
        "소화전": 1
      },
      "호성동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "동서학동": {
        "횡단보도": 1,
        "인도": 1
      },
      "성덕동": {
        "인도": 1
      }
    },
    "5": {
      "서신동": {
        "횡단보도": 17,
        "교차로 모퉁이": 2,
        "인도": 2
      },
      "효자동1가": {
        "교차로 모퉁이": 1,
        "인도": 2,
        "횡단보도": 3
      },
      "송천동2가": {
        "횡단보도": 6,
        "교차로 모퉁이": 4
      },
      "고랑동": {
        "버스정류소": 1
      },
      "평화동2가": {
        "인도": 11,
        "횡단보도": 3,
        "교차로 모퉁이": 4
      },
      "고사동": {
        "인도": 4
      },
      "중동": {
        "교차로 모퉁이": 1,
        "횡단보도": 8
      },
      "우아동3가": {
        "버스정류소": 1,
        "인도": 2,
        "교차로 모퉁이": 3,
        "횡단보도": 1
      },
      "다가동4가": {
        "인도": 1
      },
      "삼천동1가": {
        "횡단보도": 7,
        "인도": 3,
        "소화전": 1,
        "교차로 모퉁이": 7
      },
      "여의동2가": {
        "횡단보도": 2
      },
      "인후동1가": {
        "인도": 7,
        "횡단보도": 3,
        "어린이보호구역": 1,
        "버스정류소": 2,
        "교차로 모퉁이": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 18,
        "횡단보도": 13
      },
      "우아동1가": {
        "인도": 1
      },
      "서노송동": {
        "인도": 2
      },
      "효자동3가": {
        "인도": 4,
        "횡단보도": 8,
        "교차로 모퉁이": 4
      },
      "중화산동2가": {
        "횡단보도": 11,
        "인도": 2,
        "교차로 모퉁이": 5
      },
      "효자동2가": {
        "교차로 모퉁이": 6,
        "횡단보도": 18,
        "인도": 11
      },
      "진북동": {
        "인도": 1
      },
      "만성동": {
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "반월동": {
        "횡단보도": 2,
        "인도": 1,
        "소화전": 1
      },
      "송천동1가": {
        "횡단보도": 2,
        "인도": 2,
        "교차로 모퉁이": 4
      },
      "경원동3가": {
        "인도": 2,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "남노송동": {
        "횡단보도": 1
      },
      "장동": {
        "횡단보도": 3
      },
      "금암동": {
        "인도": 4,
        "횡단보도": 4,
        "교차로 모퉁이": 3
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "교동": {
        "교차로 모퉁이": 1
      },
      "서완산동1가": {
        "교차로 모퉁이": 1
      },
      "풍남동3가": {
        "인도": 5
      },
      "경원동1가": {
        "교차로 모퉁이": 1
      },
      "호성동1가": {
        "인도": 1
      },
      "인후동2가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "중화산동1가": {
        "인도": 1
      },
      "덕진동2가": {
        "횡단보도": 2
      },
      "덕진동1가": {
        "횡단보도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "우아동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 3
      }
    }
  },
  "08": {
    "1": {
      "송천동2가": {
        "횡단보도": 24,
        "인도": 13,
        "교차로 모퉁이": 4,
        "소화전": 3,
        "안전지대": 1
      },
      "중화산동2가": {
        "횡단보도": 8,
        "교차로 모퉁이": 8,
        "인도": 9,
        "소화전": 3
      },
      "경원동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "반월동": {
        "소화전": 2,
        "횡단보도": 3
      },
      "우아동3가": {
        "교차로 모퉁이": 4,
        "인도": 1,
        "횡단보도": 1
      },
      "효자동3가": {
        "인도": 16,
        "횡단보도": 24,
        "교차로 모퉁이": 13,
        "기타": 4
      },
      "교동": {
        "횡단보도": 2,
        "기타": 3,
        "인도": 1
      },
      "서신동": {
        "인도": 7,
        "소화전": 4,
        "횡단보도": 19,
        "교차로 모퉁이": 6,
        "어린이보호구역": 1
      },
      "여의동": {
        "인도": 2,
        "횡단보도": 2
      },
      "금암동": {
        "교차로 모퉁이": 2,
        "횡단보도": 6,
        "인도": 20
      },
      "효자동2가": {
        "횡단보도": 28,
        "교차로 모퉁이": 5,
        "인도": 22,
        "소화전": 1
      },
      "고사동": {
        "인도": 9
      },
      "전동": {
        "인도": 7,
        "교차로 모퉁이": 1
      },
      "송천동1가": {
        "횡단보도": 10,
        "소화전": 6,
        "교차로 모퉁이": 9,
        "버스정류소": 1,
        "인도": 4
      },
      "덕진동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 2,
        "인도": 3
      },
      "팔복동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "효자동1가": {
        "교차로 모퉁이": 5,
        "인도": 4,
        "횡단보도": 1,
        "안전지대": 1
      },
      "서노송동": {
        "인도": 2,
        "횡단보도": 1
      },
      "삼천동1가": {
        "소화전": 2,
        "횡단보도": 7,
        "인도": 5,
        "교차로 모퉁이": 12
      },
      "경원동3가": {
        "횡단보도": 1,
        "교차로 모퉁이": 2
      },
      "평화동2가": {
        "횡단보도": 16,
        "교차로 모퉁이": 3,
        "인도": 3,
        "버스정류소": 1,
        "어린이보호구역": 1
      },
      "풍남동1가": {
        "인도": 3
      },
      "평화동1가": {
        "인도": 5,
        "교차로 모퉁이": 19,
        "횡단보도": 10,
        "버스정류소": 1
      },
      "인후동1가": {
        "소화전": 6,
        "횡단보도": 20,
        "버스정류소": 4,
        "교차로 모퉁이": 2,
        "인도": 3
      },
      "다가동3가": {
        "인도": 2
      },
      "호성동2가": {
        "인도": 4
      },
      "남노송동": {
        "인도": 1,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "중화산동1가": {
        "인도": 7,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "횡단보도": 7,
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "장동": {
        "횡단보도": 15,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "산정동": {
        "횡단보도": 4,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "풍남동3가": {
        "인도": 2
      },
      "진북동": {
        "인도": 1,
        "교차로 모퉁이": 4
      },
      "덕진동2가": {
        "인도": 4,
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "호성동1가": {
        "교차로 모퉁이": 1
      },
      "중동": {
        "교차로 모퉁이": 2,
        "횡단보도": 13,
        "소화전": 1
      },
      "경원동1가": {
        "인도": 1,
        "횡단보도": 2
      },
      "인후동2가": {
        "교차로 모퉁이": 6,
        "횡단보도": 3,
        "인도": 1
      },
      "서서학동": {
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "고랑동": {
        "횡단보도": 1
      },
      "여의동2가": {
        "인도": 1,
        "횡단보도": 2
      },
      "우아동1가": {
        "횡단보도": 6
      },
      "만성동": {
        "인도": 7,
        "횡단보도": 2,
        "소화전": 1
      },
      "중노송동": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "다가동4가": {
        "인도": 1
      },
      "평화동3가": {
        "횡단보도": 1
      }
    },
    "2": {
      "평화동2가": {
        "교차로 모퉁이": 13,
        "횡단보도": 16,
        "어린이보호구역": 2,
        "인도": 6
      },
      "인후동2가": {
        "인도": 6,
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 4,
        "횡단보도": 2
      },
      "금암동": {
        "횡단보도": 6,
        "인도": 16,
        "교차로 모퉁이": 4
      },
      "서신동": {
        "횡단보도": 21,
        "교차로 모퉁이": 9,
        "인도": 1,
        "기타": 1,
        "소화전": 2
      },
      "효자동2가": {
        "인도": 42,
        "횡단보도": 24,
        "교차로 모퉁이": 11,
        "버스정류소": 1,
        "소화전": 1
      },
      "진북동": {
        "횡단보도": 4,
        "교차로 모퉁이": 3
      },
      "다가동4가": {
        "인도": 1
      },
      "효자동3가": {
        "횡단보도": 23,
        "교차로 모퉁이": 24,
        "기타": 3,
        "인도": 17
      },
      "고사동": {
        "인도": 9,
        "버스정류소": 2,
        "횡단보도": 1
      },
      "다가동3가": {
        "인도": 3
      },
      "중화산동2가": {
        "횡단보도": 16,
        "인도": 9,
        "교차로 모퉁이": 12,
        "소화전": 3
      },
      "서서학동": {
        "교차로 모퉁이": 1,
        "버스정류소": 1,
        "인도": 4,
        "횡단보도": 1
      },
      "경원동1가": {
        "횡단보도": 4,
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "우아동3가": {
        "교차로 모퉁이": 3,
        "횡단보도": 4,
        "인도": 4
      },
      "우아동2가": {
        "횡단보도": 10
      },
      "풍남동3가": {
        "인도": 5,
        "소화전": 2,
        "교차로 모퉁이": 1
      },
      "삼천동1가": {
        "인도": 7,
        "교차로 모퉁이": 21,
        "횡단보도": 16,
        "버스정류소": 1
      },
      "중동": {
        "인도": 2,
        "횡단보도": 9,
        "소화전": 2,
        "교차로 모퉁이": 1
      },
      "장동": {
        "횡단보도": 27,
        "소화전": 2,
        "인도": 1
      },
      "인후동1가": {
        "버스정류소": 2,
        "인도": 5,
        "소화전": 1,
        "횡단보도": 11,
        "교차로 모퉁이": 2
      },
      "송천동2가": {
        "교차로 모퉁이": 4,
        "횡단보도": 29,
        "버스정류소": 1,
        "소화전": 3,
        "인도": 3
      },
      "반월동": {
        "횡단보도": 1,
        "소화전": 1,
        "인도": 2
      },
      "평화동1가": {
        "인도": 10,
        "교차로 모퉁이": 11,
        "횡단보도": 5,
        "버스정류소": 2
      },
      "만성동": {
        "교차로 모퉁이": 2,
        "인도": 7,
        "횡단보도": 1
      },
      "호성동1가": {
        "소화전": 1,
        "횡단보도": 2,
        "인도": 2
      },
      "송천동1가": {
        "횡단보도": 12,
        "인도": 6,
        "교차로 모퉁이": 4,
        "소화전": 2
      },
      "중노송동": {
        "인도": 6,
        "횡단보도": 1
      },
      "경원동2가": {
        "횡단보도": 3
      },
      "덕진동1가": {
        "횡단보도": 7,
        "인도": 2,
        "교차로 모퉁이": 2
      },
      "효자동1가": {
        "인도": 3,
        "횡단보도": 9,
        "교차로 모퉁이": 5,
        "소화전": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 3,
        "인도": 1
      },
      "남노송동": {
        "인도": 5,
        "횡단보도": 1
      },
      "교동": {
        "횡단보도": 3,
        "인도": 1
      },
      "서노송동": {
        "인도": 8
      },
      "전동": {
        "인도": 5
      },
      "동서학동": {
        "횡단보도": 2,
        "인도": 6
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "호성동2가": {
        "인도": 1
      },
      "경원동3가": {
        "횡단보도": 2,
        "인도": 1
      },
      "태평동": {
        "버스정류소": 1
      },
      "팔복동2가": {
        "교차로 모퉁이": 1
      },
      "중앙동4가": {
        "인도": 1
      },
      "여의동": {
        "교차로 모퉁이": 1,
        "횡단보도": 2
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "산정동": {
        "인도": 1
      },
      "다가동1가": {
        "인도": 1
      }
    },
    "3": {
      "덕진동2가": {
        "소화전": 1,
        "횡단보도": 2,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "서서학동": {
        "인도": 6,
        "교차로 모퉁이": 4,
        "횡단보도": 1,
        "버스정류소": 1
      },
      "서신동": {
        "횡단보도": 17,
        "인도": 11,
        "교차로 모퉁이": 13,
        "소화전": 1
      },
      "인후동1가": {
        "인도": 5,
        "횡단보도": 14,
        "교차로 모퉁이": 5,
        "어린이보호구역": 2,
        "버스정류소": 1,
        "소화전": 4
      },
      "효자동2가": {
        "인도": 16,
        "교차로 모퉁이": 8,
        "횡단보도": 7
      },
      "경원동3가": {
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "중화산동2가": {
        "인도": 9,
        "교차로 모퉁이": 5,
        "횡단보도": 8,
        "소화전": 3,
        "어린이보호구역": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 19,
        "인도": 10,
        "횡단보도": 18,
        "버스정류소": 1
      },
      "전동": {
        "인도": 2
      },
      "효자동3가": {
        "인도": 9,
        "교차로 모퉁이": 27,
        "횡단보도": 28,
        "기타": 3
      },
      "만성동": {
        "인도": 9,
        "교차로 모퉁이": 3,
        "횡단보도": 5
      },
      "고사동": {
        "인도": 11,
        "횡단보도": 1,
        "버스정류소": 1
      },
      "평화동2가": {
        "횡단보도": 24,
        "인도": 22,
        "교차로 모퉁이": 6,
        "어린이보호구역": 1
      },
      "송천동1가": {
        "인도": 4,
        "횡단보도": 8,
        "소화전": 5,
        "교차로 모퉁이": 2
      },
      "송천동2가": {
        "교차로 모퉁이": 4,
        "인도": 8,
        "소화전": 10,
        "횡단보도": 12,
        "버스정류소": 2
      },
      "중노송동": {
        "인도": 5
      },
      "우아동3가": {
        "인도": 4,
        "교차로 모퉁이": 5,
        "횡단보도": 9,
        "버스정류소": 1
      },
      "평화동1가": {
        "횡단보도": 9,
        "교차로 모퉁이": 20,
        "어린이보호구역": 1,
        "인도": 3,
        "버스정류소": 2
      },
      "진북동": {
        "횡단보도": 1
      },
      "여의동": {
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "중화산동1가": {
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "서노송동": {
        "인도": 7,
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "경원동2가": {
        "횡단보도": 1,
        "인도": 2
      },
      "인후동2가": {
        "인도": 6,
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "금암동": {
        "교차로 모퉁이": 9,
        "인도": 19,
        "횡단보도": 7
      },
      "우아동2가": {
        "횡단보도": 7
      },
      "효자동1가": {
        "인도": 3,
        "횡단보도": 6,
        "교차로 모퉁이": 2,
        "기타": 1
      },
      "전미동2가": {
        "교차로 모퉁이": 1
      },
      "중동": {
        "버스정류소": 1,
        "교차로 모퉁이": 2,
        "횡단보도": 10,
        "소화전": 2
      },
      "다가동1가": {
        "인도": 2
      },
      "교동": {
        "횡단보도": 2,
        "기타": 3,
        "인도": 3
      },
      "중앙동1가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "장동": {
        "횡단보도": 13,
        "교차로 모퉁이": 1,
        "소화전": 1,
        "인도": 1,
        "버스정류소": 1
      },
      "반월동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "남노송동": {
        "인도": 2,
        "횡단보도": 2
      },
      "풍남동3가": {
        "인도": 6
      },
      "삼천동3가": {
        "인도": 1
      },
      "덕진동1가": {
        "인도": 5,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "동서학동": {
        "인도": 1,
        "횡단보도": 3
      },
      "팔복동1가": {
        "소화전": 1,
        "인도": 2
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "팔복동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "호성동1가": {
        "인도": 1
      },
      "고랑동": {
        "인도": 2
      },
      "태평동": {
        "인도": 1
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "산정동": {
        "교차로 모퉁이": 1
      },
      "전동3가": {
        "인도": 1
      },
      "다가동3가": {
        "인도": 2
      },
      "팔복동3가": {
        "횡단보도": 1
      }
    },
    "4": {
      "반월동": {
        "인도": 1,
        "횡단보도": 1
      },
      "중동": {
        "횡단보도": 13,
        "교차로 모퉁이": 2,
        "소화전": 1,
        "인도": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 7,
        "횡단보도": 12,
        "소화전": 1,
        "인도": 8
      },
      "평화동2가": {
        "횡단보도": 29,
        "인도": 3,
        "교차로 모퉁이": 18,
        "안전지대": 1
      },
      "송천동1가": {
        "소화전": 6,
        "횡단보도": 17,
        "인도": 7,
        "교차로 모퉁이": 6
      },
      "서노송동": {
        "인도": 3,
        "교차로 모퉁이": 4,
        "횡단보도": 6
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "덕진동1가": {
        "교차로 모퉁이": 5,
        "인도": 3,
        "횡단보도": 7
      },
      "만성동": {
        "횡단보도": 1,
        "교차로 모퉁이": 2,
        "인도": 12,
        "소화전": 3
      },
      "효자동2가": {
        "교차로 모퉁이": 6,
        "횡단보도": 7,
        "인도": 28,
        "소화전": 1
      },
      "인후동2가": {
        "교차로 모퉁이": 3,
        "인도": 5,
        "횡단보도": 2
      },
      "우아동3가": {
        "인도": 8,
        "교차로 모퉁이": 4,
        "횡단보도": 4
      },
      "서신동": {
        "소화전": 3,
        "횡단보도": 10,
        "인도": 3,
        "교차로 모퉁이": 3,
        "어린이보호구역": 1
      },
      "중노송동": {
        "교차로 모퉁이": 2,
        "인도": 2
      },
      "금암동": {
        "교차로 모퉁이": 7,
        "횡단보도": 9,
        "인도": 7
      },
      "전동": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "장동": {
        "횡단보도": 19,
        "교차로 모퉁이": 2,
        "인도": 1,
        "소화전": 1
      },
      "송천동2가": {
        "횡단보도": 32,
        "교차로 모퉁이": 16,
        "인도": 10,
        "소화전": 5
      },
      "고사동": {
        "인도": 8
      },
      "인후동1가": {
        "횡단보도": 4,
        "버스정류소": 2,
        "인도": 5,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "삼천동1가": {
        "횡단보도": 10,
        "소화전": 2,
        "인도": 19,
        "교차로 모퉁이": 9
      },
      "효자동3가": {
        "교차로 모퉁이": 34,
        "횡단보도": 36,
        "인도": 16,
        "기타": 3,
        "소화전": 1
      },
      "풍남동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "호성동1가": {
        "인도": 1,
        "횡단보도": 4
      },
      "우아동1가": {
        "횡단보도": 3,
        "버스정류소": 1
      },
      "평화동1가": {
        "횡단보도": 18,
        "교차로 모퉁이": 49,
        "인도": 6
      },
      "효자동1가": {
        "교차로 모퉁이": 7,
        "안전지대": 1,
        "기타": 1,
        "횡단보도": 3,
        "인도": 3
      },
      "서서학동": {
        "인도": 7
      },
      "덕진동2가": {
        "횡단보도": 4,
        "교차로 모퉁이": 5,
        "인도": 2,
        "소화전": 1
      },
      "중화산동1가": {
        "인도": 2
      },
      "진북동": {
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "상림동": {
        "소화전": 1
      },
      "우아동2가": {
        "인도": 1,
        "횡단보도": 7
      },
      "여의동": {
        "횡단보도": 7
      },
      "팔복동3가": {
        "횡단보도": 2
      },
      "경원동2가": {
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 5
      },
      "중앙동1가": {
        "인도": 1
      },
      "경원동1가": {
        "횡단보도": 1
      },
      "풍남동3가": {
        "인도": 5
      },
      "산정동": {
        "인도": 1,
        "버스정류소": 1
      },
      "다가동3가": {
        "인도": 2
      },
      "태평동": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "교동": {
        "횡단보도": 1
      },
      "동서학동": {
        "횡단보도": 12,
        "인도": 4
      },
      "남노송동": {
        "인도": 2
      },
      "경원동3가": {
        "횡단보도": 1
      },
      "다가동1가": {
        "인도": 1
      },
      "팔복동1가": {
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "다가동4가": {
        "인도": 1
      }
    },
    "5": {
      "송천동2가": {
        "인도": 4,
        "횡단보도": 11,
        "교차로 모퉁이": 19,
        "소화전": 5
      },
      "중화산동2가": {
        "인도": 7,
        "소화전": 5,
        "횡단보도": 17,
        "교차로 모퉁이": 26
      },
      "중화산동1가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "인후동1가": {
        "횡단보도": 18,
        "교차로 모퉁이": 4,
        "인도": 2,
        "소화전": 3
      },
      "효자동2가": {
        "인도": 11,
        "버스정류소": 1,
        "교차로 모퉁이": 4,
        "횡단보도": 6,
        "소화전": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 7,
        "어린이보호구역": 1,
        "횡단보도": 8,
        "인도": 2
      },
      "금암동": {
        "교차로 모퉁이": 13,
        "인도": 6,
        "횡단보도": 3
      },
      "효자동3가": {
        "교차로 모퉁이": 13,
        "횡단보도": 11,
        "인도": 6,
        "기타": 3
      },
      "덕진동1가": {
        "횡단보도": 3,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "인후동2가": {
        "인도": 2,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "삼천동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 5,
        "인도": 3,
        "소화전": 1
      },
      "서신동": {
        "횡단보도": 2,
        "교차로 모퉁이": 4,
        "인도": 4
      },
      "만성동": {
        "횡단보도": 2,
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "서노송동": {
        "횡단보도": 1,
        "교차로 모퉁이": 4,
        "인도": 1
      },
      "효자동1가": {
        "횡단보도": 2,
        "인도": 5,
        "교차로 모퉁이": 5,
        "안전지대": 2
      },
      "평화동2가": {
        "횡단보도": 9,
        "어린이보호구역": 2,
        "인도": 1,
        "교차로 모퉁이": 3,
        "버스정류소": 1
      },
      "송천동1가": {
        "인도": 2,
        "횡단보도": 6,
        "교차로 모퉁이": 7
      },
      "장동": {
        "횡단보도": 7,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "경원동3가": {
        "횡단보도": 1
      },
      "덕진동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 3,
        "횡단보도": 1,
        "인도": 2
      },
      "중노송동": {
        "인도": 1
      },
      "중동": {
        "횡단보도": 5,
        "교차로 모퉁이": 1
      },
      "산정동": {
        "횡단보도": 2
      },
      "우아동2가": {
        "교차로 모퉁이": 3,
        "횡단보도": 1,
        "인도": 1
      },
      "팔복동1가": {
        "소화전": 1
      },
      "여의동": {
        "횡단보도": 2
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "우아동3가": {
        "교차로 모퉁이": 2,
        "횡단보도": 2,
        "인도": 2
      },
      "고사동": {
        "인도": 3
      },
      "중앙동1가": {
        "인도": 1
      },
      "반월동": {
        "횡단보도": 4
      },
      "호성동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "동서학동": {
        "횡단보도": 3,
        "인도": 2
      },
      "서서학동": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "태평동": {
        "버스정류소": 1
      },
      "교동": {
        "인도": 1
      },
      "남노송동": {
        "횡단보도": 1
      },
      "풍남동1가": {
        "교차로 모퉁이": 1
      }
    }
  },
  "09": {
    "1": {
      "서노송동": {
        "횡단보도": 2,
        "인도": 6,
        "기타": 2,
        "교차로 모퉁이": 1
      },
      "금암동": {
        "인도": 5,
        "횡단보도": 10,
        "교차로 모퉁이": 19
      },
      "우아동3가": {
        "횡단보도": 7,
        "인도": 6,
        "교차로 모퉁이": 8
      },
      "효자동3가": {
        "교차로 모퉁이": 21,
        "횡단보도": 28,
        "인도": 11
      },
      "평화동2가": {
        "교차로 모퉁이": 5,
        "횡단보도": 19,
        "인도": 8,
        "버스정류소": 2
      },
      "송천동1가": {
        "횡단보도": 13,
        "교차로 모퉁이": 5,
        "소화전": 3,
        "인도": 2
      },
      "동서학동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "인도": 4
      },
      "효자동2가": {
        "교차로 모퉁이": 10,
        "인도": 27,
        "횡단보도": 36,
        "소화전": 1
      },
      "인후동1가": {
        "소화전": 1,
        "교차로 모퉁이": 7,
        "횡단보도": 18,
        "버스정류소": 2,
        "인도": 2
      },
      "삼천동1가": {
        "교차로 모퉁이": 12,
        "횡단보도": 3,
        "소화전": 1,
        "인도": 12
      },
      "진북동": {
        "버스정류소": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 1,
        "인도": 1,
        "횡단보도": 1
      },
      "장동": {
        "횡단보도": 15,
        "인도": 3,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "서신동": {
        "횡단보도": 14,
        "인도": 5,
        "교차로 모퉁이": 7,
        "소화전": 1
      },
      "고사동": {
        "횡단보도": 2,
        "인도": 5
      },
      "송천동2가": {
        "교차로 모퉁이": 33,
        "횡단보도": 30,
        "인도": 16,
        "소화전": 10,
        "버스정류소": 1
      },
      "중화산동2가": {
        "인도": 8,
        "횡단보도": 30,
        "교차로 모퉁이": 46,
        "소화전": 6,
        "버스정류소": 1
      },
      "서완산동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "반월동": {
        "횡단보도": 13,
        "인도": 3,
        "소화전": 1
      },
      "여의동": {
        "횡단보도": 5,
        "인도": 1
      },
      "교동": {
        "인도": 5,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "효자동1가": {
        "인도": 7,
        "소화전": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 7
      },
      "우아동2가": {
        "횡단보도": 5
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "만성동": {
        "인도": 13,
        "소화전": 2,
        "횡단보도": 3
      },
      "인후동2가": {
        "횡단보도": 4,
        "인도": 1
      },
      "덕진동1가": {
        "횡단보도": 6,
        "교차로 모퉁이": 2,
        "인도": 3
      },
      "중동": {
        "횡단보도": 11,
        "교차로 모퉁이": 3,
        "소화전": 1,
        "인도": 2
      },
      "여의동2가": {
        "횡단보도": 2
      },
      "팔복동2가": {
        "인도": 2,
        "횡단보도": 4
      },
      "경원동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "인도": 1
      },
      "호성동1가": {
        "횡단보도": 4,
        "인도": 2,
        "버스정류소": 1
      },
      "평화동1가": {
        "인도": 4,
        "어린이보호구역": 1,
        "교차로 모퉁이": 20,
        "횡단보도": 16,
        "버스정류소": 2
      },
      "우아동1가": {
        "횡단보도": 2
      },
      "서서학동": {
        "인도": 6,
        "횡단보도": 2
      },
      "전동": {
        "인도": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 1
      },
      "풍남동3가": {
        "교차로 모퉁이": 1
      },
      "팔복동1가": {
        "인도": 1
      },
      "평화동3가": {
        "횡단보도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "중노송동": {
        "기타": 1
      },
      "산정동": {
        "인도": 1
      },
      "풍남동1가": {
        "횡단보도": 1
      },
      "중인동": {
        "인도": 1
      }
    },
    "2": {
      "송천동1가": {
        "횡단보도": 25,
        "인도": 6,
        "교차로 모퉁이": 12,
        "소화전": 4,
        "버스정류소": 1
      },
      "만성동": {
        "교차로 모퉁이": 2,
        "인도": 16,
        "횡단보도": 7,
        "소화전": 1
      },
      "효자동3가": {
        "교차로 모퉁이": 18,
        "인도": 13,
        "횡단보도": 20,
        "버스정류소": 2,
        "기타": 1
      },
      "중동": {
        "횡단보도": 22,
        "교차로 모퉁이": 6,
        "소화전": 3,
        "어린이보호구역": 2
      },
      "다가동2가": {
        "인도": 3
      },
      "효자동2가": {
        "버스정류소": 1,
        "소화전": 2,
        "교차로 모퉁이": 6,
        "인도": 31,
        "횡단보도": 30
      },
      "금암동": {
        "횡단보도": 10,
        "교차로 모퉁이": 18,
        "인도": 10
      },
      "효자동1가": {
        "인도": 5,
        "교차로 모퉁이": 5,
        "횡단보도": 8,
        "소화전": 2
      },
      "장동": {
        "횡단보도": 4,
        "인도": 1
      },
      "삼천동1가": {
        "인도": 11,
        "교차로 모퉁이": 15,
        "횡단보도": 7
      },
      "평화동2가": {
        "횡단보도": 16,
        "인도": 6,
        "교차로 모퉁이": 3,
        "어린이보호구역": 1
      },
      "팔복동1가": {
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "송천동2가": {
        "소화전": 11,
        "횡단보도": 30,
        "교차로 모퉁이": 20,
        "인도": 6,
        "버스정류소": 1
      },
      "우아동1가": {
        "횡단보도": 1,
        "인도": 1
      },
      "인후동1가": {
        "횡단보도": 10,
        "인도": 6,
        "교차로 모퉁이": 7,
        "소화전": 1,
        "버스정류소": 2
      },
      "서신동": {
        "버스정류소": 2,
        "교차로 모퉁이": 7,
        "횡단보도": 14
      },
      "평화동1가": {
        "교차로 모퉁이": 6,
        "횡단보도": 4,
        "인도": 2,
        "버스정류소": 2
      },
      "서서학동": {
        "교차로 모퉁이": 2,
        "인도": 4
      },
      "우아동2가": {
        "횡단보도": 13,
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "경원동3가": {
        "인도": 1
      },
      "중화산동2가": {
        "횡단보도": 12,
        "인도": 10,
        "교차로 모퉁이": 5,
        "소화전": 1
      },
      "우아동3가": {
        "인도": 3,
        "교차로 모퉁이": 4,
        "횡단보도": 4
      },
      "고사동": {
        "교차로 모퉁이": 1,
        "인도": 9
      },
      "경원동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "다가동4가": {
        "소화전": 1,
        "인도": 2
      },
      "서노송동": {
        "기타": 1,
        "인도": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "덕진동1가": {
        "인도": 1,
        "횡단보도": 3,
        "버스정류소": 1
      },
      "중노송동": {
        "횡단보도": 4,
        "어린이보호구역": 1
      },
      "여의동": {
        "횡단보도": 4,
        "인도": 2,
        "어린이보호구역": 1
      },
      "반월동": {
        "인도": 2,
        "횡단보도": 3
      },
      "덕진동2가": {
        "교차로 모퉁이": 3,
        "횡단보도": 2
      },
      "풍남동3가": {
        "인도": 2,
        "소화전": 1
      },
      "인후동2가": {
        "횡단보도": 1,
        "인도": 1
      },
      "교동": {
        "인도": 4
      },
      "동서학동": {
        "인도": 5,
        "횡단보도": 1
      },
      "전동": {
        "인도": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 2
      },
      "경원동2가": {
        "인도": 1
      },
      "여의동2가": {
        "인도": 1
      },
      "호성동1가": {
        "인도": 4
      },
      "동완산동": {
        "버스정류소": 1
      },
      "태평동": {
        "어린이보호구역": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "풍남동1가": {
        "인도": 1
      }
    },
    "3": {
      "금암동": {
        "인도": 7,
        "교차로 모퉁이": 4,
        "횡단보도": 5
      },
      "서신동": {
        "버스정류소": 2,
        "횡단보도": 12,
        "기타": 1,
        "인도": 3,
        "교차로 모퉁이": 4,
        "소화전": 2
      },
      "삼천동1가": {
        "횡단보도": 13,
        "인도": 3,
        "교차로 모퉁이": 15
      },
      "송천동1가": {
        "교차로 모퉁이": 10,
        "인도": 4,
        "횡단보도": 26,
        "소화전": 5
      },
      "송천동2가": {
        "인도": 6,
        "소화전": 8,
        "횡단보도": 16,
        "교차로 모퉁이": 12
      },
      "인후동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "서서학동": {
        "인도": 2,
        "교차로 모퉁이": 2,
        "소화전": 1,
        "횡단보도": 1
      },
      "남노송동": {
        "인도": 2
      },
      "동서학동": {
        "횡단보도": 8,
        "인도": 6
      },
      "반월동": {
        "횡단보도": 17,
        "소화전": 2,
        "인도": 3
      },
      "효자동3가": {
        "교차로 모퉁이": 15,
        "횡단보도": 28,
        "인도": 6,
        "기타": 2,
        "어린이보호구역": 2,
        "소화전": 1
      },
      "효자동2가": {
        "교차로 모퉁이": 9,
        "횡단보도": 16,
        "인도": 11
      },
      "효자동1가": {
        "교차로 모퉁이": 4,
        "횡단보도": 9,
        "인도": 3,
        "안전지대": 1
      },
      "인후동1가": {
        "횡단보도": 11,
        "인도": 5,
        "버스정류소": 3,
        "교차로 모퉁이": 5
      },
      "중화산동2가": {
        "횡단보도": 7,
        "교차로 모퉁이": 7,
        "인도": 3,
        "어린이보호구역": 1
      },
      "중동": {
        "소화전": 6,
        "횡단보도": 12,
        "인도": 1
      },
      "호성동1가": {
        "횡단보도": 7,
        "인도": 2
      },
      "평화동1가": {
        "횡단보도": 8,
        "교차로 모퉁이": 8,
        "인도": 4
      },
      "교동": {
        "인도": 3,
        "기타": 3,
        "횡단보도": 4
      },
      "고사동": {
        "인도": 6
      },
      "평화동2가": {
        "횡단보도": 13,
        "인도": 5,
        "교차로 모퉁이": 3
      },
      "우아동3가": {
        "버스정류소": 1,
        "횡단보도": 4,
        "교차로 모퉁이": 4,
        "인도": 2
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "다가동4가": {
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 3,
        "인도": 1
      },
      "중노송동": {
        "인도": 3,
        "기타": 1,
        "횡단보도": 1
      },
      "풍남동3가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "인도": 3,
        "횡단보도": 3
      },
      "진북동": {
        "인도": 1
      },
      "여의동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "장동": {
        "횡단보도": 7,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "덕진동1가": {
        "교차로 모퉁이": 5,
        "횡단보도": 7
      },
      "다가동1가": {
        "인도": 1
      },
      "전동": {
        "인도": 1
      },
      "경원동1가": {
        "인도": 2,
        "교차로 모퉁이": 2
      },
      "태평동": {
        "횡단보도": 2
      },
      "만성동": {
        "인도": 14,
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "서노송동": {
        "교차로 모퉁이": 2,
        "인도": 1,
        "기타": 2,
        "횡단보도": 2
      },
      "경원동3가": {
        "횡단보도": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 4,
        "소화전": 1,
        "횡단보도": 1
      },
      "산정동": {
        "소화전": 1
      },
      "전미동1가": {
        "버스정류소": 1
      },
      "호성동2가": {
        "인도": 1
      },
      "다가동3가": {
        "인도": 1
      }
    },
    "4": {
      "효자동3가": {
        "기타": 4,
        "인도": 19,
        "횡단보도": 40,
        "교차로 모퉁이": 20,
        "소화전": 1
      },
      "송천동1가": {
        "횡단보도": 24,
        "교차로 모퉁이": 18,
        "소화전": 6,
        "인도": 4,
        "버스정류소": 1
      },
      "평화동2가": {
        "교차로 모퉁이": 10,
        "인도": 2,
        "횡단보도": 22,
        "어린이보호구역": 2,
        "버스정류소": 1
      },
      "덕진동1가": {
        "횡단보도": 6,
        "인도": 2,
        "소화전": 2,
        "교차로 모퉁이": 1
      },
      "송천동2가": {
        "인도": 10,
        "소화전": 8,
        "교차로 모퉁이": 19,
        "횡단보도": 24
      },
      "평화동1가": {
        "횡단보도": 24,
        "인도": 14,
        "버스정류소": 1,
        "교차로 모퉁이": 42
      },
      "풍남동3가": {
        "인도": 9,
        "소화전": 1
      },
      "교동": {
        "인도": 11,
        "횡단보도": 1
      },
      "서신동": {
        "횡단보도": 22,
        "교차로 모퉁이": 10,
        "인도": 4,
        "버스정류소": 1,
        "기타": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 8,
        "횡단보도": 14,
        "소화전": 2,
        "인도": 11,
        "버스정류소": 1
      },
      "중동": {
        "횡단보도": 21,
        "교차로 모퉁이": 1
      },
      "덕진동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 3,
        "인도": 1
      },
      "서노송동": {
        "횡단보도": 6,
        "인도": 2
      },
      "경원동1가": {
        "횡단보도": 2
      },
      "전동": {
        "교차로 모퉁이": 1,
        "인도": 5,
        "횡단보도": 1
      },
      "호성동1가": {
        "인도": 2
      },
      "우아동3가": {
        "인도": 7,
        "교차로 모퉁이": 12,
        "횡단보도": 10,
        "버스정류소": 2
      },
      "인후동1가": {
        "인도": 9,
        "횡단보도": 24,
        "소화전": 1,
        "버스정류소": 2,
        "교차로 모퉁이": 6
      },
      "남노송동": {
        "인도": 6,
        "어린이보호구역": 1,
        "소화전": 1,
        "횡단보도": 2
      },
      "중인동": {
        "인도": 1
      },
      "반월동": {
        "횡단보도": 5,
        "인도": 4,
        "소화전": 1
      },
      "동서학동": {
        "인도": 4
      },
      "진북동": {
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 6
      },
      "중화산동2가": {
        "소화전": 9,
        "횡단보도": 23,
        "교차로 모퉁이": 15,
        "인도": 6,
        "어린이보호구역": 1
      },
      "서서학동": {
        "횡단보도": 2
      },
      "장동": {
        "횡단보도": 8,
        "교차로 모퉁이": 1
      },
      "만성동": {
        "인도": 18,
        "횡단보도": 3,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "효자동2가": {
        "인도": 33,
        "교차로 모퉁이": 11,
        "횡단보도": 31
      },
      "여의동": {
        "인도": 1,
        "횡단보도": 2
      },
      "금암동": {
        "교차로 모퉁이": 6,
        "횡단보도": 5,
        "인도": 12
      },
      "산정동": {
        "버스정류소": 3,
        "인도": 1,
        "횡단보도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "효자동1가": {
        "교차로 모퉁이": 2,
        "인도": 2,
        "횡단보도": 1
      },
      "인후동2가": {
        "횡단보도": 1,
        "인도": 3
      },
      "서완산동1가": {
        "인도": 1
      },
      "경원동3가": {
        "횡단보도": 1
      },
      "다가동2가": {
        "인도": 1
      },
      "팔복동2가": {
        "교차로 모퉁이": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 2
      },
      "중화산동1가": {
        "소화전": 1,
        "횡단보도": 1,
        "인도": 1
      },
      "팔복동1가": {
        "교차로 모퉁이": 1
      },
      "중노송동": {
        "횡단보도": 1
      },
      "여의동2가": {
        "인도": 1
      },
      "풍남동1가": {
        "인도": 1
      },
      "고사동": {
        "인도": 3
      },
      "팔복동3가": {
        "인도": 1
      },
      "태평동": {
        "기타": 1
      }
    },
    "5": {
      "송천동1가": {
        "횡단보도": 6,
        "소화전": 2,
        "교차로 모퉁이": 2,
        "버스정류소": 1,
        "인도": 1
      },
      "삼천동1가": {
        "교차로 모퉁이": 5,
        "인도": 8,
        "횡단보도": 10
      },
      "경원동3가": {
        "교차로 모퉁이": 1
      },
      "서서학동": {
        "횡단보도": 2
      },
      "평화동2가": {
        "인도": 5,
        "횡단보도": 7,
        "교차로 모퉁이": 7
      },
      "우아동2가": {
        "횡단보도": 4
      },
      "효자동3가": {
        "횡단보도": 5,
        "교차로 모퉁이": 2,
        "기타": 1,
        "버스정류소": 1,
        "인도": 2
      },
      "우아동1가": {
        "버스정류소": 1
      },
      "서신동": {
        "횡단보도": 8,
        "인도": 2
      },
      "평화동1가": {
        "교차로 모퉁이": 21,
        "횡단보도": 10,
        "인도": 5,
        "기타": 1,
        "버스정류소": 1
      },
      "덕진동2가": {
        "소화전": 1
      },
      "만성동": {
        "인도": 7,
        "횡단보도": 1,
        "버스정류소": 2,
        "소화전": 1
      },
      "중화산동1가": {
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "인도": 1
      },
      "송천동2가": {
        "소화전": 2,
        "횡단보도": 10,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "교동": {
        "인도": 2,
        "기타": 1
      },
      "중화산동2가": {
        "횡단보도": 4,
        "교차로 모퉁이": 5
      },
      "반월동": {
        "횡단보도": 3,
        "인도": 2
      },
      "풍남동3가": {
        "인도": 1
      },
      "효자동2가": {
        "횡단보도": 4,
        "소화전": 1,
        "인도": 8
      },
      "장동": {
        "횡단보도": 2
      },
      "여의동": {
        "교차로 모퉁이": 3,
        "횡단보도": 1
      },
      "중동": {
        "소화전": 2
      },
      "덕진동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "금암동": {
        "교차로 모퉁이": 4
      },
      "호성동1가": {
        "인도": 2,
        "횡단보도": 1
      },
      "인후동1가": {
        "소화전": 1,
        "횡단보도": 1,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 1
      },
      "남노송동": {
        "어린이보호구역": 4
      },
      "우아동3가": {
        "인도": 1,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "중앙동3가": {
        "인도": 1
      },
      "인후동2가": {
        "횡단보도": 1
      },
      "삼천동2가": {
        "인도": 1
      },
      "팔복동1가": {
        "횡단보도": 2
      },
      "고사동": {
        "횡단보도": 1
      }
    }
  },
  "10": {
    "1": {
      "호성동1가": {
        "횡단보도": 5
      },
      "서노송동": {
        "인도": 9,
        "횡단보도": 6
      },
      "송천동2가": {
        "횡단보도": 23,
        "소화전": 4,
        "인도": 8,
        "교차로 모퉁이": 3
      },
      "삼천동1가": {
        "인도": 6,
        "횡단보도": 8,
        "교차로 모퉁이": 8,
        "소화전": 1
      },
      "중노송동": {
        "인도": 3,
        "횡단보도": 1,
        "기타": 1,
        "교차로 모퉁이": 1
      },
      "평화동2가": {
        "인도": 6,
        "소화전": 1,
        "횡단보도": 13,
        "교차로 모퉁이": 5,
        "버스정류소": 1
      },
      "교동": {
        "인도": 4,
        "교차로 모퉁이": 1,
        "기타": 6,
        "횡단보도": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 29,
        "횡단보도": 23,
        "인도": 9,
        "버스정류소": 2,
        "기타": 1
      },
      "반월동": {
        "인도": 3,
        "소화전": 1,
        "횡단보도": 7
      },
      "송천동1가": {
        "횡단보도": 12,
        "교차로 모퉁이": 2,
        "인도": 1,
        "소화전": 1
      },
      "인후동1가": {
        "횡단보도": 19,
        "인도": 11,
        "교차로 모퉁이": 7,
        "소화전": 4
      },
      "중화산동1가": {
        "횡단보도": 1,
        "인도": 1
      },
      "효자동3가": {
        "교차로 모퉁이": 16,
        "인도": 7,
        "횡단보도": 16,
        "기타": 6,
        "버스정류소": 2,
        "소화전": 2
      },
      "효자동2가": {
        "인도": 22,
        "횡단보도": 10,
        "교차로 모퉁이": 5
      },
      "서신동": {
        "소화전": 1,
        "교차로 모퉁이": 4,
        "기타": 1,
        "인도": 5,
        "횡단보도": 18
      },
      "중화산동2가": {
        "인도": 5,
        "교차로 모퉁이": 3,
        "횡단보도": 12,
        "버스정류소": 1,
        "소화전": 1
      },
      "중동": {
        "횡단보도": 3,
        "인도": 1,
        "소화전": 5
      },
      "인후동2가": {
        "인도": 6,
        "횡단보도": 3
      },
      "우아동3가": {
        "횡단보도": 21,
        "인도": 5,
        "교차로 모퉁이": 1
      },
      "고사동": {
        "인도": 4,
        "소화전": 1
      },
      "만성동": {
        "인도": 14,
        "소화전": 2
      },
      "금암동": {
        "횡단보도": 4,
        "인도": 16,
        "교차로 모퉁이": 6
      },
      "효자동1가": {
        "횡단보도": 3,
        "인도": 1,
        "교차로 모퉁이": 3,
        "기타": 1
      },
      "서서학동": {
        "횡단보도": 2,
        "인도": 5
      },
      "우아동2가": {
        "횡단보도": 9,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "장동": {
        "횡단보도": 6,
        "교차로 모퉁이": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "팔복동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "우아동1가": {
        "버스정류소": 1,
        "횡단보도": 2
      },
      "풍남동3가": {
        "인도": 3,
        "교차로 모퉁이": 2
      },
      "동서학동": {
        "횡단보도": 3
      },
      "산정동": {
        "버스정류소": 1
      },
      "전동": {
        "교차로 모퉁이": 3,
        "횡단보도": 1,
        "인도": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 2,
        "인도": 1,
        "횡단보도": 1
      },
      "남노송동": {
        "인도": 2,
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "어린이보호구역": 4
      },
      "여의동": {
        "횡단보도": 2,
        "인도": 1
      },
      "덕진동1가": {
        "횡단보도": 4,
        "소화전": 1,
        "교차로 모퉁이": 2
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 5
      },
      "팔복동3가": {
        "횡단보도": 3
      },
      "덕진동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "중앙동2가": {
        "인도": 1
      },
      "풍남동1가": {
        "인도": 2
      },
      "다가동1가": {
        "인도": 1
      },
      "팔복동4가": {
        "인도": 1
      },
      "다가동3가": {
        "인도": 1
      }
    },
    "2": {
      "효자동3가": {
        "횡단보도": 48,
        "교차로 모퉁이": 35,
        "인도": 28,
        "기타": 4,
        "버스정류소": 1
      },
      "인후동1가": {
        "소화전": 12,
        "횡단보도": 13,
        "인도": 6,
        "교차로 모퉁이": 6,
        "버스정류소": 2
      },
      "송천동1가": {
        "횡단보도": 10,
        "교차로 모퉁이": 5,
        "소화전": 4,
        "인도": 1
      },
      "서신동": {
        "기타": 2,
        "소화전": 3,
        "교차로 모퉁이": 12,
        "인도": 2,
        "횡단보도": 18
      },
      "경원동1가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "인도": 1
      },
      "효자동2가": {
        "인도": 27,
        "교차로 모퉁이": 10,
        "횡단보도": 28,
        "소화전": 1
      },
      "덕진동2가": {
        "인도": 1,
        "교차로 모퉁이": 2,
        "횡단보도": 3
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 1
      },
      "금암동": {
        "인도": 12,
        "횡단보도": 8,
        "교차로 모퉁이": 11
      },
      "서서학동": {
        "횡단보도": 2,
        "인도": 1
      },
      "중화산동2가": {
        "횡단보도": 36,
        "교차로 모퉁이": 14,
        "인도": 5,
        "소화전": 3,
        "어린이보호구역": 1
      },
      "만성동": {
        "인도": 12,
        "버스정류소": 1,
        "횡단보도": 3
      },
      "여의동": {
        "횡단보도": 12,
        "인도": 1,
        "어린이보호구역": 1,
        "교차로 모퉁이": 2
      },
      "평화동2가": {
        "횡단보도": 36,
        "어린이보호구역": 1,
        "교차로 모퉁이": 26,
        "인도": 5,
        "소화전": 2,
        "버스정류소": 1
      },
      "풍남동3가": {
        "인도": 3,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "인후동2가": {
        "인도": 9,
        "횡단보도": 1
      },
      "송천동2가": {
        "횡단보도": 18,
        "교차로 모퉁이": 9,
        "인도": 2,
        "소화전": 1
      },
      "중동": {
        "인도": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 8,
        "버스정류소": 1
      },
      "덕진동1가": {
        "인도": 5,
        "횡단보도": 5
      },
      "평화동1가": {
        "횡단보도": 33,
        "교차로 모퉁이": 28,
        "인도": 3,
        "버스정류소": 4,
        "소화전": 1,
        "기타": 2
      },
      "팔복동1가": {
        "횡단보도": 9,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "삼천동1가": {
        "횡단보도": 17,
        "교차로 모퉁이": 5,
        "인도": 7
      },
      "효자동1가": {
        "횡단보도": 12,
        "어린이보호구역": 1,
        "교차로 모퉁이": 1,
        "소화전": 1,
        "인도": 2
      },
      "교동": {
        "인도": 4,
        "기타": 1,
        "횡단보도": 1
      },
      "중화산동1가": {
        "횡단보도": 1,
        "인도": 2
      },
      "장동": {
        "인도": 2,
        "횡단보도": 7
      },
      "우아동3가": {
        "인도": 2,
        "횡단보도": 5,
        "교차로 모퉁이": 4
      },
      "우아동2가": {
        "횡단보도": 7,
        "소화전": 1,
        "인도": 4
      },
      "중노송동": {
        "횡단보도": 1,
        "인도": 6
      },
      "서노송동": {
        "횡단보도": 4,
        "인도": 1,
        "기타": 1,
        "소화전": 1
      },
      "반월동": {
        "횡단보도": 9,
        "인도": 1
      },
      "동서학동": {
        "횡단보도": 4,
        "인도": 2
      },
      "고사동": {
        "인도": 5
      },
      "남노송동": {
        "횡단보도": 2
      },
      "다가동3가": {
        "인도": 1
      },
      "중앙동3가": {
        "인도": 1
      },
      "팔복동2가": {
        "인도": 1,
        "횡단보도": 2
      },
      "서완산동1가": {
        "인도": 1
      },
      "우아동1가": {
        "횡단보도": 1,
        "버스정류소": 1
      },
      "다가동4가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "진북동": {
        "횡단보도": 2
      },
      "전동": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "풍남동1가": {
        "인도": 1
      },
      "여의동2가": {
        "인도": 2
      },
      "경원동2가": {
        "횡단보도": 1
      },
      "호성동1가": {
        "인도": 1,
        "소화전": 1
      }
    },
    "3": {
      "효자동3가": {
        "어린이보호구역": 4,
        "인도": 19,
        "교차로 모퉁이": 17,
        "횡단보도": 21,
        "버스정류소": 1,
        "소화전": 1,
        "기타": 1
      },
      "평화동1가": {
        "횡단보도": 25,
        "교차로 모퉁이": 19,
        "기타": 2,
        "인도": 3,
        "어린이보호구역": 1
      },
      "중화산동2가": {
        "소화전": 8,
        "횡단보도": 22,
        "교차로 모퉁이": 15,
        "어린이보호구역": 4
      },
      "우아동3가": {
        "교차로 모퉁이": 13,
        "인도": 6,
        "횡단보도": 14
      },
      "효자동2가": {
        "교차로 모퉁이": 7,
        "인도": 27,
        "횡단보도": 31
      },
      "효자동1가": {
        "인도": 2,
        "교차로 모퉁이": 4,
        "횡단보도": 8,
        "기타": 1
      },
      "중앙동2가": {
        "인도": 3
      },
      "서신동": {
        "횡단보도": 14,
        "소화전": 3,
        "인도": 8,
        "교차로 모퉁이": 10,
        "기타": 4,
        "버스정류소": 1
      },
      "교동": {
        "인도": 4,
        "기타": 1,
        "횡단보도": 1
      },
      "삼천동1가": {
        "횡단보도": 12,
        "교차로 모퉁이": 10,
        "인도": 10,
        "버스정류소": 5
      },
      "금암동": {
        "교차로 모퉁이": 15,
        "횡단보도": 8,
        "인도": 5,
        "소화전": 1
      },
      "인후동1가": {
        "인도": 18,
        "소화전": 5,
        "횡단보도": 10,
        "교차로 모퉁이": 1
      },
      "송천동2가": {
        "횡단보도": 23,
        "교차로 모퉁이": 3,
        "소화전": 5,
        "인도": 2
      },
      "여의동": {
        "횡단보도": 3,
        "교차로 모퉁이": 2,
        "어린이보호구역": 1
      },
      "서노송동": {
        "인도": 13,
        "횡단보도": 5,
        "소화전": 1
      },
      "경원동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "평화동2가": {
        "횡단보도": 10,
        "교차로 모퉁이": 6,
        "인도": 10,
        "어린이보호구역": 2,
        "기타": 1
      },
      "경원동3가": {
        "횡단보도": 2,
        "인도": 2
      },
      "팔복동4가": {
        "횡단보도": 1
      },
      "반월동": {
        "횡단보도": 6,
        "소화전": 1,
        "버스정류소": 1,
        "인도": 3
      },
      "송천동1가": {
        "횡단보도": 15,
        "교차로 모퉁이": 2,
        "소화전": 5
      },
      "만성동": {
        "횡단보도": 3,
        "인도": 14
      },
      "진북동": {
        "인도": 2,
        "횡단보도": 1,
        "버스정류소": 1,
        "교차로 모퉁이": 1
      },
      "중동": {
        "횡단보도": 10,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "횡단보도": 6
      },
      "여의동2가": {
        "교차로 모퉁이": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 1,
        "인도": 1,
        "소화전": 1,
        "횡단보도": 2
      },
      "전동": {
        "교차로 모퉁이": 3,
        "인도": 4
      },
      "인후동2가": {
        "횡단보도": 4,
        "소화전": 1,
        "인도": 6
      },
      "동서학동": {
        "횡단보도": 3,
        "기타": 2,
        "교차로 모퉁이": 1
      },
      "중노송동": {
        "인도": 9
      },
      "고사동": {
        "인도": 7,
        "횡단보도": 1
      },
      "서완산동2가": {
        "인도": 1
      },
      "산정동": {
        "인도": 2,
        "소화전": 1
      },
      "경원동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 4
      },
      "장동": {
        "횡단보도": 8,
        "인도": 3
      },
      "호성동1가": {
        "소화전": 1
      },
      "태평동": {
        "횡단보도": 1,
        "인도": 1
      },
      "서서학동": {
        "인도": 3
      },
      "팔복동1가": {
        "인도": 2
      },
      "덕진동1가": {
        "횡단보도": 2
      },
      "풍남동3가": {
        "인도": 1
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "삼천동3가": {
        "인도": 2
      }
    },
    "4": {
      "효자동2가": {
        "인도": 28,
        "횡단보도": 32,
        "교차로 모퉁이": 6,
        "소화전": 1,
        "버스정류소": 1
      },
      "인후동1가": {
        "횡단보도": 4,
        "교차로 모퉁이": 4,
        "인도": 3,
        "소화전": 1,
        "버스정류소": 1
      },
      "금암동": {
        "횡단보도": 9,
        "교차로 모퉁이": 5,
        "인도": 8
      },
      "효자동1가": {
        "횡단보도": 11,
        "인도": 5,
        "교차로 모퉁이": 2
      },
      "서신동": {
        "횡단보도": 39,
        "교차로 모퉁이": 16,
        "인도": 17,
        "소화전": 5,
        "기타": 8
      },
      "삼천동1가": {
        "횡단보도": 5,
        "인도": 21,
        "교차로 모퉁이": 14,
        "버스정류소": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 12,
        "횡단보도": 31,
        "인도": 9,
        "소화전": 3,
        "어린이보호구역": 1,
        "버스정류소": 1
      },
      "덕진동1가": {
        "횡단보도": 11,
        "버스정류소": 4,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "인후동2가": {
        "횡단보도": 6,
        "인도": 5,
        "교차로 모퉁이": 1
      },
      "반월동": {
        "횡단보도": 4,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "평화동2가": {
        "교차로 모퉁이": 22,
        "인도": 5,
        "어린이보호구역": 1,
        "횡단보도": 22,
        "안전지대": 7,
        "버스정류소": 3,
        "소화전": 1
      },
      "우아동3가": {
        "인도": 1,
        "교차로 모퉁이": 12,
        "횡단보도": 6
      },
      "중동": {
        "소화전": 1,
        "횡단보도": 7,
        "교차로 모퉁이": 3
      },
      "고사동": {
        "인도": 32,
        "횡단보도": 2
      },
      "만성동": {
        "인도": 12,
        "횡단보도": 2
      },
      "효자동3가": {
        "인도": 17,
        "교차로 모퉁이": 15,
        "횡단보도": 33,
        "소화전": 2,
        "버스정류소": 2,
        "기타": 3
      },
      "우아동2가": {
        "횡단보도": 4
      },
      "평화동1가": {
        "버스정류소": 2,
        "교차로 모퉁이": 71,
        "인도": 6,
        "횡단보도": 63,
        "기타": 4,
        "소화전": 2,
        "안전지대": 1
      },
      "송천동1가": {
        "횡단보도": 10,
        "교차로 모퉁이": 6,
        "소화전": 2,
        "인도": 1,
        "버스정류소": 1
      },
      "덕진동2가": {
        "횡단보도": 4,
        "교차로 모퉁이": 5,
        "인도": 2
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 7
      },
      "송천동2가": {
        "횡단보도": 16,
        "인도": 4,
        "교차로 모퉁이": 2,
        "소화전": 2
      },
      "경원동1가": {
        "교차로 모퉁이": 2,
        "인도": 2,
        "횡단보도": 1
      },
      "진북동": {
        "횡단보도": 3,
        "소화전": 1,
        "교차로 모퉁이": 2
      },
      "중노송동": {
        "인도": 7,
        "교차로 모퉁이": 1
      },
      "전동": {
        "횡단보도": 2,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "서노송동": {
        "인도": 8,
        "횡단보도": 5,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "장동": {
        "횡단보도": 5,
        "인도": 2,
        "소화전": 1
      },
      "팔복동2가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "인도": 1
      },
      "호성동1가": {
        "소화전": 1
      },
      "교동": {
        "인도": 5,
        "횡단보도": 2
      },
      "풍남동3가": {
        "인도": 4,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "여의동": {
        "횡단보도": 6
      },
      "풍남동2가": {
        "인도": 1
      },
      "중앙동2가": {
        "인도": 1
      },
      "서서학동": {
        "인도": 1,
        "횡단보도": 3
      },
      "산정동": {
        "횡단보도": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "전미동1가": {
        "버스정류소": 1,
        "인도": 1
      },
      "남노송동": {
        "횡단보도": 3,
        "인도": 2
      },
      "팔복동3가": {
        "횡단보도": 2
      },
      "동서학동": {
        "인도": 1,
        "횡단보도": 1,
        "교차로 모퉁이": 2
      },
      "중앙동1가": {
        "교차로 모퉁이": 1
      },
      "중화산동1가": {
        "횡단보도": 2
      },
      "태평동": {
        "버스정류소": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "팔복동1가": {
        "횡단보도": 1
      }
    },
    "5": {
      "평화동1가": {
        "횡단보도": 15,
        "교차로 모퉁이": 31,
        "인도": 3,
        "안전지대": 1
      },
      "평화동2가": {
        "교차로 모퉁이": 10,
        "인도": 8,
        "횡단보도": 4,
        "버스정류소": 1
      },
      "삼천동1가": {
        "인도": 13,
        "교차로 모퉁이": 5,
        "횡단보도": 13,
        "소화전": 1,
        "버스정류소": 1
      },
      "효자동2가": {
        "인도": 26,
        "횡단보도": 35,
        "교차로 모퉁이": 7
      },
      "효자동3가": {
        "인도": 16,
        "교차로 모퉁이": 14,
        "횡단보도": 20,
        "소화전": 1,
        "기타": 1
      },
      "서노송동": {
        "횡단보도": 2,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "전동": {
        "인도": 2
      },
      "인후동2가": {
        "횡단보도": 1,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "서신동": {
        "횡단보도": 9,
        "버스정류소": 1,
        "인도": 4,
        "기타": 1,
        "교차로 모퉁이": 1
      },
      "중동": {
        "횡단보도": 5,
        "소화전": 1
      },
      "효자동1가": {
        "횡단보도": 7,
        "교차로 모퉁이": 1
      },
      "인후동1가": {
        "교차로 모퉁이": 2,
        "횡단보도": 6,
        "인도": 6,
        "버스정류소": 1
      },
      "팔복동2가": {
        "인도": 2
      },
      "중화산동2가": {
        "횡단보도": 8,
        "인도": 5,
        "교차로 모퉁이": 9,
        "소화전": 1
      },
      "고사동": {
        "인도": 2
      },
      "만성동": {
        "인도": 6,
        "횡단보도": 1
      },
      "덕진동1가": {
        "교차로 모퉁이": 2
      },
      "금암동": {
        "인도": 4,
        "횡단보도": 6,
        "교차로 모퉁이": 2
      },
      "반월동": {
        "소화전": 2,
        "교차로 모퉁이": 2,
        "인도": 1,
        "횡단보도": 8
      },
      "송천동2가": {
        "횡단보도": 11,
        "소화전": 1
      },
      "송천동1가": {
        "소화전": 1,
        "인도": 2,
        "횡단보도": 1
      },
      "교동": {
        "인도": 2
      },
      "우아동3가": {
        "횡단보도": 1,
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "횡단보도": 2,
        "인도": 1
      },
      "진북동": {
        "횡단보도": 1
      },
      "중노송동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "장동": {
        "횡단보도": 4,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "경원동3가": {
        "횡단보도": 1,
        "인도": 1
      },
      "여의동": {
        "횡단보도": 2,
        "어린이보호구역": 1
      },
      "풍남동3가": {
        "횡단보도": 1,
        "인도": 1
      },
      "서서학동": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "호성동2가": {
        "버스정류소": 1
      },
      "다가동4가": {
        "교차로 모퉁이": 1
      },
      "원동": {
        "인도": 1
      },
      "남노송동": {
        "인도": 1
      },
      "경원동1가": {
        "횡단보도": 3,
        "인도": 1
      },
      "경원동2가": {
        "횡단보도": 1
      },
      "동서학동": {
        "교차로 모퉁이": 1
      }
    }
  },
  "11": {
    "1": {
      "덕진동1가": {
        "인도": 1,
        "횡단보도": 6,
        "교차로 모퉁이": 3
      },
      "효자동2가": {
        "인도": 69,
        "횡단보도": 48,
        "교차로 모퉁이": 7
      },
      "송천동1가": {
        "횡단보도": 12,
        "인도": 1,
        "소화전": 2,
        "교차로 모퉁이": 3
      },
      "서신동": {
        "인도": 6,
        "횡단보도": 20,
        "교차로 모퉁이": 5,
        "기타": 3,
        "버스정류소": 3
      },
      "서노송동": {
        "횡단보도": 4,
        "인도": 2,
        "소화전": 1
      },
      "효자동1가": {
        "횡단보도": 17,
        "인도": 5
      },
      "반월동": {
        "횡단보도": 3,
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "중화산동2가": {
        "소화전": 8,
        "인도": 6,
        "횡단보도": 17,
        "교차로 모퉁이": 8
      },
      "만성동": {
        "횡단보도": 2,
        "인도": 10
      },
      "금암동": {
        "인도": 10,
        "교차로 모퉁이": 7,
        "횡단보도": 5
      },
      "인후동1가": {
        "인도": 9,
        "횡단보도": 8,
        "교차로 모퉁이": 2,
        "어린이보호구역": 1
      },
      "중화산동1가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1,
        "소화전": 1
      },
      "산정동": {
        "횡단보도": 3,
        "소화전": 1
      },
      "중노송동": {
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 7,
        "버스정류소": 1,
        "소화전": 1
      },
      "삼천동1가": {
        "횡단보도": 9,
        "교차로 모퉁이": 11,
        "인도": 9,
        "버스정류소": 1
      },
      "풍남동3가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "전동": {
        "인도": 8
      },
      "중동": {
        "인도": 2,
        "소화전": 5,
        "횡단보도": 7,
        "교차로 모퉁이": 2
      },
      "진북동": {
        "횡단보도": 1,
        "인도": 1
      },
      "효자동3가": {
        "인도": 23,
        "횡단보도": 20,
        "교차로 모퉁이": 21,
        "소화전": 2,
        "기타": 4,
        "버스정류소": 2
      },
      "평화동2가": {
        "횡단보도": 26,
        "교차로 모퉁이": 13,
        "인도": 4,
        "어린이보호구역": 2
      },
      "평화동1가": {
        "횡단보도": 31,
        "교차로 모퉁이": 48,
        "인도": 4,
        "소화전": 1
      },
      "우아동3가": {
        "횡단보도": 10,
        "교차로 모퉁이": 11,
        "인도": 9
      },
      "송천동2가": {
        "인도": 4,
        "소화전": 5,
        "교차로 모퉁이": 1,
        "횡단보도": 8
      },
      "여의동": {
        "교차로 모퉁이": 2,
        "횡단보도": 5,
        "인도": 1,
        "어린이보호구역": 1
      },
      "남노송동": {
        "인도": 1,
        "횡단보도": 1
      },
      "덕진동2가": {
        "횡단보도": 3,
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "우아동1가": {
        "횡단보도": 2
      },
      "고사동": {
        "인도": 7
      },
      "전동3가": {
        "횡단보도": 1
      },
      "인후동2가": {
        "인도": 2,
        "교차로 모퉁이": 3
      },
      "호성동1가": {
        "횡단보도": 2,
        "교차로 모퉁이": 2
      },
      "교동": {
        "인도": 5
      },
      "장동": {
        "인도": 2,
        "소화전": 2
      },
      "경원동1가": {
        "인도": 2,
        "횡단보도": 1
      },
      "서서학동": {
        "횡단보도": 1,
        "교차로 모퉁이": 2,
        "인도": 1
      },
      "팔복동1가": {
        "인도": 1
      },
      "팔복동2가": {
        "인도": 1
      },
      "풍남동1가": {
        "인도": 1
      },
      "팔복동3가": {
        "횡단보도": 1,
        "인도": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "원동": {
        "인도": 1
      },
      "다가동3가": {
        "횡단보도": 1
      },
      "여의동2가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "동서학동": {
        "횡단보도": 1
      },
      "경원동3가": {
        "인도": 1
      },
      "태평동": {
        "횡단보도": 1
      }
    },
    "2": {
      "효자동3가": {
        "인도": 26,
        "횡단보도": 43,
        "버스정류소": 4,
        "교차로 모퉁이": 13,
        "기타": 4,
        "소화전": 2
      },
      "효자동2가": {
        "인도": 40,
        "횡단보도": 62,
        "교차로 모퉁이": 14,
        "소화전": 3
      },
      "태평동": {
        "횡단보도": 1
      },
      "만성동": {
        "소화전": 1,
        "인도": 13,
        "횡단보도": 2,
        "버스정류소": 1
      },
      "서노송동": {
        "소화전": 1,
        "인도": 13,
        "횡단보도": 3
      },
      "송천동2가": {
        "인도": 11,
        "횡단보도": 24,
        "교차로 모퉁이": 2
      },
      "경원동3가": {
        "인도": 2,
        "교차로 모퉁이": 1,
        "횡단보도": 4
      },
      "진북동": {
        "인도": 3,
        "소화전": 1
      },
      "여의동": {
        "횡단보도": 3,
        "어린이보호구역": 10,
        "교차로 모퉁이": 1
      },
      "서신동": {
        "횡단보도": 28,
        "소화전": 5,
        "교차로 모퉁이": 11,
        "인도": 4,
        "기타": 2,
        "버스정류소": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 11,
        "인도": 9,
        "횡단보도": 15,
        "소화전": 3,
        "어린이보호구역": 1
      },
      "효자동1가": {
        "횡단보도": 18,
        "인도": 7,
        "교차로 모퉁이": 5,
        "소화전": 1
      },
      "중노송동": {
        "인도": 14
      },
      "금암동": {
        "인도": 35,
        "교차로 모퉁이": 9,
        "횡단보도": 9
      },
      "덕진동2가": {
        "횡단보도": 2
      },
      "평화동2가": {
        "인도": 3,
        "횡단보도": 16,
        "교차로 모퉁이": 8,
        "어린이보호구역": 6,
        "안전지대": 1
      },
      "평화동1가": {
        "교차로 모퉁이": 9,
        "횡단보도": 20,
        "인도": 1,
        "기타": 1
      },
      "전동": {
        "인도": 2,
        "횡단보도": 2,
        "교차로 모퉁이": 2
      },
      "고사동": {
        "인도": 9,
        "횡단보도": 2
      },
      "송천동1가": {
        "인도": 5,
        "횡단보도": 17,
        "소화전": 7,
        "교차로 모퉁이": 4
      },
      "인후동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 3,
        "인도": 3
      },
      "남노송동": {
        "인도": 1
      },
      "교동": {
        "인도": 5,
        "기타": 2,
        "횡단보도": 1,
        "교차로 모퉁이": 3
      },
      "반월동": {
        "횡단보도": 12,
        "인도": 2,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "장동": {
        "인도": 1,
        "횡단보도": 4,
        "버스정류소": 1
      },
      "삼천동1가": {
        "횡단보도": 20,
        "교차로 모퉁이": 7,
        "인도": 7
      },
      "우아동3가": {
        "인도": 4,
        "횡단보도": 4,
        "교차로 모퉁이": 7,
        "버스정류소": 2
      },
      "호성동1가": {
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "우아동2가": {
        "횡단보도": 5,
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "인후동1가": {
        "횡단보도": 9,
        "인도": 6,
        "교차로 모퉁이": 1,
        "소화전": 1,
        "버스정류소": 1
      },
      "동서학동": {
        "횡단보도": 3
      },
      "풍남동3가": {
        "교차로 모퉁이": 1,
        "횡단보도": 2,
        "인도": 3
      },
      "팔복동3가": {
        "횡단보도": 2
      },
      "여의동2가": {
        "인도": 2,
        "횡단보도": 3
      },
      "풍남동1가": {
        "인도": 1
      },
      "덕진동1가": {
        "횡단보도": 2,
        "버스정류소": 5,
        "소화전": 1
      },
      "삼천동2가": {
        "교차로 모퉁이": 1
      },
      "상림동": {
        "인도": 1
      },
      "산정동": {
        "소화전": 2
      },
      "중앙동1가": {
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "다가동3가": {
        "인도": 1
      },
      "팔복동1가": {
        "횡단보도": 1
      },
      "중동": {
        "횡단보도": 5
      },
      "경원동1가": {
        "인도": 1
      }
    },
    "3": {
      "삼천동1가": {
        "횡단보도": 18,
        "인도": 21,
        "교차로 모퉁이": 7,
        "버스정류소": 1,
        "어린이보호구역": 2
      },
      "평화동1가": {
        "인도": 10,
        "횡단보도": 28,
        "교차로 모퉁이": 58,
        "안전지대": 1
      },
      "전동": {
        "횡단보도": 2,
        "인도": 3
      },
      "송천동1가": {
        "소화전": 3,
        "횡단보도": 8,
        "교차로 모퉁이": 2,
        "인도": 2
      },
      "효자동3가": {
        "인도": 7,
        "횡단보도": 23,
        "교차로 모퉁이": 25,
        "기타": 2,
        "버스정류소": 1,
        "소화전": 1,
        "어린이보호구역": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "고사동": {
        "인도": 8
      },
      "서노송동": {
        "인도": 2,
        "교차로 모퉁이": 3,
        "횡단보도": 3
      },
      "효자동1가": {
        "횡단보도": 8,
        "인도": 6,
        "교차로 모퉁이": 5
      },
      "효자동2가": {
        "횡단보도": 13,
        "인도": 42,
        "교차로 모퉁이": 12,
        "소화전": 1
      },
      "교동": {
        "인도": 4,
        "기타": 1,
        "횡단보도": 1
      },
      "경원동3가": {
        "인도": 4,
        "횡단보도": 8
      },
      "금암동": {
        "교차로 모퉁이": 15,
        "인도": 13,
        "횡단보도": 7
      },
      "평화동2가": {
        "횡단보도": 15,
        "인도": 5,
        "교차로 모퉁이": 11,
        "어린이보호구역": 3,
        "버스정류소": 1
      },
      "인후동1가": {
        "횡단보도": 15,
        "인도": 7,
        "교차로 모퉁이": 4,
        "소화전": 3
      },
      "여의동2가": {
        "횡단보도": 2
      },
      "우아동3가": {
        "인도": 7,
        "교차로 모퉁이": 3,
        "횡단보도": 8,
        "버스정류소": 4
      },
      "반월동": {
        "횡단보도": 7,
        "인도": 1,
        "소화전": 1
      },
      "호성동1가": {
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "송천동2가": {
        "횡단보도": 24,
        "교차로 모퉁이": 7,
        "소화전": 2,
        "인도": 4
      },
      "서신동": {
        "교차로 모퉁이": 19,
        "횡단보도": 29,
        "인도": 10,
        "소화전": 5,
        "버스정류소": 1
      },
      "진북동": {
        "횡단보도": 3,
        "인도": 1
      },
      "인후동2가": {
        "횡단보도": 3,
        "교차로 모퉁이": 3,
        "인도": 2
      },
      "중화산동2가": {
        "인도": 6,
        "소화전": 13,
        "횡단보도": 4,
        "교차로 모퉁이": 6
      },
      "우아동1가": {
        "횡단보도": 3
      },
      "삼천동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "장동": {
        "횡단보도": 6,
        "인도": 3
      },
      "만성동": {
        "횡단보도": 4,
        "교차로 모퉁이": 2,
        "인도": 7,
        "소화전": 2
      },
      "남노송동": {
        "교차로 모퉁이": 2,
        "횡단보도": 2
      },
      "서서학동": {
        "인도": 2
      },
      "팔복동3가": {
        "횡단보도": 1
      },
      "태평동": {
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "중앙동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "횡단보도": 9
      },
      "동서학동": {
        "교차로 모퉁이": 1,
        "횡단보도": 1,
        "인도": 2
      },
      "덕진동1가": {
        "횡단보도": 6,
        "버스정류소": 5
      },
      "산정동": {
        "소화전": 1
      },
      "중노송동": {
        "인도": 2
      },
      "평화동3가": {
        "횡단보도": 1,
        "인도": 1
      },
      "중동": {
        "횡단보도": 14,
        "교차로 모퉁이": 2
      },
      "경원동2가": {
        "인도": 2
      },
      "팔복동2가": {
        "인도": 1,
        "횡단보도": 2
      },
      "팔복동1가": {
        "횡단보도": 2
      },
      "중화산동1가": {
        "소화전": 1
      },
      "경원동1가": {
        "인도": 1,
        "횡단보도": 2
      },
      "덕진동2가": {
        "인도": 1
      }
    },
    "4": {
      "송천동2가": {
        "인도": 12,
        "횡단보도": 9,
        "소화전": 3
      },
      "효자동2가": {
        "횡단보도": 10,
        "교차로 모퉁이": 15,
        "인도": 29,
        "소화전": 1,
        "어린이보호구역": 1
      },
      "금암동": {
        "교차로 모퉁이": 5,
        "횡단보도": 6,
        "인도": 5,
        "소화전": 3
      },
      "우아동3가": {
        "교차로 모퉁이": 7,
        "횡단보도": 8
      },
      "효자동3가": {
        "횡단보도": 43,
        "인도": 10,
        "교차로 모퉁이": 21,
        "소화전": 1,
        "어린이보호구역": 1,
        "기타": 2
      },
      "효자동1가": {
        "교차로 모퉁이": 16,
        "횡단보도": 10,
        "인도": 5,
        "기타": 1
      },
      "중화산동1가": {
        "소화전": 1,
        "인도": 3
      },
      "덕진동1가": {
        "횡단보도": 6,
        "버스정류소": 2
      },
      "만성동": {
        "횡단보도": 2,
        "인도": 15
      },
      "삼천동1가": {
        "횡단보도": 21,
        "인도": 13,
        "교차로 모퉁이": 13,
        "버스정류소": 2,
        "소화전": 1
      },
      "인후동1가": {
        "횡단보도": 15,
        "교차로 모퉁이": 3,
        "인도": 4,
        "소화전": 2
      },
      "중화산동2가": {
        "횡단보도": 11,
        "교차로 모퉁이": 49,
        "소화전": 9,
        "인도": 14,
        "어린이보호구역": 1,
        "기타": 2
      },
      "고사동": {
        "인도": 5
      },
      "서신동": {
        "버스정류소": 1,
        "교차로 모퉁이": 10,
        "횡단보도": 23,
        "기타": 4,
        "인도": 4
      },
      "평화동1가": {
        "횡단보도": 21,
        "교차로 모퉁이": 61,
        "인도": 8
      },
      "여의동2가": {
        "인도": 1
      },
      "송천동1가": {
        "인도": 1,
        "횡단보도": 12,
        "소화전": 1,
        "교차로 모퉁이": 5
      },
      "전동": {
        "인도": 2,
        "횡단보도": 1
      },
      "우아동2가": {
        "횡단보도": 18,
        "인도": 2
      },
      "서노송동": {
        "인도": 6,
        "횡단보도": 1,
        "소화전": 1,
        "교차로 모퉁이": 2
      },
      "반월동": {
        "횡단보도": 4
      },
      "풍남동2가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "장동": {
        "횡단보도": 5
      },
      "평화동2가": {
        "교차로 모퉁이": 6,
        "횡단보도": 21,
        "인도": 3
      },
      "덕진동2가": {
        "인도": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "풍남동1가": {
        "인도": 2,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "경원동3가": {
        "횡단보도": 7,
        "인도": 1
      },
      "남노송동": {
        "횡단보도": 1,
        "인도": 2
      },
      "진북동": {
        "횡단보도": 1,
        "인도": 1
      },
      "중앙동1가": {
        "인도": 1
      },
      "인후동2가": {
        "횡단보도": 4,
        "인도": 3,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "여의동": {
        "횡단보도": 5,
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "산정동": {
        "횡단보도": 1,
        "버스정류소": 1
      },
      "교동": {
        "인도": 8
      },
      "동서학동": {
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "중동": {
        "횡단보도": 12,
        "소화전": 1,
        "버스정류소": 1,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "태평동": {
        "인도": 1,
        "교차로 모퉁이": 2
      },
      "풍남동3가": {
        "인도": 1
      },
      "호성동1가": {
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "팔복동3가": {
        "횡단보도": 2
      },
      "중앙동2가": {
        "인도": 1
      },
      "팔복동1가": {
        "횡단보도": 5
      },
      "팔복동2가": {
        "인도": 1,
        "횡단보도": 2
      },
      "경원동1가": {
        "횡단보도": 2,
        "인도": 1
      },
      "서서학동": {
        "횡단보도": 1
      },
      "중노송동": {
        "인도": 1,
        "횡단보도": 3
      },
      "다가동3가": {
        "인도": 1
      }
    },
    "5": {
      "경원동3가": {
        "인도": 2,
        "횡단보도": 1
      },
      "중화산동2가": {
        "소화전": 5,
        "교차로 모퉁이": 2
      },
      "효자동2가": {
        "인도": 4,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "효자동3가": {
        "교차로 모퉁이": 2,
        "횡단보도": 7,
        "인도": 4
      },
      "만성동": {
        "인도": 13,
        "횡단보도": 3
      },
      "평화동2가": {
        "인도": 1,
        "횡단보도": 9,
        "교차로 모퉁이": 1
      },
      "송천동2가": {
        "소화전": 2
      },
      "삼천동1가": {
        "횡단보도": 4,
        "교차로 모퉁이": 3,
        "인도": 3,
        "소화전": 1,
        "버스정류소": 1
      },
      "다가동4가": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "효자동1가": {
        "횡단보도": 3,
        "인도": 3,
        "교차로 모퉁이": 2
      },
      "평화동1가": {
        "교차로 모퉁이": 14,
        "횡단보도": 3
      },
      "금암동": {
        "교차로 모퉁이": 3,
        "인도": 1,
        "버스정류소": 1
      },
      "중노송동": {
        "인도": 1
      },
      "여의동": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "서신동": {
        "인도": 1,
        "교차로 모퉁이": 1,
        "횡단보도": 3,
        "소화전": 1
      },
      "고사동": {
        "인도": 3
      },
      "전동": {
        "인도": 1,
        "횡단보도": 1
      },
      "인후동1가": {
        "교차로 모퉁이": 2,
        "소화전": 3,
        "횡단보도": 1,
        "인도": 1
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "경원동1가": {
        "인도": 1
      },
      "덕진동2가": {
        "횡단보도": 1
      },
      "송천동1가": {
        "횡단보도": 5,
        "인도": 2,
        "교차로 모퉁이": 2,
        "소화전": 1
      },
      "우아동3가": {
        "버스정류소": 1,
        "인도": 3,
        "횡단보도": 2
      },
      "중화산동1가": {
        "인도": 1
      },
      "산정동": {
        "소화전": 1
      },
      "장동": {
        "횡단보도": 1
      },
      "인후동2가": {
        "교차로 모퉁이": 1
      },
      "삼천동2가": {
        "교차로 모퉁이": 1
      },
      "팔복동3가": {
        "횡단보도": 1
      },
      "서서학동": {
        "인도": 1,
        "횡단보도": 1
      },
      "진북동": {
        "소화전": 1
      },
      "전미동2가": {
        "인도": 1
      },
      "덕진동1가": {
        "횡단보도": 2
      },
      "풍남동1가": {
        "인도": 3
      },
      "태평동": {
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "교차로 모퉁이": 1
      }
    }
  },
  "12": {
    "1": {
      "동서학동": {
        "횡단보도": 1,
        "인도": 5
      },
      "서신동": {
        "기타": 5,
        "인도": 4,
        "횡단보도": 28,
        "교차로 모퉁이": 9,
        "소화전": 1,
        "버스정류소": 1
      },
      "효자동3가": {
        "횡단보도": 32,
        "인도": 21,
        "교차로 모퉁이": 16,
        "기타": 3
      },
      "중화산동2가": {
        "소화전": 14,
        "교차로 모퉁이": 7,
        "인도": 3,
        "횡단보도": 13
      },
      "효자동1가": {
        "인도": 7,
        "횡단보도": 14,
        "교차로 모퉁이": 2
      },
      "산정동": {
        "소화전": 1
      },
      "전동": {
        "인도": 7,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "우아동3가": {
        "교차로 모퉁이": 4,
        "횡단보도": 5
      },
      "장동": {
        "인도": 4,
        "횡단보도": 4
      },
      "우아동2가": {
        "횡단보도": 7
      },
      "인후동2가": {
        "인도": 6,
        "소화전": 2,
        "횡단보도": 1,
        "교차로 모퉁이": 3
      },
      "팔복동2가": {
        "횡단보도": 2
      },
      "금암동": {
        "횡단보도": 8,
        "인도": 18,
        "교차로 모퉁이": 6,
        "소화전": 2
      },
      "호성동1가": {
        "횡단보도": 2,
        "버스정류소": 1
      },
      "인후동1가": {
        "횡단보도": 3,
        "버스정류소": 1,
        "교차로 모퉁이": 2,
        "인도": 1,
        "소화전": 2
      },
      "평화동2가": {
        "횡단보도": 30,
        "버스정류소": 3,
        "교차로 모퉁이": 7,
        "인도": 2
      },
      "만성동": {
        "인도": 49,
        "횡단보도": 3
      },
      "삼천동1가": {
        "교차로 모퉁이": 10,
        "횡단보도": 6,
        "버스정류소": 2,
        "인도": 2,
        "소화전": 1
      },
      "고사동": {
        "인도": 8
      },
      "태평동": {
        "인도": 1,
        "교차로 모퉁이": 4,
        "횡단보도": 1
      },
      "송천동1가": {
        "소화전": 3,
        "교차로 모퉁이": 5,
        "횡단보도": 7,
        "인도": 3
      },
      "평화동1가": {
        "횡단보도": 9,
        "인도": 9,
        "교차로 모퉁이": 17,
        "버스정류소": 1
      },
      "효자동2가": {
        "횡단보도": 44,
        "인도": 24,
        "교차로 모퉁이": 10
      },
      "중화산동1가": {
        "인도": 3,
        "소화전": 2
      },
      "호성동2가": {
        "횡단보도": 1
      },
      "남노송동": {
        "횡단보도": 2
      },
      "덕진동2가": {
        "교차로 모퉁이": 2,
        "횡단보도": 3,
        "소화전": 1,
        "인도": 1
      },
      "중노송동": {
        "횡단보도": 3,
        "인도": 4
      },
      "중인동": {
        "인도": 2
      },
      "덕진동1가": {
        "인도": 2,
        "횡단보도": 2
      },
      "송천동2가": {
        "인도": 4,
        "교차로 모퉁이": 4,
        "횡단보도": 6,
        "소화전": 1
      },
      "서노송동": {
        "교차로 모퉁이": 2,
        "인도": 16,
        "횡단보도": 3
      },
      "중동": {
        "횡단보도": 4,
        "소화전": 1,
        "인도": 1
      },
      "다가동4가": {
        "교차로 모퉁이": 1,
        "인도": 6
      },
      "여의동": {
        "횡단보도": 5,
        "교차로 모퉁이": 1
      },
      "다가동3가": {
        "교차로 모퉁이": 1
      },
      "진북동": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "경원동3가": {
        "횡단보도": 9,
        "교차로 모퉁이": 2,
        "인도": 2
      },
      "우아동1가": {
        "횡단보도": 1
      },
      "경원동2가": {
        "인도": 1,
        "횡단보도": 2
      },
      "서서학동": {
        "인도": 2,
        "소화전": 1,
        "횡단보도": 2
      },
      "중앙동1가": {
        "인도": 2
      },
      "반월동": {
        "인도": 2
      },
      "경원동1가": {
        "횡단보도": 1,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "팔복동3가": {
        "소화전": 1
      },
      "서완산동2가": {
        "횡단보도": 1
      }
    },
    "2": {
      "서신동": {
        "횡단보도": 37,
        "교차로 모퉁이": 20,
        "인도": 1,
        "소화전": 1,
        "버스정류소": 3
      },
      "송천동1가": {
        "교차로 모퉁이": 8,
        "횡단보도": 15,
        "버스정류소": 1,
        "소화전": 6,
        "인도": 4
      },
      "효자동3가": {
        "교차로 모퉁이": 20,
        "횡단보도": 12,
        "인도": 23
      },
      "우아동2가": {
        "횡단보도": 8,
        "인도": 1,
        "버스정류소": 1,
        "소화전": 1
      },
      "삼천동1가": {
        "인도": 2,
        "횡단보도": 6,
        "교차로 모퉁이": 6,
        "소화전": 1
      },
      "우아동3가": {
        "횡단보도": 4,
        "인도": 4,
        "버스정류소": 1,
        "교차로 모퉁이": 5
      },
      "평화동2가": {
        "횡단보도": 10,
        "인도": 4,
        "교차로 모퉁이": 5,
        "버스정류소": 1
      },
      "반월동": {
        "인도": 2,
        "횡단보도": 11,
        "교차로 모퉁이": 2,
        "소화전": 2
      },
      "장동": {
        "인도": 2,
        "횡단보도": 5
      },
      "덕진동1가": {
        "횡단보도": 4,
        "버스정류소": 2,
        "소화전": 1
      },
      "중화산동1가": {
        "횡단보도": 1
      },
      "효자동1가": {
        "횡단보도": 17,
        "교차로 모퉁이": 3,
        "소화전": 1,
        "인도": 3
      },
      "중화산동2가": {
        "소화전": 14,
        "횡단보도": 5,
        "기타": 1,
        "교차로 모퉁이": 4,
        "인도": 11
      },
      "평화동1가": {
        "교차로 모퉁이": 26,
        "인도": 6,
        "횡단보도": 10,
        "소화전": 1,
        "버스정류소": 1
      },
      "인후동1가": {
        "횡단보도": 9,
        "인도": 3,
        "교차로 모퉁이": 1,
        "버스정류소": 1
      },
      "중동": {
        "소화전": 2,
        "횡단보도": 3,
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "효자동2가": {
        "횡단보도": 17,
        "인도": 27,
        "교차로 모퉁이": 6
      },
      "교동": {
        "교차로 모퉁이": 1,
        "인도": 2,
        "기타": 1
      },
      "덕진동2가": {
        "교차로 모퉁이": 1,
        "소화전": 1,
        "횡단보도": 1
      },
      "서서학동": {
        "횡단보도": 3
      },
      "송천동2가": {
        "횡단보도": 24,
        "교차로 모퉁이": 1,
        "소화전": 9,
        "인도": 8,
        "안전지대": 2
      },
      "여의동": {
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "서노송동": {
        "인도": 8,
        "횡단보도": 3
      },
      "중노송동": {
        "횡단보도": 9,
        "교차로 모퉁이": 1,
        "인도": 4
      },
      "금암동": {
        "인도": 15,
        "교차로 모퉁이": 5,
        "횡단보도": 8
      },
      "팔복동2가": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "만성동": {
        "인도": 20,
        "교차로 모퉁이": 2,
        "횡단보도": 3
      },
      "우아동1가": {
        "버스정류소": 1
      },
      "태평동": {
        "횡단보도": 4,
        "교차로 모퉁이": 2
      },
      "인후동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "호성동1가": {
        "교차로 모퉁이": 1
      },
      "전동": {
        "인도": 4,
        "교차로 모퉁이": 1
      },
      "중앙동2가": {
        "인도": 7
      },
      "경원동1가": {
        "인도": 3,
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "다가동4가": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "여의동2가": {
        "횡단보도": 3
      },
      "진북동": {
        "교차로 모퉁이": 1,
        "횡단보도": 1
      },
      "고랑동": {
        "인도": 1
      },
      "경원동2가": {
        "인도": 3,
        "교차로 모퉁이": 1
      },
      "동서학동": {
        "인도": 1,
        "횡단보도": 2
      },
      "중앙동4가": {
        "인도": 1
      },
      "산정동": {
        "횡단보도": 1
      },
      "팔복동1가": {
        "인도": 1
      },
      "고사동": {
        "인도": 4
      },
      "삼천동2가": {
        "횡단보도": 1
      },
      "경원동3가": {
        "인도": 2,
        "횡단보도": 1
      },
      "다가동1가": {
        "인도": 1
      }
    },
    "3": {
      "서신동": {
        "횡단보도": 20,
        "인도": 7,
        "교차로 모퉁이": 17,
        "기타": 1,
        "버스정류소": 1,
        "소화전": 4,
        "어린이보호구역": 1
      },
      "송천동1가": {
        "교차로 모퉁이": 9,
        "횡단보도": 10,
        "소화전": 2
      },
      "효자동3가": {
        "교차로 모퉁이": 15,
        "횡단보도": 25,
        "인도": 9
      },
      "송천동2가": {
        "소화전": 4,
        "인도": 12,
        "횡단보도": 16,
        "교차로 모퉁이": 9
      },
      "금암동": {
        "인도": 16,
        "교차로 모퉁이": 7,
        "횡단보도": 8
      },
      "삼천동1가": {
        "교차로 모퉁이": 8,
        "횡단보도": 12,
        "인도": 4
      },
      "효자동2가": {
        "교차로 모퉁이": 8,
        "횡단보도": 17,
        "인도": 43
      },
      "다가동1가": {
        "인도": 1
      },
      "평화동2가": {
        "횡단보도": 14,
        "교차로 모퉁이": 4,
        "어린이보호구역": 2,
        "인도": 4
      },
      "인후동1가": {
        "횡단보도": 7,
        "인도": 5,
        "버스정류소": 1,
        "소화전": 2,
        "교차로 모퉁이": 1
      },
      "호성동1가": {
        "횡단보도": 3
      },
      "평화동1가": {
        "횡단보도": 11,
        "교차로 모퉁이": 21,
        "버스정류소": 3,
        "인도": 3
      },
      "만성동": {
        "인도": 9,
        "횡단보도": 2
      },
      "효자동1가": {
        "횡단보도": 16,
        "소화전": 1,
        "교차로 모퉁이": 7,
        "인도": 5
      },
      "중화산동2가": {
        "횡단보도": 18,
        "교차로 모퉁이": 2,
        "인도": 6,
        "소화전": 6
      },
      "반월동": {
        "횡단보도": 12,
        "인도": 1
      },
      "서서학동": {
        "횡단보도": 2
      },
      "장동": {
        "횡단보도": 6,
        "인도": 1
      },
      "여의동2가": {
        "횡단보도": 3,
        "인도": 2
      },
      "우아동2가": {
        "횡단보도": 6,
        "소화전": 2,
        "교차로 모퉁이": 1
      },
      "팔복동2가": {
        "교차로 모퉁이": 3,
        "인도": 2
      },
      "덕진동2가": {
        "인도": 1
      },
      "인후동2가": {
        "횡단보도": 2,
        "인도": 6,
        "버스정류소": 1
      },
      "팔복동1가": {
        "인도": 1,
        "횡단보도": 2
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 9,
        "교차로 모퉁이": 1
      },
      "다가동4가": {
        "교차로 모퉁이": 1,
        "인도": 4
      },
      "전동": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "산정동": {
        "횡단보도": 1,
        "인도": 1
      },
      "태평동": {
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "우아동3가": {
        "횡단보도": 4,
        "교차로 모퉁이": 5,
        "인도": 2
      },
      "서노송동": {
        "인도": 24,
        "소화전": 1,
        "횡단보도": 3
      },
      "여의동": {
        "횡단보도": 1,
        "교차로 모퉁이": 1
      },
      "경원동1가": {
        "횡단보도": 1
      },
      "경원동2가": {
        "인도": 1
      },
      "동서학동": {
        "횡단보도": 3
      },
      "풍남동1가": {
        "인도": 4
      },
      "중동": {
        "소화전": 2,
        "횡단보도": 2
      },
      "덕진동1가": {
        "횡단보도": 3,
        "소화전": 3,
        "버스정류소": 3,
        "인도": 1
      },
      "교동": {
        "인도": 1,
        "기타": 1
      },
      "풍남동3가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "진북동": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "고사동": {
        "인도": 1
      },
      "풍남동2가": {
        "인도": 1
      },
      "중노송동": {
        "인도": 2
      }
    },
    "4": {
      "서신동": {
        "횡단보도": 20,
        "교차로 모퉁이": 9,
        "인도": 7,
        "소화전": 4,
        "기타": 2,
        "버스정류소": 1
      },
      "장동": {
        "인도": 3,
        "횡단보도": 4,
        "소화전": 1
      },
      "효자동3가": {
        "횡단보도": 19,
        "인도": 13,
        "교차로 모퉁이": 20,
        "기타": 2
      },
      "만성동": {
        "횡단보도": 1,
        "인도": 4
      },
      "삼천동1가": {
        "교차로 모퉁이": 9,
        "횡단보도": 23,
        "인도": 8
      },
      "서서학동": {
        "횡단보도": 3,
        "교차로 모퉁이": 1
      },
      "우아동2가": {
        "횡단보도": 3
      },
      "인후동2가": {
        "인도": 6,
        "횡단보도": 2,
        "교차로 모퉁이": 2
      },
      "경원동3가": {
        "인도": 3,
        "횡단보도": 6
      },
      "송천동2가": {
        "횡단보도": 11,
        "안전지대": 3,
        "인도": 6,
        "소화전": 2
      },
      "송천동1가": {
        "인도": 3,
        "횡단보도": 13,
        "소화전": 6,
        "교차로 모퉁이": 5
      },
      "서노송동": {
        "횡단보도": 11,
        "인도": 17,
        "소화전": 1,
        "교차로 모퉁이": 1
      },
      "덕진동2가": {
        "인도": 2,
        "횡단보도": 3,
        "소화전": 1
      },
      "중화산동2가": {
        "교차로 모퉁이": 7,
        "인도": 3,
        "횡단보도": 14,
        "소화전": 3
      },
      "평화동1가": {
        "교차로 모퉁이": 17,
        "횡단보도": 11,
        "인도": 1
      },
      "우아동3가": {
        "횡단보도": 7,
        "인도": 4,
        "교차로 모퉁이": 6
      },
      "효자동2가": {
        "인도": 27,
        "교차로 모퉁이": 5,
        "횡단보도": 10
      },
      "풍남동3가": {
        "인도": 2,
        "교차로 모퉁이": 1
      },
      "다가동4가": {
        "인도": 3
      },
      "동서학동": {
        "인도": 2,
        "횡단보도": 1
      },
      "진북동": {
        "횡단보도": 2
      },
      "인후동1가": {
        "인도": 4,
        "횡단보도": 4,
        "버스정류소": 1,
        "교차로 모퉁이": 1
      },
      "효자동1가": {
        "횡단보도": 23,
        "교차로 모퉁이": 3,
        "안전지대": 1,
        "소화전": 2,
        "인도": 2
      },
      "태평동": {
        "교차로 모퉁이": 1,
        "인도": 4
      },
      "다가동3가": {
        "교차로 모퉁이": 1,
        "인도": 2
      },
      "여의동": {
        "횡단보도": 3,
        "인도": 1
      },
      "평화동2가": {
        "교차로 모퉁이": 4,
        "횡단보도": 10,
        "인도": 3
      },
      "덕진동1가": {
        "횡단보도": 4,
        "소화전": 2,
        "인도": 4
      },
      "금암동": {
        "교차로 모퉁이": 3,
        "횡단보도": 3,
        "인도": 17
      },
      "고사동": {
        "인도": 8
      },
      "중동": {
        "소화전": 1,
        "횡단보도": 4,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "반월동": {
        "횡단보도": 7,
        "인도": 1
      },
      "남노송동": {
        "인도": 1,
        "횡단보도": 1
      },
      "전동": {
        "인도": 2,
        "기타": 1
      },
      "호성동1가": {
        "인도": 3,
        "횡단보도": 1
      },
      "교동": {
        "횡단보도": 2,
        "기타": 1,
        "소화전": 1,
        "인도": 1
      },
      "풍남동1가": {
        "인도": 1,
        "교차로 모퉁이": 1
      },
      "여의동2가": {
        "횡단보도": 1
      },
      "팔복동2가": {
        "횡단보도": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 5
      },
      "다가동1가": {
        "인도": 1
      },
      "중노송동": {
        "인도": 1,
        "횡단보도": 1
      },
      "경원동2가": {
        "횡단보도": 1
      }
    },
    "5": {
      "우아동3가": {
        "교차로 모퉁이": 2
      },
      "전동": {
        "교차로 모퉁이": 2,
        "소화전": 1,
        "인도": 2,
        "버스정류소": 1
      },
      "금암동": {
        "횡단보도": 2,
        "버스정류소": 1,
        "인도": 5
      },
      "효자동1가": {
        "인도": 3,
        "횡단보도": 2,
        "교차로 모퉁이": 1
      },
      "중앙동2가": {
        "교차로 모퉁이": 1
      },
      "경원동1가": {
        "교차로 모퉁이": 5
      },
      "삼천동1가": {
        "인도": 9,
        "횡단보도": 4,
        "교차로 모퉁이": 1
      },
      "서서학동": {
        "인도": 1,
        "횡단보도": 1
      },
      "효자동3가": {
        "교차로 모퉁이": 13,
        "횡단보도": 14,
        "인도": 4
      },
      "우아동2가": {
        "횡단보도": 5,
        "인도": 3
      },
      "인후동2가": {
        "횡단보도": 3,
        "인도": 2
      },
      "송천동2가": {
        "인도": 1,
        "횡단보도": 1
      },
      "평화동2가": {
        "횡단보도": 4,
        "교차로 모퉁이": 3,
        "인도": 4
      },
      "중화산동2가": {
        "횡단보도": 2,
        "인도": 1
      },
      "중노송동": {
        "인도": 7
      },
      "덕진동1가": {
        "횡단보도": 4,
        "인도": 2
      },
      "다가동4가": {
        "인도": 2
      },
      "송천동1가": {
        "횡단보도": 2,
        "소화전": 2,
        "교차로 모퉁이": 1,
        "인도": 1
      },
      "서신동": {
        "교차로 모퉁이": 2,
        "인도": 3,
        "횡단보도": 10,
        "소화전": 1,
        "버스정류소": 1,
        "기타": 3
      },
      "인후동1가": {
        "횡단보도": 4,
        "버스정류소": 1,
        "소화전": 2,
        "인도": 1
      },
      "경원동3가": {
        "횡단보도": 3,
        "인도": 8
      },
      "진북동": {
        "교차로 모퉁이": 2,
        "인도": 1,
        "횡단보도": 5
      },
      "효자동2가": {
        "인도": 6,
        "횡단보도": 3
      },
      "장동": {
        "인도": 2
      },
      "평화동1가": {
        "교차로 모퉁이": 10,
        "횡단보도": 6,
        "인도": 1
      },
      "반월동": {
        "횡단보도": 4
      },
      "고사동": {
        "인도": 12
      },
      "여의동": {
        "인도": 1
      },
      "남노송동": {
        "횡단보도": 1
      },
      "서노송동": {
        "인도": 5,
        "교차로 모퉁이": 1
      },
      "풍남동3가": {
        "인도": 1
      },
      "만성동": {
        "횡단보도": 2
      },
      "동서학동": {
        "횡단보도": 1
      }
    }
  }
};

export const ENF_MONTH_METHOD = {
  "01": {
    "fixedCamera": 8784,
    "citizenReport": 2790,
    "mobileCamera": 4303,
    "handheldTerminal": 223
  },
  "02": {
    "fixedCamera": 8171,
    "citizenReport": 2680,
    "mobileCamera": 4827,
    "handheldTerminal": 225
  },
  "03": {
    "fixedCamera": 6068,
    "citizenReport": 2957,
    "mobileCamera": 3136,
    "handheldTerminal": 212
  },
  "04": {
    "fixedCamera": 3873,
    "citizenReport": 2341,
    "mobileCamera": 3285,
    "handheldTerminal": 24
  },
  "05": {
    "fixedCamera": 4252,
    "citizenReport": 2947,
    "mobileCamera": 2363,
    "handheldTerminal": 104
  },
  "06": {
    "fixedCamera": 4036,
    "citizenReport": 3,
    "handheldTerminal": 79,
    "mobileCamera": 2234
  }
};

export const ENF_MONTH_DONG = {
  "01": {
    "서신동": 761,
    "금암동": 422,
    "반월동": 298,
    "효자동": 234,
    "평화동": 43,
    "송천동1가": 338,
    "송천동": 73,
    "동문길춘하추동": 42,
    "경원동1가": 105,
    "경원동3가": 182,
    "중화산2동": 234,
    "삼천2동": 25,
    "우아동2가": 69,
    "여의동": 38,
    "송천동2가": 426,
    "효자동3가": 505,
    "중앙동": 127,
    "만성동": 168,
    "인후동1가": 295,
    "혁신동": 103,
    "전주시보건소동": 30,
    "송천1동": 48,
    "우아한시티103동": 34,
    "다가동4가": 32,
    "호성동동": 71,
    "장동": 70,
    "인후동": 41,
    "효자동1가": 249,
    "인후동2가": 148,
    "평화동2가": 154,
    "고랑동": 9,
    "자이103동": 3,
    "중화산동2가": 257,
    "여의동자동": 26,
    "효자동2가": 647,
    "중화산동1가": 56,
    "서노송동": 250,
    "삼천동1가": 291,
    "태평동": 99,
    "동서학동": 12,
    "고사동": 54,
    "중앙동1가": 7,
    "중화산동": 187,
    "다가동1가": 9,
    "전동3가": 19,
    "평화동1가": 262,
    "중앙동4가": 22,
    "전동": 99,
    "덕진동1가": 101,
    "호성동": 6,
    "우아동3가": 177,
    "풍남동3가": 11,
    "효자3동": 142,
    "덕진동2가": 163,
    "중동": 25,
    "팔복동1가": 8,
    "진북동": 149,
    "호성동1가": 84,
    "중앙동3가": 13,
    "중앙동2가": 5,
    "호성동2가": 41,
    "여의동2가": 153,
    "중노송동": 37,
    "삼천동": 4,
    "서서학동": 36,
    "산정동": 86,
    "팔복동3가": 1,
    "덕진동": 12,
    "팔복동2가": 46,
    "교동": 29,
    "호반베르디움101동": 3,
    "중인동": 2,
    "다가동3가": 5,
    "경원동2가": 8,
    "풍남동1가": 3,
    "송천신동": 3,
    "우아동1가": 11,
    "용정동": 2,
    "유블레스이동": 1,
    "교동평화동1가": 1,
    "편한세상동": 1,
    "삼천동2가": 1,
    "팔복동": 1,
    "평화동동": 3,
    "전미동1가": 3,
    "남노송동": 2,
    "데시앙401동": 3,
    "전주역클래시아102동": 2,
    "세창짜임101동": 2,
    "풍남동2가": 1,
    "평화동3가": 2,
    "서완산동2가": 1,
    "이동": 1
  },
  "02": {
    "효자동": 166,
    "중화산2동": 86,
    "서신동": 787,
    "유블레스104동": 1,
    "금암동": 450,
    "중화산동": 113,
    "편한106동": 3,
    "송천동": 31,
    "평화동": 47,
    "효자동3가": 793,
    "송천동1가": 309,
    "인후동1가": 176,
    "평화동2가": 186,
    "반월동": 257,
    "서노송동": 271,
    "혁신동": 87,
    "전동": 90,
    "효자동2가": 757,
    "삼천2동": 49,
    "삼천동1가": 273,
    "진북동": 146,
    "중앙동": 169,
    "고사동": 86,
    "다가동3가": 15,
    "덕진동1가": 150,
    "동문길춘하추동": 27,
    "전주시보건소동": 28,
    "경원동3가": 112,
    "호성동": 30,
    "평화동1가": 180,
    "중화산동2가": 406,
    "우아동3가": 167,
    "인후동": 38,
    "우아한시티103동": 23,
    "다가동4가": 30,
    "호성동동": 64,
    "장동": 93,
    "만성동": 218,
    "효자동1가": 320,
    "효자3동": 119,
    "우아동2가": 55,
    "인후동2가": 124,
    "여의동2가": 68,
    "중앙동1가": 20,
    "동서학동": 7,
    "서서학동": 32,
    "송천동2가": 495,
    "고랑동": 5,
    "여의동": 17,
    "교동": 71,
    "경원동2가": 7,
    "덕진동": 9,
    "중인동": 1,
    "경원동1가": 124,
    "중노송동": 44,
    "팔복동": 17,
    "여의동자동": 16,
    "팔복동1가": 5,
    "우아동1가": 11,
    "덕진동2가": 126,
    "송천1동": 24,
    "호성동1가": 97,
    "태평동": 134,
    "중동": 48,
    "중앙동4가": 13,
    "풍남동3가": 29,
    "호성동2가": 51,
    "전동3가": 25,
    "산정동": 60,
    "팔복동4가": 10,
    "전미동1가": 1,
    "자이103동": 2,
    "팔복동3가": 9,
    "중화산동1가": 18,
    "다가동1가": 1,
    "데시앙401동": 4,
    "중앙동3가": 3,
    "중앙동2가": 3,
    "세창짜임101동": 3,
    "효자4동": 1,
    "서완산동1가": 1,
    "동완산동": 1,
    "남노송동": 6,
    "전주역클래시아102동": 4,
    "편한세상동": 2,
    "송천신동": 4,
    "풍남동1가": 1,
    "이동": 2,
    "용정동": 11,
    "신동": 6,
    "팔복동2가": 6,
    "평화동동": 1,
    "삼천동": 2,
    "풍남동2가": 1,
    "만성시티프라디움105동": 14,
    "유블레스이동": 1,
    "원동": 1,
    "다가동2가": 1
  },
  "03": {
    "효자동": 183,
    "서신동": 1263,
    "금암동": 52,
    "반월동": 41,
    "평화동1가": 306,
    "동서학동": 19,
    "교동": 54,
    "우아동2가": 25,
    "삼천동1가": 349,
    "효자동3가": 824,
    "평화동2가": 263,
    "경원동1가": 187,
    "우아동3가": 31,
    "호성동1가": 21,
    "삼천2동": 34,
    "효자동2가": 700,
    "송천동2가": 83,
    "중화산2동": 85,
    "고사동": 81,
    "전동": 64,
    "서서학동": 31,
    "중화산동": 234,
    "덕진동1가": 24,
    "송천동1가": 30,
    "호성동": 8,
    "중앙동": 159,
    "경원동3가": 197,
    "여의동자동": 15,
    "인후동1가": 54,
    "동문길춘하추동": 46,
    "다가동4가": 20,
    "삼천동2가": 9,
    "효자3동": 125,
    "중동": 6,
    "만성동": 47,
    "서노송동": 323,
    "인후동2가": 23,
    "중화산동2가": 415,
    "풍남동1가": 11,
    "효자동1가": 349,
    "평화동동": 3,
    "풍남동3가": 14,
    "진북동": 11,
    "남노송동": 52,
    "팔복동": 13,
    "덕진동": 11,
    "색장동": 3,
    "만성시티프라디움105동": 14,
    "풍남동2가": 7,
    "인후동": 12,
    "우아동1가": 3,
    "송천동": 8,
    "중앙동3가": 5,
    "중노송동": 46,
    "덕진동2가": 13,
    "여의동": 3,
    "장동": 4,
    "평화동": 61,
    "송천1동": 5,
    "고랑동": 3,
    "호성동동": 23,
    "우아한시티103동": 5,
    "전동3가": 15,
    "중앙동4가": 11,
    "호성동2가": 7,
    "태평동": 134,
    "산정동": 17,
    "혁신동": 15,
    "삼천동": 4,
    "전주시보건소동": 83,
    "데시앙401동": 2,
    "여의동2가": 5,
    "전미동1가": 1,
    "호성동3가": 1,
    "원동": 1,
    "중화산동1가": 31,
    "동완산동": 2,
    "효자1동": 1,
    "다가동1가": 6,
    "서완산동2가": 1,
    "다가동3가": 11,
    "중앙동1가": 2,
    "경원동2가": 9,
    "편한106동": 1,
    "편한세상동": 3,
    "중인동": 1
  },
  "04": {
    "효자동3가": 890,
    "효자동2가": 1109,
    "경원동3가": 127,
    "중화산동1가": 22,
    "중화산동2가": 493,
    "서신동": 1015,
    "경원동1가": 197,
    "서노송동": 307,
    "태평동": 105,
    "평화동": 56,
    "중화산동": 155,
    "평화동1가": 194,
    "풍남동3가": 37,
    "효자동1가": 307,
    "효자동": 228,
    "다가동1가": 8,
    "중앙동": 104,
    "중앙동4가": 10,
    "전동": 121,
    "전동3가": 27,
    "다가동2가": 2,
    "다가동3가": 20,
    "중앙동1가": 5,
    "전주시보건소동": 81,
    "중앙동3가": 40,
    "고사동": 79,
    "중앙동2가": 4,
    "삼천2동": 20,
    "삼천동1가": 217,
    "평화동2가": 162,
    "중화산2동": 84,
    "남노송동": 42,
    "서서학동": 27,
    "동서학동": 29,
    "중노송동": 45,
    "교동": 65,
    "풍남동2가": 1,
    "동문길춘하추동": 20,
    "평화동동": 4,
    "편한106동": 1,
    "삼천동": 3,
    "서완산동2가": 1,
    "효자4동": 2,
    "평화동3가": 11,
    "경원동2가": 5,
    "풍남동1가": 4,
    "다가동4가": 6,
    "중인동": 4,
    "삼천동2가": 3,
    "세창짜임101동": 3,
    "동완산동": 6,
    "유블레스104동": 1,
    "편한세상동": 1,
    "덕진동1가": 1
  },
  "05": {
    "효자동": 251,
    "경원동1가": 234,
    "중화산동": 117,
    "삼천동1가": 285,
    "효자동1가": 375,
    "효자동3가": 684,
    "효자동2가": 713,
    "교동": 90,
    "평화동2가": 186,
    "태평동": 44,
    "전동": 88,
    "중앙동4가": 18,
    "전주시보건소동": 65,
    "평화동1가": 274,
    "중앙동": 115,
    "중화산2동": 66,
    "삼천2동": 27,
    "고사동": 103,
    "유블레스104동": 2,
    "다가동3가": 55,
    "서신동": 862,
    "중화산동2가": 569,
    "삼천동2가": 7,
    "다가동1가": 46,
    "풍남동3가": 32,
    "동서학동": 41,
    "경원동3가": 83,
    "서노송동": 264,
    "남노송동": 47,
    "진담동": 1,
    "서서학동": 67,
    "평화동동": 6,
    "삼천동": 2,
    "중앙동3가": 52,
    "중노송동": 94,
    "풍남동1가": 19,
    "평화동": 25,
    "경원동2가": 27,
    "전동3가": 7,
    "풍남동": 1,
    "금암면": 3,
    "중앙동1가": 37,
    "중인동": 1,
    "중앙동2가": 21,
    "다가동4가": 5,
    "중화산동1가": 13,
    "편한세상동": 2,
    "전라감영동": 1,
    "완산동": 38,
    "색장동": 2,
    "동문길춘하추동": 1,
    "상림동": 3,
    "풍남동2가": 1,
    "효자4동": 1
  },
  "06": {
    "중화산동": 151,
    "서신동": 198,
    "효자동": 185,
    "평화1동": 1,
    "완산동": 49,
    "전동": 47,
    "중앙동": 108,
    "전주시보건소동": 62,
    "평화동": 15,
    "효자동3가": 260,
    "고사동": 60,
    "삼천동1가": 97,
    "평화동동": 9,
    "유블레스104동": 4,
    "효자동1가": 179,
    "중화산동2가": 319,
    "효자동2가": 422,
    "경원동1가": 56,
    "경원동3가": 121,
    "중노송동": 45,
    "중화산2동": 130,
    "삼천2동": 22,
    "서노송동": 294,
    "서서학동": 38,
    "평화동2가": 82,
    "전동3가": 19,
    "다가동1가": 6,
    "중앙동4가": 10,
    "중앙동3가": 5,
    "평화동1가": 62,
    "태평동": 65,
    "진담동": 1,
    "삼천동": 3,
    "효자1동": 1,
    "효자4동": 2,
    "세창짜임101동": 1,
    "풍남동3가": 1,
    "중앙동2가": 2,
    "효자3동": 2,
    "경원동2가": 2,
    "편한세상동": 1
  }
};

export const SUB_ORDER = [
  "횡단보도",
  "인도",
  "교차로 모퉁이",
  "소화전",
  "버스정류소",
  "어린이보호구역",
  "안전지대",
  "기타"
];

export const METHOD_LABEL = {
  "fixedCamera": "고정형 CCTV",
  "mobileCamera": "이동형 CCTV",
  "citizenReport": "시민신고(안전신문고)",
  "handheldTerminal": "단속요원(휴대단말)"
};

export const CMP_MONTHS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

export const ENF_MONTHS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06"
];

