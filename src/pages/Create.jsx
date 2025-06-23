import { Heading } from "../components/UI/Typography/Typography";
import Hero from "../components/Hero/Hero";
import AddMovieForm from "../components/Movies/AddMovieForm";

function CreateMovie({ movies, setMovies }) {
    return (
        <>
            <Hero />
            <Heading as="h2" level={2}>
                Create Movie
            </Heading>
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </>
    );
}

export default CreateMovie;
