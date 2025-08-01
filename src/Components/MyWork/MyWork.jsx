import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Meu trabalho mais recente</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index)=> {
            return (<a key={index} href={work.link}target="_blank" rel="noopener noreferrer" >
              < img src={work.w_img} alt={`Projeto ${index + 1}`} /> 

              </a>
            );
            
        })}
      </div>
      <div className="mywork-showmore">
        <p>Mostrar mais</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
