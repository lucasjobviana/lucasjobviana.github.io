import React from 'react';
import ContactConteiner from './ContactConteiner';
import ToolsConteiner from './ToolsConteiner';
import NameConteiner from './NameConteiner';
import NavConteiner from './NavConteiner';

import '../style/Header.css';
import ButtonHideConteiner from './ButtonHideConteiner';

const Header = () =>  {
  return ( 
    <header className="Header disabled">   
    <div className="conteiner">
    <NameConteiner />
      <ContactConteiner />
      <ToolsConteiner />
      <NavConteiner />
    </div>
      
      <ButtonHideConteiner />
    </header>
  )
}

export default Header;
