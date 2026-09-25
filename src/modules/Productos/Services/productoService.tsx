import api from "../../../services/api";
import type {
  CreateProducto,
  Producto,
  UpdateProducto,
} from "../types";

const URL_BASE = "/producto";

export async function obtenerProductosService(): Promise<Producto[]> {
  const respuesta = await api.get<Producto[]>(URL_BASE);
  console.log(respuesta.data);
  
  return respuesta.data;
}

export async function crearProductoService(
  nuevoProducto: CreateProducto
) {
  await api.post(URL_BASE, nuevoProducto);
}

export async function modificarProductoService(
  producto: UpdateProducto
) {
  await api.patch(`${URL_BASE}/${producto.id}`, producto);
}

export async function eliminarProductoService(
  producto: Producto
) {
  await api.delete(`${URL_BASE}/${producto.id}`);
}
