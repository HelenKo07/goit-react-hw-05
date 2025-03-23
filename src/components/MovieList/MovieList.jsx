import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const locations = useLocation();

  if (!movies || movies.length === 0) {
    return <p>No movies available at the moment.</p>;
  }

  return (
    <div className={css.containerMovies}>
      <ul className={css.listMovi}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.itemMovies}>
            <div className={css.containerImgMovies}>
             <img
              className={css.movieImg}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            /> 
            </div>
            <Link to={`/movies/${movie.id}`} state={{ from: locations }} className={css.linkMovies}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
