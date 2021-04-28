// 1 Acessar a janela (browser)
// 2 Acessar HTML todo
// 3 Pegar botão
// 4 Saber que o click do botão está funcionando

// 5 Acessar a janela (browser)
// 6 Pegar HTML todo
// 7 Pegar o elements - window.document.querySelector('.elements') / não precisa do "window"
// 8 Mover o elements para direita

// saber se o arquivo js está sendo carregado
// alert('troll') 

// constante = html.seletor de tag. (classe)
const buttonRight = document.querySelector('.button-arrow.-right'); 
const elements = document.querySelector('.elements');
let pixels = 100  // "constante" que o valor pode ser alterado

// função que será acionada quando houver o click no botão. [('evento'), function(){função}] 
buttonRight.addEventListener('click', function() { 
    pixels = pixels + 100
    elements.style = `transform: translateX(${pixels}px);`; // ``string que não precisa do + para concatenar / ${variável} - para pegar variável
})




