import React from 'react';

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

export default ContactCard;
