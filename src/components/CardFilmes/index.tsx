import { IFIlmes } from "api/schemas";
import css from "./styles.module.scss";
export function CardFilmes({ data }: { data: IFIlmes }): JSX.Element {
  return (
    <>
      <section className={css.container}>
        <p>Titulo: {data.title}</p>
        <p>Diretor: {data.director}</p>
        <p>Produtor: {data.producer}</p>
        <p>Descrição: {data.description}</p>
        <img className={css.imagem} src={data.movie_banner} alt="banner" />
      </section>
    </>
  );
}
