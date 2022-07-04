import React from 'react'
import './projects.css'
import {FiGithub,FiExternalLink} from 'react-icons/fi'
import Project1Img from '../../assets/img/p1.jpg'
import Project2Img from '../../assets/img/p2.jpg'
import Project3Img from '../../assets/img/p3.jpg'

const Projects = () => {
  return (
    <section id='projects'>
        <div className="projects-container">
            <div className="stack-header">
                <h3 className="title-header">Things I've Build.</h3>
            </div>
            <div className="project-section-content">
                <div className="projects-content">
                    <div className="project-img item">
                        <img src={Project1Img} alt="fitness exercise app" />
                    </div>
                    <div className="project-info item">
                        <div className="project-header">
                            <h4 className="project-sub-title">Feature Project</h4>
                            <h3 className="project-title">Fitness Exercise</h3>
                        </div>
                        <div className="project-desc">
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 
                                Available on Visual Studio Marketplace, Package Control, Atom Package Manager, 
                                and npm.
                                Available on Visual Studio Marketplace, Package Control, Atom Package Manager, 
                                and npm.
                            </p>
                        </div>
                        <div className="project-tech-stack">
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Node.js</li>
                                <li>ExerciseDB API</li>
                            </ul>
                        </div>
                        <div className="project-links">
                            <a href="http://github.com/casyazmon"><FiGithub className='project-link-icon'/></a>
                            <a href="http://exercisefitnesshubstore.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className='project-link-icon'/></a>
                        </div>
                    </div>
                </div>

                <div className="projects-content">
                    
                    <div className="project-info item">
                        <div className="project-header">
                            <h4 className="project-sub-title">Feature Project</h4>
                            <h3 className="project-title">Fitness Exercise</h3>
                        </div>
                        <div className="project-desc">
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 
                                Available on Visual Studio Marketplace, Package Control, Atom Package Manager, 
                                and npm.
                            </p>
                        </div>
                        <div className="project-tech-stack">
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Node.js</li>
                                <li>ExerciseDB API</li>
                            </ul>
                        </div>
                        <div className="project-links">
                            <a href="http://github.com/casyazmon"><FiGithub className='project-link-icon'/></a>
                            <a href="http://exercisefitnesshubstore.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className='project-link-icon'/></a>
                        </div>
                    </div>
                    <div className="project-img item">
                        <img src={Project2Img} alt="fitness exercise app" />
                    </div>
                </div>
                <div className="projects-content">
                    <div className="project-img item">
                        <img src={Project3Img} alt="fitness exercise app" />
                    </div>
                    <div className="project-info item">
                        <div className="project-header">
                            <h4 className="project-sub-title">Feature Project</h4>
                            <h3 className="project-title">Fitness Exercise</h3>
                        </div>
                        <div className="project-desc">
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 
                                Available on Visual Studio Marketplace, Package Control, Atom Package Manager, 
                                and npm.
                            </p>
                        </div>
                        <div className="project-tech-stack">
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Node.js</li>
                                <li>ExerciseDB API</li>
                            </ul>
                        </div>
                        <div className="project-links">
                            <a href="http://github.com/casyazmon"><FiGithub className='project-link-icon'/></a>
                            <a href="http://exercisefitnesshubstore.com" target="_blank" rel="noopener noreferrer"><FiExternalLink className='project-link-icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </section>
  )
}

export default Projects