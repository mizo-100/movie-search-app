import type { Movie } from "../types/Movie";
import { TMDB_BASE_URL, TMDB_LANGUAGE } from "./tmdb";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const searchMovies = async(query:string): Promise<Movie[]> => {
    if (!query) return[];

    const res = await fetch (
        `${TMDB_BASE_URL}/search/movie?api_key=${TOKEN}&language=${TMDB_LANGUAGE}&query=${encodeURIComponent(query)}`
    );

    const data = await res.json();
    return data.results;
};