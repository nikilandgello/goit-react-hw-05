import { Link, useLocation } from 'react-router-dom';
import css from './MovieTrendItem.module.css';

const MovieTrendItem = ({ movie }) => {
  const location = useLocation();
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : defaultImg
          }
          width={300}
          className={css.movieImg}
        />
        <div className={css.movieTitle}>{movie.title}</div>
      </Link>
    </>
  );
};

export default MovieTrendItem;
