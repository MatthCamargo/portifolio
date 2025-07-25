import React, { useState } from 'react'
import { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/matheus_logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right= "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right= "-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef}  className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Início</p> </AnchorLink> {menu=== "home"? <img src={underline} alt="" />:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>Sobre mim</p></AnchorLink> {menu=== "about"? <img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Serviços</p></AnchorLink> {menu=== "services"? <img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portifólio</p></AnchorLink> {menu=== "work"? <img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contato</p></AnchorLink>{menu=== "contact"? <img src={underline} alt="" />:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar
