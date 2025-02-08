import SearchMoviesItem from '../SearchMoviesItem/SearchMoviesItem';
import css from './SearchMoviesList.module.css';

const SearchMoviesList = ({ data, currentPage }) => {
  return (
    <ul className={css.searchMoviesList}>
      {data.map(movie => (
        <li key={movie.id} className={css.item}>
          <SearchMoviesItem
            data={movie}
            currentPage={currentPage}
          ></SearchMoviesItem>
        </li>
      ))}
    </ul>
  );
};

export default SearchMoviesList;
