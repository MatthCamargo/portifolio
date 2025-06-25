import React from "react";
import "./Hero.css";
import profile_img from "../../assets/perfil.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>Eu sou Matheus Camargo,</span> Desenvolvedor front end no Brasil
      </h1>
      <p>
        Atualmente focado em estudar e praticar as tecnologias fundamentais da
        área, como HTML, CSS, JavaScript e React. Tenho buscado aprimorar meus
        conhecimentos por meio de projetos práticos e estudos constantes, com o
        objetivo de evoluir minhas habilidades na construção de interfaces
        modernas, responsivas e funcionais. Estou comprometido em aprender cada
        vez mais e em desenvolver soluções que ofereçam boas experiências para
        os usuários.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Conecte-se comigo
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            className="anchor-link"
            href="https://www.linkedin.com/in/matheus-anselmo-d-70186911b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
