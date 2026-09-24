import { useState } from "react";
import type { Cliente } from "../types";
import { Button, Form, InputNumber, Modal } from "antd";

interface Props {
  onEliminarCliente: (cliente: Cliente) => void;
}

export function BotonEliminar({ onEliminarCliente }: Props) {
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

  const handleEliminarCliente = async (cliente: Cliente) => {
    await onEliminarCliente(cliente);
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
          await handleEliminarCliente(camposValidados);
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

