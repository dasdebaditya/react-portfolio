import React from 'react'
import './About.css'
import ME from '../../Assets/home.JPG'
import {FiAward} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {FaSuitcase} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className='about_card'>
              <FaSuitcase className='about_icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
            
          </div>

          <p>I have been into Software Developement since last 5 years, from learning basic C+ + syntax to learning Developement with Javascript frameworks has been a really thrilling journey which is still on and will not stop. Let's strive to be better than today!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About