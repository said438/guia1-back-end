import { useState, useEffect } from 'react';
import { crearMarcaService, modificarMarcaService, obtenerMarcasService } from '../Services/marcaService.tsx';
import type { CreateMarca, Marca } from '../types.ts';
import axios from 'axios';

export const useMarcas = () => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [isCargandoDatosDeTabla, setIsCargandoDatosDeTabla] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function cargarMarcas(){
    try {
      const data = await obtenerMarcasService();
      setMarcas(data);

    } catch (error) {
      console.log('Ocurrió un error al cargar las marcas.');

      if (axios.isAxiosError(error)) {
        console.log(`Error de Axios: ${error.message}, su codigo es: ${error.code}`);
        setError(error.message)

      }else if(error instanceof Error){
        console.log(`Ocurrio un error: ${error.message}`);
        setError(error.message)
      }
    } finally {
      setIsCargandoDatosDeTabla(false);
    }
  };

  async function agregarMarca(nuevaMarca: CreateMarca){
    try {
      //agregando una nueva marca
      await crearMarcaService(nuevaMarca);
      
      //actualizando la tabla
      await cargarMarcas();

    } catch (error) {
      console.log('Ocurrió un error al agregar una marca.');

      if (axios.isAxiosError(error)) {
        console.log(`Error de Axios: ${error.message}, su codigo es: ${error.code}`);
        setError(error.response !== undefined ? error.response.data.message : error.message)

      } else if(error instanceof Error){
        setError(error.message);
      }
    }
  };

  async function modificarMarca(marcaModificada: Marca){
    try {
      //agregando una nueva marca
      await modificarMarcaService(marcaModificada);
      
      //actualizando la tabla
      await cargarMarcas();

    } catch (error) {
      console.log('Ocurrió un error al modificar una marca.');

      if (axios.isAxiosError(error)) {
        console.log(`Error de Axios: ${error.message}, su codigo es: ${error.code}`);
        setError(error.response !== undefined ? error.response.data.message : error.message)

      } else if(error instanceof Error){
        setError(`Imprimiendo el mensaje del error: ${error.message}`);
        console.log(`Imprimiendo el stack trace del error: ${error.stack}`);
      }
    }
  };

  //Se usa useEffect porque la función no se ejecuta como resultado de una interración del usuario
  useEffect(() => {
    cargarMarcas();
  }, []);

  //Retornamos este objeto para que sus propiedades y metodos puedan ser usados por la vista
  return {
    marcas,
    isCargandoDatosDeTabla,
    error,
    agregarMarca,
    modificarMarca
  };
};