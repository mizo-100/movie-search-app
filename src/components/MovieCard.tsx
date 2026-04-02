import type { Movie } from '../types/Movie';

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <div className="card">
            {movie.poster_path?(
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className="no-image">No Image</div>
            )}
          
            <div className="card-content">
                <h3>{movie.title.length > 15 ? movie.title.substring(0, 15) + "..." : movie.title}</h3>               
            </div>
        </div>
    );
};

export default MovieCard;