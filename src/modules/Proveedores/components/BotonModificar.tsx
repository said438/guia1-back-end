import { useState } from "react";
import type { Proveedor } from "../types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onModificarProveedor: (
    proveedorModificado: Proveedor
  ) => void;
}

export function BotonModificar({
  onModificarProveedor,
}: Props) {
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  function handleOcultarModal() {
    setIsModalAbierto(false);
  }

  async function handleModificarProveedor(
    proveedorModificado: Proveedor
  ) {
    await onModificarProveedor(proveedorModificado);
    handleOcultarModal();
  }

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Modificar
      </Button>

      <Modal
        title="Modificar Proveedor"
        okText="Modificar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleModificarProveedor(camposValidados);
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

          <Form.Item
            label="Razón Social"
            name="razonSocial"
            rules={[
              {
                required: true,
                message: "La razón social es obligatoria",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CUIT"
            name="cuit"
            rules={[
              {
                required: true,
                message: "El CUIT es obligatorio",
              },
              {
                pattern: /^\d{11}$/,
                message: "El CUIT debe contener exactamente 11 dígitos",
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