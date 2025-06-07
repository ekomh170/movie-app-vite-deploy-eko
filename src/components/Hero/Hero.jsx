// Import hook React dan styled-components
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button/Button';
import axios from 'axios';

// Styled components
const HeroWrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
`;
const HeroLeft = styled.div`
    flex: 1;
    min-width: 300px;
`;
const HeroRight = styled.div`
    flex: 1;
    min-width: 300px;
    text-align: center;
`;
const HeroTitle = styled.h2`
    font-size: 2.4rem;
    color: #222;
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
`;
const HeroGenre = styled.h3`
    font-size: 1.1rem;
    color: #4cbb17;
    margin-bottom: 1rem;
    font-weight: 500;
`;
const HeroDesc = styled.p`
    font-size: 1.05rem;
    color: #444;
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;
const HeroImage = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
`;

function Hero() {
    // State untuk menyimpan data movie
    const [movie, setMovie] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY; // Ambil API key dari environment variable

        async function fetchTrendingMovie() {
            const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`; // URL API untuk film populer
            const response = await axios(URL); // Fetch data dari API/ Fetch data dari API menggunakan axios
            const firstMovie = response.data.results[0]; // Ambil film pertama dari hasil
            return firstMovie; // Kembalikan film pertama
        }

        async function fetchDetailMovie() {
            const trendingMovie = await fetchTrendingMovie(); // Panggil fungsi untuk mendapatkan film trending
            const id = trendingMovie.id; // Ambil ID film dari data trending

            const params = `?api_key=${API_KEY}&language=en-US`; // Parameter untuk request detail film
            const URL = `https://api.themoviedb.org/3/movie/${id}${params}`; // URL untuk detail film
            const response = await axios(URL); // Fetch detail film menggunakan axios
            setMovie(response.data); // Simpan data film ke state
        }

        fetchDetailMovie(); // Panggil fungsi untuk fetch detail film
        fetchTrendingMovie(); // Panggil fungsi untuk fetch film trending (tidak digunakan di sini, hanya untuk side effect)
    }, []);

    // useEffect untuk fetch data saat komponen pertama kali dirender
    // useEffect(() => {
    //     async function fetchMovie() {
    //         const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setMovie(data);
    //     }

    //     fetchMovie();
    // }, []);

    // Jika movie belum dimuat, tampilkan loading
    if (!movie) {
        return <HeroWrapper>Loading...</HeroWrapper>;
    }

    // Jika movie sudah ada, tampilkan informasi film
    return (
        <HeroWrapper>
            <HeroLeft>
                {/* Judul film */}
                <HeroTitle>{movie.title}</HeroTitle>

                {/* Rilis film */}
                <HeroGenre>Relese Date : {movie.release_date}</HeroGenre>

                {/* Deskripsi film */}
                <HeroDesc>{movie.overview}</HeroDesc>

                {/* Tombol*/}
                <Button
                    $variant="primary"
                    size="md"
                    onClick={() => navigate('/now-playing')}>
                    How to Add Link Trailer?
                </Button>
            </HeroLeft>
            <HeroRight>
                {/* Gambar poster film */}
                <HeroImage
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt="placeholder"
                />
            </HeroRight>
        </HeroWrapper>
    );
}

export default Hero; // Ekspor komponen agar bisa digunakan di file lain
