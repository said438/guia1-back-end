import api from "../../../services/api";
import type {
  CreateCliente,
  Cliente,
} from "../types";

const URL_BASE = "/cliente";

export async function obtenerClientesService(): Promise<Cliente[]> {
  const respuesta = await api.get<Cliente[]>(URL_BASE);
  return respuesta.data;
}

export async function crearClienteService(
  nuevoCliente: CreateCliente
) {
  await api.post(URL_BASE, nuevoCliente);
}

export async function modificarClienteService(
  cliente: Cliente
) {
  await api.patch(`${URL_BASE}/${cliente.id}`, cliente);
}

export async function eliminarClienteService(
  cliente: Cliente
) {
  await api.delete(`${URL_BASE}/${cliente.id}`);
}
