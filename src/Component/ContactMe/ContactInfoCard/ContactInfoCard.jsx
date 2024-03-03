import React from 'react'
import "./ContactInfoCard.css"
const ContactInfoCard = ({iconUrl,text}) => {
  return (
   <div id="contact-details-card">
    <div id="icon">
        <img src={iconUrl} alt={text}/>
    </div>
    <p>{text}</p>
   </div>
  )
}

export default ContactInfoCard