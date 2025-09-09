
export const english = () => {
  //BOTON DE DESCARGA DE CV


  document.querySelector(".menu__box-left-text").innerHTML = "Download CV";


  //MENU DE INICIO
  const menu__links__ENGLISH = document.querySelectorAll(".menu__link");

  menu__links__ENGLISH[0].innerHTML = "Home";
  menu__links__ENGLISH[1].innerHTML = "Projects";
  menu__links__ENGLISH[2].innerHTML = "Contact";

  //INICIO
  document.querySelector(".text-right-title").innerHTML =
    "Full Stack Web Developer, based in Cordoba";
  document.querySelector(".text-right-subtitle").innerHTML =
    "I transform ideas into sites and apps that connect with people and accomplish specific goals";

  //BOTON DE CONTACTO
  const itemLeftLink__ENGLISH = document.querySelector(".item__left-link-text");
  itemLeftLink__ENGLISH.innerHTML = "Contact ";

  //PROYECTO 1
  //PROYECTO 2
  //PROYECTO 3

  //CONTACTO
  document.querySelector(".contact__left-title").innerHTML =
    "We create a project?";
  document.querySelector(
    ".contact__left-subtitle"
  ).innerHTML = `Let's talk! Contact me and I'll answer any questions you may have.`;
  document.querySelector(".contact__right-title").innerHTML = "Contact Me";

  //FORMULARIO
  document.querySelector(".form__input-name").placeholder = "Full Name";
  document.querySelector(".form__input-email").placeholder = "Email";
  document.querySelector(".form__textarea-describe").placeholder =
    "Explain your idea a little more";

  //FOOTER
  document.querySelector(".footer__text").innerHTML =
    "if (doYouLike) { contactMe(); }";
  // document.querySelector(".footer__subtitle-text").innerHTML =
  //   "Made in With ❤️";

  //MENU RESPONSIVE
  const menu__links__responsive__ENGLISH = document.querySelectorAll(
    ".menu__link-responsive "
  );


 
    menu__links__responsive__ENGLISH[0].innerHTML = "Home";
      menu__links__responsive__ENGLISH[1].innerHTML = "Projects";
      menu__links__responsive__ENGLISH[2].innerHTML = "Contact";

};
