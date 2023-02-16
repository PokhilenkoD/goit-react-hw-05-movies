import {
  Box,
  Genres,
  GenresTitle,
  Overview,
  OverviewTitle,
  Score,
  Title,
} from './FilmCard.styled';

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
          width="400px"
          height="450px"
        />
      </div>
      <div>
        <Title>
          {original_title} ({new Date(release_date).getFullYear()})
        </Title>
        <Score>User Score: {Math.round(vote_average * 10)}%</Score>
        <OverviewTitle>Overview</OverviewTitle>
        <Overview>{overview}</Overview>
        <GenresTitle>Genres</GenresTitle>
        <Genres>{genres && genres.map(genre => `${genre.name} `)}</Genres>
      </div>
    </Box>
  );
};
