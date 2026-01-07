import { useEffect,useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import { searchMovies } from "../api/searchMovies";
import type { Movie } from "../types/Movie";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const MovieList = () => {
    const [movies,setMovies] = useState<Movie[]>([]);
    const [keyword,setKeyword] = useState("");

    useEffect(() => {
        fetchMovies().then(setMovies);
    },[]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!keyword.trim()) {
            fetchMovies().then(setMovies);
            return;
        }

        const results = await searchMovies(keyword);
        setMovies(results);
    };

    return (
        <div className="container">
            <h3>🔍映画検索</h3>

            <form onSubmit={handleSearch} className="search-form">
                <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="映画タイトルを入力"
                />

                <button type="submit">検索</button>
            </form>
            <h2>上位映画一覧</h2>

            <div className="movie-grid">
                {movies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/movie/${movie.id}`}
                        style={{textDecoration:"none"}}
                    >
                        <MovieCard movie={movie}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
