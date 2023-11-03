import React from 'react'

const Movie = (props) => {
    const {movieName, year, poster} = props.data; /* getting all the data from props */
  return (
    <div className="Movie">
        <img src={poster} alt="" className="Movie-img" />
        <div className='Movie-desc'>
            <span><b>{movieName}</b>&emsp;•&emsp;<i>{year}</i></span>
        </div>
    </div>
  )
}

export default Movie