import React from 'react'
import './CardProject.css'

const CardProject = ({link, image, name}) => {
  return (
    <div>
        <a href={link} target='blank' className='project-card'>
            <img src={image} className='img'/>
            <div className='project-name'>
                <h2>{name}</h2>
            </div>
        </a>
    </div>
  )
}

export default CardProject