import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from './../../Api/apiService';
import { CastItem, CastList, Character, Name } from './Cast.styled';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => setCastList(data.cast));
  }, [movieId]);
  return (
    <CastList>
      {castList.map(({ id, name, profile_path, character }) => (
        <CastItem key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
            }
            alt="actor"
            loading="lazy"
            width={120}
            height={180}
          />
          <Name>{name}</Name>
          <Character> Character: {character}</Character>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
