import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/services/API';

export const Cast = () => {
  const [cast, setCast] = useState({});
  const { homeId } = useParams();

  useEffect(() => {
    const fetchCast = () => {
      try {
        getCast(homeId).then(resp => setCast(resp.cast));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [homeId]);
  return (
    <ul>
      {cast.length &&
        cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                width="100px"
                height="150px"
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.character}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          );
        })}
    </ul>
  );
};
