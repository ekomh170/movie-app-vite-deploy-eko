import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailMovie from "./DetailMovie"; // Komponen untuk menampilkan detail film
import Movies from "../components/Movies/Movies"; // Komponen untuk menampilkan daftar rekomendasi film

/**
 * Halaman Detail
 * Menampilkan detail film dan rekomendasi berdasarkan id dari URL
 */
function Detail() {
    // Ambil id film dari parameter URL (TMDB ID numerik)
    const { id } = useParams();
    // State untuk detail film
    const [movie, setMovie] = useState(null);
    // State untuk daftar film rekomendasi
    const [movies, setMovies] = useState([]);
    // State untuk error handling
    const [error, setError] = useState(null);

    // Ambil detail film setiap id berubah
    useEffect(() => {
        // Async function untuk fetch detail film
        async function getDetailMovie() {
            setError(null); // Reset error
            setMovie(null); // Reset data movie
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                // Tambahkan videos agar trailer bisa diakses
                const params = `?api_key=${API_KEY}&append_to_response=videos`;
                const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
                const response = await axios.get(URL);
                setMovie(response.data); // Simpan data movie ke state
            } catch {
                setError("Movie not found"); // Tampilkan error jika gagal fetch
            }
        }
        getDetailMovie();
    }, [id]); // Dependency: id (fetch ulang jika id berubah)

    // Ambil rekomendasi film setiap id berubah
    useEffect(() => {
        // Async function untuk fetch rekomendasi
        async function getRecommendationMovies() {
            setMovies([]); // Reset data rekomendasi
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                const params = `?api_key=${API_KEY}`;
                const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations${params}`;
                const response = await axios.get(URL);
                setMovies(response.data.results); // Simpan data rekomendasi ke state
            } catch {
                // Optional: bisa tambahkan error handling jika perlu
            }
        }
        getRecommendationMovies();
    }, [id]); // Dependency: id (fetch ulang jika id berubah)

    // Jika error, tampilkan pesan error
    if (error) return <p>{error}</p>;

    // Render detail movie dan rekomendasi
    return (
        <>
            <DetailMovie movie={movie} />
            <Movies movies={movies} />
        </>
    );
}

export default Detail;
