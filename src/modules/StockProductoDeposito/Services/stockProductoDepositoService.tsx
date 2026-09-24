import api from "../../../services/api";
import type {
  CreateStockProductoDeposito,
  StockProductoDeposito,
} from "../types";

const URL_BASE = "/stock-producto-deposito";

export async function obtenerStockProductoDepositoService(): Promise<
  StockProductoDeposito[]
> {
  const respuesta = await api.get<StockProductoDeposito[]>(URL_BASE);
  return respuesta.data;
}

export async function crearStockProductoDepositoService(
  nuevoStock: CreateStockProductoDeposito
) {
  await api.post(URL_BASE, nuevoStock);
}

export async function modificarStockProductoDepositoService(
  stockModificado: StockProductoDeposito
) {
  await api.patch(`${URL_BASE}/${stockModificado.id}`, stockModificado);
}

export async function eliminarStockProductoDepositoService(
  stock: StockProductoDeposito
) {
  await api.delete(`${URL_BASE}/${stock.id}`);
}
