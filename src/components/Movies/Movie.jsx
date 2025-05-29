import StyledMovie from './Movie.styled';
import Image from '../UI/Image/Image';

function Movie(props) {
    const { movie } = props;
    return (
        <StyledMovie>
            <Image src={movie.poster} alt={movie.title} $rounded $shadow />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
        </StyledMovie>
    );
}

export default Movie;
