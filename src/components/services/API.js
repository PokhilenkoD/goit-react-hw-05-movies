import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendMovies = async () => {
  const response = await axios.get(
    'trending/movie/day?api_key=ab57a8d74b0df3fdba80a78e42f32d17'
  );
  return response.data;
};

export const getFilmCard = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=ab57a8d74b0df3fdba80a78e42f32d17`
  );
  return response.data;
};
