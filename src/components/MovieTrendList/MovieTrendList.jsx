import { Link } from 'react-router-dom';

const MovieList = ({ data }) => {
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div>
      <ul>
        {data.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location.pathname }}
              >
                <img
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                      : defaultImg
                  }
                  width={200}
                />
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
