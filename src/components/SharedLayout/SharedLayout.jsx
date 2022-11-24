import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SheredLayout.styled';
export const SharedLayout = () => {
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

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
