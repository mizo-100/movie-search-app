import type { Video } from "../types/Video";
import { TMDB_BASE_URL,TMDB_LANGUAGE } from "./tmdb";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchTrailer = async(movieId:string) : Promise<Video[]> => {
    const res = await fetch(
        `${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${TOKEN}&language=${TMDB_LANGUAGE}`
    );

    const data = await res.json();
    return data.results;
};
