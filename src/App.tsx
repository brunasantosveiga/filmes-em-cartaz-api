import { useEffect, useState } from "react";
import { Movie } from "./types/Movie";
import * as c from "./AppStyles";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  }, []);

  // const loadMovies = () => {
  //   setLoading(true);
  //   fetch("https://api.b7web.com.br/cinema/") //requisicao GET
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setMovies(json);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       setMovies([]);
  //       console.error(e);
  //     });
  // };

  const loadMovies = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://api.b7web.com.br/cinema/"); //await=aguardar
      let json = await response.json();
      setLoading(false);
      setMovies(json);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <c.container>
      {loading && <c.header>Carregando...</c.header>}
      {!loading && movies.length > 0 && (
        <>
          <c.header>
            Confira os {movies.length} filmes que estão em cartaz:
          </c.header>
          <c.grid>
            {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} />
                <p>{item.titulo}</p>
              </div>
            ))}
          </c.grid>
        </>
      )}
      {!loading && movies.length === 0 && (
        <c.header>Tente novamente mais tarde!</c.header>
      )}
    </c.container>
  );
};

export default App;
