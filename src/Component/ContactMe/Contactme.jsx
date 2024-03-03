import React from 'react'
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';


const ContactMe = () => {
  return (
    <section id='contact-container'>
        <h5>Contact Me</h5>

        <div id="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard 
                 iconUrl="./Assests/images/Mail.png"
                 text="piyushtak333@gmail.com"
                />
                <ContactInfoCard 
                 iconUrl="./Assests/images/GitHub.png"
                 text="https://github.com/Piyushtak01"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe