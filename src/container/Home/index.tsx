import { CardFilmes } from "components/CardFilmes";
import Pagination from "components/Pagination";
import { FilmesContext } from "context/filmesContext";
import { useContext } from "react";
import css from "./styles.module.scss";
export default function Home(): JSX.Element {
  const { filmes, numberPages, filter, setFilter } = useContext(FilmesContext);
  return (
    <>
      <section>
        {filmes.length === 0 ? (
          <p>Nenhum filme encontrado !</p>
        ) : (
          <>
            <div className={css.searchbar}>
              <p> depois faço</p>
            </div>
            {filmes.map((item, i: number) => (
              <>
                <section className={css.container}>
                  <CardFilmes key={i} data={item} />
                </section>
              </>
            ))}
          </>
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

