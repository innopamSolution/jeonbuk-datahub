import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Complaints from './pages/Complaints';
import HotspotAnalysis from './pages/HotspotAnalysis';
import ReportList from './pages/ReportList';
import ReportManagement from './pages/ReportManagement';
import AiAssistant from './pages/AiAssistant';
import AlertManagement from './pages/AlertManagement';
import AlertInquiry from './pages/AlertInquiry';
import Settings from './pages/Settings';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="analysis/hotspot" element={<HotspotAnalysis />} />
          {/* 실데이터 근거가 없어 제거: 정책/생활권 시뮬레이션·구역추천·투자우선순위
              (페이지 파일은 유지, 라우팅만 해제) */}
          <Route path="reports" element={<ReportList />} />
          <Route path="reports/management" element={<ReportManagement />} />
          <Route path="ai-assistant" element={<AiAssistant />} />
          <Route path="alerts/management" element={<AlertManagement />} />
          <Route path="alerts/inquiry" element={<AlertInquiry />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
