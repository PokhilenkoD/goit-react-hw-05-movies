import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendMovies = async () => {
  const response = await axios.get(
    'trending/movie/week?api_key=ab57a8d74b0df3fdba80a78e42f32d17'
  );
  return response.data;
};

export const getFilmCard = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=ab57a8d74b0df3fdba80a78e42f32d17`
  );
  return response.data;
};

export const getCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=ab57a8d74b0df3fdba80a78e42f32d17`
  );
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=ab57a8d74b0df3fdba80a78e42f32d17`
  );
  return response.data;
};

export const getSearchMovie = async query => {
  const response = await axios.get(
    `search/movie?api_key=ab57a8d74b0df3fdba80a78e42f32d17&query=${query}`
  );
  return response.data;
};
