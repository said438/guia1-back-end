import { useState } from 'react';
import { useMarcas } from '../hooks/useMarcas';
import { Table, Button, Flex, Modal } from 'antd';

interface TipoDeDato {
  title: string,
  dataIndex: string,
  key: string,
}

const columnas: TipoDeDato[] = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
];


export default function Marcas() {
  const { marcas, isLoading, error, agregarMarca } = useMarcas();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nombreMarca, setNombreMarca] = useState('');

  if (isLoading) {
    return <p>Cargando marcas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(useMarcas);

  //handlers
  function mostrarModal(){
    setIsModalOpen(true);
  }

  const handleCancelar = () => {
    setIsModalOpen(false);
  };

  const handleAgregarMarca = async (nombre: string) => {
    await agregarMarca(nombre);
    setIsModalOpen(false);
  };


  return (
    <>
      <h1>Marcas</h1>

      <Table dataSource={marcas} columns={columnas} />

      <Flex gap="small" wrap>
        <Button type="primary">Obtener</Button>

        <Button type="primary" onClick={mostrarModal} >Agregar</Button>
        
        <Button type="primary">Modificar</Button>
        <Button type="primary">Eliminar</Button>
      </Flex>

      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={() => handleAgregarMarca(nombreMarca)}
        onCancel={handleCancelar}
      >
        <form>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id="nombre" name="nombre" required
          onChange={(e) => setNombreMarca(e.target.value)} />
        </form>
      </Modal>
    </>
  );
}