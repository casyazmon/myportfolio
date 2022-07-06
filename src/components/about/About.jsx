import React from 'react'
import './about.css'

import MeImg from '../../assets/img/azmon.jpg'
import {FaGithub,FaInstagram,FaTwitterSquare,FaLinkedin} from 'react-icons/fa'

const About = () => {
  return (
    <div className="about-container">
        <div className="about-content" id='about'>
            <div className="about-icons">
                <ul className='about-icons-list'>
                    <li className="about-icon"><FaGithub className='about-social-icon'/></li>
                    <li className="about-icon"><FaInstagram className='about-social-icon'/></li>
                    <li className="about-icon"><FaTwitterSquare className='about-social-icon'/></li>
                    <li className="about-icon"><FaLinkedin className='about-social-icon'/></li>
                    <li className="about-icon"><FaTwitterSquare className='about-social-icon'/></li>
                </ul>
            </div>

            <div className="about-img">
                <img src={MeImg} alt="" />
            </div>

            <div className="about-desc">
                <h3 className="title-header">About Me</h3>
                <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. 
                    I code and create web elements for amazing people around the world. 
                    I like work with new people. New people new Experiences.</p>
                <p>I'm a Freelancer Front-end Developer with over 3 years of experience.
                     I'm from San Francisco. I code and create web elements for amazing people around the world. 
                     I like work with new people. New people new Experiences.</p>
            </div>

            <div className="about-email">
                <a href="mailto:casyazmon@gmail.com" target="_blank" rel="noopener noreferrer">casyazmon@gmail.com</a>
            </div>
            
        </div>
        
    </div>
  )
}

export default About