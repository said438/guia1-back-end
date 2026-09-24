import { useDeposito } from "../hooks/useDeposito";
import { Flex } from "antd";
import { BotonAgregar } from "../components/BotonAgregar";
import { BotonModificar } from "../components/BotonModificar";
import { BotonEliminar } from "../components/BotonEliminar";
import Tabla from "../../../globalComponents/Tabla";
import type { Deposito } from "../types";

export default function DepositoPage() {
  // Objeto que retorna el hook personalizado
  const {
    depositos,
    isCargandoDatos,
    error,
    agregarDeposito,
    modificarDeposito,
    eliminarDeposito,
  } = useDeposito();

  const columnas = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Código",
      dataIndex: "codigo",
      key: "codigo",
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
      <h1>Depósitos</h1>

      <Tabla<Deposito>
        datos={depositos}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregar
          onAgregarDeposito={agregarDeposito}
        />

        <BotonModificar
          onModificarDeposito={modificarDeposito}
        />

        <BotonEliminar
          onEliminarDeposito={eliminarDeposito}
        />
      </Flex>
    </>
  );
}

