// import { SAVE_USER, saveUser } from '../action'
// const {worktask}  = import('../../img/worktask.png')
import worktaskIMG from '../../img/task1.png';
import kofIMG from '../../img/kof1.png';
import pokerIMG from '../../img/poker1.png';
import blogIMG from '../../img/blog.png';
 
const INITIAL_STATE = {
    projects: [{
        title: 'Lista de Tarefas',
        description: 'Gerenciador de lista de tarefas',
        tecnologies: ['React - Componentes Funcionais', 'ContextAPI', 'Mysql', 'HTML', 'CSS', 'NodeJS', 'Express', 'Docker'],
        urlImage: worktaskIMG,
        urlProject: 'https://lucasjobviana.github.io/j_worktask/#/',
        urlRepository: 'https://github.com/lucasjobviana/j_worktask',
    },{
      title: 'Trunfo - KOF',
      description: 'Jogo de trunfo com personagens do jogo The King of Fighters',
      tecnologies: ['React', 'Redux', 'HTML', 'CSS'],
      urlImage: kofIMG,
      urlProject: 'https://lucasjobviana.github.io/kof/',
      urlRepository: 'https://github.com/lucasjobviana/kof',
  },{
    title: 'Poker Counter',
    description: 'Contador de pontos para uma partida de poker',
    tecnologies: ['React', 'Redux', 'HTML', 'CSS'],
    urlImage: pokerIMG,
    urlProject: 'https://lucasjobviana.github.io/poker-counter/',
    urlRepository: 'https://github.com/lucasjobviana/poker-counter',
},{
  title: 'Post Manager',
  description: 'Gerenciador de postagens para blog',
  tecnologies: ['React - Conponentes Funcionais', 'ContextAPI', 'Mysql', 'HTML', 'Material UI', 'NodeJS', 'Express', 'Docker'],
  urlImage: blogIMG,
  urlProject: 'https://lucasjobviana.github.io/j_blogposts/',
  urlRepository: 'https://github.com/lucasjobviana/j_blogposts',
}],
};

  const project = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case '':
      default:
        return state;
    }
  };
  
  export default project;