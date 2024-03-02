import React from 'react'
import "./ProjectCard.css"
import { projects } from '../../../utils/data'
export const ProjectCard = ({ imgUrl, title , description , Giturl , technology ,Lookout }) => {
  return (
    <section id='project-container'>
     <div id='project-card' >
      <div id="project">
      <img src={imgUrl} alt={title} />
      <div id="text" className='text-center'>
      <h1 className="text-[1rem] font-normal font-Gilroy">{title}</h1>
      <p className="text-[1rem] font-normal font-Gilroy">{description}</p>
      <h6 className="text-[1rem] font-normal mb-1 font-Gilroy">{technology}</h6>
      </div>
      <div id="buttons" className='flex items-center justify-between mt-5'>
      <a href={Lookout}>look</a>
      <a href={Giturl}>Source</a>
      </div>
      </div>
     </div>
    </section>
  )
}
