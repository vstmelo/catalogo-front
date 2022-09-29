import { CardFilmes } from "components/CardFilmes";
import Input from "components/Input";
import { FilmesContext } from "context/filmesContext";
import { useContext, useState } from "react";

export default function FieldSearch(): JSX.Element {
  const { filmes } = useContext(FilmesContext);
  const [search, setSearch] = useState("");
  <Input onChange={(e) => setSearch(e.target.value)} />;
  return (
    <div>
      {filmes
        .filter((data) => {
          if (search === "" || search === undefined) {
            return data;
          } else if (data.title.toLowerCase().includes(search.toLowerCase())) {
            return data;
          }
        })
        .map((data, i) => (
            <CardFilmes key={i} data={data} />
        ))}
    </div>
  );
}
