import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from './../Api/apiService';
import { useState, useEffect } from 'react';
import {
  Button,
  GenresList,
  LinkBack,
  MovieBox,
  MovieInfo,
  Title,
} from './MovieDetails.styled';

import { MdOutlineArrowBack } from 'react-icons/md';

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
          <MdOutlineArrowBack size={16} />
          Go back
        </LinkBack>
      </Button>
      <MovieBox>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
          }
          width={320}
          height={420}
          loading="lazy"
          alt="poster"
        />
        <MovieInfo>
          <Title>{original_title}</Title>
          <h4>User score: {scoreToFixed}%</h4>
          <h4>Overview</h4>
          <p>{overview} </p>
          <h4>Genres</h4>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </MovieInfo>
      </MovieBox>
    </main>
  );
};

export default MovieDetails;
