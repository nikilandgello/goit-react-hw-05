import { useEffect, useRef, useState } from 'react';
import { getTrendingMovies } from '../../services/api';
import MovieTrendList from '../../components/MovieTrendList/MovieTrendList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const isFetched = useRef(false);
  console.log(css);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div className={css.movies}>
        <h1 className={css.title}>Best Movies!</h1>
        <MovieTrendList data={movies} />
      </div>
    </main>
  );
};

export default HomePage;
