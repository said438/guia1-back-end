import { useMarcas } from '../hooks/useMarcas';

export default function Marcas() {
  const { marcas, isLoading, error } = useMarcas();

  if (isLoading) {
    return <p>Cargando marcas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Marcas</h1>

      <ul>
        {marcas.map((marca) => (
          <li key={marca.id}>
            {marca.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
import { Table, type TableProps } from 'antd';
import { Button, Flex } from 'antd';

interface DataType {
  key: string;
  name: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
  },
]


export default function(){
    return (
        <>
            <h1>Marcas</h1>

            <Table dataSource={data} columns={columns} />

            <Flex gap="small" wrap>
                <Button type="primary">Agregar</Button>
                <Button type="primary">Modificar</Button>
                <Button type="primary">Eliminar</Button>
            </Flex>
        </>
    )
}

*/