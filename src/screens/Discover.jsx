import React from 'react'
import NavBar from '../components/NavBar'
import { MOVIES } from '../movies' //importing all the movie data here
import Movie from '../components/Movie'

const Discover = () => {
  return (
    < div className="Discover">
      <NavBar />
      <div className='Discover-movies'>
        {/* in a fullstack application, would get products from API requests; here, we are getting it through a JS file
          * "looping" through each elements in our MOVIES array
              * essentially like an enhanced for loop
              * for each movie object in the array MOVIES, return a Movie component that holds movie object's data
          */}
        {MOVIES.map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
        {/**
          * when returning an array of elements, each element needs to have a unique key
          * use each Movie's data property to hold each of the movies' data */}
      </div>
    </div>
  )
}

export default Discover