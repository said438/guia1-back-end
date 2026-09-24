import { useState } from "react";
import type { Marca } from "../types";
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";

interface Props{
  onEliminarMarca: (marca: Marca) => void;
}

export function BotonEliminarMarca ({onEliminarMarca}: Props){
  //states
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [errorId, setErrorId] = useState(false);
  const nombreDelBoton = 'Eliminar';
  const [form] = Form.useForm();

  //handlers
  function handleMostrarModal(){
    setIsModalAbierto(true);
  }

  const handleOcultarModal = () => {
    setIsModalAbierto(false);
  };

  const handleEliminarMarca = async (nuevaMarca: Marca) => {
    await onEliminarMarca(nuevaMarca);
    handleOcultarModal();
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}> {nombreDelBoton} </Button>

      <Modal
      title={nombreDelBoton}
      closable={{ 'aria-label': 'Custom Close Button' }}
      okText={nombreDelBoton}
      cancelText="Cancelar"
      open={isModalAbierto}
      onOk={async () => {
        await handleEliminarMarca(await form.validateFields());
      }}
      onCancel={handleOcultarModal}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Id"
            name="id"

            //Restricciónes
            rules={[
              {required: true, message: 'El id es obligatorio'},
              {pattern: /^[1-9][0-9]*$/, message: "El id debe ser un numero entero mayor que cero"},
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}