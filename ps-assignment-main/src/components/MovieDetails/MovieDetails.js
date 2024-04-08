import React from 'react';
import '../../styles/MovieDetails.css'
import { BsHeart,BsHeartFill  } from "react-icons/bs";
import { Container, Row,Col } from 'react-bootstrap';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
  

    if (!movie) return null;
    const backgroundImageUrl = `url('../../img/ep${movie.episode_id}.jpeg')`;
    return (
      
      <div className='movieDetailes' style={{backgroundImage:backgroundImageUrl}}>
      <div className='background'>
        <h2>{movie.title}</h2>
        
        {/* <button onClick={() => onFavoriteToggle(movie)}>  */}
          {!favorites.some(fav => fav.episode_id === movie.episode_id) && 
          <BsHeart
           style={{
            color: 'red',
          }}
          onClick={() => onFavoriteToggle(movie)}
           />
          }
          {favorites.some(fav => fav.episode_id === movie.episode_id) && 
          <BsHeartFill 
          style={{
            color: 'red',
          }}
          onClick={() => onFavoriteToggle(movie)}
           />
          }
        {/* </button> */}
        <p><strong>Episode:</strong> {movie.episode_id}</p>
        </div>
      </div>
      
    );
  }

export default MovieDetails;