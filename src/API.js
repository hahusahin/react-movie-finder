import axios from "axios"
import { API_URL, API_KEY, SEARCH_URL } from "./config"

const moviedb = axios.create()


export const searchMovies = async(query, page) => {
  
  const params = new URLSearchParams({
    query: query,
    page : page
  })

  const [movies, genres] = await Promise.all([
    moviedb.get(`${SEARCH_URL}${params}`),
    moviedb.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
  ])

  return {movies: movies.data.results, genres: genres.data.genres}
}


export const fetchMovieDetails = async(movieId) => {

  const [movie, actors] = await Promise.all([
    moviedb.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`),
    moviedb.get(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
  ])
  
  return {movie: movie.data, actors: actors.data.cast}
}


export const getGenres = async() => {

  const res = await moviedb.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)

  const {genres} = res.data
  
  return genres
}