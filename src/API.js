import axios from "axios"
import { API_URL, API_KEY, SEARCH_URL } from "./config"

const moviedb = axios.create()

// search movies by query string
export const searchMovies = async(query, page) => {
  
  const params = new URLSearchParams({
    query: query,
    page : page
  })
  
  const res = await moviedb.get(`${SEARCH_URL}${params}`)

  const {results} = res.data 

  return results
}

export const fetchMovieDetails = async(movieId) => {

  const [movie, actors] = await Promise.all([
    moviedb.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`),
    moviedb.get(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
  ])
  
  return {movie: movie.data, actors: actors.data.cast}
}