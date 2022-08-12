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
            console.log("primeira página: " + pagina);
          }

          switch (pagina) {
            case props.paginaAtual:
              selectedClass = "selectedPage";
              break;
            case props.paginaAtual - 1:
              console.log("pagina anterior: " + pagina);
              break;
            case props.paginaAtual + 1:
              console.log("pagina sucessora: " + pagina);
              break;
            case props.quantidadePaginas:
              console.log("última página: " + pagina);
              break;
            default:
              break;
          }

          return (
            <li
              className={selectedClass}
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
