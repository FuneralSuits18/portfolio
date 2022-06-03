import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mahir Tahmid</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><ImFacebook /></a>
        <a href="https://linkedin.com"><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mahir Tahmid. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer