import { getSearchMovie } from 'components/services/API';
import { Formik, Field, Form } from 'formik';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

export const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('query');
  const [query, setQuery] = useState(() => (params ? params : ''));
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchSearchMovies = () => {
      try {
        getSearchMovie(query).then(resp => setMovies(resp.results));
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      fetchSearchMovies();
    }
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          setQuery(values.query);
          setSearchParams(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Field type="text" name="query" autoComplete="off" />
          <button type="submi">Search</button>
        </Form>
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
