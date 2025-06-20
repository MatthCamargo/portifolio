import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>Eu sou Matheus Camargo,</span>  desenvolvedor front end no Brasil</h1>
        <p>Desenvolvedor Front-end Júnior responsável pela implementação de interfaces web responsivas, utilizando HTML, CSS, JavaScript e frameworks como React. Atua em correções de bugs e pequenas melhorias guiado por times de design e desenvolvimento.</p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
