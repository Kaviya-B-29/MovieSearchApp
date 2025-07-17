import { Link } from 'react-router';
import { useFavorites } from '../context/FavoriteContext';

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.jpg'}
        alt={movie.Title}
        className="h-64 w-full object-cover mb-2 rounded"
      />
      <h2 className="font-bold text-lg">{movie.Title}</h2>
      <p className="text-sm text-gray-600">{movie.Year}</p>
      <div className="flex justify-between mt-2">
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-500 hover:underline"
        >
          Details
        </Link>
        <button onClick={() => toggleFavorite(movie)}>
          {isFavorite(movie.imdbID) ? <span className="material-icons text-red-500">favorite</span> : <span className="material-icons-outlined text-gray-400">favorite</span>}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
