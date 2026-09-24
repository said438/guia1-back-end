import { useState } from "react";
import type { CreateProducto } from "../types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onAgregarProducto: (nuevoProducto: CreateProducto) => void;
}

export function BotonAgregar({ onAgregarProducto }: Props) {
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  function handleOcultarModal() {
    setIsModalAbierto(false);
  }

  async function handleAgregarProducto(
    nuevoProducto: CreateProducto
  ) {
    await onAgregarProducto(nuevoProducto);
    handleOcultarModal();
  }

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Agregar
      </Button>

      <Modal
        title="Agregar Producto"
        okText="Agregar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleAgregarProducto(camposValidados);
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
            label="Costo Neto"
            name="costoNeto"
            rules={[
              {
                required: true,
                message: "El costo neto es obligatorio",
              },
              {
                type: "number",
                min: 0,
                max: 10000000,
                message:
                  "El costo debe estar entre $0 y $10.000.000",
              },
            ]}
          >
            <InputNumber
              min={0}
              max={10000000}
              precision={2}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Utilidad %"
            name="utilidadPorcentaje"
            rules={[
              {
                required: true,
                message: "La utilidad es obligatoria",
              },
              {
                type: "number",
                min: 0,
                max: 100,
                message:
                  "La utilidad debe estar entre 0% y 100%",
              },
            ]}
          >
            <InputNumber
              min={0}
              max={100}
              precision={2}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Descuento Pago al Contado %"
            name="descuentoContadoPorcentaje"
            rules={[
              {
                required: true,
                message: "El descuento es obligatorio",
              },
              {
                type: "number",
                min: 0,
                max: 100,
                message:
                  "El descuento debe estar entre 0% y 100%",
              },
            ]}
          >
            <InputNumber
              min={0}
              max={100}
              precision={2}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Ruta Imagen en Storage"
            name="rutaImagenEnStorage"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Id de Marca"
            name="marcaId"
            rules={[
              {
                required: true,
                message: "El id de la marca es obligatorio",
              },
              {
                type: "number",
                min: 1,
                message:
                  "El id de la marca debe ser un número entero mayor que cero",
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
            label="Id de Categoría Nivel 2"
            name="categoriaNivel2Id"
            rules={[
              {
                required: true,
                message:
                  "El id de la categoría nivel 2 es obligatorio",
              },
              {
                type: "number",
                min: 1,
                message:
                  "El id de la categoría nivel 2 debe ser un número entero mayor que cero",
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
