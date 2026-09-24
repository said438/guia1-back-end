import api from "../../../services/api";
import type {
  CreateProveedor,
  Proveedor,
} from "../types";

const URL_BASE = "/proveedor";

export async function obtenerProveedoresService(): Promise<Proveedor[]> {
  const respuesta = await api.get<Proveedor[]>(URL_BASE);
  return respuesta.data;
}

export async function crearProveedorService(
  nuevoProveedor: CreateProveedor
) {
  await api.post(URL_BASE, nuevoProveedor);
}

export async function modificarProveedorService(
  proveedor: Proveedor
) {
  await api.patch(`${URL_BASE}/${proveedor.id}`, proveedor);
}

export async function eliminarProveedorService(
  proveedor: Proveedor
) {
  await api.delete(`${URL_BASE}/${proveedor.id}`);
}