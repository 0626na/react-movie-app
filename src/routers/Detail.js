import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovie } from "../Api";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const { isLoading, data: movieData } = useQuery("movie", () => getMovie(id));

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.container}>
          <img
            className={style.background_image}
            src={movieData.data.movie.background_image}
            alt={movieData.data.movie.title}
          />
          <div>
            <div className={style.title_container}>
              <img
                src={movieData.data.movie.medium_cover_image}
                alt={movieData.data.movie.title}
              />
              <div>
                <h1>{movieData.data.movie.title}</h1>
                <div className={style.title_subContainer}>
                  <h3>{`rating: ${movieData.data.movie.rating}`}</h3>
                  <h3>{`like:${movieData.data.movie.like_count}`}</h3>
                </div>
              </div>
            </div>
            <p>{movieData.data.movie.description_intro}</p>
            <ul className={style.genresContainer}>
              {movieData.data.movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
