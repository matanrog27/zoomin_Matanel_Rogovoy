import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import { Col, Row, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';


function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
        console.log ('I get',data)
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return  (
    <div className='movieList'>
      {isLoading ? (
        <Loading message="Loading Movies..." />
      ) : (
        <div className='row'> 
        {
          movies.map(movie => (
            <div className='ItemContainer'>
            <MovieItem className="movieItem"  movie={movie} onMovieSelect={onMovieSelect} key={movie.episode_id} />
            </div>
          ))

        }
        </div>
       
            
        
       
      )}
    </div>
  );


}

export default MovieList;
