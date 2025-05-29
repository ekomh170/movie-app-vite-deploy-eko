// Import hook React dan styled-components
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button/Button';

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
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

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
        return <HeroWrapper>Loading...</HeroWrapper>;
    }

    // Jika movie sudah ada, tampilkan informasi film
    return (
        <HeroWrapper>
            <HeroLeft>
                {/* Judul film */}
                <HeroTitle>{movie.Title}</HeroTitle>

                {/* Genre film */}
                <HeroGenre>Genre: {movie.Genre}</HeroGenre>

                {/* Deskripsi film */}
                <HeroDesc>{movie.Plot}</HeroDesc>

                {/* Tombol "Watch" (belum ada aksi) */}
                <Button
                    $variant="primary"
                    size="md"
                    onClick={() => navigate('/now-playing')}>
                    Watch
                </Button>
            </HeroLeft>
            <HeroRight>
                {/* Gambar poster film */}
                <HeroImage src={movie.Poster} alt={movie.Title} />
            </HeroRight>
        </HeroWrapper>
    );
}

export default Hero; // Ekspor komponen agar bisa digunakan di file lain
