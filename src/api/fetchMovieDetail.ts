import type { Movie } from "../types/Movie";
import { tmdbFetch } from "./tmdb";

export const fetchMoviesDetail = async (movieId: string): Promise<Movie> => {
    return await tmdbFetch(`/movie/${movieId}`);
};

//詳細用