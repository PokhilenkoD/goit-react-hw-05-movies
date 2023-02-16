import { getSearchMovie } from 'components/services/API';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { Input, SearchForm } from './SearchMovies.styled';
import { PuffLoader } from 'components/Loader/Loader';

export const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('query');
  const [query, setQuery] = useState(() => (params ? params : ''));
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchSearchMovies = () => {
      try {
        setLoader(prevState => !prevState);
        getSearchMovie(query).then(resp => setMovies(resp.results));
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(prevState => !prevState);
      }
    };
    if (query) {
      fetchSearchMovies();
    }
  }, [query]);

  return (
    <>
      {loader && <PuffLoader />}
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          setQuery(values.query.trim());
          setSearchParams(values.trim());
          actions.resetForm();
        }}
      >
        <SearchForm>
          <Input type="text" name="query" autoComplete="off" />
          <button type="submi">Search</button>
        </SearchForm>
      </Formik>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
