import { Link } from 'react-router-dom';

const SearchMoviesItem = ({ data: { id, title, poster_path } }) => {
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div>
      <Link to={`/movies/${id}`} state={{ from: location.pathname }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          width={200}
        />
        {title}
      </Link>
    </div>
  );
};

export default SearchMoviesItem;
