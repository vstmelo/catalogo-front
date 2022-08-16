import { getFilmes } from "api/request/getFilmes";
import { getFilmesLocais } from "api/request/getFilmesLocais";
import { ISearchFilter } from "api/schemas/interfaces";
import { Button } from "components/Button";
import { CardFilmes } from "components/CardFilmes";
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
      console.log(res.data.filmes);
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
              <div className={css.searchbar}>
                <Button
                  onClick={() => {
                    getFilmes();
                  }}
                >
                  Atualizar
                </Button>
              </div>
              <section className={css.container}>
                <CardFilmes key={i} data={item} />
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

