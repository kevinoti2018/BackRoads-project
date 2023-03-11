import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.svg'
import { FaTwitter,FaFacebook,FaWhatsapp } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
      <a href="#home">
        <img src={logo} className="nav-logo" alt="backroads" /></a>
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      <ul className="nav-links" id="nav-links">
        <li>
          <a href="#home" className="nav-link"> home </a>
        </li>

        <li>
          <a href="#about" className="nav-link"> about </a>
        </li>

        <li>
          <a href="#services" className="nav-link"> services </a>
        </li>

        <li>
          <a href="#tours" className="nav-link"> tours</a>
        </li>
      </ul>

      <ul className="nav-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><FaFacebook/></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><FaTwitter/></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><FaWhatsapp/></a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar