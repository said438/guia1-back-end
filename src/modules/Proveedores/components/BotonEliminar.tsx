import { useState } from "react";
import type { Producto } from "../types";
import { Button, Form, InputNumber, Modal } from "antd";

interface Props {
  onEliminarProducto: (producto: Producto) => void;
}

export function BotonEliminar({ onEliminarProducto }: Props) {
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  function handleOcultarModal() {
    setIsModalAbierto(false);
  }

  async function handleEliminarProducto(producto: Producto) {
    await onEliminarProducto(producto);
    handleOcultarModal();
  }

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Eliminar
      </Button>

      <Modal
        title="Eliminar Producto"
        okText="Eliminar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleEliminarProducto(camposValidados);
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
                type: "number",
                min: 1,
                message:
                  "El id debe ser un número entero mayor que cero",
              },
            ]}
          >
            <InputNumber
              min={1}
              precision={0}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

