import { useMarcas } from '../hooks/useMarcas';
import { Flex } from 'antd';
import { BotonAgregarMarca } from '../components/BotonAgregar';
import { BotonModificarMarca } from '../components/BotonModificar';
import { BotonEliminarMarca } from '../components/BotonEliminar';
import Tabla from '../../../globalComponents/Tabla';

export default function MarcasPage() {
  const { 
    marcas,
    isCargandoDatos,
    error,
    agregarMarca,
    modificarMarca,
    eliminarMarca,
  } = useMarcas();

  const columnas = [
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

  return (
    <>
      <h1>Marcas</h1>

      <Tabla 
        datos={marcas}
        columnas={columnas}
        cargando={isCargandoDatos}
        error={error}
      />

      <Flex gap="small" wrap>
        <BotonAgregarMarca onAgregarMarca={agregarMarca}/>
        <BotonModificarMarca onModificarMarca={modificarMarca}/>
        <BotonEliminarMarca onEliminarMarca={eliminarMarca}/>
      </Flex>
    </>
  );
}