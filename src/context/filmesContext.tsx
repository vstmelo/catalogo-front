import { getFilmes } from "api/request/getFilmes";
import { getFilmesLocais } from "api/request/getFilmesLocais";
import React from "react";
import { IFilmes, IFilmesContext, ISearchFilter } from "api/schemas";

export const FilmesContext = React.createContext<IFilmesContext>(
  {} as IFilmesContext
);

export const FilmesProvider: React.FC<any> = ({ children }) => {
  const [filmes, setFilmes] = React.useState<IFilmes[]>([]);
  const [numberPages, setNumberPages] = React.useState<number>(0);
  const [filter, setFilter] = React.useState<ISearchFilter>({
    paginaAtual: 1,
    numeroRegistros: 5,
  });
  React.useEffect(() => {
    getFilmesLocais(filter.paginaAtual).then((res) => {
      setFilmes(res.data.filmes[0]);
      setNumberPages(res.data.filmes[1]);
    });
  }, []);
  async function atualizar(e: number) {
    const { data } = await getFilmes();
    setFilmes(data);
  }

  return (
    <FilmesContext.Provider
      value={{
        filmes,
        numberPages,
        filter,
        setFilter,
        atualizar,
        
      }}
    >
      {children}
    </FilmesContext.Provider>
  );
};

