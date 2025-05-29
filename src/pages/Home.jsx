import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import AddMovieForm from '../components/Movies/AddMovieForm';
import { useState } from 'react';
import data from '../utils/constants/data';
import Counter from '../components/Counter';
import Button from '../components/Button/Button';

function Home() {
    const [movies, setMovies] = useState(data);
    return (
        <>
            <Hero />
            <Button variant="primary">Lihat</Button>
            <Button variant="secondary" full>
                Lihat
            </Button>
            <Movies movies={movies} setMovies={setMovies} />
            <Counter />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </>
    );
}

export default Home;
