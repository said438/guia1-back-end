import { useState } from "react";
import type { CreateCategoriaNivel2 } from "../types";
import { Button, Form, Input, InputNumber, Modal } from "antd";

interface Props {
  onAgregarCategoria: (nuevaCategoria: CreateCategoriaNivel2) => void;
}

export function BotonAgregar({ onAgregarCategoria }: Props) {
  // States
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  const nombreBoton = "Agregar";

  // Handlers
  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  const handleOcultarModal = () => {
    setIsModalAbierto(false);
  };

  const handleAgregarCategoria = async (
    nuevaCategoria: CreateCategoriaNivel2
  ) => {
    await onAgregarCategoria(nuevaCategoria);
    handleOcultarModal();
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        {nombreBoton}
      </Button>

      <Modal
        title={`${nombreBoton} Sub-Categoría`}
        closable={{ "aria-label": "Custom Close Button" }}
        okText={nombreBoton}
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleAgregarCategoria(camposValidados);
        }}
        onCancel={handleOcultarModal}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[
              {
                required: true,
                message: "El nombre es obligatorio",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Id de Categoría Nivel 1"
            name="categoriaNivel1Id"
            rules={[
              {
                required: true,
                message: "El id de la categoría nivel 1 es obligatorio",
              },
              {
                pattern: /^[1-9][0-9]*$/,
                message: "El id debe ser un número entero mayor que cero",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

