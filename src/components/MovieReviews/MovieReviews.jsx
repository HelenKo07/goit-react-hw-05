import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { fetchMoviesReviews } from "../../themoviedbApi";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesReviews(movieId);
        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <div className={css.listReviews}>
        {reviews.length ? (
          reviews.map((review) => (
            <div key={review.id} className={css.itemReviews}>
              <h3 className={css.subtitleReviews}>{review.author}</h3>
              <p className={css.textReviews}>{review.content}</p>
            </div>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    </>
  );
}
