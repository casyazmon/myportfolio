import React from 'react'
import './hero.css'
import MyImg from '../../assets/img/woman.jpg'
import WomanImg from '../../assets/img/w1.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-content">
            <div className="hero-info">
                <h6>Hello, My name is</h6>
                <h1 class="font-alt">akap azmon</h1>
                <p className='lead'>Full-stack Developer | UX/UI Designer | Freelancer</p>
                <p className="desc">I design and develop services for customers of all sizes, specializing in 
                creating stylish, modern websites, web services and online stores.</p>
                <div className="btn-bar">
                    <a className="hero-downloadBtn" href="https://">Donwload CV</a>
                </div>
            </div>
            <div className="hero-img">
                <img src={MyImg} alt="akap azmon" />

            </div>
        </div>
    </div>
  )
}

export default Hero