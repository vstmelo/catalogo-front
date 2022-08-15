import { api } from "api/axios"

export const getFilmesLocais = async (pagina: number) => {
    
    return await api.get(`/filmes-locais/${pagina}`);

}