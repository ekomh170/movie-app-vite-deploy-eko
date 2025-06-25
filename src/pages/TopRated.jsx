// Import Heading buat judul, useEffect & useState buat fetch data, axios buat HTTP request, Movies buat list film, Hero buat banner atas
import { Heading } from "../components/UI/Typography/Typography";
import { useFetch } from "../hooks/useFetch";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
import { ENDPOINTS } from "../utils/constants/endpoints";
import { useEffect } from "react";
import { useMoviesContext } from "../context/MoviesContext";

// Komponen TopRatedMovie: nampilin daftar film "Top Rated" dari TMDB
function TopRatedMovie() {
    const { data, loading, error } = useFetch(ENDPOINTS.TOP_RATED);
    const { setMovies } = useMoviesContext();

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data, setMovies]);

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
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {/* Tampilkan daftar film pake komponen Movies */}
            <Movies title="Top Rated Movies" />
        </div>
    );
}

export default TopRatedMovie;
// Struktur & komentar udah dibikin santai biar gampang dibaca temen se-tim :)
