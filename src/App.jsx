import React from 'react'
import './App.css'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div className='theme-light'>
        <Sidebar/>
        <div className="main-content">
          <Navbar/>
          <Hero/>
          <About/>
        </div>
    </div>
  )
}

export default App