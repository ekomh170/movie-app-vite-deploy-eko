import styles from './Movies.module.css';
import Movie from './Movie';

export default function Movies(props) {
    const { movies } = props;

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
                {/* Add Movie button removed. Now only rendered in Home.jsx if needed */}
            </section>
        </div>
    );
}
