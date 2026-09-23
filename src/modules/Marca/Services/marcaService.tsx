import api from '../../../services/api';
import type { CreateMarca, Marca } from '../types';

export async function obtenerMarcasService() : Promise<Marca[]> {
    const respuesta = await api.get<Marca[]>(`/marca`);
    return respuesta.data;
}

export async function crearMarcaService(nuevaMarca : CreateMarca){
    await api.post(`/marca`, nuevaMarca);
}

export async function modificarMarcaService(marcaModificada : Marca){
    await api.patch(`/marca/${marcaModificada.id}`, marcaModificada);
}





