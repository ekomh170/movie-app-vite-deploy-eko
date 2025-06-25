import { createContext, useContext, useState } from "react";
import data from "../utils/constants/data";

// Context untuk state movies dan setMovies
const MoviesContext = createContext({
    movies: [],
    setMovies: () => {},
});

// Provider untuk membungkus aplikasi
export function MoviesProvider({ children }) {
    const [movies, setMovies] = useState(data);
    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    );
}

// Custom hook agar lebih mudah digunakan
export function useMoviesContext() {
    return useContext(MoviesContext);
}

export default MoviesContext;
