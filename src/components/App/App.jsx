import { Layout } from 'components/Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Home } from 'pages/Home/Home.js';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
          <Route path="movies/:homeId" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<div>Erorr!</div>} />
      </Routes>
    </>
  );
};
