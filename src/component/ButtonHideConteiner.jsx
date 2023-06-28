import React, { useState } from 'react';
import '../style/BtnHideConteiner.css'

const ButtonHideConteiner = () => {

    const [icon, setIcon] = useState({icon:'◀',text:'hide'});
     

    const toogleIcon = () => {
        const conteiner = document.querySelector('.Header');
        console.log(conteiner)
       // conteiner.classList.toggle('disabled');
        if(icon.icon === '◀'){
            setIcon({icon:'▶',text:'hidw'})
            conteiner?.classList.remove('enabled')
            conteiner?.classList.add('disabled')
        }else if(icon.icon === '▶' ){
            setIcon({icon:'◀',text:'hide'});
            conteiner?.classList.remove('disabled')
            conteiner?.classList.add('enabled')
        }
        
        
         
    }

    const handleClick = () => {
        toogleIcon();
    }
    return (
      <button className='btn-hide-conteiner' onClick={ handleClick }>   
         
        <h1>{ icon.icon }</h1>
         
      </button>
    )
}

export default ButtonHideConteiner;
