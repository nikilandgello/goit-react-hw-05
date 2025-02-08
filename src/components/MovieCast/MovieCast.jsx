import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import MovieCastList from '../MovieCastList/MovieCastList';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setActors(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.cast}>
      {actors.length > 0 ? (
        <MovieCastList data={actors}></MovieCastList>
      ) : (
        <p>Sorry, nothing found</p>
      )}
    </div>
  );
};

export default MovieCast;
