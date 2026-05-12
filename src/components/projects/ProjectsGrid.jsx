import React, { useState } from 'react'
import './styles.css'
import { Project } from './Project';
import { useTranslation } from 'react-i18next';



export const ProjectsGrid = () => {


  const { t,i18n} = useTranslation();

  //TRAEMOS LA DATA DESDE JSON PARA TRADUCIR LOS PROYECTOS
  const proyectos = t("proyectos",{returnObjects: true});

    /*AQUI VA LA INFORMACION DE TODOS LOS PROYECTOS */
    const projects = [
        {
            id: 1,
            title: "Podadeolivos",
            subtitle : t(proyectos.podadeolivos.description),
            imageLink : "./img/podadeolivos-frameset.png",
            link : "https://www.podeolivos.com",
            githubLink : "https://www.podeolivos.com",
            technologies: ['HTML', 'CSS','JS', 'Wordpress'],
            type : "fullstack"

        },
        {
            id:2,
            title: "Alfombra Personalizada",
            subtitle : t(proyectos.alfombrapersonalizada.description),
            imageLink : "./img/alfombrapersonalizada-frameset.png",
            link : "https://www.alfomrbapersonalizada.com",
            githubLink : "https://www.podeolivos.com",
            technologies: ['HTML', 'CSS','JS', 'Wordpress'],
            type : "fullstack"

        },
        {
            id: 3,
            title: "Trainer App",
            subtitle : t(proyectos.personaltrainerweb.description) ,
            imageLink : "./img/trainer-app-frameset.png",
            link : "https://www.podeolivos.com",
            githubLink : "https://www.podeolivos.com",
            technologies: ['HTML', 'CSS','JS', 'UI/UX'],
            type : ['frontend']

        },
        
       
        
    ];
    
    const [selectedType, setSelectedType] = useState('fullstack');

    const filteredProjects =  projects.filter(projects => projects.type == selectedType);

  return (

    <>
    
    {/*CATEGORY SELECTOR */}
    <div  className="works__type-container">

                <ul className="type-container__list">
                  <li className={`list__item-text ${selectedType === 'fullstack' ? 'selected-type' : ''}`} onClick={() => setSelectedType('fullstack')}>Full Stack</li>
                  <li className={`list__item-text ${selectedType === 'frontend' ? 'selected-type' : ''}`} onClick={() => setSelectedType('frontend')}>Frontend </li>
                  <li className={`list__item-text ${selectedType === 'uiux' ? 'selected-type' : ''}`} onClick={() => setSelectedType('uiux')}>UI/UX </li>
                </ul>

    </div>

    {/*PROJECTS GRID */}
    <div className='works__container'>

    {
      filteredProjects.length === 0
      ? <p className='no-projects-text'>No hay  proyectos disponibles</p>
      : filteredProjects.map((item => {
        return <Project key={item.id} project={item}/>
      }))
      
    }

    </div>
    
            
    </>
   

  )
}

