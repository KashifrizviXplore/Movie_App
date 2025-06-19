import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/yts";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    load();
  }, [id]);

  if (!movie) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <img src={movie.large_cover_image} alt={movie.title} className="mb-4" />
      <p>
        <strong>Genres:</strong> {movie.genres?.join(", ")}
      </p>
      <p className="mt-2">{movie.description_full}</p>
    </div>
  );
};

export default MovieDetail;
