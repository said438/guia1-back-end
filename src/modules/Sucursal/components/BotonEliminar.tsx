import { useState } from "react";
import type { Sucursal } from "../types";
import { Button, Form, InputNumber, Modal } from "antd";

interface Props {
  onEliminarSucursal: (sucursal: Sucursal) => void;
}

export function BotonEliminar({ onEliminarSucursal }: Props) {
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

  const handleEliminarSucursal = async (
    sucursal: Sucursal
  ) => {
    await onEliminarSucursal(sucursal);
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
          await handleEliminarSucursal(camposValidados);
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
