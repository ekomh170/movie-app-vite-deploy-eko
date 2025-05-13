import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';
import AddMovieForm from '../components/Movies/AddMovieForm';
import { useState } from 'react';
import data from '../utils/constants/data';
import Counter from '../components/Counter';

function Home() {
    const [movies, setMovies] = useState(data);
    return (
        <>
            <Navbar />
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <Counter />
            <AddMovieForm movies={movies} setMovies={setMovies} />
            <Footer />
        </>
    );
}

export default Home;
