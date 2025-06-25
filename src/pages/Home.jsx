import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Counter from "../components/Counter";

function Home() {
    return (
        <>
            <Hero />
            <Movies title="Latest Movies" />
            <Counter />
        </>
    );
}

export default Home;
