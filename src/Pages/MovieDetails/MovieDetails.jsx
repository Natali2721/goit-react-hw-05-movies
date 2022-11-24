import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../Api/apiService';
import { useState, useEffect } from 'react';
import {
  Button,
  GenresList,
  InfoBox,
  LinkBack,
  MovieBox,
  MovieInfo,
  Title,
} from './MovieDetails.styled';

import { HiArrowNarrowLeft } from 'react-icons/hi';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);
  return (
    <main>
      <Button type="button">
        <LinkBack to={location.state?.from ?? '/'}>
          <HiArrowNarrowLeft size={16} />
          Go back
        </LinkBack>
      </Button>
      <MovieBox>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading="lazy"
          alt="poster"
        />
        <MovieInfo>
          <Title>{original_title}</Title>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </MovieInfo>
      </MovieBox>
      <InfoBox>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            {' '}
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </InfoBox>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
