import { useState } from "react";
import type { CreateMarca } from "../types";
import { Button, Form, Input, Modal } from "antd";

interface Props{
  onAgregarMarca: (nuevaMarca: CreateMarca) => void;
}

export function BotonAgregarMarca ({onAgregarMarca}: Props){
  //states
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  const nombreBoton = "Agregar";

  //handlers
  function handleMostrarModal(){
    setIsModalAbierto(true);
  }

  const handleOcultarModal = () => {
    setIsModalAbierto(false);
  };

  const handleAgregarMarca = async (nuevaMarca: CreateMarca) => { 
    await onAgregarMarca(nuevaMarca);
    setIsModalAbierto(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}> {nombreBoton} </Button>

      <Modal
      title={`${nombreBoton} Marca`}
      closable={{ 'aria-label': 'Custom Close Button' }}
      okText={nombreBoton}
      cancelText="Cancelar"
      open={isModalAbierto}
      onOk={async () => {
        const camposValidados = await form.validateFields();
        await handleAgregarMarca(camposValidados);
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
        </Form>
      </Modal>
    </>
  )
}