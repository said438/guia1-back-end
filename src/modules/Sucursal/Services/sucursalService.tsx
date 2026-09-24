import api from "../../../services/api";
import type {
  CreateSucursal,
  Sucursal,
} from "../types";

const URL_BASE = "/sucursal";

export async function obtenerSucursalesService(): Promise<Sucursal[]> {
  const respuesta = await api.get<Sucursal[]>(URL_BASE);
  return respuesta.data;
}

export async function crearSucursalService(
  nuevaSucursal: CreateSucursal
) {
  await api.post(URL_BASE, nuevaSucursal);
}

export async function modificarSucursalService(
  sucursal: Sucursal
) {
  await api.patch(`${URL_BASE}/${sucursal.id}`, sucursal);
}

export async function eliminarSucursalService(
  sucursal: Sucursal
) {
  await api.delete(`${URL_BASE}/${sucursal.id}`);
}






