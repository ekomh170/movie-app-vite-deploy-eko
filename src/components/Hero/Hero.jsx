// Import hook React dan styled-components
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button/Button";
import axios from "axios";
import { ENDPOINTS } from "../../utils/constants/endpoints";

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
    const [movie, setMovie] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchTrendingMovie() {
            const response = await axios(
                `https://api.themoviedb.org/3${ENDPOINTS.TRENDING}`
            );
            const firstMovie = response.data.results[0];
            return firstMovie;
        }

        async function fetchDetailMovie() {
            const trendingMovie = await fetchTrendingMovie();
            const id = trendingMovie.id;
            const response = await axios(
                `https://api.themoviedb.org/3${ENDPOINTS.DETAIL(id)}`
            );
            setMovie(response.data);
        }

        fetchDetailMovie();
    }, []);

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
                    onClick={() => navigate("/now-playing")}>
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
