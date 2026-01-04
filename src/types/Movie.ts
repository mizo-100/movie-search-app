export type Movie = {
    id: number;
    title: string;
    poster_path: string | null;
    overview: string | null;
    vote_average: number;
    release_date: string;
    genres: {id: number; name: string}[];
    production_companies: {id: number; name: string}[];
};
//映画のデータ型