const MovieReviewsItem = ({
  review: {
    author,
    content,
    author_details: { rating },
  },
}) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>Rating: {rating}</p>
      <p>{content}</p>
    </div>
  );
};

export default MovieReviewsItem;
