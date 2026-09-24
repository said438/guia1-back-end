import { useProveedor } from "../hooks/useProveedor";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";
import type { Proveedor } from "../types";

export default function ProveedorPage() {
  const {
    proveedores,
    isCargandoDatos,
    error,
    agregarProveedor,
    modificarProveedor,
    eliminarProveedor,
  } = useProveedor();

  const columnas = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Razón Social",
      dataIndex: "razonSocial",
      key: "razonSocial",
    },
    {
      title: "CUIT",
      dataIndex: "cuit",
      key: "cuit",
    },
  ];

  return (
    <>
      <h1>Proveedores</h1>

      <Tabla<Proveedor>
        datos={proveedores}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar
          onAgregarProveedor={agregarProveedor}
        />

        <BotonModificar
          onModificarProveedor={modificarProveedor}
        />

        <BotonEliminar
          onEliminarProveedor={eliminarProveedor}
        />
      </Flex>
    </>
  );
}