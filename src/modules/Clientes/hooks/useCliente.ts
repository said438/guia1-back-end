import { useState, useEffect } from "react";
import {
  crearClienteService,
  eliminarClienteService,
  modificarClienteService,
  obtenerClientesService,
} from "../Services/clienteService.tsx";

import type {
  CreateCliente,
  Cliente,
} from "../types.ts";
import axios from "axios";

export const useCliente = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerClientesService();
      setClientes(datos);
    } catch (error) {
      console.log("Ocurrió un error al cargar los datos.");

      if (axios.isAxiosError(error)) {
        console.log(
          `Error de Axios: ${error.message}, su codigo es: ${error.code}`
        );
        setError(error.message);
      } else if (error instanceof Error) {
        console.log(`Ocurrio un error: ${error.message}`);
        setError(error.message);
      }
    } finally {
      setIsCargandoDatos(false);
    }
  }

  async function agregarCliente(nuevoCliente: CreateCliente) {
    try {
      await crearClienteService(nuevoCliente);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al agregar un cliente.");

      if (axios.isAxiosError(error)) {
        console.log(
          `Error de Axios: ${error.message}, su codigo es: ${error.code}`
        );

        setError(
          error.response !== undefined
            ? error.response.data.message
            : error.message
        );
      } else if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  async function modificarCliente(clienteModificado: Cliente) {
    try {
      await modificarClienteService(clienteModificado);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al modificar un cliente.");

      if (axios.isAxiosError(error)) {
        console.log(
          `Error de Axios: ${error.message}, su codigo es: ${error.code}`
        );

        setError(
          error.response !== undefined
            ? error.response.data.message
            : error.message
        );
      } else if (error instanceof Error) {
        setError(`Imprimiendo el mensaje del error: ${error.message}`);
        console.log(
          `Imprimiendo el stack trace del error: ${error.stack}`
        );
      }
    }
  }

  async function eliminarCliente(cliente: Cliente) {
    try {
      await eliminarClienteService(cliente);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al eliminar un cliente.");

      if (axios.isAxiosError(error)) {
        console.log(
          `Error de Axios: ${error.message}, su codigo es: ${error.code}`
        );

        setError(
          error.response !== undefined
            ? error.response.data.message
            : error.message
        );
      } else if (error instanceof Error) {
        setError(`Imprimiendo el mensaje del error: ${error.message}`);
        console.log(
          `Imprimiendo el stack trace del error: ${error.stack}`
        );
      }
    }
  }

  // Se usa useEffect porque la función no se ejecuta
  // como resultado de una interacción del usuario
  useEffect(() => {
    cargarDatos();
  }, []);

  // Retornamos este objeto para que sus propiedades y métodos
  // puedan ser usados por la vista
  return {
    clientes,
    isCargandoDatos,
    error,
    agregarCliente,
    modificarCliente,
    eliminarCliente,
  };
};

