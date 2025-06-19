import React, { useEffect, useState } from "react";
import { getMovies } from "../api/yts";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getMovies(query, genre);
      setMovies(results);
    };
    fetchData();
  }, [query, genre]);

  return (
    <div className="p-4 space-y-4">
      {/* Search Bar at Top */}
      <SearchBar onSearch={setQuery} />

      {/* Flex Layout: Sidebar + Grid */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar Left */}
        <div className="w-full md:w-1/4">
          <FilterSidebar onSelectGenre={setGenre} />
        </div>

        {/* Movies Grid Right */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
