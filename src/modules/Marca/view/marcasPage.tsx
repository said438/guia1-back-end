import { useMarcas } from '../hooks/useMarcas';
import { Button, Flex } from 'antd';
import Tabla from '../components/Tabla';
import { BotonAgregarMarca } from '../components/BotonAgregarMarca';
import { BotonModificarMarca } from '../components/BotonModificarMarca';


export default function Marcas() {
  const { 
    marcas,
    isCargandoDatosDeTabla,
    error,
    agregarMarca,
    modificarMarca,
  } = useMarcas();

  if (isCargandoDatosDeTabla) {
    return <p>Cargando marcas...</p>;
  }

  if (error) {
    return <p>Ocurrio un Error: {error}</p>;
  }

  console.log(useMarcas);

  return (
    <>
      <h1>Marcas</h1>

      <Tabla marcas={marcas}/>

      <Flex gap="small" wrap>
        <BotonAgregarMarca onAgregarMarca={agregarMarca}/>
        <BotonModificarMarca onModificarMarca={modificarMarca}/>
        <Button type="primary">Eliminar</Button>
      </Flex>
    </>
  );
}