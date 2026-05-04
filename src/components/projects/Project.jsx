import { h1 } from 'motion/react-client'
import React from 'react'

export const Project = ({project}) => {
  return (
    <div className='project__container'>

        <div className='project-image___cotainer'>
        <img className='project_image' src={project.imageLink} alt="" />

        </div>
        <h1 className='project__title'>{project.title}</h1>
        <span className='project___subtitle'>{project.subtitle}</span>

       
        {/*TODO: CREACION DEL COMPONENTE */}
        <div className="text__right-principal-technologies">
                <div className="principal-technologies__container">
                    {project.technologies?.map( (item, index)=>{ 
                        return (
                            <div key={index} className="technologies__container-item technologies__container-item-project">
                                <span className="container-item__text">{item}</span>
                            </div>
                        )
                    })}
                </div>
        </div>

        
        <div className="item-left__buttons-container">

                <button className="buttons-container__btn">
                  <img  src="./img/icons/cursor.svg" alt="" />
                  <p className="btn__title">Ver Online</p>
                </button>
                <button className="buttons-container__btn buttons-container___btn-github">
                  <img src="./img/icons/github.png" alt="" />
                  <p className="btn__title">Ver Código</p>
                </button>

        </div>
      
    </div>
  )
}



