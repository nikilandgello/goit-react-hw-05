import SearchMoviesItem from '../SearchMoviesItem/SearchMoviesItem';

const SearchMoviesList = ({ data }) => {
  return (
    <ul>
      {data.map(movie => (
        <li key={movie.id}>
          <SearchMoviesItem data={movie}></SearchMoviesItem>
        </li>
      ))}
    </ul>
  );
};

export default SearchMoviesList;
