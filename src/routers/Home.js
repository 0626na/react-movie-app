import { useQuery } from "react-query";
import { getMovies } from "../Api";
import Movie from "../components/Movie";
import style from "./Home.module.css";

function Home() {
  const { isLoading, data: movies } = useQuery("movies", getMovies);

  return (
    <div className={style.container}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.home}>
          {movies.data.movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
