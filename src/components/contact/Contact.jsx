import React from 'react'
import './Contact.css'
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hq0jhjp', 'service_hq0jhjp', form.current, 'Yp2P0brDomcq7BzYp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <h4>Email</h4>
            <h5>dasdebaditya@outlook.com</h5>
            <a href="mailto:dasdebaditya@outlook.com">Send a message</a>
          </article>

          <article className="contact_option">
            <h4>Facebook</h4>
            <h5>debadityadas1999</h5>
            <a href="https://www.facebook.com/DebadityaDas1999/">Visit</a>
          </article>

          <article className="contact_option">
            <h4>Phone/Whatsapp</h4>
            <h5>+91 8250891290</h5>
            <a href="">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" required>Your message</textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact