import React from 'react';
import job from '../img/lucas-job-viana.jpg';


const NameConteiner = () => {
console.log(job)
    return (
        <div className='Header-name-container'>
        <h1>Full Stack </h1>
        <img src={job} alt="logo" />
        <h1>Lucas Job Viana</h1>
      </div> 
    )
}

export default NameConteiner;
