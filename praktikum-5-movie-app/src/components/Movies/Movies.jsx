import styles from './Movies.module.css';
import Movie from './Movie';

export default function Movies(props) {
    const { movies, setMovies } = props;

    function handleClick(e) {
        e.preventDefault();

        const movie = {}; // Anda mungkin ingin menambahkan properti ke objek movie ini
        setMovies([...movies, movie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                    type="submit"
                    onClick={handleClick}
                    className={styles.button}>
                    Add Movie
                </button>
            </section>
        </div>
    );
}
