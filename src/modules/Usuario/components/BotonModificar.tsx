import { useState } from "react";
import type { Usuario } from "../types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";

interface Props {
  onModificarUsuario: (usuarioModificado: Usuario) => void;
}

export function BotonModificar({ onModificarUsuario }: Props) {
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

  const handleModificarUsuario = async (
    usuarioModificado: Usuario
  ) => {
    await onModificarUsuario(usuarioModificado);
    setIsModalAbierto(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Modificar
      </Button>

      <Modal
        title="Modificar Usuario"
        closable={{ "aria-label": "Custom Close Button" }}
        okText="Modificar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleModificarUsuario(camposValidados);
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
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nombre de Usuario"
            name="nombreUsuario"
            rules={[
              {
                required: true,
                message: "El nombre de usuario es obligatorio",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Rol"
            name="rol"
            rules={[
              {
                required: true,
                message: "El rol es obligatorio",
              },
            ]}
          >
            <Select
              placeholder="Seleccione un rol"
              options={[
                {
                  label: "Administración",
                  value: "Administracion",
                },
                {
                  label: "Vendedor",
                  value: "Vendedor",
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Id de Sucursal"
            name="sucursalId"
            rules={[
              {
                required: true,
                message: "El id de la sucursal es obligatorio",
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
