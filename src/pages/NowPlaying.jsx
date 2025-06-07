// Import Heading buat judul, useEffect & useState buat fetch data, axios buat HTTP request, Movies buat list film, Hero buat banner atas
import { Heading } from '../components/UI/Typography/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';

// Komponen NowPlayingMovie: nampilin daftar film "Now Playing" dari TMDB
function NowPlayingMovie() {
    // Ambil API key dari .env
    const API_KEY = import.meta.env.VITE_API_KEY;
    // Endpoint TMDB buat now playing
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    // State buat simpen data film
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch data film now playing dari API pas komponen mount
        async function getNowPlayingMovies() {
            const response = await axios.get(URL);
            setMovies(response.data.results);
        }
        getNowPlayingMovies();
    }, [URL]);

    return (
        <div className="container">
            {/* Hero sebagai banner atas halaman */}
            <Hero />
            {/* Judul halaman di-center di bawah Hero */}
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Heading
                    style={{
                        color: '#4cbb17',
                        textShadow: '0 2px 8px #e0ffe0',
                    }}>
                    Now Playing Movies
                </Heading>
            </div>
            {/* Tampilkan daftar film pake komponen Movies */}
            <Movies movies={movies} />
        </div>
    );
}

export default NowPlayingMovie;
// Struktur & komentar udah dibikin santai biar gampang dibaca temen se-tim :)
