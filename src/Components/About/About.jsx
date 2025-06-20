import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>Sobre Mim</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-rigth">
          <div className="about-para">
            <p>Para formatar um texto ou código no Visual Studio Code (VS Code) como padrão, você pode usar a função "Formatar Documento" (Format Document) ou definir um formatador padrão. Para formatar todo o documento, use o atalho Shift + Alt + F ou clique com o botão direito e selecione "Formatar Documento"</p>
            <p>Para formatar um texto ou código no Visual Studio Code (VS Code) como padrão, você pode usar a função "Formatar Documento" (Format Document) ou definir um formatador padrão. Para formatar todo o documento, use o atalho Shift + Alt + F ou clique com o botão direito e selecione "Formatar Documento"</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML e CSS</p><hr style={{width:"50%" }}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%" }}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%" }}/></div>
            <div className="about-skill"><p>HTML e CSS</p><hr style={{width:"50%" }}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
      <div className="about-achievement">
        <h1>10+</h1>
        <p>anos de experiencia </p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>90+</h1>
        <p>projetos completo</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>15+</h1>
        <p>clientes felizes</p>
      </div>
      </div>
    </div>
  )
}

export default About
