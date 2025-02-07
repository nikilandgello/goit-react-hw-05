import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';

const MovieReviewsList = ({ data }) => {
  return (
    <ul>
      {data.map(review => (
        <li key={review.id}>
          <MovieReviewsItem review={review}></MovieReviewsItem>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;
