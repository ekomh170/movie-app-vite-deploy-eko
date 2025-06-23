// Import Heading buat judul, useFetch buat ambil data, Movies buat list film, Hero buat banner atas
import { Heading } from "../components/UI/Typography/Typography";
import { useFetch } from "../hooks/useFetch";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
import { ENDPOINTS } from "../utils/constants/endpoints";

// Komponen NowPlayingMovie: nampilin daftar film "Now Playing" dari TMDB
function NowPlayingMovie() {
    // Fetch data now playing movies pakai custom hook dan endpoint constant
    const { data, loading, error } = useFetch(ENDPOINTS.NOW_PLAYING);

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
                    Now Playing Movies
                </Heading>
            </div>
            {/* Loading, error, dan data */}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && (
                <Movies movies={data.results} title="Now Playing Movies" />
            )}
        </div>
    );
}

export default NowPlayingMovie;
// Struktur & komentar udah dibikin santai biar gampang dibaca temen se-tim :)
