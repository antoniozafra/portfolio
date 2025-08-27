import { useEffect, useState } from "react";
import {english} from './translation/english';


function App() {


  
  /*Creamos un useState para controlar el valor del menu, 
  y le añadimos con un ternario la clase selected  */
  const [selected, setSelected ] = useState();
  const [selectedResponsive, setselectedResponsive ] = useState();
  
  //Use state para controlar el valor del lenguaje en la app
  const [languaje , setLanguaje] = useState("spain");
  
  //UseState para controlar el valor del loader de la web
  const [isloading, setIsLoading] = useState(true);
  
  /*UseState para el menu resposive */
  const [openResponsiveMenu, setOpenResposiveMenu] = useState();
  const [closeResponsiveMenu, setCloseResposiveMenu] = useState();




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
      }, 2000 );

      //Limpimos el loader
      return ()=> clearTimeout(timer);


    }, [isloading]);

  
  const handleClickMenu = (name) => {
    setSelected(name);
    setselectedResponsive(name);
    
  };
  const handleClickMenuResponsive = () => {
    setOpenResposiveMenu(false);

  };


  
  const handleClickLanguaje = (lang) => {
    
    setIsLoading(true);           // Activamos loader
    setLanguaje(lang);            // Cambiamos idioma
    handleCloseMenuResponsive();  //Desactivamos el blur del index           
    if (lang === "english") english();
    
    setTimeout(() => {
      
      setIsLoading(false);        // Desactivamos loader
    }, 4000);
    
  };

  const handleCloseMenuResponsive = () => {
    setCloseResposiveMenu(true);


     const blurLayer = document.getElementById("layer-blur");
    blurLayer.classList.remove("blur");

    const boxMenuResponsive = document.getElementById("box__menu-responsive");
    boxMenuResponsive.classList.remove("open-responsive");
    boxMenuResponsive.classList.add("close-responsive");
  
  }
  

const handleOpenMenuResponsive = () => {
  
    setOpenResposiveMenu(true);

     const blurLayer = document.getElementById("layer-blur");
    blurLayer.classList.add("blur");

    const boxMenuResponsive = document.getElementById("box__menu-responsive");
    boxMenuResponsive.classList.remove("close-responsive");
    boxMenuResponsive.classList.add("open-responsive");
    const body = document.body;

    body.style.overflow = 'hidden';

}

