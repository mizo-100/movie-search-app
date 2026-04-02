import type { Video } from "../types/Video";
import { tmdbFetch } from "./tmdb";

export const fetchTrailer = async (movieId: string): Promise<Video[]> => {
    const data = await tmdbFetch(`/movie/${movieId}/videos`);
    return data.results;
};

//予告編用