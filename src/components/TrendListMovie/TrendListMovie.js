import { getTrendMovies } from 'components/services/API';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const TrendListMovie = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        await getTrendMovies().then(resp => setTrendMovies(resp.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