const handleClickItem  = () => {
  console.log("cerrammos el menu")

  const menuResponsive = document.getElementById('box__menu-responsive');
  menuResponsive.classList.remove("open-responsive");
      setCloseResposiveMenu(false);

}


    //Creamos un condicional para comprobar y mostrar el loader al ejecutar el componente
    if(isloading) {
      return (
        <>
        
        <div className="loader ">
         <div className="loader__subtitle">
          
            <span className="loader__subtitle-text"></span>
          </div>

        </div>
      
        </>
      )
    }

  
  return (
    <>
      {/* INDEX DE LA APLICACION*/}

      {/* {openResponsiveMenu && ( */}
        <div id="box__menu-responsive" className={` box__menu-responsive `}>

            {/* <a href="" className="menu__box-responsive-image-link">
               <img
                className="menu__box-responsive-image-link"
                src="./src/assets/img/icons/menu-responsive-open.png"
                alt=""
              />  */}

              <div className="menu__box-responsive-items">
                <a
                  href="#index"
                  className={`menu__link menu__link-responsive 
                     ${selected === "inicio" ? "selected" : ""}
                     ${selectedResponsive === "inicio" ? "selected-responsive " : ""}`}
                  onClick={() =>{
                       handleClickMenu("inicio");
                       handleClickMenuResponsive();
                       handleClickItem();
                      }}
                >
                  Inicio
                </a>
                <a
                  href="#proyectos"
                  className={`menu__link menu__link-responsive 
                     ${selected === "proyectos" ? "selected" : ""}
                     ${selectedResponsive === "proyectos" ? "selected-responsive " : ""}`}
                     onClick={() =>{
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
                     ${selectedResponsive === "contacto" ? "selected-responsive " : ""}`}

                  onClick={() =>{
                       handleClickMenu("contacto");
                       handleClickMenuResponsive();
                      handleClickItem();

                      }}
                >
                  Contacto
                </a>
              </div>

               <div className="footer__social-container footer-social-container-responsive">
          <div className="social-container__item">
            <a href="" className="item__link">
              <img
                className="link__image"
                src="./src/assets/img/icons/github.png"
                alt=""
              />
            </a>
          </div>

          <div className="social-container__item">
            <a href="" className="item__link">
              <img
                className="link__image"
                src="./src/assets/img/icons/linkedin.png"
                alt=""
              />
            </a>
          </div>
          <div className="social-container__item">
            <a href="" className="item__link">
              <img
                className="link__image"
                src="./src/assets/img/icons/whatsapp.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="box__menu-close">

            <img 
              className="menu-close-img"
               src="./src/assets/img/icons/cross-close.png" alt=""
               onClick={() =>handleCloseMenuResponsive()} />

        </div>
            
        </div>
      {/* )} */}

      <div id="layer-blur"  className={`${openResponsiveMenu ? "blur" : " "} `}>


      <div className="index fade-in" id="index">
        {/* NAVBAR*/}
        <nav className="menu__box" >
          <div className="menu__box-left">
            <a href="" className="menu__box-left-text">
              Descargar CV
            </a>

            <div className="menu__box-left-languaje-box">
              <img
                className={`languaje-box-img ${
                  languaje === "spain" ? "selected-lang" : ""
                }`}
                src="../src/assets/img/icons/flag-spain.png"
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
                src="../src/assets/img/icons/reino-unido.png"
                alt="Bandera Reino Unido"
                onClick={() => {handleClickLanguaje("english"); handleCloseMenuResponsive()}}
              />
            </div>
          </div>
          <div className="menu__box-right">
            <a
              href="#index"
              //  className="menu__link"
              className={`menu__link  ${selected === "inicio" ? "selected" : ""}`}
              onClick={() => {
                handleClickMenu("inicio");
              }}
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              //  className="menu__link "
              className={`menu__link ${
                selected === "proyectos" ? "selected" : ""
              }`}
              onClick={() => handleClickMenu("proyectos")}
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className={`menu__link ${
                selected === "contacto" ? "selected" : ""
              }`}
              onClick={() => handleClickMenu("contacto")}
            >
              Contacto
            </a>
          </div>

          {/* MENU HAMBURGESA PARA RESPOSIVE */}
          <div className="menu__box-resposive">
            <div
              href=""
              className="menu__box-responsive-image-link"
            >
              <img
                className="menu__box-responsive-image-link"
                src="./src/assets/img/icons/menu-responsive-open.png"
                alt=""
                onClick={() => handleOpenMenuResponsive()}
              />
            </div>
          </div>
        </nav>


        <div className="index__text">
          <div className="text__left">
            <p className="text__left-title">Antonio Zafra .</p>

            <div className="index__social-container">
              <div className="index-container__item">
                <a href="" className="item__link">
                  <img
                    className="link__image"
                    src="./src/assets/img/icons/github.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="index-container__item">
                <a href="" className="item__link">
                  <img
                    className="link__image"
                    src="./src/assets/img/icons/linkedin.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="index-container__item">
                <a href="" className="item__link">
                  <img
                    className="link__image"
                    src="./src/assets/img/icons/whatsapp.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="text__right">
            <p className="text-right-title">
              Desarrollador web Full Stack, residente de Córdoba
            </p>
            <span className="text-right-subtitle">
              "Transformo ideas en software que conecta con las
              personas y cumple sus objetivos."
            </span>
            <a href="" className="item__left-link">
              <span className="item__left-link-text">Contacto</span>
              <img
                className="right-arrow"
                src="./src/assets/img/icons/arrow_right.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      {/*TRABAJOS */}

      <div className="works" id="proyectos">
        {/*WORK 1 */}
        <div className="work__item">
          <div className="work__item-left">
            <p className="item__left-title">Podadeolivos.com</p>
            <p className="item__left-subtitle">
              Sitio web completo para empresa dedicada a la poda de olvios
            </p>

            <div className="technologies">
              <div className="technologies__item">HTML</div>
              <div className="technologies__item">CSS</div>
              <div className="technologies__item">JS</div>
              <div className="technologies__item">WORDPRESS</div>
              <div className="technologies__item">ELEMENTOR</div>
              <div className="technologies__item">PHP</div>
            </div>
{/* 
            <div>
              <a href="" className="item__left-link proyect-link">
              Ver Online
              <img
                className="right-arrow"
                src="./src/assets/img/icons/arrow_right.png"
                alt=""
              />
            </a>
            </div> */}

            <a href="" className="item__left-link proyect-link">
              Ver Online
              <img
                className="right-arrow"
                src="./src/assets/img/icons/arrow_right.png"
                alt=""
              />
            </a>
          </div>
          <div className="work__item-right">
            <img
              className="item__right-image"
              src="../src/assets/img/podadeolivos-frameset.png"
            ></img>
          </div>
        </div>

        {/*WORK 2 */}
        <div className="work__item" id="next-project2">
          <div className="work__item-right">
            <img
              className="item__right-image"
              src="../src/assets/img/example-work1.png"
            ></img>
          </div>
          <div className="work__item-left">
            <p className="item__left-title">Titulo Del Proyecto</p>
            <p className="item__left-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quasi enim ullam ab
            </p>

            <div className="technologies">
              <div className="technologies__item">HTML</div>
              <div className="technologies__item">CSS</div>
              <div className="technologies__item">JAVASCRIPT</div>
              <div className="technologies__item">MYSQL</div>
              <div className="technologies__item">JAVA</div>
              <div className="technologies__item">REACT</div>
            </div>

            <a href="" className="item__left-link proyect-link proyect-link-right">
              Ver Demo
              <img
                className="right-arrow"
                src="./src/assets/img/icons/arrow_right.png"
                alt=""
              />
            </a>
          </div>
        </div>


        {/*WORK 3 */}
        <div className="work__item">
          <div className="work__item-left">
            <p className="item__left-title">Titulo Del Proyecto</p>
            <p className="item__left-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quasi enim ullam ab
            </p>

            <div className="technologies">
              <div className="technologies__item">HTML</div>
              <div className="technologies__item">CSS</div>
              <div className="technologies__item">JAVASCRIPT</div>
              <div className="technologies__item">JAVA</div>
              <div className="technologies__item">REACT</div>
              <div className="technologies__item">WORDPRESS</div>
            </div>

            <a href="" className="item__left-link  proyect-link proyect-link-right">
              Ver Demo
              <img
                className="right-arrow"
                src="./src/assets/img/icons/arrow_right.png"
                alt=""
              />
            </a>
          </div>
          <div className="work__item-right">
            <img
              className="item__right-image"
              src="../src/assets/img/example-work1.png"
            ></img>
          </div>
        </div>
      </div>

      {/*CONTACTO*/}
      <section className="contact" id="contacto">
        <div className="contact__left">
          <p className="contact__left-title">¿Creamos un proyecto? </p>

          <span className="contact__left-subtitle">
            ¿Hablamos?Contacta conmigo y te resuelvo cualquier duda sin problema
          </span>

          <a href="" className="contact__left-link">
            antoniozafra@gmail.com
            <img
              className="right-arrow"
              src="./src/assets/img/icons/arrow_right.png"
              alt=""
            />
          </a>
        </div>

        <div className="contact__right">
          <span className="contact__right-title">Contacta Conmigo</span>

          <div className="contact__right-form-box">
            <form className="contact__right-form-box" action="">
              <input
                className="form__input form__input-name"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre completo"
              />
              <input
                className="form__input form__input-email"
                type="email"
                name=""
                id="email"
                placeholder="Correo Electronico"
              />
              <textarea
                className="form__textarea form__textarea-describe"
                wrap="soft"
                placeholder="Explica un poco más tu idea"
              ></textarea>

              <input className="form__button" type="button" value="Enviar" />
            </form>
          </div>
        </div>
      </section>

      {/*FOOTER */}

      <footer className="footer">
        <p className="footer__text">
          if (teGusta) {"{"} contáctame(); {"}"}
        </p>

        <div className="footer__social-container">
          <div className="social-container__item">
            <a href="" className="item__link">
              <img
                className="link__image"
                src="./src/assets/img/icons/github.png"
                alt=""
              />
            </a>
          </div>

          <div className="social-container__item">
            <a href="" className="item__link">
              <img
                className="link__image"
                src="./src/assets/img/icons/linkedin.png"
                alt=""
              />
            </a>
          </div>
          <div className="social-container__item">
            <a href="" className="item__link">
              <img
                className="link__image"
                src="./src/assets/img/icons/whatsapp.png"
                alt=""
              />
            </a>
          </div>
        </div>
         {/* <div className="footer__subtitle">
            <h4 className="footer__subtitle-text">Creado con ❤️</h4>
          </div> */}


      </footer>

            </div>

      
    </>
  );
}

export default App;
