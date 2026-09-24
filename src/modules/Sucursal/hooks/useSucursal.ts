import { useState, useEffect } from "react";
import {
  crearSucursalService,
  eliminarSucursalService,
  modificarSucursalService,
  obtenerSucursalesService,
} from "../Services/sucursalService.tsx";
import type {
  CreateSucursal,
  Sucursal,
} from "../types.ts";
import axios from "axios";

export const useSucursal = () => {
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerSucursalesService();
      setSucursales(datos);
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

  async function agregarSucursal(
    nuevaSucursal: CreateSucursal
  ) {
    try {
      await crearSucursalService(nuevaSucursal);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al agregar una sucursal.");

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

  async function modificarSucursal(
    sucursalModificada: Sucursal
  ) {
    try {
      await modificarSucursalService(sucursalModificada);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al modificar una sucursal.");

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

  async function eliminarSucursal(
    sucursal: Sucursal
  ) {
    try {
      await eliminarSucursalService(sucursal);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al eliminar una sucursal.");

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
    sucursales,
    isCargandoDatos,
    error,
    agregarSucursal,
    modificarSucursal,
    eliminarSucursal,
  };
};


