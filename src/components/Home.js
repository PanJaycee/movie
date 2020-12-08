import React, {useState, useEffect} from 'react';
// config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// API
import API from '../API';

import NoImage from '../images/no_image.jpg';
import {useHomeFetch} from '../hooks/useHomeFetch'

import HeroImage from './HeroImage'

import Grid from '../components/Grid'
import Thumb from '../components/Thumb'

import Spinner from '../components/Spinner'

import SearchBar from '../components/SearchComponent'

import Button from './Button';

const Home = () => {
    const {
      state,
      loading,
      error,
      setSearchTerm,
      searchTerm,
      setIsLoadingMore
    } = useHomeFetch();


    
    if (state.results == undefined) return <div>Something went wrong ...</div>;
  return (

   
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
        <SearchBar setSearchTerm= {setSearchTerm}/>
        <Grid
        header={searchTerm ? 'Search results': 'Poplar movies'}>
        {state.results.map(movie => (
            <Thumb 
            key={movie.id}
            clickable
            image = {
                movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
            }
            movieId = {movie.id}/>
        ))}
            
        </Grid>
        
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (<Button text='Load more...' callback={()=> setIsLoadingMore(true)} />)}


        
      </>)
}


export default Home