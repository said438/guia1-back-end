import { useState } from "react";
import type { StockProductoDeposito } from "../types";
import {
  Button,
  Form,
  InputNumber,
  Modal,
} from "antd";

interface Props {
  onEliminarStock: (stock: StockProductoDeposito) => void;
}

export function BotonEliminar({ onEliminarStock }: Props) {
  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [form] = Form.useForm();

  function handleMostrarModal() {
    setIsModalAbierto(true);
  }

  function handleOcultarModal() {
    setIsModalAbierto(false);
  }

  async function handleEliminarStock(
    stock: StockProductoDeposito
  ) {
    await onEliminarStock(stock);
    handleOcultarModal();
  }

  return (
    <>
      <Button type="primary" onClick={handleMostrarModal}>
        Eliminar
      </Button>

      <Modal
        title="Eliminar Stock"
        okText="Eliminar"
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {
          const camposValidados = await form.validateFields();
          await handleEliminarStock(camposValidados);
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
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

