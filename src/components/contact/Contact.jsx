import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_abw6ama', 'template_e4acafq', form.current, 'lDWTGKl8ec5N9q9B1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiTwotoneMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mahirtahmid@gmail.com</h5>
            <a href="mailto:mahirtahmid@gmail.com" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact