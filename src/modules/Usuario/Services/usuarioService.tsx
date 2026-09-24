import api from "../../../services/api";
import type {
  CreateUsuario,
  Usuario,
} from "../types";

const URL_BASE = "/usuario";

export async function obtenerUsuariosService(): Promise<Usuario[]> {
  const respuesta = await api.get<Usuario[]>(URL_BASE);
  return respuesta.data;
}

export async function crearUsuarioService(
  nuevoUsuario: CreateUsuario
) {
  await api.post(URL_BASE, nuevoUsuario);
}

export async function modificarUsuarioService(
  usuario: Usuario
) {
  await api.patch(`${URL_BASE}/${usuario.id}`, usuario);
}

export async function eliminarUsuarioService(
  usuario: Usuario
) {
  await api.delete(`${URL_BASE}/${usuario.id}`);
}







