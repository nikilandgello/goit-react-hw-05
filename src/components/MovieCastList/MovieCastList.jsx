import MovieCastItem from '../MovieCastItem/MovieCastItem';

const MovieCastList = ({ data }) => {
  return (
    <div>
      <h3>Actors</h3>
      <ul>
        {data.map(actor => (
          <li key={actor.cast_id}>
            <MovieCastItem data={actor}></MovieCastItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCastList;
