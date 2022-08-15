import { getFilmesLocais } from "api/request/getFilmesLocais";
import { ISearchFilter } from "api/schemas/interfaces";
import Pagination from "components/Pagination";
import React from "react";
import css from "./styles.module.scss";
export default function Home(): JSX.Element {
  const [filmes, setFilmes] = React.useState<Array<any>>([]);
  const [numberPages, setNumberPages] = React.useState<number>(0);

  const [filter, setFilter] = React.useState<ISearchFilter>({
    paginaAtual: 1,
    numeroRegistros: 10,
  });
  React.useEffect(() => {
    getFilmesLocais(filter.paginaAtual).then((res) => {
        setFilmes(res.data.filmes[0]);
        console.log(res.data.filmes)
      setNumberPages(res.data.filmes[1]);
    });
  }, [filter, filter.paginaAtual]);
  return (
    <>
      <section>
        {filmes.length === 0 ? (
          <p>Nenhum filme encontrado !</p>
        ) : (
          filmes.map((item, i: number) => (
            <>
              <section className={css.container}>
                <div className={css.details}>
                  <p key={i}>Titulo: {item.title}</p>
                  <p key={i}>Diretor: {item.director}</p>
                  <p key={i}>Produtor: {item.producer}</p>
                  <p key={i}>Descrição: {item.description}</p>
                <img className={css.imagem} src={item.movieBanner} alt="banner" />
                </div>
              </section>
            </>
          ))
        )}
      </section>
      <Pagination
        quantidadePaginas={numberPages}
        paginaAtual={filter.paginaAtual}
        onClick={(pagina: number) => {
          const novosFiltros = { ...filter };
          novosFiltros.paginaAtual = pagina;
          setFilter(novosFiltros);
        }}
      />
    </>
  );
}

