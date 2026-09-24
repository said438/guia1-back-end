import api from '../../../services/api';
import type { CreateCategoria, Categoria } from '../types';

export async function obtenerCategoriasService(): Promise<Categoria[]> {
  const respuesta = await api.get<Categoria[]>(`/categoria-nivel1`);
  return respuesta.data;
}

export async function crearCategoriaService(
  nuevaCategoria: CreateCategoria
) {
  await api.post(`/categoria-nivel1`, nuevaCategoria);
}

export async function modificarCategoriaService(
  categoria: Categoria
) {
  await api.patch(`/categoria-nivel1/${categoria.id}`, categoria);
}

export async function eliminarCategoriaService(
  categoria: Categoria
) {
  await api.delete(`/categoria-nivel1/${categoria.id}`);
}






