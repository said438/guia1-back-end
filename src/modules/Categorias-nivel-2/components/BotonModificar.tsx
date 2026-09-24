import { useState } from "react";
import type { CategoriaNivel2 } from "../types";
import { Button, Form, Input, InputNumber, Modal } from "antd";

interface Props {
  onModificarCategoria: (categoriaModificada: CategoriaNivel2) => void;
}

export function BotonModificar({ onModificarCategoria }: Props) {
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

  const handleModificarCategoria = async (
    categoriaModificada: CategoriaNivel2
  ) => {
    await onModificarCategoria(categoriaModificada);
    setIsModalAbierto(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Modificar
      </Button>

      <Modal
        title="Modificar Sub-Categoría"
        closable={{ "aria-label": "Custom Close Button" }}
        okText="Modificar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleModificarCategoria(camposValidados);
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
            label="Id"
            name="id"
            rules={[
              {
                required: true,
                message: "El id es obligatorio",
              },
              {
                pattern: /^[1-9][0-9]*$/,
                message:
                  "El id debe ser un número entero mayor que cero",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          {/*Boton para modificar la categoriaNivel1 que tiene asignada*/}
          {/*
          <Form.Item
            label="Id de Categoría Nivel 1"
            name="categoriaNivel1Id"
            rules={[
              {
                required: true,
                message:
                  "El id de la categoría nivel 1 es obligatorio",
              },
              {
                type: "number",
                min: 1,
                message:
                  "El id debe ser un número entero mayor que cero",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          */}
        </Form>
      </Modal>
    </>
  );
}

