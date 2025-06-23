// File ini menyimpan semua endpoint TMDB untuk movie
const API_KEY = import.meta.env.VITE_API_KEY;

export const ENDPOINTS = {
    POPULAR: `/movie/popular?api_key=${API_KEY}`,
    NOW_PLAYING: `/movie/now_playing?api_key=${API_KEY}`,
    TOP_RATED: `/movie/top_rated?api_key=${API_KEY}`,
    DETAIL: (id) => `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    RECOMMENDATIONS: (id) => `/movie/${id}/recommendations?api_key=${API_KEY}`,
};
