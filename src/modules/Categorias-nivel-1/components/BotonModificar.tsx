import { useState } from "react";
import type { Categoria } from "../types";
import { Button, Form, Input, Modal } from "antd";

interface Props {
  onModificarCategoria: (nuevaCategoria: Categoria) => void;
}

export function BotonModificarCategoria({onModificarCategoria}: Props) {

  // States
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  // Handlers
  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  const handleOcultarModal = () => {
    setIsModalAbierto(false);
  };

  const handleModificarCategoria = async (categoriaModificada: Categoria) => {
    await onModificarCategoria(categoriaModificada);
    setIsModalAbierto(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Modificar
      </Button>

      <Modal
        title="Modificar Categoría"
        closable={{ "aria-label": "Custom Close Button" }}
        okText="Modificar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleModificarCategoria(camposValidados);
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
            label="Id"
            name="id"
            rules={[
              {
                required: true,
                message: "El id es obligatorio",
              },
              {
                pattern: /^[1-9][0-9]*$/,
                message:
                  "El id debe ser un número entero mayor que cero",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

