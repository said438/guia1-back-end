import { useState, useEffect } from "react";
import {
  crearProveedorService,
  eliminarProveedorService,
  modificarProveedorService,
  obtenerProveedoresService,
} from "../Services/proveedorService.tsx";

import type {
  CreateProveedor,
  Proveedor,
} from "../types.ts";

import axios from "axios";

export const useProveedor = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerProveedoresService();
      setProveedores(datos);
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

  async function agregarProveedor(
    nuevoProveedor: CreateProveedor
  ) {
    try {
      await crearProveedorService(nuevoProveedor);
      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al agregar un proveedor.");

      if (axios.isAxiosError(error)) {
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

  async function modificarProveedor(
    proveedorModificado: Proveedor
  ) {
    try {
      await modificarProveedorService(proveedorModificado);
      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al modificar un proveedor.");

      if (axios.isAxiosError(error)) {
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

  async function eliminarProveedor(proveedor: Proveedor) {
    try {
      await eliminarProveedorService(proveedor);
      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al eliminar un proveedor.");

      if (axios.isAxiosError(error)) {
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

  useEffect(() => {
    cargarDatos();
  }, []);

  return {
    proveedores,
    isCargandoDatos,
    error,
    agregarProveedor,
    modificarProveedor,
    eliminarProveedor,
  };
};