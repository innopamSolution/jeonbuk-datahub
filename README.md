# 전북 주차민원분석 솔루션 (JEONBUK)

전북특별자치도 데이터 허브용 주차민원분석 솔루션 뷰어(프로토타입).
제주데이터허브 주차민원분석 솔루션(엔드유저 뷰어 `app/`)을 그대로 복제해 전북 데이터에 적용하기 위한 시작점입니다.

## 스택
- React 19 + Vite + React Router
- Leaflet(지도/히트맵/클러스터), ECharts, docx/exceljs/jspdf(내보내기)

## 실행
```bash
npm install
npm run dev   # http://localhost:5184
```

## 복제 시 이미 전북으로 바꾼 것
- 솔루션명: "제주 주차민원분석 솔루션" → "전북 주차민원분석 솔루션"
- 데이터허브 브랜드: "제주 스마트시티 데이터 허브" → "전북특별자치도 데이터 허브"
- 조례/기관 표기: 제주특별자치도 → 전북특별자치도
- 이메일 도메인: `@jeju.go.kr` → `@jeonbuk.go.kr`
- package.json name, index.html title, vite base(`/jeonbuk-datahub/`), dev 포트 5184

## 아직 제주 상태로 남아 있는 것 (전북 실데이터 업로드 시 교체 대상)
현재 샘플 데이터는 제주 지역 기준입니다. 실데이터로만 표출할 예정이므로 임의 수치는 생성하지 않았습니다.
- 행정구역: 제주시/서귀포시 및 읍·면·동명(연동·노형동·성산읍 등)
- 지도 좌표: 제주도 위경도(위도 33.x, 경도 126.x)
- 공영주차장명/주소, 알림·보고서 샘플 행
- 주의: `연동`(지역명)과 `연동되게`(UI 문구)처럼 동일 글자 충돌이 있어 일괄 치환 금지. 지역 적용은 파일별로 신중히 수정할 것.

관련 파일: `src/data/regions.js`, `src/data/*Parking.js`, `src/components/RegionSelect.jsx`,
`src/pages/{AlertInquiry,AlertManagement,HotspotAnalysis,InvestmentPriority,LifestyleSimulation,PolicySimulation,Complaints,Dashboard,ReportList,ReportManagement}.jsx`
