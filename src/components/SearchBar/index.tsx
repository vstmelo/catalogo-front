import { Button } from "components/Button";
import { FilmesContext } from "context/filmesContext";
import { useContext } from "react";
import css from "./styles.module.scss";

export function SearchBar(): JSX.Element {
  const { atualizar, numberPages } = useContext(FilmesContext);
  return (
    <>
      <section className={css.btn}>
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
