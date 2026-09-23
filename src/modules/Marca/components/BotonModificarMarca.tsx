import { useState } from "react";
import type { Marca } from "../types";
import { Button, Form, Input, Modal } from "antd";

interface Props{
  onModificarMarca: (nuevaMarca: Marca) => void;
}

export function BotonModificarMarca ({onModificarMarca}: Props){
  //states
  const [isModalDelBotonModificarAbierto, setIsModalDelBotonModificarAbierto] = useState(false);
  const [form] = Form.useForm();

  //handlers
  function handleMostrarModal(){
    setIsModalDelBotonModificarAbierto(true);
  }

  const handleOcultarModal = () => {
    setIsModalDelBotonModificarAbierto(false);
  };

  const handleModificarMarca = async (marcaModificada: Marca) => {    
    await onModificarMarca(marcaModificada);
    setIsModalDelBotonModificarAbierto(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}> Modificar </Button>

      <Modal
      title="Modificar Marca"
      closable={{ 'aria-label': 'Custom Close Button' }}
      okText="Modificar"
      cancelText="Cancelar"
      open={isModalDelBotonModificarAbierto}
      onOk={async () => {
        const camposValidados = await form.validateFields();
        await handleModificarMarca(camposValidados);
      }}
      onCancel={handleOcultarModal}
      >
        
        <Form form={form} layout="vertical">
          <Form.Item
            label="Nombre"
            name="nombre"

            //Restricciónes
            rules={[{required: true, message: 'El nombre es obligatorio',}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="id"
            name="id"

            //Restricciónes
            rules={[{required: true, message: 'El id es obligatorio',}]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}