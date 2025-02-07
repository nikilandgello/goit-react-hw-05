import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import { searchMovies } from '../../services/api';
import SearchMoviesList from '../../components/SearchMoviesList/SearchMoviesList';

const MoviesPage = () => {
  const [dataMovies, setDataMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(query);
        setDataMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [query]);

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  const handleSubmit = newQuery => {
    if (query == newQuery) return;
    updateSearchParams('query', newQuery);
    setDataMovies([]);
  };

  return (
    <main>
      <SearchBox handleSubmit={handleSubmit}></SearchBox>
      <SearchMoviesList data={dataMovies}></SearchMoviesList>
    </main>
  );
};

export default MoviesPage;
