import { useState, useEffect } from 'react';
import { obtenerMarcas } from '../Services/marcaService.tsx';
import type { Marca } from '../types.ts';

export const useMarcas = () => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarMarcas = async () => {
      try {
        const data = await obtenerMarcas();
        setMarcas(data);

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ocurrió un error al obtener las marcas.');
        }

      } finally {
        setIsLoading(false);
      }
    };

    cargarMarcas();
  }, []);

  return {
    marcas,
    isLoading,
    error
  };
};