import { Cast } from 'components/Cast/Cast';
import { FilmCard } from 'components/FilmCard/FilmCard';
import { Reviews } from 'components/Reviews/Reviews';
import { getFilmCard } from 'components/services/API';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { homeId } = useParams();

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

  return (
    <>
      <button type="button">
        <NavLink to={'/'}>Go back</NavLink>
      </button>
      <FilmCard film={film} />
      <div>
        <Cast />
        <Reviews />
      </div>
    </>
  );
};
