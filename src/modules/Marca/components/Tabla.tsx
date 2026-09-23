import { Table } from "antd";
import type { Marca } from "../types";

interface Props {
  marcas: Marca[];
}

interface TipoDeDato {
    title: string,
    dataIndex: string,
    key: string,
}

const columnas: TipoDeDato[] = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
    },
];

export default function Tabla({marcas}: Props){
    return (<Table dataSource={marcas} columns={columnas} />)
}

