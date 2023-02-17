import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home.js';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

export const App = () => {
  const Movies = lazy(() =>
    import('../../pages/Movies/Movies').then(module => ({
      ...module,
      default: module.Movies,
    }))
  );
  const MovieDetails = lazy(() =>
    import('../../pages/MovieDetails/MovieDetails').then(module => ({
      ...module,
      default: module.MovieDetails,
    }))
  );

  const Cast = lazy(() =>
    import('../Cast/Cast').then(module => ({ ...module, default: module.Cast }))
  );
  const Reviews = lazy(() =>
    import('../Reviews/Reviews').then(module => ({
      ...module,
      default: module.Reviews,
    }))
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
