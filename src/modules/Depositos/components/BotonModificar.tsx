import { useState } from "react";
import type { Deposito } from "../types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onModificarDeposito: (depositoModificado: Deposito) => void;
}

export function BotonModificar({ onModificarDeposito }: Props) {
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

  const handleModificarDeposito = async (
    depositoModificado: Deposito
  ) => {
    await onModificarDeposito(depositoModificado);
    setIsModalAbierto(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Modificar
      </Button>

      <Modal
        title="Modificar Depósito"
        closable={{ "aria-label": "Custom Close Button" }}
        okText="Modificar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleModificarDeposito(camposValidados);
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

          {/*
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
          */}
        </Form>
      </Modal>
    </>
  );
}
