import { useEffect, useRef, useState } from 'react';
import { getTrendingMovies } from '../../services/api';
import MovieTrendList from '../../components/MovieTrendList/MovieTrendList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const isFetched = useRef(false);

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
      <h1>Best Movies!</h1>
      <MovieTrendList data={movies} />
    </main>
  );
};

export default HomePage;
