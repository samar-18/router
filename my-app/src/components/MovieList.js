import React from 'react';
import MovieCard from './MovieCard';
function MovieList({movies}){
return(
<div className="flex-container "> 
{movies.map(movie=><MovieCard movie={movie}/>)}
</div>
)	
}
export default MovieList;







