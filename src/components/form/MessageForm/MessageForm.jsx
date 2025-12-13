import React from 'react'

 export const MessageForm = ({title, subtitle}) => {

        const crossCloseImageLink = "./img/icons/cross-close.png";



  return (
        <div className="contact__message hide">
                  <span className="contact__message-title">{title}</span>
                  <span className="contact__message-subtitle">{subtitle}</span>

                  <a href='index.html' className="contact__message-close">
                    
                  <img className="contact__message-cross" src={crossCloseImageLink} alt="" />
                  </a>
        </div>
  )

}
