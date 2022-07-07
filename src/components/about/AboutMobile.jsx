import React from 'react'
import './about.css'

import MeImg from '../../assets/img/azmon.jpg'

const AboutMobile = () => {
  return (
    <div className="about-mobile" id='about'>
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

        </div>
  )
}

export default AboutMobile