import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import MovieReviewsList from '../MovieReviewsList/MovieReviewsList';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setRewviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchDataReviews = async () => {
      if (!movieId) return;

      try {
        const data = await getMovieReviews(movieId);
        setRewviews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <MovieReviewsList data={reviews}></MovieReviewsList>
      ) : (
        <p>We don`t have any rewiews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
