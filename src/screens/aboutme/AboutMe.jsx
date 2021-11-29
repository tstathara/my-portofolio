import React from 'react'
import './aboutMe.css'
import avatar from '../../images/avatar.png'

function AboutMe() {
    return (
        <div className="about_container" id="about-me">
            <div>
                <img src={avatar} alt="person icon" />
            </div>
            <div className="about-text" >
                <h1>About Me!</h1>
                <p>test test</p>
            </div>
        </div>
    )
}

export default AboutMe
