import React from 'react';
import '../style/Projects.css';

const Projects = () => {
  return (
    <div className='app'>
      <div className='Projects page'>
        projects
        <button onClick={() => {
          console.log('clickei');
        }}>proxima</button>
      </div>
    </div>
  );
}

export default Projects;