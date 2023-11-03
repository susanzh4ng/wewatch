import React from 'react'
import NavBar from '../components/NavBar'
import { MOVIES } from '../movies'
import Movie from '../components/Movie'

const Discover = () => {
  return (
    < div className="Discover">
      <NavBar />
      <div className='Discover-title'>
        <h2>WEWatch</h2>
      </div>
      <div className='Discover-movies'>
        {/* in a fullstack application, would get products from API requests
          * "looping" through each elements in our MOVIES array
              * essentially like an enhanced for loop
          * mapping through each movie object and the data that comes with it
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