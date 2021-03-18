//Dataset
const div = document.querySelector('[data-cor]');
console.log(div.dataset.cor);//acesso direto a cor da minha propriedade

//add nova propriedade:
div.dataset.height = 100;

//deletar propriedade:
delete div.dataset.width;

//no DOMStringMap remove os traços
div.dataset.totalHeight = 300;


//EXERCICIOS

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
