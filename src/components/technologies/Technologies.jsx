import React, { useRef } from 'react'
import { motion } from "motion/react";

import './styles.css'


export const Technologies = () => {

     const technologiesItems = [
   {
    id: 'reactSVGLink',
    path: './img/icons/react.svg',
    className: 'react',
    url: 'https://es.react.dev/'
  },
  {
    id: 'javascriptSVGLink',
    path: './img/icons/javascript.svg',
    className: 'javascript',
  },
  {
    id: 'nodejsSVGLink',
    path: './img/icons/nodejs.svg',
    className: 'node',
  },
  { 
    id: 'laravelSVGLink',
    path: './img/icons/laravel.svg',
    className: 'laravel',
  },
  {
    id:'boostrapSVGLink',
    path: './img/icons/bootstrap.svg',
    className: 'bootstrap',
  },
  {
    id: 'mysqlSVGLink',
    path: './img/icons/mysql.svg',
    className: 'mysql',
  },
  {
    id: 'phpSVGLink',
    path: './img/icons/php.svg',
    className: 'php',
  },
  // {
  //   id: 'mysqlSVGLink',
  //   path: './img/icons/mysql.svg',
  //   className: 'mysql',
  // },
  ];

const limitTechnologiesRef = useRef <HTMLDivElement>(null);

const dragConstraints = {
  top:200,
  bottom:200
}

  return (
    <motion.div
     
         dragConstraints={limitTechnologiesRef}  
        className="index__tecnologies">

            {/* BUCLE DE LOS DIFERENTES COMPONENTES */}
    
            {technologiesItems.map((technologiesItem, index) => (
              <motion.div
              key={index}
              drag
              dragSnapToOrigin
              dragConstraints={dragConstraints}
              dragElastic={1}
              className={`index__technologies-item ${technologiesItem.className}`}
              
              >
              <motion.img
                draggable={false}
                className="index__technologies-item-image"
                src={technologiesItem.path}
                alt={technologiesItem.className}
              />
              </motion.div>
          ))}

             

        </motion.div>
  )
}

