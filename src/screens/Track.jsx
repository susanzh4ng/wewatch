import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import MovieItem from '../components/MovieItem'


const Track = () => {
  /**
   * State: a built-in React object that contain data about the component
   * useState returns to us an array of 2 things:
        (1.) the value of our input box; immutable unless changed by setNewMovie()
        (2.) the function to update our state's value; after this is called, the entire component is rerendered
   * useState takes a default value; in our case, our default value is an empty string (empty input box)
   */
  const [newMovie, setNewMovie] = useState("")
  const [movieList, setMovieList] = useState([]) /* default to empty array */

  function handleSubmit(e) {
    e.preventDefault() /* prevents page from refreshing when the form is submitted */
    setMovieList((currentMovies) => {
      return [
        ...movieList,
        {id: crypto.randomUUID(), title: newMovie}
      ]
    })
    /** ... is the JS spread operator, which allows you to copy all of an existing array into another array
     * want to maintain previous movies in the list, so you use the spread operator
     * adding a new value to movieList in {}
     *  */
    setNewMovie("") /* clears out the input box after adding */
  }

  /** deleteItem
     * 
     * taking in all of the current movies in the list, and returning a filtered version that includes all of the current movies
       except he one that is being explicitly deleted by the id
     * @param id the id of the Movie that is being removed from the MovieList array
     *  */
  function deleteItem(id){
    setMovieList(currentMovies => {
      return currentMovies.filter(movie => movie.id !== id) /* if movie's id is not equal to specified id, keep it in movieList*/
    })
  }

  return (
    < div className="Track">
      <NavBar />
      <form className='Track-form' onSubmit={handleSubmit}>
        <label htmlFor="movie" className='Track-label'>Watching Next...</label>
        {/* In React, onChange would fire each time the input value would change;
            this means that the state of newMovie is being updated in response to what is in the input box;
            Getting the value of input & setting it as the new value of newMovie */}
        <input
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
          type="text"
          id="movie"
        />
        <button className='Track-button'>Add</button>
      </form>

      <h3>Watch List</h3>
      <ul className="Track-list">
        {movieList.map(movie => {
          return <MovieItem data={movie} deleteFunc={deleteItem} key={movie.id} /> /* you can also pass functions through props */

          /* Just because you can make it a component does not mean you should, especially in a time-sensitive project like a hackathon
            <div className='MovieItem'>
              <p>{movie.title}</p>
              <button className='Track-listButton' onClick={() => deleteItem(movie.id)}><X /></button>
            </div>*/
        })}
      </ul>
    </div>
  )
}

export default Track