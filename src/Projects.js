import React from 'react'
import CardProject from './CardProject'
// import projetos from './projects-data'
import './Projects.css'

const Projects = () => {  
    const projetos = [
        {
            link: '',
            image: './img/birthday_reminder.png',
            name: 'Birthday Remember',
        },
        {
            link: '',
            image: './img/tours.png',
            name: 'Tours',
        },
        {
            link: '',
            image: './img/reviews.png',
            name: 'Reviews',
        },
        {
            link: '',
            image: './img/accordion.png',
            name: 'Accordion',
        },
    ]  
  return (
    <section className='container'>
        <h2 className='title'>Projetos Simples em React</h2>
        <div className="title-underline"></div>
        <div className='projects-container'>
            {projetos.map((project) => {
                const {link, image, name} = project
                return (
                    <CardProject image={image} name={name}/>
                )
            })}
        </div>
    </section>        
  )
}

export default Projects