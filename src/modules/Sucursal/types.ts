export interface Sucursal {
  id: number;
  nombre: string;
  localidadId: number;
  provinciaId: number;
}

export interface CreateSucursal {
  nombre: string;
  localidadId: number;
  provinciaId: number;
}

