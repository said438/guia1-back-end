import api from '../../../services/api';
import type { CreateMarca, Marca } from '../types';

export async function obtenerMarcas() : Promise<Marca[]> {
    const respuesta = await api.get<Marca[]>(`/marca`);
    return respuesta.data;
}

export async function crearMarca(marca : CreateMarca){
    const respuesta = await api.post(`/marca`, marca);
    return respuesta.data;
}





