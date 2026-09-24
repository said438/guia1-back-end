import { useUsuario } from "../hooks/useUsuario";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";
import type { Usuario } from "../types";

export default function UsuarioPage() {
  // Objeto que retorna el hook personalizado
  const {
    usuarios,
    isCargandoDatos,
    error,
    agregarUsuario,
    modificarUsuario,
    eliminarUsuario,
  } = useUsuario();

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
      title: "Nombre de Usuario",
      dataIndex: "nombreUsuario",
      key: "nombreUsuario",
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "rol",
    },
    {
      title: "Id Sucursal",
      dataIndex: "sucursalId",
      key: "sucursalId",
    },
  ];

  return (
    <>
      <h1>Usuarios</h1>

      <Tabla<Usuario>
        datos={usuarios}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar
          onAgregarUsuario={agregarUsuario}
        />

        <BotonModificar
          onModificarUsuario={modificarUsuario}
        />

        <BotonEliminar
          onEliminarUsuario={eliminarUsuario}
        />
      </Flex>
    </>
  );
}

