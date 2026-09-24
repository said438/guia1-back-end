import { useState, useEffect } from "react";
import {
  crearDepositoService,
  eliminarDepositoService,
  modificarDepositoService,
  obtenerDepositosService,
} from "../Services/depositoService.tsx";

import type {
  CreateDeposito,
  Deposito,
} from "../types.ts";
import axios from "axios";

export const useDeposito = () => {
  const [depositos, setDepositos] = useState<Deposito[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerDepositosService();
      setDepositos(datos);
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

  async function agregarDeposito(nuevoDeposito: CreateDeposito) {
    try {
      await crearDepositoService(nuevoDeposito);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al agregar un depósito.");

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

  async function modificarDeposito(depositoModificado: Deposito) {
    try {
      await modificarDepositoService(depositoModificado);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al modificar un depósito.");

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

  async function eliminarDeposito(deposito: Deposito) {
    try {
      await eliminarDepositoService(deposito);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al eliminar un depósito.");

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
    depositos,
    isCargandoDatos,
    error,
    agregarDeposito,
    modificarDeposito,
    eliminarDeposito,
  };
};
