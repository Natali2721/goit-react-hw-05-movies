import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieLink, MovieList, Title } from './Home.styled';
import { getTrending } from './../Api/apiService';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(data => {
      setTrendMovies(data.results);
    });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieList>
        {trendMovies.map(movie => (
          <div key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </div>
        ))}
      </MovieList>
    </main>
  );
};
