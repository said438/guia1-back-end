import { useEffect, useState } from "react";
import {
  crearStockProductoDepositoService,
  eliminarStockProductoDepositoService,
  modificarStockProductoDepositoService,
  obtenerStockProductoDepositoService,
} from "../Services/stockProductoDepositoService.tsx";

import type {
  CreateStockProductoDeposito,
  StockProductoDeposito,
} from "../types.ts";

import axios from "axios";

export const useStockProductoDeposito = () => {
  const [stocks, setStocks] = useState<StockProductoDeposito[]>([]);
  const [isCargandoDatos, setIsCargandoDatos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarDatos() {
    try {
      const datos = await obtenerStockProductoDepositoService();
      setStocks(datos);
    } catch (error) {
      console.log("Ocurrió un error al cargar los datos.");

      if (axios.isAxiosError(error)) {
        setError(
          error.response !== undefined
            ? error.response.data.message
            : error.message
        );
      } else if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsCargandoDatos(false);
    }
  }

  async function agregarStock(
    nuevoStock: CreateStockProductoDeposito
  ) {
    try {
      await crearStockProductoDepositoService(nuevoStock);
      await cargarDatos();
    } catch (error) {
      console.log(
        "Ocurrió un error al agregar el stock del producto en el depósito."
      );

      if (axios.isAxiosError(error)) {
        setError(
          error.response !== undefined
            ? error.response.data.message
            : error.message
        );
      } else if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  async function modificarStock(
    stockModificado: StockProductoDeposito
  ) {
    try {
      await modificarStockProductoDepositoService(stockModificado);
      await cargarDatos();
    } catch (error) {
      console.log(
        "Ocurrió un error al modificar el stock del producto en el depósito."
      );

      if (axios.isAxiosError(error)) {
        setError(
          error.response !== undefined
            ? error.response.data.message
            : error.message
        );
      } else if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  async function eliminarStock(stock: StockProductoDeposito) {
    try {
      await eliminarStockProductoDepositoService(stock);
      await cargarDatos();
    } catch (error) {
      console.log(
        "Ocurrió un error al eliminar el stock del producto en el depósito."
      );

      if (axios.isAxiosError(error)) {
        setError(
          error.response !== undefined
            ? error.response.data.message
            : error.message
        );
      } else if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  useEffect(() => {
    cargarDatos();
  }, []);

  return {
    stocks,
    isCargandoDatos,
    error,
    agregarStock,
    modificarStock,
    eliminarStock,
  };
};

