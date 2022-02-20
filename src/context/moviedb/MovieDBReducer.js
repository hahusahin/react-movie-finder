import {
  ACTION_GET_MOVIES, ACTION_SET_ISLOADING, ACTION_GET_MOVIE_DETAILS,
} from "../../config"

const MovieDBReducer = (state, action) => {
  switch (action.type) {
    case ACTION_GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      }
    case ACTION_SET_ISLOADING:
      return {
        ...state,
        isLoading: true,
        isSubmitted: true
      }
    case ACTION_GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload.movie,
        actors: action.payload.actors,
        isLoading: false,
      }
    default:
      return state
  }
}

export default MovieDBReducer