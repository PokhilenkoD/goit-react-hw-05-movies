import { FilmCard } from 'components/FilmCard/FilmCard';
import { getFilmCard } from 'components/services/API';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import {
  AddiionalBox,
  BackLink,
  ButtonBack,
  List,
} from './MovieDetails.styled';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { PuffLoader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { homeId } = useParams();
  const location = useLocation();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchFilmCard() {
      try {
        setLoader(prevState => !prevState);
        await getFilmCard(homeId).then(resp => setFilm(resp));
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(prevState => !prevState);
      }
    }

    fetchFilmCard();
  }, [homeId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {loader && <PuffLoader />}
      <ButtonBack type="button">
        <BackLink to={backLinkHref}>
          <IoIosArrowRoundBack size={'15px'} />
          Go back
        </BackLink>
      </ButtonBack>
      <FilmCard film={film} />
      <AddiionalBox>
        <p>Additional information</p>
        <List>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </List>
      </AddiionalBox>
      <Outlet />
    </>
  );
};
