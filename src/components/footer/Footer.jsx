import React from 'react';
import './styles.css'

export const Footer = () => {

const githubImageLink = './img/icons/github.png';
const linkedinImageLink = "./img/icons/linkedin.png";
const whatshappImageLink = "./img/icons/whatsapp.png";


  return (

      <footer className="footer">
          <p className="footer__text">
            if (teGusta) {"{"} contáctame(); {"}"}
          </p>

          <div className="footer__social-container">
            <div className="social-container__item">
              <a href="https://github.com/antoniozafra" target='_blank' className="item__link">
                <img className="link__image" src={githubImageLink} alt="" />
              </a>
            </div>

            <div className="social-container__item">
              <a href="https://www.linkedin.com/in/antonio-jesus-zafra-arias-5a9263156/" target='_blank' className="item__link">
                <img className="link__image" src={linkedinImageLink} alt="" />
              </a>
            </div>
            <div className="social-container__item">
              <a href="https://wa.me/34692840151?text=Buenas,%20me%20gustaría%20crear%20un%20proyecto" target='_blank' className="item__link">
                <img className="link__image" src={whatshappImageLink} alt="" />
              </a>
            </div> 
          </div>
        </footer>

  )
}

