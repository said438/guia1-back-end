import { useState } from "react";
import type { CreateSucursal } from "../types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onAgregarSucursal: (nuevaSucursal: CreateSucursal) => void;
}

export function BotonAgregar({ onAgregarSucursal }: Props) {
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

  const handleAgregarSucursal = async (
    nuevaSucursal: CreateSucursal
  ) => {
    await onAgregarSucursal(nuevaSucursal);
    handleOcultarModal();
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        {nombreBoton}
      </Button>

      <Modal
        title={`${nombreBoton} Sucursal`}
        closable={{ "aria-label": "Custom Close Button" }}
        okText={nombreBoton}
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleAgregarSucursal(camposValidados);
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
