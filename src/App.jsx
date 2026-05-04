import {useEffect,useRef,useState } from "react";
import {english } from "./translation/english";
import {Technologies} from "./components/technologies/Technologies";
import {Footer} from "./components/footer/Footer";
import {MailSendMessage} from "./components/contact/MailSendMessage";
import {Loader} from "./components/loader/Loader";
import {MessageForm} from "./components/form/MessageForm/MessageForm";
import {motion} from "motion/react";
import { ProjectsGrid } from "./components/projects/ProjectsGrid";



function App() {

  const api = import.meta.env.VITE_APP_API_BACKEND;

   const arrowRightImageLink = "./img/icons/arrow_right.png";
  const crossCloseImageLink = "./img/icons/cross-close.png";
  const downArrowImageLink = "./img/icons/down-arrow.png";
  const flagSpainImageLink = "./img/icons/flag-spain.png";
  const githubImageLink = "./img/icons/github.png";
  const linkedinImageLink = "./img/icons/linkedin.png";
  const menuResponsiveOpenImageLink = "./img/icons/menu-responsive-open.png";
  const flagEnglishImageLink = "./img/icons/reino-unido.png";
  const whatshappImageLink = "./img/icons/whatsapp.png";
  const exampleWorkImageLink = "./img/example-work1.png";
  // const meImageLink = './img/icons/me.png';
  const podadeolivosImageLink = "./img/podadeolivos-frameset.png";
  const aleatoryPoints = "./img/background/aleatory-points.png";
  const panelDots = "./img/background/panel-dots.png";
  const coffeeImageLink = "./img/icons/coffee.svg"
  const downloadImageLink = "./img/icons/download.svg"

  const cursorImg = "./img/icons/cursor.svg"

    const [message, setMessage] = useState(null);



  /*Creamos un useState para controlar el valor del menu,
  y le añadimos con un ternario la clase selected  */
  const [selected, setSelected] = useState();
  const [selectedResponsive, setselectedResponsive] = useState();

  //Use state para controlar el valor del lenguaje en la app
  const [languaje, setLanguaje] = useState("spain");

  //UseState para controlar el valor del loader de la web
  const [isloading, setIsLoading] = useState(true);

  /*UseState para el menu resposive */
  const [openResponsiveMenu, setOpenResposiveMenu] = useState();
  const [closeResponsiveMenu, setCloseResposiveMenu] = useState();
  // const limitTechnologiesRef = useRef < HTMLDivElement > null;


  const [showGotop, setShowGotop] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setShowGotop(true);
      } else {
        setShowGotop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del listener (importante en React)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (!isloading && languaje === "english") {
      english();
    }
  }, [isloading, languaje]);



  /*UseEfecct que se iniciar conforme ejecutamos la app,
     para establecer el boton de inicio seleccionado */
  useEffect(() => {
    handleClickMenu("inicio");

    setOpenResposiveMenu(false);
  }, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    //Limpimos el loader
    return () => clearTimeout(timer);

}, []);




  const handleClickMenu = (name) => {
    setSelected(name);
    setselectedResponsive(name);
  };

  const handleClickMenuResponsive = () => {
    setOpenResposiveMenu(false);
  };

  const handleClickLanguaje = (lang) => {
    setIsLoading(true); // Activamos loader
    setLanguaje(lang); // Cambiamos idioma
    handleCloseMenuResponsive(); //Desactivamos el blur del index
    if (lang === "english"){

   document.documentElement.style.setProperty('--text-loader', '"Loading..."');
   document.documentElement.style.setProperty('--text-subtitle-loader', '"Made with  ❤️"');

      english();
    }

    setTimeout(() => {
      setIsLoading(false); // Desactivamos loader
    }, 2000);
  };




  const handleCloseMenuResponsive = () => {
    setCloseResposiveMenu(true);

    const blurLayer = document.getElementById("layer-blur");
    blurLayer.classList.remove("blur");

    const boxMenuResponsive = document.getElementById("box__menu-responsive");
    boxMenuResponsive.classList.remove("open-responsive");
    boxMenuResponsive.classList.add("close-responsive");
  };

  const handleOpenMenuResponsive = () => {
    setOpenResposiveMenu(true);

    const blurLayer = document.getElementById("layer-blur");
    blurLayer.classList.add("blur");

    const boxMenuResponsive = document.getElementById("box__menu-responsive");
    boxMenuResponsive.classList.remove("close-responsive");
    boxMenuResponsive.classList.add("open-responsive");
    const body = document.body;

    body.style.overflow = "hidden";
  };

  const handleClickItem = () => {

    const menuResponsive = document.getElementById("box__menu-responsive");
    menuResponsive.classList.remove("open-responsive");
    setCloseResposiveMenu(false);
  };

  const handdleSubmitForm = async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      description: document.getElementById("description").value,
    };


    try {

      const res = await fetch(`${api}/api/sendmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Respuesta del backend:", result, res.status);

      // COMPROBAMOS SI LA RESPUESTA ES CORRECTA Y DEVOLVEMOS EL MENSAJE CORRECTO
       if (res.status === 200) {
        setMessage({
          title: "Mensaje Enviado",
          subtitle: "Gracias por tu mensaje, te responderé brevemente",
        });
      } else {
        setMessage({
          title: "Error",
          subtitle: "No se ha podido enviar el mensaje, inténtelo de nuevo",
        });
      }
    } catch (err) {
      setMessage({
        title: "Error",
        subtitle: "No se ha podido enviar el mensaje, inténtelo de nuevo",
      });
    }
  };


  //Creamos un condicional para comprobar y mostrar el loader al ejecutar el componente
  
  

    if (isloading ) {
      return <Loader />;
    }
  
  return (
    <>

      {/* INDEX DE LA APLICACION*/}

      {/* {openResponsiveMenu && ( */}
      <div id="box__menu-responsive" className={` box__menu-responsive `}>
        <div className="menu__box-responsive-items">
          <a
            href="#index"
            className={`menu__link menu__link-responsive
                     ${selected === "inicio" ? "selected" : ""}
                     ${
                       selectedResponsive === "inicio"
                         ? "selected-responsive "
                         : ""
                     }`}
            onClick={() => {
              handleClickMenu("inicio");
              handleClickMenuResponsive();
              handleClickItem();
            }}
          >
            Sobre Mí
          </a>
          <a
            href="#proyectos"
            className={`menu__link menu__link-responsive
                     ${selected === "proyectos" ? "selected" : ""}
                     ${
                       selectedResponsive === "proyectos"
                         ? "selected-responsive "
                         : ""
                     }`}
            onClick={() => {
              handleClickMenu("proyectos");
              handleClickMenuResponsive();
              handleClickItem();
            }}
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className={`menu__link menu__link-responsive
                     ${selected === "contacto" ? "selected" : ""}
                     ${
                       selectedResponsive === "contacto"
                         ? "selected-responsive "
                         : ""
                     }`}
            onClick={() => {
              handleClickMenu("contacto");
              handleClickMenuResponsive();
              handleClickItem();
            }}
          >
            ¿Hablamos?
          </a>
        <div className="footer__social-container footer-social-container-responsive">
          <div className="social-container__item">
            <a href="https://github.com/antoniozafra" target="_blank" className="item__link">
              <img
                className="link__image"
                src={githubImageLink}
                alt="Github Image"
              />
            </a>
          </div>

          <div className="social-container__item">
            <a href="https://www.linkedin.com/in/antonio-jesus-zafra-arias-5a9263156/" target="_blank" className="item__link">
              <img className="link__image" src={linkedinImageLink} alt="" />
            </a>
          </div>
          <div className="social-container__item">
            <a href="https://wa.me/34692840151?text=Buenas,%20me%20gustaría%20crear%20un%20proyecto" target="_blank" className="item__link">
              <img className="link__image" src={whatshappImageLink} alt="" />
            </a>
          </div>
        </div>
        </div>


        <div className="box__menu-close">
          <img
            className="menu-close-img"
            src={crossCloseImageLink}
            alt=""
            onClick={() => handleCloseMenuResponsive()}
          />
        </div>
      </div>

      <div id="layer-blur" className={`${openResponsiveMenu ? "blur" : " "} `}>


        <a href="#index" className={`layer__gotop-container ${ showGotop ? "showGotop" : ""}`}>

            <img className="gotop-container__img" src={downArrowImageLink} alt="" />

        </a>



        <div className="index fade-in" id="index">

          {/* NAVBAR*/}
          <nav className="menu__box">
            <div className="menu__box-left">
              <div className="menu__box-left-languaje-box">
                <img
                  className={`languaje-box-img ${
                    languaje === "spain" ? "selected-lang" : ""
                  }`}
                  src={flagSpainImageLink}
                  alt="Bandera España"
                  // href="www.google.es"
                  onClick={() => {
                    handleClickLanguaje("spain");
                    window.location.reload();
                  }}
                />

                <img
                  className={`languaje-box-img ${
                    languaje === "english" ? "selected-lang" : ""
                  }`}
                  src={flagEnglishImageLink}
                  alt="Bandera Reino Unido"
                  onClick={() => {
                    handleClickLanguaje("english");
                    handleCloseMenuResponsive();
                  }}
                />
              </div>
            </div>


            {/* MENU HAMBURGESA PARA RESPOSIVE */}
            <div className="menu__box-resposive">
              <div href="" className="menu__box-responsive-image-link">
                <img
                  className="menu__box-responsive-image-link"
                  src={menuResponsiveOpenImageLink}
                  alt=""
                  onClick={() => handleOpenMenuResponsive()}
                />
              </div>
            </div>
          </nav>

          <div className="index__text">


            <div className="text__right">
              <p className="text__right-header">{'- Sobre Mi </>'}</p>
              <p className="text-right-title">
                Desarrollador web <span className="accent-text">F</span>ull <span className="accent-text">S</span>tack</p>
              <span className="text-right-subtitle">
                Residente en Córdoba, formación en DAW, experiencia en desarrollo Full Stack ,enfocado en crear aplicaciones funcionales, bien estructuradas y con un diseño totalmente adaptado.
              </span>
              <span className="text-right-subtitle-quote">
                "Transformo ideas en software que conecta con las personas y
                cumple sus objetivos."
              </span>

                <div className="text__right-principal-technologies">
                  <p className="principal-technologies__title">Tecnologías Principales</p>

                  <div className="principal-technologies__container">
                      <div className="technologies__container-item">
                          <span className="container-item__text">React</span>
                      </div>
                      <div className="technologies__container-item">
                          <span className="container-item__text">Javascript</span>
                      </div>
                      <div className="technologies__container-item">
                          <span className="container-item__text">Node</span>
                      </div>
                      <div className="technologies__container-item">
                          <span className="container-item__text">Laravel</span>
                      </div>
                      <div className="technologies__container-item">
                          <span className="container-item__text">PHP</span>
                      </div>
                      <div className="technologies__container-item">
                          <span className="container-item__text">Mysql</span>
                      </div>
                  </div>
                </div>

              <div className="text-right__download-cv-container">

                <div className="download-cv-container__download-button">
                  <a
                    href="/portfolio/cv_antoniozafra.pdf"
                    download="cv_antoniozafra.pdf"
                    className="text-right-download-cv-container-text"
                  >
                    Descargar CV

                    <img className="download-button-img" src={downloadImageLink} alt="" />
                  </a>

                </div>

                <div className="download-cv-container__buycoffe-button">
                    <a className="buycoffe-button-text">Buy me a Coffe!
                      </a>
                      <img className="buycoffe-img" src={coffeeImageLink} alt="" />
                </div>

              </div>

            </div>
          </div>

          <div className="index__background-2">
                <img className="index__background-2-img" src={panelDots}  alt="" />
          </div>

          <div className="index__background-3">
                <img className="index__background-3-img" src={panelDots}  alt="" />
          </div>

        </div>

        {/*TRABAJOS */}

        <div className="works" id="proyectos">




          <div className="works__title-container">
            <span className="works__title-text">{`- Proyectos </>`}</span>
          </div>


          {/*PROJECT COMPONENT */}

          <ProjectsGrid/>



        </div>


        {/*TECHNOLOGIES */}
        <Technologies />

        {/*CONTACTO*/}
        <div className="contact">

          <div className="contact__title-container">
            <span className="contact__title-text text-web">{`- ¿Hablamos? </>`}</span>
          </div>

          <div className="contact__container" id="contacto">
   
            

            {/* <div className="contact__right"> */}

                {message && (
                    <MessageForm title={message.title} subtitle={message.subtitle} />
                  )}



                <form
                  className="contact__form-box"
                  onSubmit={handdleSubmitForm}
                >
                  <input
                    className="form__input form__input-name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre completo"
                    required
                  />
                  <input
                    className="form__input form__input-email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo Electronico"
                    required
                  />
                  <textarea
                    className="form__textarea form__textarea-describe"
                    wrap="soft"
                    name="description"
                    id="description"
                    placeholder="Explica un poco más tu idea"
                    required
                    minLength={2}
                  ></textarea>

                  <button className="form__button " type="submit">
                    <a href="">
                      <span className="form__button-text">Enviar Correo</span>
                      <img
                        className="right-arrow"
                        src={arrowRightImageLink}
                        alt=""
                      />
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>

        {/* </div> */}

        {/*FOOTER */}
        <Footer />
    </>
  );
}

export default App;
