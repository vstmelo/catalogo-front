import { api } from "api/axios"

export const getFilmes = async () => {
    return await api.get('/films')
}