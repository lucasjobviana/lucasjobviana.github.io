import React from 'react';
import PropTypes from 'prop-types';
 

const ContactCard = ({
  iconLink: { 
    to='https://github.com/lucasjobviana/', 
    altText='Link para ', 
    urlIcon='https://cdn-icons-png.flaticon.com/512/38/38401.png', 
    className='' 
}}) =>  {
  return (  
    <a href= { to } >
      <img src={ urlIcon } alt={ altText } className={ className } />
    </a>  
  );
}

ContactCard.propTypes = {
  iconLink: PropTypes.shape({
    to: PropTypes.string,
    altText: PropTypes.string,
    urlIcon: PropTypes.string,
    className: PropTypes.string
  }).isRequired
}
export default ContactCard;
