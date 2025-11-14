import React, { useEffect, useState } from "react";
import { getMovies } from "../api/yts";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovies(query, genre, page);

      setMovies(res.movies);

      // calculate total pages
      const pages = Math.ceil(res.total / res.limit);
      setTotalPages(pages);
    };
    fetchData();
  }, [query, genre, page]);

  // Reset to page 1 when search or genre changes
  useEffect(() => {
    setPage(1);
  }, [query, genre]);

  return (
    <div className="p-4 space-y-4">
      <SearchBar onSearch={setQuery} />

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <FilterSidebar onSelectGenre={setGenre} />
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {/* Pagination Component */}
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div> 
  );
};

export default Home;
