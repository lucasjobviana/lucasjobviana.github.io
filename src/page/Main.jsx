import React from 'react'
import '../style/Main.css';

const Main = () => {
  return (
    <main className='Main page'>
      <div className='Main-title typewriter'>
        <h1 className="animation-text" >Olá, meu nome é Job! </h1>
        <h1 className="animation-text" >Desenvolvedor Full Stack! </h1>
      </div>
       
        <div className='formation typewriter'>
          <h1 className="animation-text" >Formação:</h1>
          <h1 className="animation-text" >Unirp - Ciência da computação.</h1>
          <h1 className="animation-text" >Trybe - Desenvolvimento Web - Full Stack</h1>
        </div>

        <div className='knowledge typewriter'>
         <ul className="animation-text" >Conhecimentos:
          <li className="animation-text" >Javascript, React, Typescript.</li>
          <li className="animation-text" >NodeJS, Java, C##.</li>
          <li className="animation-text" >Docker, ORM - Sequelize, AWS.</li>
        </ul>
        
        </div>
    </main>
  );
}

export default Main;
