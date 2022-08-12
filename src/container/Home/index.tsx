import { getFilmes } from "api/request/getFilmes";
import { getFilmesLocais } from "api/request/getFilmesLocais";
import { IFIlmes, ISearchFilter } from "api/schemas/interfaces";
import { Button } from "components/Button";
import Pagination from "components/Pagination";
import React from "react";
import css from "./styles.module.scss";
export default function Home(): JSX.Element {
  const [filmes, setFilmes] = React.useState<Array<IFIlmes>>([]);
  const [numberPages, setNumberPages] = React.useState<number>(0);
  const filtro: ISearchFilter = {
    paginaAtual: 1,
    numeroRegistros: 10,
  };
  const [filter, setFilter] = React.useState<ISearchFilter>(filtro);
  React.useEffect(() => {
    getFilmes().then((res) => {
      setFilmes(res.data);
      //   setNumberPages(res.data.pages);
    });
  }, [filmes]);
  return (
    <>
      <section>
        {filmes.length === 0 ? (
          <p>Nenhum filme encontrado !</p>
        ) : (
          filmes.map((item, i) => (
            <>
              <section className={css.container}>
                <div className={css.details}>
                  <p key={i}>Titulo: {item.title}</p>
                  <p key={i}>Diretor: {item.director}</p>
                  <p key={i}>Produtor: {item.producer}</p>
                  <p key={i}>Descrição: {item.description}</p>
                </div>
                <Pagination
                  quantidadePaginas={numberPages}
                  paginaAtual={filter.paginaAtual}
                  onClick={(pagina: number) => {
                    const novosFiltros = { ...filter };
                    novosFiltros.paginaAtual = pagina;
                    setFilter(novosFiltros);
                  }}
                />
              </section>
            </>
          ))
        )}
      </section>
    </>
  );
}

