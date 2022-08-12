import { api } from "api/axios"

export const getFilmesLocais = async () => {
    return await api.get('/filmes-locais')

}