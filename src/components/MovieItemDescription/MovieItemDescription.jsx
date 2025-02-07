const MovieItemDescription = ({ data: { title, overview, poster_path } }) => {
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        width={250}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
};

export default MovieItemDescription;
