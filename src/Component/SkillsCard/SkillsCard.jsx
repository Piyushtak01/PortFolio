import React from 'react'
import "./SkillsCard.css"

export const SkillsCard = ({ title , iconUrl , isActive , onClick }) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
    onClick={() => onClick()}
    >
        <div id='skill-icon' >
            <img src={iconUrl} alt={title}/>
            </div>
            <span className='text-[1.3rem] font-medium'>{title}</span>
            </div>
  )
}



