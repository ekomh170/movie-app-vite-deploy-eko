import { Heading } from "../components/UI/Typography/Typography";
import Hero from "../components/Hero/Hero";
import AddMovieForm from "../components/Movies/AddMovieForm";

function CreateMovie() {
    return (
        <>
            <Hero />
            {/* Judul dipindahkan ke bawah Hero agar konsisten dengan permintaan */}
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
                <Heading
                    style={{
                        color: "#4cbb17",
                        textShadow: "0 2px 8px #e0ffe0",
                    }}>
                    Create Movie
                </Heading>
            </div>
            <AddMovieForm />
        </>
    );
}

export default CreateMovie;
