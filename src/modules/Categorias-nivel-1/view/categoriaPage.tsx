import { useCategorias } from "../hooks/useCategorias";
import { Flex } from "antd";
import { BotonAgregarCategoria } from "../components/BotonAgregar";
import { BotonModificarCategoria } from "../components/BotonModificar";
import { BotonEliminarCategoria } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";

export default function CategoriasPage() {
  const {
    categorias,
    isCargandoDatos,
    error,
    agregarCategoria,
    modificarCategoria,
    eliminarCategoria,
  } = useCategorias();

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
  ];

  return (
    <>
      <h1>Categorías</h1>

      <Tabla
        datos={categorias}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregarCategoria
          onAgregarCategoria={agregarCategoria}
        />

        <BotonModificarCategoria
          onModificarCategoria={modificarCategoria}
        />

        <BotonEliminarCategoria
          onEliminarCategoria={eliminarCategoria}
        />
      </Flex>
    </>
  );
}

