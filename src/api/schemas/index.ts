import { Dispatch, SetStateAction } from "react";

export interface IFIlmes {
    producer?: string,
    director?: string,
    id?: string,
    movie_banner?: string,
    title?: string,
    description?: string,
}
export interface ISearchFilter {

    numeroRegistros: number;
    paginaAtual: number;
}
export interface ISearch {

    setSearch: (e: any) => void;
    handleClickSearch: (e: any) => void;
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
