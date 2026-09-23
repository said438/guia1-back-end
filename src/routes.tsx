// routes.tsx
import { Routes, Route } from 'react-router-dom';
import MarcasPage from './modules/Marca/view/marcasPage';
import App from './App';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/marcas" element={<MarcasPage />} />
    </Routes>
  );
}