import React from 'react';
import '../../styles/MovieItem.css'

function MovieItem({ movie, onMovieSelect }) {
  const backgroundImageUrl = `url('../../img/ep${movie.episode_id}.jpeg')`;


  return (
    <div style={{backgroundImage: backgroundImageUrl}} 
      className='movieItem' 
      key={movie.episode_id} 
      onClick={() => onMovieSelect(movie)}
    >
    
      <h4>{movie.title}</h4> 
    </div>
  );
}

export default MovieItem;