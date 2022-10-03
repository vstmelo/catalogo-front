import { Button } from "components/Button";
import { CardFilmes } from "components/CardFilmes";
import Input from "components/Input";
import Pagination from "components/Pagination";
import { SearchBar } from "components/SearchBar";
import { FilmesContext } from "context/filmesContext";
import { useContext, useState } from "react";
import css from "./styles.module.scss";
export default function Home(): JSX.Element {
  const { filmes, numberPages, filter, setFilter } = useContext(FilmesContext);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <section>
        {filmes.length === 0 ? (
          <p>Nenhum filme encontrado !</p>
        ) : (
          <>
            <section className={css.box}>
              <div>
                <Input
                  placeholder="Search by tittle"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div>
                <SearchBar />
              </div>
            </section>

            {search.length > 0
              ? filmes
                  .filter((data) => {
                    if (search === "" || search === undefined) {
                      return data;
                    } else if (
                      data.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return data;
                    }
                  })
                  .map((data, i) => (
                    <section className={css.container}>
                      <CardFilmes key={i} data={data} />
                    </section>
                  ))
              : filmes.map((item, i: number) => (
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
