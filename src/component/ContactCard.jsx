import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@mui/material';
import { LinkedIn, WhatsApp, Email, GitHub } from '@mui/icons-material';

const ContactCard = ({
  iconLink: { 
    to='https://github.com/lucasjobviana/', 
    altText='Link para ', 
    urlIcon='https://cdn-icons-png.flaticon.com/512/38/38401.png', 
    nameIcon= 'LinkedIn',
    className='' 
}}) =>  {
  const iconMap =  {LinkedIn:<LinkedIn />, GitHub:<GitHub />, Email:<Email />,WhatsApp:<WhatsApp/>}
  return (   
    <Button sx={{flexWrap:'wrap', justifyContent:'center', alignItems:'center'}} fullWidth variant='contained' size="small" startIcon={iconMap[nameIcon]} href={to} target='_blank'>{nameIcon}</Button>
    // <a href= { to } >
    //   <img src={ urlIcon } alt={ altText } className={ className } />
    // </a>  
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
