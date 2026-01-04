import type { Video } from "../types/Video";
import { TMDB_BASE_URL,TMDB_LANGUAGE } from "./tmdb";
//import react from '@vitejs/plugin-react';

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchTrailer = async(movieId:string) : Promise<Video[]> => {
    const res = await fetch(
        `${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${TOKEN}&language=${TMDB_LANGUAGE}`
    );

    //if (!res.ok) {
    //    throw new Error("Failed to fetch trailer");
    //}

    //const data : {results:Video[]} = await res.json();
    const data = await res.json();
    return data.results;

    //const trailer = data.results.find(
    //    (v: Video) =>
    //        v.site === "YouTube" && v.type === "Trailer" && v.official === true
    //);

    //return trailer ?? null;
};