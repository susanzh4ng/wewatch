import React, { useState } from 'react'
import logoBlue from "../assets/logoBlue.png"
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
  const navigate = useNavigate(); /* declare here to use useNavigate() later in code */

  /* setting up state for the log in form */
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  })

  /**
   * handleChange
   * 
   * event handler for changing the value of an input field
   * Since the form is now a state object, can only be changed with the setLogInData() function
   * @param e the event object
   * */ 
  function handleChange(e) {
    const {name, value} = e.target //extracting the name and value attributes from the input
    setLogInData(prevLogInData => {
      //using a callback approach where it takes the previous state as an argument (prevLogInData) and returns the new state based on the previous state ...
      return {
        ...prevLogInData,
        [name]: value //... and includes the property specified by the name with the new value, updating the text in the input
      }
    })
  }

  /**
   * handleSubmit
   * 
   * Handles the form submission event and navigates to the Discover Page
   * @param e the event object
   */
  function handleSubmit(e) {
    e.preventDefault() //prevents automatic refreshing
    //console.log(logInData) //for debugging purposes
    navigate('/discover'); //after submitting the form, navigate to the Discover page
  }

  return (
    <div className="LogIn">
      <div className="LogIn-div">
        <img src={logoBlue} alt="WEHack 2023" />
        <p className="title">Log in to WEWatch</p>
        <form onSubmit={handleSubmit}>
          <div class="input-group">
            <label className="label">Email address</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your email address"
              name="email" /* attributes this input to the LogInData */
              value={logInData.email} /* input's value is from state */
              onChange={handleChange} /* updating state */
            />
          </div>
          <div class="input-group">
            <label className="label">Password</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your password"
              name="password" /* attributes this input to the LogInData */
              value={logInData.password} /* input's value is from state */
              onChange={handleChange} /* updating state */
            />
          </div>
          <button>Log in!</button> {/*since button is in a form, automatically of type "submit" */}
        </form>
        <p>New to WEWatch? <Link to="/">Sign up</Link></p>
      </div>
    </div>
  )
}

export default LogIn