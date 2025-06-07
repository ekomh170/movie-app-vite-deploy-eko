import { Heading } from '../components/UI/Typography/Typography';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';

function PopularMovie() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    });

    async function getPopularMovies() {
        const response = await axios.get(URL);
        setMovies(response.data.results);
    }

    return (
        <div className="container">
            <Heading>Popular Movies</Heading>
            <Hero />
            <Movies movies={movies} />
        </div>
    );
}

export default PopularMovie;
