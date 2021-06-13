import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieDarta } from "./MovieDarta";

const Trailer = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log(
      "test",
      MovieDarta.find((movie) => movie.id === +match.params.Id)
    );
    setMovie(MovieDarta.find((movie) => movie.id === +match.params.Id));
  }, [match]);

  return (
    <div className="Trailer">
      <h1 style={{color:"red"}}>Movie Trailer</h1>
      <iframe
        src={movie.Trailer}
        title="myMovie"
        width="853"
        height="480"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={{padding:'50px 10px'}}>
      <p>{movie.Description}</p>
      </div>
      
     
      <Link to="/">
        <Button variant="dark">Go Back</Button>
      </Link>
    </div>
  );
};

export default Trailer;