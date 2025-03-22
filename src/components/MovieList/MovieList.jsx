import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const locations = useLocation();

  if (!movies || movies.length === 0) {
    return <p>No movies available at the moment.</p>;
  }

  return (
    <div className={css.movieListContainer}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: locations }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
