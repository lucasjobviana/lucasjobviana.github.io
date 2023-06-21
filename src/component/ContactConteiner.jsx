import React from 'react'

const ContactConteiner = () =>  {
  return (
    <div className='Header-contact-container'>
        <a href="https://github.com/lucasjobviana/">
          <img className="i" src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt="Link para o github do autor.  " />
        </a>

        <a href="https://br.linkedin.com/in/lucasjobviana">
          <img src="https://cdn-icons-png.flaticon.com/512/2175/2175195.png" alt="Link para o linkdin do autor." />
        </a>

        <a href="https://api.whatsapp.com/send?phone=5544999177463&text=Oi%20Job,%20tudo%20certo?">
          <img src="https://cdn-icons-png.flaticon.com/512/5969/5969035.png" alt="Link para o whatsapp do autor." />
        </a>

        <a href="mailto:lucasjobvianna@gmail.com?subject=&body=">
          <img src="https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-213.png" alt="Link para enviar um email para o autor." />
        </a>
      </div>
  )
}

export default ContactConteiner;
