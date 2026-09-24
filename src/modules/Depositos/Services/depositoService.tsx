import api from "../../../services/api";
import type {
  CreateDeposito,
  Deposito,
} from "../types";

const URL_BASE = "/deposito";

export async function obtenerDepositosService(): Promise<Deposito[]> {
  const respuesta = await api.get<Deposito[]>(URL_BASE);
  return respuesta.data;
}

export async function crearDepositoService(
  nuevoDeposito: CreateDeposito
) {
  await api.post(URL_BASE, nuevoDeposito);
}

export async function modificarDepositoService(
  deposito: Deposito
) {
  await api.patch(`${URL_BASE}/${deposito.id}`, deposito);
}

export async function eliminarDepositoService(
  deposito: Deposito
) {
  await api.delete(`${URL_BASE}/${deposito.id}`);
}

