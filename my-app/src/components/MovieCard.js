import React from 'react';
import {Button,Card }from 'react-bootstrap';
import { Link } from "react-router-dom";

const MovieCard=({movie})=>{
    return(
        <div className="move">
<Card >
    <Card.Img className="img" variant="top" src={movie.poster} />
    <Card.Body>
    <Card.Title><Link to={`/Trailer/${movie.Id}`}>{movie.Title} </Link></Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <Button variant="primary" href={movie.trailer}>Trailer</Button>
    </Card.Body>
</Card>
        </div>
    )
}
export default MovieCard;