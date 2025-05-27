// Import hook React dan CSS module
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Button';

function Hero() {
    // State untuk menyimpan data movie
    const [movie, setMovie] = useState(null);

    // useEffect untuk fetch data saat komponen pertama kali dirender
    useEffect(() => {
        async function fetchMovie() {
            const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590'; // URL API OMDb
            const response = await fetch(url); // fetch data dari API
            const data = await response.json(); // parsing response ke JSON
            setMovie(data); // simpan data movie ke state
        }

        fetchMovie(); // panggil fungsi fetchMovie
    }, []); // dependency kosong: hanya dijalankan sekali saat mount

    // Jika movie belum dimuat, tampilkan loading
    if (!movie) {
        return <div className={styles.container}>Loading...</div>;
    }

    // Jika movie sudah ada, tampilkan informasi film
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    {/* Judul film */}
                    <h2 className={styles.hero__title}>{movie.Title}</h2>

                    {/* Genre film */}
                    <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3>

                    {/* Deskripsi film */}
                    <p className={styles.hero__description}>{movie.Plot}</p>

                    {/* Tombol "Watch" (belum ada aksi) */}
                    <Button variant="primary">Watch</Button>
                    {/* <Button variant="primary" full>
                        Watch
                    </Button> */}
                </div>

                <div className={styles.hero__right}>
                    {/* Gambar poster film */}
                    <img
                        className={styles.hero__image}
                        src={movie.Poster}
                        alt={movie.Title}
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero; // Ekspor komponen agar bisa digunakan di file lain
