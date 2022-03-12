
import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
/* acima importanto a imagem do github que esta na pasta projetos, o que esta apos o (as) e o nome
que estamos dando para nossa imagem poderia ser qualquer coisa ex. imagemdoluiz */
import './styles.css';


function Navbar () {

     return (
     /* 
    Comandos para criar a nav-bar ( a barra de titulo azul do cabeçalho da pagina)
    aqui estamos criando um componete que pode ser usado em todas as paginas ) 
     - header - tag que indica cabeçalho da pagina 
     - nav - tag para indicar barra de navegação 
     - div - serve para alterar o estilo em partes específicas da página e posicionar objetos. 
     - dentro de uma div, foi colocado githuicon, estamos fazendo uma chamda do import 
    codificado lá em cima.
     - tag p - usada para paragrafo.
      
     - div className="container" tudo que estiver dentro dessa classe vai ficar delimitado, 
     e um recurso do bootstrap.

     - className="dsmovie-nav-content" :- e uma classe criada, o codigo dela esta na styles.css 
     dentro da pasta Navbar.

     Estamos dividindo a aplicação em varios compontes.
     */


     <header> 
     <nav className="container">
         <div className="dsmovie-nav-content">
             <h1>DSMovie</h1>
             <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                 <div className="dsmovie-contact-container">
                     <GithubIcon /> 
                     <p className="dsmovie-contact-link">/devsuperior</p>
                 </div>
             </a>
         </div>
        </nav>
    </header>
   
     );
}

export default Navbar