export interface Deposito {
  id: number;
  codigo: string;
  nombre: string;
  localidadId: number;
  provinciaId: number;
}

export interface CreateDeposito {
  codigo: string;
  nombre: string;
  localidadId: number;
  provinciaId: number;
}
