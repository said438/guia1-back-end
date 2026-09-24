import { useStockProductoDeposito } from "../hooks/useStockProductoDeposito";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";
import type { StockProductoDeposito } from "../types";

export default function StockProductoDepositoPage() {
  const {
    stocks,
    isCargandoDatos,
    error,
    agregarStock,
    modificarStock,
    eliminarStock,
  } = useStockProductoDeposito();

  const columnas = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Id Producto",
      dataIndex: "productoId",
      key: "productoId",
    },
    {
      title: "Id Depósito",
      dataIndex: "depositoId",
      key: "depositoId",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
  ];

  return (
    <>
      <h1>Stock por Depósito</h1>

      <Tabla<StockProductoDeposito>
        datos={stocks}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar onAgregarStock={agregarStock} />

        <BotonModificar
          onModificarStock={modificarStock}
        />

        <BotonEliminar
          onEliminarStock={eliminarStock}
        />
      </Flex>
    </>
  );
}

