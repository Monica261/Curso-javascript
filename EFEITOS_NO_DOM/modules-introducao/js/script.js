import initScrollSuave from './modules/scroll-suave.js';
import InitAnimacaoScroll from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
//import { teste1, teste2} from './modules/teste.js';
import * as teste from './modules/teste.js';

initScrollSuave();
InitAnimacaoScroll();
initAccordion();
initTabNav();
//teste1();
//teste2();

//acesso por um objeto(está vindo de um obj direto):
teste.teste1()
teste.teste2()
console.log(teste.senha);