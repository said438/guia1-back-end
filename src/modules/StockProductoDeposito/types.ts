export interface StockProductoDeposito {
  id: number;
  productoId: number;
  depositoId: number;
  stock: number;
}

export interface CreateStockProductoDeposito {
  productoId: number;
  depositoId: number;
  stock: number;
}
