import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Counter from "../components/Counter";
import { useMovieContext } from "../context/MovieContext";

function Home() {
    const { movies } = useMovieContext();
    return (
        <>
            <Hero />
            <Movies title="Latest Movies" movies={movies} />
            <Counter />
        </>
    );
}

export default Home;
