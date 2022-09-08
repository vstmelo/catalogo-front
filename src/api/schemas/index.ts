import { Dispatch, SetStateAction } from "react";

export interface IFIlmes {
    producer?: string,
    director?: string,
    id?: string,
    movieBanner?: string,
    title?: string,
    description?: string,
}
export interface ISearchFilter {

    numeroRegistros: number;
    paginaAtual: number;
}

export interface IFilmesContext {
    setFilter: Dispatch<SetStateAction<ISearchFilter>>;
    filmes: IFilmes[];
    numberPages: number;
    atualizar: (e: number) => Promise<void>;
    filter: ISearchFilter,
}

export interface IFilmes {
    title: string;
    description: string;
    producer: string;
    director: string;
    id: string;
    movie: string;
}
