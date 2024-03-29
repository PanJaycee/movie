import React from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config'
import Grid from './Grid'
import Spinner from './Spinner'
import NoImage from '../images/no_image.jpg'
import {useMovieFetch} from '../hooks/useMovieFetch'
import {useParams} from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'

const Movie = () => {
    const {movieId} = useParams()
    const { state: movie, loading, error} = useMovieFetch(movieId)
    console.log(movie.directors)

    // if (loading) return <Spinner/>
    // if (error) return <div> something went wrong</div>
    if (movie == undefined) return <div>Something went wrong ...</div>;
    

    return (
        <>
        <BreadCrumb movieTitle = {movie.original_title}/>
        <MovieInfo movie = {movie}/>
        

        </>
    )
    }
        


export default Movie