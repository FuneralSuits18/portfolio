import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import {SiKaggle} from 'react-icons/si'
import {SiTableau} from 'react-icons/si'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <SiKaggle className='about__icon' />
              <h5>Kaggle</h5>
              <small>I make notebooks :)</small>
            </article>

            <article className='about__card'>
              <SiTableau className='about__icon' />
              <h5>Tableau</h5>
              <small>I make visuals :)</small>
            </article>

            <article className='about__card'>
              <SiKaggle className='about__icon' />
              <h5>¯\_(ツ)_/¯</h5>
              <small>I make ¯\_(ツ)_/¯</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, veritatis amet maiores distinctio fugit temporibus quas tempora, esse assumenda sequi nobis aliquam error inventore sapiente accusantium vel nulla quaerat nesciunt!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about