import type { Movie } from "../types/Movie";
import { TMDB_BASE_URL, TMDB_LANGUAGE } from "./tmdb";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMoviesDetail = async (
    movieId: string
):Promise<Movie> => {
    const res = await fetch(
        `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TOKEN}&language=${TMDB_LANGUAGE}`
    );

    if (!res.ok) {
        throw new Error("映画詳細の取得に失敗しました");
    }

    const data = await res.json();
    return data;
}