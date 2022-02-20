import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import { MovieDBProvider } from "./context/moviedb/MovieDBContext"
import About from "./pages/About"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <MovieDBProvider>
      <Router>
        <div className="d-flex flex-column vh-100">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/about" element={<About />}/>
              <Route path="/*" element={<NotFound />}/>
            </Routes>
            <Footer />
        </div>          
      </Router>
    </MovieDBProvider>
  )
}

export default App;
