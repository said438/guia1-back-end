import { useState } from "react";
import type { Usuario } from "../types";
import { Button, Form, InputNumber, Modal } from "antd";

interface Props {
  onEliminarUsuario: (usuario: Usuario) => void;
}

export function BotonEliminar({ onEliminarUsuario }: Props) {
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

  const handleEliminarUsuario = async (usuario: Usuario) => {
    await onEliminarUsuario(usuario);
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
          await handleEliminarUsuario(camposValidados);
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

