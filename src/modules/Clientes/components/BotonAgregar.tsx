import { useState } from "react";
import type { CreateCliente } from "../types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onAgregarCliente: (nuevoCliente: CreateCliente) => void;
}

export function BotonAgregar({ onAgregarCliente }: Props) {
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

  const handleAgregarCliente = async (
    nuevoCliente: CreateCliente
  ) => {
    await onAgregarCliente(nuevoCliente);
    handleOcultarModal();
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        {nombreBoton}
      </Button>

      <Modal
        title={`${nombreBoton} Cliente`}
        closable={{ "aria-label": "Custom Close Button" }}
        okText={nombreBoton}
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleAgregarCliente(camposValidados);
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
            label="Apellido"
            name="apellido"
            rules={[
              {
                required: true,
                message: "El apellido es obligatorio",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="DNI"
            name="dni"
            rules={[
              {
                required: true,
                message: "El DNI es obligatorio",
              },
              {
                pattern: /^\d{7,8}$/,
                message: "El DNI debe contener entre 7 y 8 dígitos",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "El email es obligatorio",
              },
              {
                type: "email",
                message: "El email no tiene un formato válido",
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
