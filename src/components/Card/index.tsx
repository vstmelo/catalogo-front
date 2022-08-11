import css from "./styles.module.scss";
// interface IProps {
//   title: string;
//   description: string;
// }

export function Card() {
  return (
    <section className={css.cardRecycleWrapper}>
      <div className={css.infosCard}>
        <div className={css.descriptionCard}>
        </div>
      </div>
    </section>
  );
}
