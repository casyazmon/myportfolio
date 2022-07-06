import React from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import OtherProjects from './components/otherprojects/OtherProjects'
import Projects from './components/projects/Projects'
import Sidebar from './components/sidebar/Sidebar'
import TechStack from './components/sidebar/techstack/TechStack'

const App = () => {
  return (
    <div className='theme-light'>
        <Sidebar/>
        <div className="main-content">
          <Navbar/>
          <Hero/>
          <About/>
          <TechStack/>
          <Projects/>
          <OtherProjects/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default App