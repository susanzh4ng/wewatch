import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from "../assets/logoWhite.png"

const NavBar = () => {
  return (
    < div className="NavBar">
      <div className='NavBar-img'>
        <img src={logoWhite} alt="WEHack 2023" className="NavBar-logo" />
      </div>
      <div className='NavBar-links'>
        <Link to="/discover">Discover</Link>
        <Link to="/track">Track</Link>
        <Link to="/login">Log out</Link>
      </div>
    </div>
  )
}

export default NavBar