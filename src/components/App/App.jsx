import { Layout } from 'components/Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Home } from 'pages/Home/Home.js';
import { Route, Routes } from 'react-router-dom';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
// import { Movies } from 'pages/Movies/Movies';
import { lazy } from 'react';

export const App = () => {
  const Movies = lazy(() =>
    import('../../pages/Movies/Movies').then(module => ({
      ...module,
      default: module.Movies,
    }))
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:homeId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Erorr!</div>} />
    </Routes>
  );
};
