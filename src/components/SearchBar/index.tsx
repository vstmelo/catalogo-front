import { Button } from "components/Button";
import FieldSearch from "components/FiledSearch";
import { FilmesContext } from "context/filmesContext";
import { useContext } from "react";
import css from "./styles.module.scss";

export function SearchBar(): JSX.Element {
  const { atualizar, numberPages } = useContext(FilmesContext);
  return (
    <>
      <section className={css.container}>
        <FieldSearch />
        <Button
          onClick={() => {
            atualizar(numberPages);
          }}
        >
          Atualizar
        </Button>
      </section>
    </>
  );
}
