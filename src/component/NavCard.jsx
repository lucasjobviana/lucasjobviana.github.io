import React from 'react';
import PropTypes from 'prop-types';

const NavCard  = ({
  buttonNav: { 
    to='/', 
    labelText='Home', 
    handleClick=()=>{alert('');} 
}})  => { 
    return (
        <button value={ to } onClick={(a)=>{handleClick(a);}}> { labelText }</button>
    )
}

NavCard.propTypes = {
	buttonNav: PropTypes.shape({
  to: PropTypes.string,
		labelText: PropTypes.string,
		handleClick: PropTypes.func
	}).isRequired
}

export default NavCard;
