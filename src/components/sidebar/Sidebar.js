
import {FaHouseDamage,FaAddressCard,FaRegFile,FaBriefcase,FaBlog,FaIdCardAlt} from 'react-icons/fa'
import React from 'react'
import './sidebar.css'
import LogoImg from '../../assets/img/mylogo.png'

const Sidebar = () => {
  return (
    <div className='sidebar-left' id='home'>
        <div className="scroll-bar">
          <div className="sidebar-top">
            <div className="sidebar-logo">
              <a href="http://"><img src={LogoImg} alt="akap azmon" className='my-logo' /></a>
            </div>
          </div>
          <ul className="sidebar-nav nav-menu">
            <li>
              <a href="#home" className="sidebar-nav-link"><FaHouseDamage className='sidebar-icon'/></a>
            </li>
            <li>
              <a href="#about" className="sidebar-nav-link"><FaAddressCard className='sidebar-icon'/></a>
            </li>
            <li>
              <a href="#projects" className="sidebar-nav-link"><FaRegFile className='sidebar-icon'/></a>
            </li>
            <li>
              <a href="#expiriences" className="sidebar-nav-link"><FaBriefcase className='sidebar-icon'/></a>
            </li>
            <li>
              <a href="#blog" className="sidebar-nav-link"><FaBlog className='sidebar-icon'/></a>
            </li>
            <li>
              <a href="#contact" className="sidebar-nav-link"><FaIdCardAlt className='sidebar-icon'/></a>
            </li>
          </ul>
          
        </div>


    </div>
  )
}

export default Sidebar