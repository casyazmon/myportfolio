import React from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className="navbar-info">
          <p className="phone-number">+237 676-096-187</p>
          <p className="navbar-email">info@akapazmon.com</p>
        </div>
        <div className="nav-logo">AKAP</div>
        <div className="nav-toggle"><GiHamburgerMenu className='nav-toggle-icon'/></div>
        <div className="navbar-switch">
          <span className="navbar-fr">FR</span>
          <span className="navbar-eng">ENG</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar