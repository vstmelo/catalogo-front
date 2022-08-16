import "./style.module.scss";
interface IProps {
  quantidadePaginas: number;
  paginaAtual: number;
  onClick: any;
}

export default function Pagination(props: IProps): JSX.Element {
  const pages: Array<number> = [];

  for (let i: number = 1; i <= props.quantidadePaginas; i++) {
    pages.push(i);
  }

  return (
    <>
      <ul>
        {pages.map((pagina: number) => {
          let selectedClass: string = "";

          if (pagina === pages[0]) {
          }

          switch (pagina) {
            case props.paginaAtual:
              selectedClass = "selectedPage";
              break;
            case props.paginaAtual - 1:
              break;
            case props.paginaAtual + 1:
              break;
            case props.quantidadePaginas:
              break;
            default:
              break;
          }

          return (
            <li
              onClick={(e: any) => {
                props.onClick(pagina);
              }}
            >
              <span>{pagina}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
