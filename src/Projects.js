import React from 'react'
import CardProject from './CardProject'
// import projetos from './projects-data'
import './Projects.css'

const Projects = () => {  
    const projetos = [
        {
            link: 'https://react-course-birthday-reminder.netlify.app',
            image: './img/birthday_reminder.png',
            name: 'Birthday Remember',
        },
        {
            link: 'https://react-course-tours.netlify.app',
            image: './img/tours.png',
            name: 'Tours',
        },
        {
            link: 'https://react-course-reviews.netlify.app',
            image: './img/reviews.png',
            name: 'Reviews',
        },
        {
            link: 'https://react-course-accordion.netlify.app',
            image: './img/accordion.png',
            name: 'Accordion',
        },
        {
            link: 'https://react-course-projectmenu.netlify.app',
            image: './img/menu.png',
            name: 'Menu',
        },
        {
            link: 'https://react-course-slider.netlify.app',
            image: './img/slider.png',
            name: 'Slider',
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
                    <CardProject link={link} image={image} name={name}/>
                )
            })}
        </div>
    </section>        
  )
}

export default Projects