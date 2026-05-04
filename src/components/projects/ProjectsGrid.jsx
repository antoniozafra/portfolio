import React from 'react'
import './styles.css'
import { Project } from './Project';



export const ProjectsGrid = () => {

    /*AQUI VA LA INFORMACION DE TODOS LOS PROYECTOS */
    const projects = [
        {
            id: 1,
            title: "Podadeolivos",
            subtitle : 
            'Pagina Coorporativa para empresa del sector agrario',
            imageLink : "./img/podadeolivos-frameset.png",
            link : "https://www.podeolivos.com",
            githubLink : "https://www.podeolivos.com",
            technologies: ['HTML', 'CSS','JS', 'Wordpress'],
            type : "fullstack"

        },
        {
            id:2,
            title: "Alfombra Personalizada",
            subtitle : 
            'Pagina Coorporativa para empresa del sector agrario',
            imageLink : "./img/alfombrapersonalizada-frameset.png",
            link : "https://www.alfomrbapersonalizada.com",
            githubLink : "https://www.podeolivos.com",
            technologies: ['HTML', 'CSS','JS', 'Wordpress'],
            type : "fullstack"

        },
        {
            id: 3,
            title: "Trainer App",
            subtitle : 
            'Pagina Coorporativa para empresa del sector agrario',
            imageLink : "./img/trainer-app-frameset.png",
            link : "https://www.podeolivos.com",
            githubLink : "https://www.podeolivos.com",
            technologies: ['HTML', 'CSS','JS', 'UI/UX'],
            type : "fullstack"

        },
        
       
        // {
        //     id: 3,
        //     title: "Trainer App",
        //     subtitle : 
        //     'Pagina Coorporativa para empresa del sector agrario',
        //     imageLink : "./img/trainer-app-frameset.png",
        //     link : "https://www.podeolivos.com",
        //     githubLink : "https://www.podeolivos.com",
        //     technologies: ['HTML', 'CSS','JS', 'UI/UX'],
        //     type : "fullstack"

        // },
        
       
        
    ];

  return (

    <>
    
    {/*CATEGORY SELECTOR */}
    <div  className="works__type-container">

                <ul className="type-container__list">
                  <li className="list__item-text selected-type">Full Stack</li>
                  <li className="list__item-text">Frontend </li>
                  <li className="list__item-text">UX/UI</li>
                </ul>

    </div>

    {/*PROJECTS GRID */}
    <div className='works__container'>

    {
      projects.map((item) => {
        return <Project key={item.id} project={item}/>
      })
    }

    </div>
    
            
    </>
   

  )
}

