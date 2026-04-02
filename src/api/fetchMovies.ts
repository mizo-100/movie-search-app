import type { Movie } from "../types/Movie";
import { tmdbFetch } from "./tmdb";

export const fetchMovies = async (): Promise<Movie[]> => {
    const data = await tmdbFetch("/movie/popular");
    return data.results;
};

//一覧用