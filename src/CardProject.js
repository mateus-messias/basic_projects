import React from 'react'
import './CardProject.css'

const CardProject = ({image, name}) => {
  return (
    <div>
        <a href="#" className='project-card'>
            <img src={image} className='img'/>
            <div className='project-name'>
                <h2>{name}</h2>
            </div>
        </a>
    </div>
  )
}

export default CardProject