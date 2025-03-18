import { Routes, Route, useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const movie = getMovieById(movieId);
  return (
    <div>
        <h2>Movie - {movie} - {movieId}</h2>
      {/* <Routes>
      <Route path="/movies/:movieId/cast" element={<MovieCast />} />
      <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
    </Routes>   */}
    </div>
    
  );
}
