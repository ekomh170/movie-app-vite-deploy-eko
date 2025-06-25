// Import Heading buat judul, useEffect & useState buat fetch data, axios buat HTTP request, Movies buat list film, Hero buat banner atas
import { Heading } from "../components/UI/Typography/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
import { ENDPOINTS } from "../utils/constants/endpoints";

// Komponen TopRatedMovie: nampilin daftar film "Top Rated" dari TMDB
function TopRatedMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch data film top rated dari API pas komponen mount
        async function getTopRatedMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3${ENDPOINTS.TOP_RATED}`
            );
            setMovies(response.data.results);
        }
        getTopRatedMovies();
    }, []);

    return (
        <div className="container">
            {/* Hero sebagai banner atas halaman */}
            <Hero />
            {/* Judul halaman di-center di bawah Hero */}
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
                <Heading
                    style={{
                        color: "#4cbb17",
                        textShadow: "0 2px 8px #e0ffe0",
                    }}>
                    Top Rated Movies
                </Heading>
            </div>
            {/* Tampilkan daftar film pake komponen Movies */}
            <Movies title="Top Rated Movies" movies={movies} />
        </div>
    );
}

export default TopRatedMovie;
// Struktur & komentar udah dibikin santai biar gampang dibaca temen se-tim :)
