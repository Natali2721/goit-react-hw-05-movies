import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Home } from 'Pages/Home/Home';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import { Movies } from 'Pages/Movies/Movies';
import { NotFound } from 'Pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
