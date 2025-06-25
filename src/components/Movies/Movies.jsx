import styles from "./Movies.module.css";
import Movie from "./Movie";
import { useMoviesContext } from "../../context/MoviesContext";

// Komponen Movies menerima props title dan optional movies (untuk rekomendasi)
export default function Movies({ title, movies: moviesProp }) {
    const { movies: moviesContext } = useMoviesContext();
    const movies = moviesProp || moviesContext;
    // Jika data movies kosong, tampilkan pesan fallback
    if (!movies || movies.length === 0) {
        return (
            <p
                style={{
                    textAlign: "center",
                    color: "#64748b",
                    margin: "2rem 0",
                    fontWeight: "bold",
                }}>
                {/* Pesan fallback jika tidak ada rekomendasi */}
                Tidak ada rekomendasi film.
            </p>
        );
    }

    // Render daftar film jika data tersedia
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                {/* Tampilkan judul jika ada title props */}
                {title && (
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "1rem",
                            color: "#334155",
                        }}>
                        {title}
                    </h2>
                )}
                <div className={styles.movie__container}>
                    {/* Mapping setiap movie ke komponen Movie */}
                    {movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
}
// Struktur & komentar sudah dibuat santai agar mudah dibaca tim :)
