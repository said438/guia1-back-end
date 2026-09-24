import { useState } from "react";
import type { CreateProveedor } from "../types";
import {
  Button,
  Form,
  Input,
  Modal,
} from "antd";

interface Props {
  onAgregarProveedor: (nuevoProveedor: CreateProveedor) => void;
}

export function BotonAgregar({
  onAgregarProveedor,
}: Props) {
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  function handleOcultarModal() {
    setIsModalAbierto(false);
  }

  async function handleAgregarProveedor(
    nuevoProveedor: CreateProveedor
  ) {
    await onAgregarProveedor(nuevoProveedor);
    handleOcultarModal();
  }

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Agregar
      </Button>

      <Modal
        title="Agregar Proveedor"
        okText="Agregar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleAgregarProveedor(camposValidados);
        }}
        onCancel={handleOcultarModal}
      >
        <Form form={form} layout="vertical">
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
                message: "El CUIT debe contener exactamente 11 dígitos (sin guiones)",
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