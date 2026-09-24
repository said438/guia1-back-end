import { useState } from "react";
import type { CreateStockProductoDeposito } from "../types";
import {
  Button,
  Form,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onAgregarStock: (
    nuevoStock: CreateStockProductoDeposito
  ) => void;
}

export function BotonAgregar({ onAgregarStock }: Props) {
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  function handleOcultarModal() {
    setIsModalAbierto(false);
  }

  async function handleAgregarStock(
    nuevoStock: CreateStockProductoDeposito
  ) {
    await onAgregarStock(nuevoStock);
    handleOcultarModal();
  }

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Agregar
      </Button>

      <Modal
        title="Agregar Stock"
        okText="Agregar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleAgregarStock(camposValidados);
        }}
        onCancel={handleOcultarModal}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Id de Producto"
            name="productoId"
            rules={[
              {
                required: true,
                message: "El id del producto es obligatorio",
              },
              {
                type: "number",
                min: 1,
                message:
                  "El id del producto debe ser un número entero mayor que cero",
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
            label="Id de Depósito"
            name="depositoId"
            rules={[
              {
                required: true,
                message: "El id del depósito es obligatorio",
              },
              {
                type: "number",
                min: 1,
                message:
                  "El id del depósito debe ser un número entero mayor que cero",
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
            label="Stock"
            name="stock"
            rules={[
              {
                required: true,
                message: "El stock es obligatorio",
              },
              {
                type: "number",
                min: 0,
                max: 1000000, //1.000.000
                message: "El stock debe ser un numero entre 0 hasta 1.000.000",
              },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

