import MovieTrendItem from '../MovieTrendItem/MovieTrendItem';
import css from './MovieTrendList.module.css';

const MovieTrendList = ({ data }) => {
  return (
    <ul className={css.movieTrend}>
      {data.map(movie => {
        return (
          <li key={movie.id} className={css.trendItem}>
            <MovieTrendItem movie={movie}></MovieTrendItem>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieTrendList;
