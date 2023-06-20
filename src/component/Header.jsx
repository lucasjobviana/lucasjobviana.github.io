import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/Header.css';

const Header = () =>  {
    return ( 
        <header className="Header">   
            <div className='Header-name-container'>
            <h1>Full Stack </h1>
                <img src="https://cdn-icons-png.flaticon.com/512/3097/3097037.png" alt="logo" />
                <h1>Lucas Job Viana</h1>
            </div> 
            <div className='Header-contact-container'>
                <img src="https://cdn-icons-png.flaticon.com/512/3097/3097037.png" alt="git-hub icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3097/3097037.png" alt="linkdin icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3097/3097037.png" alt="email icon" />
            </div>
            <div className='Header-tools-container'>
            <img src="https://cdn-icons-png.flaticon.com/512/3097/3097037.png" alt="language icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3097/3097037.png" alt="darkmode icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3097/3097037.png" alt="others icon" />
            </div>
            <div className='Header-nav-container'>
                <button>Home</button>
                <button>Projetos</button>
                <button>Ferramentas</button>
                <button>Sobre</button>
            </div>
          {/* <img src={logo} className="Header-react-logo" alt="logo" /> */}
        </header>
    )
}

export default Header;
