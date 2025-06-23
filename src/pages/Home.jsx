import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Counter from "../components/Counter";

function Home({ movies }) {
    return (
        <>
            <Hero />
            <Movies title="Latest Movies" movies={movies} />
            <Counter />
        </>
    );
}

export default Home;
