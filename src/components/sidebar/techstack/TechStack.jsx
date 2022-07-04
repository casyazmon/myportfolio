import React from 'react'
import './tech.css'
import {DiAndroid,DiJavascript1,DiDatabase,DiHtml5,DiWordpress} from 'react-icons/di'

const TechStack = () => {
  return (
    <div className="stack-container">
        <div className="stack-header">
            <h3 className="title-header">Tech Stack.</h3>
        </div>
        <div className="stack-content">
            <div className="stack-card">
                <div className="stack-card-content">
                    <div className="stack-card-img">
                        <DiAndroid className='stack-card-icon'/>
                    </div>
                    <div className="stack-card-info">
                        <h4 className="stack-card-title">Android</h4>
                        <p className="stack-card-desc">Kotlin and Java</p>
                    </div>
                </div>
            </div>
            <div className="stack-card">
                <div className="stack-card-content">
                    <div className="stack-card-img">
                        <DiJavascript1 className='stack-card-icon'/>
                    </div>
                    <div className="stack-card-info">
                        <h4 className="stack-card-title">JavaScript</h4>
                        <p className="stack-card-desc">React, Node.js</p>
                    </div>
                </div>
            </div>
            <div className="stack-card">
                <div className="stack-card-content">
                    <div className="stack-card-img">
                        <DiHtml5 className='stack-card-icon'/>
                    </div>
                    <div className="stack-card-info">
                        <h4 className="stack-card-title">Markup</h4>
                        <p className="stack-card-desc">HTML, CSS, SASS</p>
                    </div>
                </div>
            </div>
            <div className="stack-card">
                <div className="stack-card-content">
                    <div className="stack-card-img">
                        <DiDatabase className='stack-card-icon'/>
                    </div>
                    <div className="stack-card-info">
                        <h4 className="stack-card-title">Databases</h4>
                        <p className="stack-card-desc">MongoDB, MySQL, Firebase</p>
                    </div>
                </div>
            </div>
            <div className="stack-card">
                <div className="stack-card-content">
                    <div className="stack-card-img">
                        <DiWordpress className='stack-card-icon'/>
                    </div>
                    <div className="stack-card-info">
                        <h4 className="stack-card-title">Wordpress</h4>
                        <p className="stack-card-desc">Woocommerce, Shopify</p>
                    </div>
                </div>
            </div>
            
            

        </div>
    </div>
  )
}

export default TechStack