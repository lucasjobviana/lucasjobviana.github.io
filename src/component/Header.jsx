import React from 'react';
import ContactConteiner from './ContactConteiner';
import ToolsConteiner from './ToolsConteiner';
import NameConteiner from './NameConteiner';
import NavConteiner from './NavConteiner';

import '../style/Header.css';

const Header = () =>  {
  return ( 
    <header className="Header">   
      <NameConteiner />
      <ContactConteiner />
      <ToolsConteiner />
      <NavConteiner />
    </header>
  )
}

export default Header;
