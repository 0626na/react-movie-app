import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import Movie from "../components/Movie";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description_intro}</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;
