import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-white rounded shadow p-2 hover:scale-105 transition">
        <img
          src={movie.medium_cover_image}
          alt={movie.title}
          className="rounded mb-2 w-full"
        />
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm">{movie.genres?.join(", ")}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
