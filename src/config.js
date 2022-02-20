const API_URL = "https://api.themoviedb.org/3"
const API_KEY = process.env.REACT_APP_API_KEY

const SEARCH_URL = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&`

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p'
const POSTER_SIZE = 'w500'  // w92, w154, w185, w342, w500, w780, original
const BACKDROP_SIZE = 'w1280' // w92, w154, w185, w342, w500, w780, original

const ACTION_GET_MOVIES = "GET_MOVIES"
const ACTION_SET_ISLOADING = "SET_ISLOADING"
const ACTION_GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS"
const ACTION_CLEAR_ALL = "CLEAR_MOVIES"
const ACTION_LOAD_MORE = "LOAD_MORE"

export {
  API_URL,
  API_KEY,
  SEARCH_URL,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  ACTION_GET_MOVIES,
  ACTION_SET_ISLOADING,
  ACTION_GET_MOVIE_DETAILS,
  ACTION_CLEAR_ALL,
  ACTION_LOAD_MORE
}