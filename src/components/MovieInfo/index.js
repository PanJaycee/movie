import React from 'react'
import Thumb from '../Thumb'
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config'
import {Wrapper, Text, Content} from './infoStyle'
import NoImage from '../../images/no_image.jpg'

const MovieInfo = ({movie}) => (
    

    <Wrapper  backdrop = {movie.backdrop_path}>
        <Content>
            <Thumb  
            image ={movie.poster_path?
            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:
            NoImage
            }
            
            alt = 'movie thumb'
            />
            <Text>
                
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className= 'rating-director'>
                    <div>
                        <h3>RATING</h3>
                        <div className = 'score'>{movie.vote_average} </div>
                    </div>
                    <div className = 'director'>
                        <h3>DIRECTORS </h3>
                        {/* {movie.directors.map(director => (
                            <p key= {director.credit_id}> {director.name}</p>
                        ))} */}

                        

                    </div>

                </div>
                
            </Text>
        </Content>
    </Wrapper>

)

export default MovieInfo