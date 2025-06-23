import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Custom hook untuk fetch data dari API
 * @param {string} url - endpoint API (relative, tanpa base URL)
 * @returns {object} { data, loading, error }
 */
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        setLoading(true);
        setError(null);
        setData(null);

        // Gunakan base URL TMDB
        const BASE_URL = "https://api.themoviedb.org/3";
        axios
            .get(BASE_URL + url)
            .then((res) => {
                if (!ignore) setData(res.data);
            })
            .catch(() => {
                if (!ignore) setError("Failed to fetch data");
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, [url]);

    return { data, loading, error };
}
