// routes.tsx
import { Routes, Route } from 'react-router-dom';
import { BarraDeNavegacion } from './globalComponents/BarraDeNavegacion';
import App from './App';
import MarcasPage from './modules/Marca/view/marcasPage';
import CategoriasPage from './modules/Categorias-nivel-1/view/categoriaPage';
import SubCategoriasPage from './modules/Categorias-nivel-2/view/subCategoriasPage';
import SucursalPage from './modules/Sucursal/view/sucursalPage';
import UsuarioPage from './modules/Usuario/view/usuarioPage';

export default function AppRoutes() {
  return (
    <>
      <BarraDeNavegacion />

      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/marcas" element={<MarcasPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/sub-categorias" element={<SubCategoriasPage />} />
          <Route path="/sucursales" element={<SucursalPage />} />
          <Route path="/usuarios" element={<UsuarioPage />} />
      </Routes>
    </>
    
  );
}