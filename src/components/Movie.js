import propTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styleMovie from "./Movie.module.css";
function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div className={styleMovie.movieContainer}>
      <img src={coverImg} alt={title} />
      <div className={styleMovie.description}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 233 ? `${summary.slice(0, 233)}...` : summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
  id: propTypes.number.isRequired,
};
export default Movie;
