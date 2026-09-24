import { useSucursal } from "../hooks/useSucursal";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";
import type { Sucursal } from "../types";

export default function SucursalPage() {

  //Objeto que retorna el hook personalizado
  const {
    sucursales,
    isCargandoDatos,
    error,
    agregarSucursal,
    modificarSucursal,
    eliminarSucursal,
  } = useSucursal();

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
      <h1>Sucursales</h1>

      <Tabla<Sucursal>
        datos={sucursales}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar
          onAgregarSucursal={agregarSucursal}
        />

        <BotonModificar
          onModificarSucursal={modificarSucursal}
        />

        <BotonEliminar
          onEliminarSucursal={eliminarSucursal}
        />
      </Flex>
    </>
  );
}

