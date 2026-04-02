import { tmdbFetch } from "./tmdb";

export const fetchCast = async (movieId: string) => {
    const data = await tmdbFetch(`/movie/${movieId}/credits`);  
    return data.cast;
};

//キャスト用