import type { Movie } from '../types/Movie';

type Props = {
    movie: Movie;
};

const MovieCard = ({movie}:Props) => {
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

            <h3>{movie.title}</h3>
        </div>
    );
};

export default MovieCard;