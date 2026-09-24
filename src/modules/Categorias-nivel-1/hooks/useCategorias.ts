import { useState, useEffect } from "react";
import {
  crearCategoriaService,
  eliminarCategoriaService,
  modificarCategoriaService,
  obtenerCategoriasService,
} from "../Services/categoriaService.tsx";
import type { CreateCategoria, Categoria } from "../types.ts";
import axios from "axios";

export const useCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerCategoriasService();
      setCategorias(datos);
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

  async function agregarCategoria(nuevaCategoria: CreateCategoria) {
    try {
      await crearCategoriaService(nuevaCategoria);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al agregar una categoría.");

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

  async function modificarCategoria(categoriaModificada: Categoria) {
    try {
      await modificarCategoriaService(categoriaModificada);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al modificar una categoría.");

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

  async function eliminarCategoria(categoriaModificada: Categoria) {
    try {
      await eliminarCategoriaService(categoriaModificada);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al eliminar una categoría.");

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
    categorias,
    isCargandoDatos,
    error,
    agregarCategoria,
    modificarCategoria,
    eliminarCategoria,
  };
};



