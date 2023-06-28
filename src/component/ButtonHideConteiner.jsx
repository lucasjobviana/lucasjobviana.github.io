import React, { useState } from 'react';
import '../style/BtnHideConteiner.css'

const ButtonHideConteiner = () => {

    const [icon, setIcon] = useState('◀');

    const toogleIcon = () => {
        const conteiner = document.querySelector('.Header');
        console.log(conteiner)
       // conteiner.classList.toggle('disabled');
        if(icon === '◀'){
            setIcon('▶')
            conteiner?.classList.remove('enabled')
            conteiner?.classList.add('disabled')
        }else if(icon === '▶' ){
            setIcon('◀');
            conteiner?.classList.remove('disabled')
            conteiner?.classList.add('enabled')
        }
        
        
         
    }

    const handleClick = () => {
        toogleIcon();
    }
    return (
      <button className='btn-hide-conteiner' onClick={ handleClick }> 
        { icon }
      </button>
    )
}

export default ButtonHideConteiner;
