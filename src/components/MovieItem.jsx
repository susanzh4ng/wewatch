import React from 'react'
import { X } from 'phosphor-react'

const MovieItem = (props) => {
  const {id, title} = props.data; /* getting all the data from props */
  return (
    <div className='MovieItem'>
        <p>{title}</p>
        <button className='Track-listButton' onClick={() => props.deleteFunc(id)}><X /></button>
    </div>
  )
}

export default MovieItem