import { useState } from "react";
import type { CreateMarca } from "../types";
import { Button, Form, Input, Modal } from "antd";

interface Props{
  onAgregarMarca: (nuevaMarca: CreateMarca) => void;
}

export function BotonAgregarMarca ({onAgregarMarca}: Props){
  //states
  const [isModalBtnAgregarAbierto, setIsModalBtnAgregarAbierto] = useState(false);
  const [form] = Form.useForm();

  //handlers
  function handleMostrarModal(){
    setIsModalBtnAgregarAbierto(true);
  }

  const handleOcultarModal = () => {
    setIsModalBtnAgregarAbierto(false);
  };

  const handleAgregarMarca = async (nuevaMarca: CreateMarca) => {    
    await onAgregarMarca(nuevaMarca);
    setIsModalBtnAgregarAbierto(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}> Agregar </Button>

      <Modal
      title="Agregar Marca"
      closable={{ 'aria-label': 'Custom Close Button' }}
      okText="Agregar"
      cancelText="Cancelar"
      open={isModalBtnAgregarAbierto}
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