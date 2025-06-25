import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Counter from "../components/Counter";
import { useMoviesContext } from "../context/MoviesContext";

function Home() {
    const { movies } = useMoviesContext();
    return (
        <>
            <Hero />
            <Movies title="Latest Movies" movies={movies} />
            <Counter />
        </>
    );
}

export default Home;
