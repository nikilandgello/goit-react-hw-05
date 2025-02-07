import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
import BackLink from '../../components/BackLink/BackLink';
import MovieItemDescription from '../../components/MovieItemDescription/MovieItemDescription';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
        console.log(location);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId, location]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <BackLink to={backLink.current}>Go Back</BackLink>

      <MovieItemDescription data={movie}></MovieItemDescription>

      <ul>
        <li>
          <NavLink to="cast" className={clsx(buildLinkClass)}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={clsx(buildLinkClass)}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
