import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="contact-container">
            
            <div className="contact-content">
                <div className="contact-info">
                    <h3 className="title-header">Contact</h3>
                    <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                    <a href="mailto:casyazmon@gmail.com" target="_blank" rel="noopener noreferrer" className='messageBtn'>Say Hello</a>
                </div>
                {/* <form className='contact-form' action="">
                    <div className="form-input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    

                    <div className="form-input">
                        <label htmlFor="emal">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" />
                    </div>

                    <div className="form-input">
                    <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button className='submitBtn'>Send Message</button>


                </form> */}

            </div>
        </div>
    </div>
  )
}

export default Contact