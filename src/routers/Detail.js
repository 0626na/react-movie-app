import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

function Detail() {
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setloading(true);
    console.log(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <div className={style.container}>
          <img
            className={style.background_image}
            src={movie.background_image}
            alt={movie.title}
          />
          <div>
            <div className={style.title_container}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <div>
                <h1>{movie.title}</h1>
                <div className={style.title_subContainer}>
                  <h3>{`rating: ${movie.rating}`}</h3>
                  <h3>{`like:${movie.like_count}`}</h3>
                </div>
              </div>
            </div>
            <p>{movie.description_intro}</p>
            <ul className={style.genresContainer}>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Detail;
