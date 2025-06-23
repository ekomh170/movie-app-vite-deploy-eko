import StyledMovie from "./Movie.styled";
import Image from "../UI/Image/Image";
import { Link } from "react-router-dom";

/**
 * Komponen Movie
 * Menampilkan satu item film (poster, judul, tahun) dalam daftar
 *
 * Props:
 * - movie: object data film (TMDB)
 */
function Movie(props) {
    const { movie } = props;

    // Siapkan URL gambar poster dari TMDB
    const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    // Ambil tahun rilis (fallback ke release_date jika year tidak ada)
    const year_release_date = movie.year || movie.release_date;

    return (
        <StyledMovie>
            {/* Gambar poster film, dengan efek rounded & shadow */}
            <Image
                src={movie.poster || tmdbImage}
                alt={movie.title}
                $rounded
                $shadow
            />
            {/* Judul film, klik untuk ke halaman detail */}
            <Link to={`/detail/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
            {/* Tahun rilis */}
            <p>{year_release_date}</p>
        </StyledMovie>
    );
}

export default Movie;
