import { Button } from "components/Button";
import { FilmesContext } from "context/filmesContext";
import { useContext } from "react";
import css from "./styles.module.scss";

export interface IProps {
    handleOnClickSearch: (e: any) => void;
    setTitleName: (e: any) => void;
}
export function SearchBar(props: IProps): JSX.Element {
  const { atualizar, numberPages } = useContext(FilmesContext);
  return (
    <>
      <section className={css.container}>
        <Button
          onClick={() => {
            atualizar(numberPages);
          }}
        >
          Atualizar
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={props.handleOnClickSearch}
        >
          Consultar
        </Button>
      </section>
    </>
  );
}

