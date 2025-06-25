import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import sobre_img from '../../assets/sobre.img.svg'
import AnimatedCounter from './AnimatedCounter'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>Sobre Mim</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={sobre_img} alt="" />
        </div>
        <div className="about-rigth">
          <div className="about-para">
            <p>Sempre fui uma pessoa com afinidade pela área de humanas, o que me levou a me formar em Recursos Humanos. Gosto de entender pessoas, processos e como tudo se conecta para gerar boas experiências. No entanto, em 2024, descobri um novo interesse: o desenvolvimento front-end. Foi nesse universo que encontrei uma nova forma de me expressar e criar, unindo lógica e criatividade de um jeito que me encanta cada vez mais.</p>
            <p>Desde então, venho me dedicando aos estudos e à prática constante, buscando me tornar um desenvolvedor front-end cada vez mais preparado. Tenho feito cursos da Origamid e hoje já possuo uma base sólida em HTML, CSS, JavaScript e React. A cada projeto que desenvolvo, busco aplicar o que aprendo e evoluir minhas habilidades, sempre com o objetivo de criar interfaces funcionais, modernas e agradáveis para os usuários. Estou comprometido com meu crescimento e animado com as possibilidades que a área de tecnologia tem a oferecer.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML e CSS</p><hr style={{width:"50%" }}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%" }}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"50%" }}/></div>
            <div className="about-skill"><p>TypeScript</p><hr style={{width:"2%" }}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
      <div className="about-achievement">
        <AnimatedCounter targetNumber={2} />
        <p>Anos de Experiência </p>
      </div>
      <hr />
      <div className="about-achievement">
        <AnimatedCounter targetNumber={5} />
        <p>Projetos Completo</p>
      </div>
      <hr />
      <div className="about-achievement">
        <AnimatedCounter targetNumber={1} />
        <p>Clientes Felizes</p>
      </div>
      </div>
    </div>
  )
}

export default About
