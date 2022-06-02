import React from 'react'
import './skills.css'
import {ImRadioChecked} from 'react-icons/im'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>The Skills That I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>Boostrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <ImRadioChecked className='skills__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills