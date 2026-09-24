export interface CategoriaNivel2 {
  id: number;
  nombre: string;
  categoriaNivel1Id: number;
}

export interface CreateCategoriaNivel2 {
  nombre: string;
  categoriaNivel1Id: number;
}