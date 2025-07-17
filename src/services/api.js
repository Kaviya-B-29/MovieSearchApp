const API_KEY = '4892b9f7';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm, type, page) => {
  try {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&type=${type}&page=${page}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Error: "Something went wrong" };
  }
};

export const fetchMovieById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return { Error: "Something went wrong" };
  }
};
