import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "887b6a7b-2605-4788-98e1-3ee6f8eb72e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Mensagem enviada com sucesso");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='contact'  className='contact'>
        <div className="contact-title">
            <h1>Entre em contato</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Vamos conversar </h1>
            <p>Se você está buscando alguém comprometido, em constante evolução e apaixonado por criar interfaces modernas e funcionais, estou à disposição! Entre em contato comigo para desenvolver seu projeto front-end com foco em qualidade, responsividade e boa experiência para o usuário. Será um prazer contribuir com soluções que façam a diferença!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>maatheuscamargo1@gmail.com</p>
                </div>
                <div className="contact-detail">
                      <img src={location_icon} alt="" /> <p>Osasco - SP - Brasil</p>
                </div>
                <div className="contact-detail">
                       <img src={call_icon} alt="" /> <p>+55 11 98295-3009</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-rigth">
            <label htmlFor="">Seu Nome</label>
            <input type="text" placeholder='Informe seu nome' name='nome' />
            <label htmlFor="">Seu e-mail</label>
            <input type="email" placeholder='informe seu e-mail' name='email'/>
            <label htmlFor="">Envie sua mensagem</label>
            <textarea name="message" rows="8" placeholder='Envie sua mensagem'></textarea>
            <button type='submit' className="contact-submit">Enviar agora</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
