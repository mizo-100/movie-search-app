import type { Movie } from "../types/Movie";
import { tmdbFetch } from "./tmdb";

export const searchMovies = async(query: string): Promise<Movie[]> => {
    if (!query) return[];

    const data = await tmdbFetch("/search/movie", `&query=${encodeURIComponent(query)}`);
    return data.results;
};

//検索用