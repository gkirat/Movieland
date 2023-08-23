import React,{useEffect,useState} from 'react'
import MovieCard from './MovieCard'
import "./App.css"
import './search.jpg'


const API_URL = 'https://www.omdbapi.com?apikey=89b9866a'

// const movie1  = {
//   "Title": "Gladiator",
//   "Year": "2000",
//   "imdbID": "tt0172495",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
// }


const App = () => {

  const [movies,setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState("")

    const searchMoives = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }


    useEffect(() => {
        searchMoives()
    },[])

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => { 
          const inputSearch = e.target.value;
          setSearchTerm(inputSearch)
        } }></input>
        <img src= 'search.jpg' alt='search' onClick={() => {
          searchMoives(searchTerm)
         }} />  
      </div>
   
      {
  movies?.length > 0 
  ? ( <div className='container'>
    
      {movies.map((movie) => {
       return ( <MovieCard key={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} Type={movie.Type} />)
      })}
      </div>):
    (
      <div className='empty'>
        <h2>No movies found</h2>
      </div>
    )
}
     
    </div>
  )
}

export default App


// 89b9866a




