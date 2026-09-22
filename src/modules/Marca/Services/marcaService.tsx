import api from '../../../services/api';
import type { Marca } from '../types';

export async function obtenerMarcas() : Promise<Marca[]> {
    const respuesta = await api.get<Marca[]>(`/marca`);
    return respuesta.data;
}

/*
const abortController = new AbortController();

export async function obtenerMarcas() {
    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const respuesta = await api.get(`/marca`);
                console.log(respuesta);
            } catch (error) {
                console.log(error);
            }
        }

        //Operación de limpieza
        return () => {
            abortController.abort();
        };

    }, [])
    
    //implementar una operación de limpieza
}
*/






