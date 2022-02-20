import { createContext, useReducer } from "react"
import MovieDBReducer from "./MovieDBReducer"

const MovieDBContext = createContext()

export const MovieDBProvider = ({children}) => {

  const initialState = {
    movies: [],
    movie: {},
    actors: [],
    isLoading: false,
    isSubmitted: false
  }

  const [state, dispatch] = useReducer(MovieDBReducer, initialState)

  return (
    <MovieDBContext.Provider value={{...state, dispatch}}>
      {children}
    </MovieDBContext.Provider>
  )
}

export default MovieDBContext