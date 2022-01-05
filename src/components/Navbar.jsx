import React from 'react'
import logo from '../img/logo.png'

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={logo} alt="IT Brains" className='logo' /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About me </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">services</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#">Experince</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#">contact us</a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
    )
}

export default Navbar
