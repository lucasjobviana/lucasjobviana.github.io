import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NavConteiner = () => {
  const history = useHistory();

  const handleClick = ({target: {value}}) => {
    console.log(value)
    history.push(value);
  }
    return (
      <div className='Header-nav-container'>
        <button value='/' onClick={(a)=>{handleClick(a);}}>Home</button>
        <button value='/projects' onClick={(a)=>{handleClick(a);}}>Projetos</button>
        <button value='/tools' onClick={(a)=>{handleClick(a);}}>Ferramentas</button>
        <button value='/about' onClick={(a)=>{handleClick(a);}}>Sobre</button>
      </div>
    )
}

export default NavConteiner;
