import { createContext, useContext, useState } from "react";
import data from "../utils/constants/data";

// Context untuk state movies dan setMovies
const MovieContext = createContext();

// Provider untuk membungkus aplikasi
export function MovieProvider({ children }) {
    const [movies, setMovies] = useState(data);
    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
}

// Custom hook agar lebih mudah digunakan
export function useMovieContext() {
    return useContext(MovieContext);
}

export default MovieContext;
