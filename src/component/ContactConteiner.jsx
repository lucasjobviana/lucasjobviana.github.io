import React from 'react'
import ContactCard from './ContactCard';
import { useSelector } from 'react-redux';

const ContactConteiner = () => {
  const { user: { iconLinks } } = useSelector((store) => store);
  console.log(iconLinks);

  return (
    <>{  
      // import ContactConteiner from './ContactConteiner';
      iconLinks.map((a, index) => (
        <ContactCard key={index} iconLink={iconLinks[index]} />
      ))}
    </>
  )
}

export default ContactConteiner;
