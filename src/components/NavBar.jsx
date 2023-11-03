import React from 'react'
import { Link } from 'react-router-dom'
import logoBlue from "../assets/logoBlue.png"

const NavBar = () => {
  return (
    < div className="NavBar">
      <div className='NavBar-img'>
        <img src={logoBlue} alt="WEHack 2023" className="NavBar-logo" />
      </div>
      <div className='NavBar-links'>
        {/* When each Link is clicked, will navigate to the specified path */}
        <Link to="/discover">Discover</Link> 
        <Link to="/track">Track</Link>
        <Link to="/login">Log out</Link>
      </div>
    </div>
  )
}

export default NavBar