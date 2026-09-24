import { useCategoriaNivel2 } from "../hooks/useCategoriaNivel2";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";

export default function CategoriaNivel2Page() {
  const {
    categorias,
    isCargandoDatos,
    error,
    agregarCategoria,
    modificarCategoria,
    eliminarCategoria,
  } = useCategoriaNivel2();

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
      title: "Id Categoría Nivel 1",
      dataIndex: "categoriaNivel1Id",
      key: "categoriaNivel1Id",
    },
  ];

  return (
    <>
      <h1>Subcategorías</h1>

      <Tabla
        datos={categorias}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar
          onAgregarCategoria={agregarCategoria}
        />

        <BotonModificar
          onModificarCategoria={modificarCategoria}
        />

        <BotonEliminar
          onEliminarCategoria={eliminarCategoria}
        />
      </Flex>
    </>
  );
}
