import React from 'react';
import PropTypes from 'prop-types';
import githubIcon from '../img/github.png';
import externalIcon from '../img/external.png'
 
const ProjectCard = ({
  project: { title , description, urlProject, urlRepository, urlImage}
  }) =>  {
  return (  
     <div className='project-card'>
      <div className='project-card-header'>
      <h3>{title}</h3>
      <h4>{description}</h4>
        </div>
      
       
      <img src={urlImage} alt={`imagem do projeto ${title} `} />
      <div className='links-containner'>
      <a href={urlProject}><img src={externalIcon} alt="Link para o projeto no github." /></a>
      <a href={urlRepository}><img src={githubIcon} alt="Link para o projeto no github." /></a>

      </div>
     
     
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