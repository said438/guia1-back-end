export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  localidadId: number;
  provinciaId: number;
}

export interface CreateCliente {
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  localidadId: number;
  provinciaId: number;
}

