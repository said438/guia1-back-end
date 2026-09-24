import { Table } from "antd";

interface Columna {
  title: string;
  dataIndex: string;
  key: string;
}

interface Props<T>{
  datos: T[];
  cargando: boolean;
  error: string | null;
  columnas: Columna[];
}

export default function Tabla<T>({ datos, columnas, cargando, error,  }: Props<T>) {
  return (
    <Table
      rowKey="id"
      dataSource={datos}
      columns={columnas}
      loading={cargando}
      locale={{
        emptyText: error
          ? "Hubo un error al intentar conectarse con el servidor"
          : "No hay datos para mostrar",
      }}
    />
  );
}
