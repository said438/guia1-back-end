export type RolUsuario = "Administracion" | "Vendedor";

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  nombreUsuario: string;
  rol: RolUsuario;
  sucursalId: number;
}

export interface CreateUsuario {
  nombre: string;
  apellido: string;
  dni: string;
  nombreUsuario: string;
  rol: RolUsuario;
  sucursalId: number;
}

