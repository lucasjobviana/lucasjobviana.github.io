import React from 'react';
import PropTypes from 'prop-types';
 
const ProjectCard = ({
  project: { title , description, urlProject, urlRepository, urlImage}
  }) =>  {
  return (  
     <div className='project-card'>
      <h3>{title}</h3>
      <h4>{description}</h4>
       
      <img src={urlImage} alt={`imagem do projeto ${title} `} />
      <a href={urlProject}>Deploy</a>
      <a href={urlRepository}>Repositório</a>
     
     </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    urlProject: PropTypes.string,
    urlImage: PropTypes.string,
    urlRepository: PropTypes.string
  }).isRequired
}
export default ProjectCard;


{/* <a href= { to } >
      <img src={ urlIcon } alt={ altText } className={ className } />
    </a>  */}