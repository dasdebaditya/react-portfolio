import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {ImBooks} from 'react-icons/im'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><BiUserCircle/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><ImBooks/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><MdHomeRepairService/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><AiFillMessage/></a>
    </nav>
  )
}


export default Nav