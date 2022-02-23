import {
  ACTION_GET_MOVIES, ACTION_SET_ISLOADING, ACTION_GET_MOVIE_DETAILS, ACTION_CLEAR_ALL, 
  ACTION_SEARCH_UTILS, ACTION_SET_FILTERED_MOVIES, ACTION_SET_MOVIE_FILTERS
} from "../../config"

const MovieDBReducer = (state, action) => {
  switch (action.type) {
    case ACTION_GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      }
    case ACTION_SET_FILTERED_MOVIES:
      return {
        ...state,
        filteredMovies: action.payload,
      }
    case ACTION_SET_ISLOADING:
      return {
        ...state,
        isLoading: true
      }
    case ACTION_GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload.movie,
        actors: action.payload.actors,
        isLoading: false,
      }
    case ACTION_SEARCH_UTILS:
      return {
        ...state,
        searchUtils: action.payload
      }
    case ACTION_SET_MOVIE_FILTERS:
      return {
        ...state,
        filters: action.payload
      }
    case ACTION_CLEAR_ALL:
      return {
        ...state,
        movies: [],
        filteredMovies: [],
        movie: {},
        actors: [],
        searchUtils: {query: "", page: 1, genres: []},
        filters: { genre: "all", adult: "all", rating: 0, relDate: 0 },
        isLoading: false,
      }
    default:
      return state
  }
}

export default MovieDBReducer