const MovieCastItem = ({
  data: { name, original_name, profile_path, character },
}) => {
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div>
      <h4>{original_name}</h4>
      <p>
        Character: {character}
        <br />
        Name: {name}
      </p>
      {
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : defaultImg
          }
          alt={name}
          width={100}
        />
      }
    </div>
  );
};

export default MovieCastItem;
