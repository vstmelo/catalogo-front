import { api } from "api/axios"

export default class DataSource {
    getFilmes = async () => {
        return await api.get('/filmes-locais')
    }
}