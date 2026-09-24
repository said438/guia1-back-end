import { useState } from "react";
import type { StockProductoDeposito } from "../types";
import {
  Button,
  Form,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onModificarStock: (
    stockModificado: StockProductoDeposito
  ) => void;
}

export function BotonModificar({
  onModificarStock,
}: Props) {
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  function handleOcultarModal() {
    setIsModalAbierto(false);
  }

  async function handleModificarStock(
    stockModificado: StockProductoDeposito
  ) {
    await onModificarStock(stockModificado);
    handleOcultarModal();
  }

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Modificar
      </Button>

      <Modal
        title="Modificar Stock"
        okText="Modificar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleModificarStock(camposValidados);
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

          {/*
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
          */}

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

