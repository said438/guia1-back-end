import { useState } from "react";
import type { CategoriaNivel2 } from "../types";
import { Button, Form, Input, InputNumber, Modal } from "antd";

interface Props {
  onEliminarCategoria: (categoria: CategoriaNivel2) => void;
}

export function BotonEliminar({ onEliminarCategoria }: Props) {
  // States
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  const nombreDelBoton = "Eliminar";

  // Handlers
  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  const handleOcultarModal = () => {
    setIsModalAbierto(false);
  };

  const handleEliminarCategoria = async (
    categoria: CategoriaNivel2
  ) => {
    await onEliminarCategoria(categoria);
    handleOcultarModal();
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        {nombreDelBoton}
      </Button>

      <Modal
        title={nombreDelBoton}
        closable={{ "aria-label": "Custom Close Button" }}
        okText={nombreDelBoton}
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleEliminarCategoria(camposValidados);
        }}
        onCancel={handleOcultarModal}
      >
        <Form form={form} layout="vertical">
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
