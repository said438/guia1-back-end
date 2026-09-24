import { useState, useEffect } from "react";
import {
  crearUsuarioService,
  eliminarUsuarioService,
  modificarUsuarioService,
  obtenerUsuariosService,
} from "../Services/usuarioService.tsx";

import type {
  CreateUsuario,
  Usuario,
} from "../types.ts";
import axios from "axios";

export const useUsuario = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerUsuariosService();
      setUsuarios(datos);
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

  async function agregarUsuario(nuevoUsuario: CreateUsuario) {
    try {
      await crearUsuarioService(nuevoUsuario);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al agregar un usuario.");

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

  async function modificarUsuario(usuarioModificado: Usuario) {
    try {
      await modificarUsuarioService(usuarioModificado);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al modificar un usuario.");

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

  async function eliminarUsuario(usuario: Usuario) {
    try {
      await eliminarUsuarioService(usuario);

      await cargarDatos();
    } catch (error) {
      console.log("Ocurrió un error al eliminar un usuario.");

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
    usuarios,
    isCargandoDatos,
    error,
    agregarUsuario,
    modificarUsuario,
    eliminarUsuario,
  };
};

