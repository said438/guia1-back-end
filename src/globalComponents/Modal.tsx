/*
import { useState, type ReactNode } from "react";
import { Modal as ModalDeAnt, type FormInstance } from "antd";
import type { Usuario } from "../modules/Usuario/types";

// const camposValidados = await form.validateFields();
// await handleAgregarUsuario(camposValidados);

interface Props {
    form: FormInstance,
    accionDelBoton: String,
    onAgregar: (usuario: Usuario) => void;
    children: ReactNode
}

export function Modal({accionDelBoton, onAgregar, children}: Props){
    const [isModalAbierto, setIsModalAbierto] = useState(false);

    const handleOcultarModal = () => {
        setIsModalAbierto(false);
    };

    <ModalDeAnt
        title={`${accionDelBoton} Usuario`}
        closable={{ "aria-label": "Custom Close Button" }}
        okText={accionDelBoton}
        cancelText="Cancelar"
        open={isModalAbierto}
        onOk={async () => {onAgregar()}}
        onCancel={handleOcultarModal}
    >
        {children}
    </ModalDeAnt>
}
*/
      
      