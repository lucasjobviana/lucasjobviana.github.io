import React from 'react'
import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux'; 
 
const ProjectConteiner = () => {
  const { user: { iconLinks } } = useSelector((store) => store);
  const { project: {projects} } = useSelector((store) => store);
  console.log(projects)
  console.log(iconLinks);
 
  return (
    <div className='projects-container'>{
      projects.map((p,index)=>(
        <ProjectCard key={`project${index}`} project={p}  />
      ))
    }
      
    </div>
  )
}

export default ProjectConteiner;

// {iconLinks.map((a, index) => (
      //   <ProjectCard key={index} iconLink={iconLinks[index]} />
      // ))}