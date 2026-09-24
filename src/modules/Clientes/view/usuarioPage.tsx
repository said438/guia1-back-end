import { useCliente } from "../hooks/useCliente";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";
import type { Cliente } from "../types";

export default function ClientePage() {
  // Objeto que retorna el hook personalizado
  const {
    clientes,
    isCargandoDatos,
    error,
    agregarCliente,
    modificarCliente,
    eliminarCliente,
  } = useCliente();

  const columnas = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Apellido",
      dataIndex: "apellido",
      key: "apellido",
    },
    {
      title: "DNI",
      dataIndex: "dni",
      key: "dni",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Id Localidad",
      dataIndex: "localidadId",
      key: "localidadId",
    },
    {
      title: "Id Provincia",
      dataIndex: "provinciaId",
      key: "provinciaId",
    },
  ];

  return (
    <>
      <h1>Clientes</h1>

      <Tabla<Cliente>
        datos={clientes}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar
          onAgregarCliente={agregarCliente}
        />

        <BotonModificar
          onModificarCliente={modificarCliente}
        />

        <BotonEliminar
          onEliminarCliente={eliminarCliente}
        />
      </Flex>
    </>
  );
}