
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieDarta from './components/MovieDarta';
import Menu from './components/Menu';
import AddMovie from './components/AddMovie';
import Rating from './components/Rating';



function App(){
const[movies,setMovies]=React.useState(MovieDarta)
const[search,setSearch]=React.useState("")

const Add=(newMovie)=>{
  setMovies(
    [...movies,newMovie]
  )
}
const[rate,setRate]=React.useState(1)
return(
  <div className="App">
    <Menu setSearch={setSearch}/>
    <AddMovie Add={Add}/>
    <Rating setRate={setRate} rate={rate}/>
    <MovieList  movies={movies.filter(el=>el.Title.toUpperCase().trim().includes(search.toUpperCase().trim()) && el.rate>=rate)}  />
  </div>
);
}
export default App;
 
