// import { SAVE_USER, saveUser } from '../action'

const INITIAL_STATE = {
  email: 'lucasjobvianna@gmail.com',
  iconLinks: [{
    to: 'https://github.com/lucasjobviana/',
    urlIcon: 'https://cdn-icons-png.flaticon.com/512/38/38401.png',
    nameIcon: 'GitHub',
    altText: 'Link para o github do autor.',
    className: 'i'
  }, {
    to: 'https://br.linkedin.com/in/lucasjobviana',
    urlIcon: 'https://cdn-icons-png.flaticon.com/512/2175/2175195.png',
    nameIcon: 'LinkedIn',
    altText: 'Link para o linkdin do autor.'
  }, {
    to: 'https://api.whatsapp.com/send?phone=5544999177463&text=Oi%20Job,%20tudo%20certo?',
    urlIcon: 'https://cdn-icons-png.flaticon.com/512/5969/5969035.png',
    nameIcon: 'WhatsApp',
    altText: 'Link para o whatsapp do autor.'
  }, {
    to: 'mailto:lucasjobvianna@gmail.com?subject=&body=',
    urlIcon: 'https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-213.png',
    nameIcon: 'Email',
    altText: 'Link para enviar um email para o autor.'
  }],
  buttonsNav: [{
    to: '/',
    labelText: 'Home',
  }
  // , {
  //   to: '/about',
  //   labelText: 'Sobre',
  // }
  , {
    to: '/projects',
    labelText: 'Projetos',
  }
  // , {
  //   to: '/tools',
  //   labelText: 'Feramentas',
  // }
]
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '':
    default:
      return state;
  }
};

export default user;