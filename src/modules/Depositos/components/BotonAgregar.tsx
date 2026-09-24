import { useState } from "react";
import type { CreateDeposito } from "../types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onAgregarDeposito: (nuevoDeposito: CreateDeposito) => void;
}

export function BotonAgregar({ onAgregarDeposito }: Props) {
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

  const handleAgregarDeposito = async (
    nuevoDeposito: CreateDeposito
  ) => {
    await onAgregarDeposito(nuevoDeposito);
    handleOcultarModal();
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        {nombreBoton}
      </Button>

      <Modal
        title={`${nombreBoton} Depósito`}
        closable={{ "aria-label": "Custom Close Button" }}
        okText={nombreBoton}
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleAgregarDeposito(camposValidados);
        }}
        onCancel={handleOcultarModal}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Código"
            name="codigo"
            rules={[
              {
                required: true,
                message: "El código es obligatorio",
              },
              {
                pattern: /^DEP-\d{2}$/,
                message: "El código debe tener el formato DEP-01",
              },
            ]}
          >
            <Input placeholder="DEP-01" />
          </Form.Item>

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
            label="Id de Localidad"
            name="localidadId"
            rules={[
              {
                required: true,
                message: "El id de la localidad es obligatorio",
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
            label="Id de Provincia"
            name="provinciaId"
            rules={[
              {
                required: true,
                message: "El id de la provincia es obligatorio",
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
