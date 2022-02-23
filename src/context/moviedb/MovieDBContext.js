import { createContext, useReducer } from "react"
import MovieDBReducer from "./MovieDBReducer"

const MovieDBContext = createContext()

export const MovieDBProvider = ({children}) => {

  const initialState = {
    movies: [],
    filteredMovies: [],
    movie: {},
    actors: [],
    searchUtils: {query: "", page: 1, genres: []},
    filters: { genre: "all", adult: "all", rating: 0, relDate: 0 },
    isLoading: false
  }

  const [state, dispatch] = useReducer(MovieDBReducer, initialState)

  return (
    <MovieDBContext.Provider value={{...state, dispatch}}>
      {children}
    </MovieDBContext.Provider>
  )
}

export default MovieDBContext