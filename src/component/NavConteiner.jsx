import React from 'react';
import NavCard from './NavCard';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const NavConteiner = () => {
  const { user: {buttonsNav} } = useSelector( (store) => store );
  const history = useHistory();
  console.log(buttonsNav)
  
  const handleClick = ({target: {value}}) => {
    history.push(value);
  }
    return (
      <div className='Header-nav-container'>
      {
      buttonsNav.map((button,index)=><NavCard key={ index } buttonNav={{to:button.to,labelText:button.labelText,handleClick}} />)
      }
      </div>
    )
}

export default NavConteiner;
