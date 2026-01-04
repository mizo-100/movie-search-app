export type Video = {
    id: string;
    key: string;
    name: string;
    site: "YouTube";
    type: "Trailer" | "Teaser" | string;
    //official: boolean;
};