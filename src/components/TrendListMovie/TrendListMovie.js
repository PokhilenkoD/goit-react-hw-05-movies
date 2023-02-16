import { getTrendMovies } from 'components/services/API';
import { useEffect, useState } from 'react';
import { Title } from './TrendListMovie.styled';
import { Link } from 'react-router-dom';
import { PuffLoader } from 'components/Loader/Loader';

export const TrendListMovie = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        setLoader(prevState => !prevState);
        await getTrendMovies().then(resp => setTrendMovies(resp.results));
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(prevState => !prevState);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <div>
      {loader && <PuffLoader />}
      <Title>Trending today</Title>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
