import styled from "styled-components";
import Button from "../components/UI/Button/Button";

// Styled Component untuk Detail Movie (menggunakan style responsif)
const StyledDetailMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
    }

    h2 {
        font-size: 2.44rem;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    h3 {
        font-size: 1.59rem;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.colors.secondary};
    }

    p {
        text-align: justify;
        margin-bottom: 2rem;
        color: #64748b;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        .poster {
            flex-basis: 30%;
        }
        .info {
            flex-basis: 60%;
        }
    }
`;

/**
 * Komponen DetailMovie
 * Menampilkan detail film berdasarkan data movie yang diterima dari parent.
 *
 * Props:
 * - movie: object detail film dari TMDB (sudah di-fetch di parent)
 *
 * Fitur:
 * - Menampilkan poster, judul, genre, overview, dan tombol trailer (jika ada)
 * - Fallback jika data tidak lengkap (poster, judul, genre, overview, trailer)
 * - Loading state jika data belum tersedia
 * - Responsive layout (mobile & desktop)
 */
function DetailMovie({ movie }) {
    // Jika data movie belum ada, tampilkan loading
    if (!movie) return <p>Loading...</p>;

    // Cek dan siapkan URL poster (fallback jika tidak ada)
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : "https://via.placeholder.com/300x450?text=No+Image";

    // Ambil dan gabungkan nama genre (fallback jika tidak ada)
    const genres =
        Array.isArray(movie.genres) && movie.genres.length > 0
            ? movie.genres.map((genre) => genre.name).join(", ")
            : "-";

    // Cari trailer YouTube dari data videos (jika ada)
    const trailer = movie.videos?.results?.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
    );
    const trailerUrl = trailer
        ? `https://www.youtube.com/watch?v=${trailer.key}`
        : null;

    return (
        <StyledDetailMovie>
            {/* Poster film */}
            <div className="poster">
                <img src={posterUrl} alt={movie.title || "No Title"} />
            </div>
            {/* Info detail film */}
            <div className="info">
                {/* Judul film */}
                <h2>{movie.title || "-"}</h2>
                {/* Genre film */}
                <h3>{genres}</h3>
                {/* Sinopsis/overview film */}
                <p>{movie.overview || "-"}</p>
                {/* Tombol trailer (jika ada) */}
                {trailerUrl ? (
                    <Button
                        as="a"
                        href={trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        Watch Trailer
                    </Button>
                ) : (
                    <Button disabled variant="secondary">
                        No Trailer
                    </Button>
                )}
            </div>
        </StyledDetailMovie>
    );
}

export default DetailMovie;
