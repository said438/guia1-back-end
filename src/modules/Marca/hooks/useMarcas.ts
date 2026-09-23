import { useState, useEffect } from 'react';
import { crearMarca, obtenerMarcas } from '../Services/marcaService.tsx';
import type { CreateMarca, Marca } from '../types.ts';

export const useMarcas = () => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarMarcas(){
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

  async function agregarMarca(nombre: string){
    try {
      
      const nuevaMarca = {
        nombre: nombre
      }

      //agregando una nueva marca
      await crearMarca(nuevaMarca);
      
      //actualizando la tabla
      await cargarMarcas();

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocurrió un error al agregar la marca.');
      }
    }
  };

  useEffect(() => {
    cargarMarcas();
  }, []);

  return {
    marcas,
    isLoading,
    error,
    agregarMarca // exponiendo la función agregarMarca para que sea usada por la vista
  };
};