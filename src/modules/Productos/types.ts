export type EstadoProducto = "DISPONIBLE" | "ACTIVO" | "INACTIVO";

export interface Producto {
  id: number;
  nombre: string;
  stockTotal: number;
  costoNeto: number;
  utilidadPorcentaje: number;
  precioLista: number;
  descuentoContadoPorcentaje: number;
  precioContado: number;
  estado: EstadoProducto;
  fechaHoraUltimoMovimientoStock: string | null;
  fechaHoraUltimaSincronizacionStock: string | null;
  rutaImagenEnStorage: string | null;
  marcaId: number;
  categoriaNivel2Id: number;
}

export interface CreateProducto {
  nombre: string;
  costoNeto: number;
  utilidadPorcentaje: number;
  descuentoContadoPorcentaje: number;
  rutaImagenEnStorage?: string | null;
  marcaId: number;
  categoriaNivel2Id: number;
}

export interface UpdateProducto {
  id: number;
  nombre: string;
  costoNeto: number;
  utilidadPorcentaje: number;
  descuentoContadoPorcentaje: number;
  rutaImagenEnStorage?: string | null;
  marcaId: number;
  categoriaNivel2Id: number;
}


