import styles from './Movies.module.css';
import Movie from './Movie';

// Komponen Movies nerima props movies (array film) dan langsung nampilin daftar Movie
export default function Movies(props) {
    const { movies } = props;

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                {/* Judulnya udah dihapus, sekarang ngikut dari halaman pemanggil (Popular, Now Playing, Top Rated) */}
                <div className={styles.movie__container}>
                    {movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
                {/* Tombol Add Movie juga udah dihapus, sekarang cuma ada di Home.jsx kalau emang dibutuhin */}
            </section>
        </div>
    );
}
// Struktur & komentar udah dibikin santai biar gampang dibaca temen se-tim :)
