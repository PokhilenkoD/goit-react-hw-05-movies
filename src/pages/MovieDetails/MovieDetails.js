import { FilmCard } from 'components/FilmCard/FilmCard';
import { getFilmCard } from 'components/services/API';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { LinkBox } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { homeId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchFilmCard() {
      try {
        await getFilmCard(homeId).then(resp => setFilm(resp));
      } catch (error) {
        console.log(error);
      }
    }

    fetchFilmCard();
  }, [homeId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <button type="button">
        <NavLink to={backLinkHref}>Go back</NavLink>
      </button>
      <FilmCard film={film} />
      <LinkBox>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </ul>
      </LinkBox>
      <Outlet />
    </>
  );
};
