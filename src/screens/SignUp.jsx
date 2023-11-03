import React, { useState } from 'react'
import logoBlue from "../assets/logoBlue.png"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate(); /* declare here to use useNavigate() later in code */

  /* setting up state for the sign up form */
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  /**
   * handleChange
   * 
   * event handler for changing the value of an input field
   * Since the form is now a state object, can only be changed with the setSignUpData() function
   * @param e the event object
   * */ 
  function handleChange(e) {
    const {name, value} = e.target //extracting the name and value attributes from the input
    setSignUpData(prevSignUpData => {
      //using a callback approach where it takes the previous state as an argument (prevSignUpData) and returns the new state based on the previous state ...
      return {
        ...prevSignUpData,
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
    //console.log(signUpData) //for debugging purposes
    navigate('/discover'); //after submitting the form, navigate to the Discover page
  }

  return (
    <div className="SignUp">
      <div className="SignUp-div">
        <img src={logoBlue} alt="WEHack 2023" />
        <p className="title">Welcome to WEWatch</p>
        <form onSubmit={handleSubmit}>
          <div class="input-group">
            <label className="label">First name</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your first name"
              name="firstName" /* attributes this input to the SignUpData */
              value={signUpData.firstName} /* input's value is from state */
              onChange={handleChange} /* updating state */
            />
          </div>
          <div class="input-group">
            <label className="label">Last name</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your last name"
              name="lastName" /* attributes this input to the SignUpData */
              value={signUpData.lastName} /* input's value is from state */
              onChange={handleChange} /* updating state */
            />
          </div>
          <div class="input-group">
            <label className="label">Email address</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your email address"
              name="email" /* attributes this input to the SignUpData */
              value={signUpData.email} /* input's value is from state */
              onChange={handleChange} /* updating state */
            />
          </div>
          <div class="input-group">
            <label className="label">Password</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your password"
              name="password" /* attributes this input to the SignUpData */
              value={signUpData.password} /* input's value is from state */
              onChange={handleChange} /* updating state */
            />
          </div>
          <button>Sign up!</button> {/*since button is in a form, automatically of type "submit" */}
        </form>
        <p>Have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  )
}

export default SignUp