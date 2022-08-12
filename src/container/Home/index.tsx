import { getFilmes } from "api/request/getFilmes";
import { getFilmesLocais } from "api/request/getFilmesLocais";
import { IFIlmes } from "api/schemas/interfaces";
import { Button } from "components/Button";
import React from "react";
import css from "./styles.module.scss";
export default function Home(): JSX.Element {
    const [filmes, setFilmes] = React.useState<Array<IFIlmes>>([]);
  const [numberPages, setNumberPages] = React.useState<number>(0);
    
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
              </section>
            </>
          ))
        )}
      </section>
    </>
  );
}

