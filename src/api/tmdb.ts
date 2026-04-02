export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_LANGUAGE = "en-US";

export const tmdbFetch = async (endpoint: string, extraParams: string = "") => {
    const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
    const url = `${TMDB_BASE_URL}${endpoint}?api_key=${TOKEN}&language=${TMDB_LANGUAGE}${extraParams}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("通信に失敗しました");
    return await res.json();
};