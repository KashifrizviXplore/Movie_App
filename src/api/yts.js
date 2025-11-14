import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";

export const getMovies = async (query = "", genre = "", page = 1) => {
  const res = await axios.get(`${BASE_URL}list_movies.json`, {
    params: {
      query_term: query,
      genre: genre,
      page: page,
      limit: 20, // optional
    },
  });

  return {
    movies: res.data.data.movies || [],
    total: res.data.data.movie_count,
    limit: res.data.data.limit,
  };
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}movie_details.json`, {
    params: { movie_id: id },
  });
  return res.data.data.movie;
};
