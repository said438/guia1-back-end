// routes.tsx
import { Routes, Route } from 'react-router-dom';
import { BarraDeNavegacion } from './globalComponents/BarraDeNavegacion';
import App from './App';
import MarcasPage from './modules/Marca/view/marcasPage';
import CategoriasPage from './modules/Categorias-nivel-1/view/categoriaPage';
import SubCategoriasPage from './modules/Categorias-nivel-2/view/subCategoriasPage';
import SucursalPage from './modules/Sucursal/view/sucursalPage';
import UsuarioPage from './modules/Usuario/view/usuarioPage';
import ClientePage from './modules/Clientes/view/usuarioPage';
import DepositoPage from './modules/Depositos/view/depositoPage';
import ProductoPage from './modules/Productos/view/productoPage';
import ProveedorPage from './modules/Proveedores/view/proveedorPage';

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
        <Route path="/clientes" element={<ClientePage />} />
        <Route path="/depositos" element={<DepositoPage />} />
        <Route path="/productos" element={<ProductoPage />} />
        <Route path="/proveedor" element={<ProveedorPage />} />
      </Routes>
    </>
    
  );
}