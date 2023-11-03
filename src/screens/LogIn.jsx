import React, { useState } from 'react'
import logoBlue from "../assets/logoBlue.png"
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
  const navigate = useNavigate(); /* declare here to use useNavigate() later in code */

  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  })

  function handleChange(e) {
    const {name, value} = e.target
    setLogInData(prevLogInData => {
      return {
        ...prevLogInData,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault() /* prevents automatic refreshing */
    console.log(logInData)
    navigate('/discover');
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