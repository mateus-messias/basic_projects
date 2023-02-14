import React from 'react'
import CardProject from './CardProject'
// import projetos from './projects-data'
import './Projects.css'

const Projects = () => {  
    const projetos = [
        {
            link: '',
            image: './img/projeto.jpg',
            name: 'Birthday Remember',
        },
        {
            link: '',
            image: './img/projeto.jpg',
            name: 'Birthday Remember',
        },
        {
            link: '',
            image: './img/projeto.jpg',
            name: 'Birthday Remember',
        },
    ]  
  return (
    <section className='container'>
        {projetos.map((project) => {
            const {link, image, name} = project
            return (
                <CardProject image={image} name={name}/>
            )
        })}               
    </section>        
  )
}

export default Projects