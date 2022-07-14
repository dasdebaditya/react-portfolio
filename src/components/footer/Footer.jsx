import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Debaditya Das</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/debaditya-das-5240a01a6/">{BsLinkedin}</a>
        <a href="https://github.com/dasdebaditya">{BsGithub}</a>
        <a href="https://www.facebook.com/DebadityaDas1999">{BsFacebook}</a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Debaditya Das. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer