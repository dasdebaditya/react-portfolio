import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/debaditya-das-5240a01a6/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/dasdebaditya" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/DebadityaDas1999" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials