import { useRef, useState } from "react";
import React from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (event) => {
    // console.log("handleSubmit ran");
    // 👈️ prevent page refresh
    // event.preventDefault();

    // 👇️ access input values here
    // alert("Thanks I will reach out to you soon");
    // console.log("firstName 👉️", firstName);
    // console.log("lastName 👉️", lastName);

    // 👇️ clear all input values in the form

    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // alert("Thanks I'll Reach out to you soon ")

    emailjs
      .sendForm("service_dn8lhag", "template_tcnuuzd", form.current, {
        publicKey: "rDDhQVzMM8QB-3VVb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div id="name-container">
          <input
            id="first-name"
            type="text"
            name="user_name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            placeholder="First Name"
          />

          <input
            id="last-name"
            type="text"
            name="user_last"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            placeholder="Last Name"
          />
        </div>
        <input
          id="Email"
          type="text"
          name="user_email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={Email}
        />
        <textarea
          type="text"
          id="message"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          value={Message}
          placeholder="Message"
          rows={3}
        />
        <button onSubmit={sendEmail} onClick={handleSubmit}>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
