import { Heading } from "../components/UI/Typography/Typography";
import { useFetch } from "../hooks/useFetch";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { ENDPOINTS } from "../utils/constants/endpoints";

function PopularMovie() {
    // Fetch data popular movies pakai custom hook dan endpoint constant
    const { data, loading, error } = useFetch(ENDPOINTS.POPULAR);

    return (
        <div className="container">
            <Hero />
            {/* Judul dipindahkan ke bawah Hero agar konsisten dengan permintaan */}
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
                <Heading
                    style={{
                        color: "#4cbb17",
                        textShadow: "0 2px 8px #e0ffe0",
                    }}>
                    Popular Movies
                </Heading>
            </div>
            {/* Loading, error, dan data */}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <Movies movies={data.results} title="Popular Movies" />}
        </div>
    );
}

export default PopularMovie;
