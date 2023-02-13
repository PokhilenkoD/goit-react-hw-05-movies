import { Box } from './FilmCard.styled';

export const FilmCard = ({
  film: {
    poster_path,
    original_title,
    overview,
    tagline,
    vote_average,
    genres,
    release_date,
  },
}) => {
  return (
    <Box>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={tagline}
          width="200px"
          height="250px"
        />
      </div>
      <div>
        <h1>
          {original_title} ({new Date(release_date).getFullYear()})
        </h1>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres && genres.map(genre => `${genre.name} `)}</p>
      </div>
    </Box>
  );
};
