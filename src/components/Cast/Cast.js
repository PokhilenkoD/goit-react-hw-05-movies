import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/services/API';
import { ActorList, ActorName, Character, Image } from './Cast.styled';
import { PuffLoader } from 'components/Loader/Loader';
import Img from '../../Image/Slava.jpg';

export const Cast = () => {
  const [cast, setCast] = useState({});
  const { homeId } = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchCast = () => {
      try {
        setLoader(prevState => !prevState);
        getCast(homeId).then(resp => setCast(resp.cast));
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(prevState => !prevState);
      }
    };
    fetchCast();
  }, [homeId]);
  return (
    <>
      {loader && <PuffLoader />}
      <ActorList>
        {cast.length &&
          cast.map(actor => {
            return (
              <li key={actor.id}>
                {actor.profile_path ? (
                  <Image
                    width="100px"
                    height="150px"
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.character}
                  />
                ) : (
                  <img
                    width="100px"
                    height="150px"
                    src={Img}
                    alt={actor.character}
                  />
                )}
                <ActorName>{actor.name}</ActorName>
                <Character>{actor.character}</Character>
              </li>
            );
          })}
      </ActorList>
    </>
  );
};
