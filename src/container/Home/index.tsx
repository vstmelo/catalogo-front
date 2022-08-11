import { getFilmes } from "api/request/getFilmes";
import React from "react";
import css from "./styles.module.scss";
export default function Home(): JSX.Element {
  const [filmes, setFilmes] = React.useState<Array<any>>([]);
  React.useEffect(() => {
    getFilmes().then((res) => {
      setFilmes(res.data);
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

