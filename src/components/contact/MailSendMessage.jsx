import React from "react";

export const MailSendMessage = () => {
  return (
    <>
      <div className="contact__message ">
        <span className="contact__message-title">Mensaje Enviado</span>
        <span className="contact__message-subtitle">
          Gracias, me pondre en contacto contigo
        </span>

        <a className="contact__message-close">
          <img
            className="contact__message-cross"
            src={crossCloseImageLink}
            alt=""
          />
        </a>
      </div>
    </>
  );
};
