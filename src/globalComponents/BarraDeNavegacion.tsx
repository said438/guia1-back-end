import { Menu } from "antd";
import { Link } from "react-router";

export function BarraDeNavegacion(){
    
  const items = [
    {
      key: "inicio",
      label: <Link to="/"> Inicio </Link>,
    },
    {
      key: "marcas",
      label: <Link to="/marcas"> Marcas </Link>,
    },
    {
      key: "categorias",
      label: <Link to="/categorias"> Categorias </Link>,
    },
    {
      key: "sub-categorias",
      label: <Link to="/sub-categorias"> Sub-categorias </Link>,
    },
    {
      key: "sucursales",
      label: <Link to="/sucursales"> Sucursales </Link>,
    },
    {
      key: "usuarios",
      label: <Link to="/usuarios"> Usuarios </Link>,
    },
    {
      key: "clientes",
      label: <Link to="/clientes"> Clientes </Link>,
    },
    {
      key: "depositos",
      label: <Link to="/depositos"> Depositos </Link>,
    },
  ];

  return <Menu mode="horizontal" items={items} />;
}