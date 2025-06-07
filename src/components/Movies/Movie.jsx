import StyledMovie from './Movie.styled';
import Image from '../UI/Image/Image';

function Movie(props) {
    const { movie } = props;

    const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const year = movie.year || movie.release_date;

    return (
        <StyledMovie>
            <Image
                src={movie.poster || tmdbImage}
                alt={movie.title}
                $rounded
                $shadow
            />
            <h3>{movie.title}</h3>
            <p>{year}</p>
        </StyledMovie>
    );
}

export default Movie;
