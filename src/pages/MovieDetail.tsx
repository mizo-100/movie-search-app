import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMoviesDetail } from "../api/fetchMovieDetail";
import { fetchCast } from "../api/fetchCast";
import { fetchTrailer } from "../api/fetchTrailer";
import type { Movie } from "../types/Movie";
import type { Cast } from "../types/Cast";
import type { Video } from "../types/Video";

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>();
    //映画のAPI番号
    const [movie, setMovie] = useState<Movie | null>(null);
    //映画のメイン情報
    const [cast, setCast] = useState<Cast[]>([]);
    //キャスト情報
    const [trailer, setTrailer] = useState<Video | null>(null);
    //予告編情報
    const [loading, setLoading] = useState(true);
    //読み込み中表示

    useEffect(() => {
        const getAllData = async () => {
            if (!id) return;
            
            try {
                setLoading(true);
                // 1. 3つのAPIを同時に叩く（共通化した関数たち）
                const [movieData, castData, videoData] = await Promise.all([
                    fetchMoviesDetail(id),
                    fetchCast(id),
                    fetchTrailer(id)
                ]);

                // 2. データをセットする
                setMovie(movieData);
                setCast(castData.slice(0, 6)); // 上位6人のキャスト

                // 3. 予告編を探す（videoDataそのものが配列なので直接find）
                const trailerVideo = videoData.find(
                    (v: Video) => v.site === "YouTube" && v.type === "Trailer"
                );
                setTrailer(trailerVideo || null);

            } catch (error) {
                console.error("データの取得に失敗しました:", error);
            } finally {
                setLoading(false);
            }
        };

        getAllData();
    }, [id]);

    if (loading) return <div className="loading">読み込み中...</div>;
    if (!movie) return <div className="error">映画が見つかりませんでした</div>;

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
