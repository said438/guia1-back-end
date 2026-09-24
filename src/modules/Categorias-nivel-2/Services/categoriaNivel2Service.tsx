import api from "../../../services/api";
import type {
  CreateCategoriaNivel2,
  CategoriaNivel2,
} from "../types";

const URL_BASE = "/categoria-nivel2";

export async function obtenerCategoriasService(): Promise<CategoriaNivel2[]> {
  const respuesta = await api.get<CategoriaNivel2[]>(URL_BASE);
  return respuesta.data;
}

export async function crearCategoriaService(
  nuevaCategoria: CreateCategoriaNivel2
) {
  await api.post(URL_BASE, nuevaCategoria);
}

export async function modificarCategoriaService(
  categoria: CategoriaNivel2
) {
  await api.patch(`${URL_BASE}/${categoria.id}`, categoria);
}

export async function eliminarCategoriaService(
  categoria: CategoriaNivel2
) {
  await api.delete(`${URL_BASE}/${categoria.id}`);
}






