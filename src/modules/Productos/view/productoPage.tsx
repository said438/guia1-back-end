import { useProducto } from "../hooks/useProducto";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";
import type { Producto } from "../types";

export default function ProductoPage() {
  const {
    productos,
    isCargandoDatos,
    error,
    agregarProducto,
    modificarProducto,
    eliminarProducto,
  } = useProducto();

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
      title: "Stock Total",
      dataIndex: "stockTotal",
      key: "stockTotal",
    },
    {
      title: "Costo Neto",
      dataIndex: "costoNeto",
      key: "costoNeto",
    },
    {
      title: "Utilidad %",
      dataIndex: "utilidadPorcentaje",
      key: "utilidadPorcentaje",
    },
    {
      title: "Precio Lista",
      dataIndex: "precioLista",
      key: "precioLista",
    },
    {
      title: "Descuento Contado %",
      dataIndex: "descuentoContadoPorcentaje",
      key: "descuentoContadoPorcentaje",
    },
    {
      title: "Precio Contado",
      dataIndex: "precioContado",
      key: "precioContado",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
    },
    {
      title: "Id Marca",
      dataIndex: "marcaId",
      key: "marcaId",
    },
    {
      title: "Id Categoría Nivel 2",
      dataIndex: "categoriaNivel2Id",
      key: "categoriaNivel2Id",
    },
  ];

  return (
    <>
      <h1>Productos</h1>

      <Tabla<Producto>
        datos={productos}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar
          onAgregarProducto={agregarProducto}
        />

        <BotonModificar
          onModificarProducto={modificarProducto}
        />

        <BotonEliminar
          onEliminarProducto={eliminarProducto}
        />
      </Flex>
    </>
  );
}

