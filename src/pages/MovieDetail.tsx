import { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";
import type { Movie } from "../types/Movie";
import { TMDB_BASE_URL, TMDB_LANGUAGE } from "../api/tmdb";
import type { Cast } from "../types/Cast";
import type { Video } from "../types/Video";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const MovieDetail = () => {
    const { id } = useParams();
    const [movie,setMovie] = useState<Movie | null>(null);
    const [cast,setCast] = useState<Cast[]>([]);
    const [loading,setLoading] = useState(true);
    const [trailer,setTrailer] = useState<Video | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(
            `${TMDB_BASE_URL}/movie/${id}?api_key=${TOKEN}&language=${TMDB_LANGUAGE}`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                setLoading(false);
            });
    },[id]);


    useEffect(() => {
        if (!id) return;

        fetch(
            `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${TOKEN}&language=${TMDB_LANGUAGE}`
        )
            .then((res) => res.json())
            .then((data) => {
                setCast(data.cast.slice(0,6));
            });
    },[id]);

    
    
    useEffect(() => {
        if (!id) return;


    fetch(
        `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${TOKEN}&language=${TMDB_LANGUAGE}`
    )
            .then((res) => res.json())
            .then((data:{ results: Video[] }) => {
                const trailerVideo = data.results.find(
                    (video) =>
                        video.site === "YouTube" && video.type === "Trailer"
                );
                if (trailerVideo) {
                    setTrailer(trailerVideo);
                }
            });
    },[id]);

    if (loading) return <p>読み込み中．．．</p>;
    if (!movie) return <p>映画が見つかりません</p>;

    return (
        <div className="container">
            <Link to="/">↩  一覧に戻る</Link>

            <div className="detail-layout">

                <div className="detail">
                    {movie.poster_path && (
                        <img
                        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                        alt={movie.title} 
                        />
                    )}
                </div>

                <div className="detail-info">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview || "この作品のあらすじは現在登録されていません"}</p>
                    <p>評価：{movie.vote_average} / 10</p>
                    <p>公開日：{movie.release_date}</p>
                </div>

                <div className="trailer full">
                    {trailer ? (
                        <>
                            <h3>予告編</h3>
                            <iframe
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </>
                    ) : (
                        <p>予告編はありません</p>
                    )}
                </div>

                <div className="cast-section">
                    <h3>キャスト</h3>

                    <div className="cast-list">
                        {cast.map((person) => (
                            <div key={person.id} className="cast-card">
                                {person.profile_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                                        alt={person.name}
                                    />    
                                ) : (
                                    <div className="no-image"> Nn Image</div>
                                )}

                                <p className="cast-name">{person.name}</p>
                                <small className="cast-role">{person.character}</small>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;