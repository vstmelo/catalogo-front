import { IFIlmes } from "api/schemas";
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
  const [filteredFilms, setFilteredFilmes] = useState<IFIlmes[]>([]);

  const handle = async (e: any) => {
    const filtered = filmes.filter((filme) => {
      return filme.title.toLowerCase().includes(e.toLowerCase());
    });
    setFilteredFilmes(filtered);
  };
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
              <Button onClick={() => handle(search)}> Pesquisar</Button>
              <div>
                <SearchBar />
              </div>
            </section>
            {filteredFilms.length > 0
              ? filteredFilms.map((data, i) => (
                  <section className={css.container}>
                    <CardFilmes key={i} data={data} />
                  </section>
                ))
              : filmes.map((data, i) => (
                  <section className={css.container}>
                    <CardFilmes key={i} data={data} />
                  </section>
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
