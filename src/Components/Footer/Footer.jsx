import React, { use } from 'react'
import './Footer.css'
import footer_logo from '../../assets/matheus_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Desenvolvido por Matheus Camargo — Entre em contato para criar seu projeto front-end!</p>
            </div>
            <div className="footer-top-rigth">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='informe seu email' />
                </div>
                <div className="footer-subscribe">Assine</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">©2025 Matheus Camargo. Todos direitor reservados </p>
            <div className="footer-bottom-rigth">
                <p>Termos e condições</p>
                <p>Política de privacidade</p>
                <p>Conecte-se comigo</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
