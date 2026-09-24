import { useState, useEffect } from "react";
import {
  crearProductoService,
  eliminarProductoService,
  modificarProductoService,
  obtenerProductosService,
} from "../Services/productoService.tsx";

import type {
  CreateProducto,
  Producto,
  UpdateProducto,
} from "../types.ts";

import axios from "axios";

export const useProducto = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerProductosService();
      setProductos(datos);
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

  async function agregarProducto(
    nuevoProducto: CreateProducto
  ) {
    try {
      await crearProductoService(nuevoProducto);
      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al agregar un producto.");

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

  async function modificarProducto(
    productoModificado: UpdateProducto
  ) {
    try {
      await modificarProductoService(productoModificado);
      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al modificar un producto.");

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

  async function eliminarProducto(producto: Producto) {
    try {
      await eliminarProductoService(producto);
      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al eliminar un producto.");

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
    productos,
    isCargandoDatos,
    error,
    agregarProducto,
    modificarProducto,
    eliminarProducto,
  };
};
