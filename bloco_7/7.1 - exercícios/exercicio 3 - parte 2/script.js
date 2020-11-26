const botao = document.getElementById('botao');
const visor = document.getElementById('mostrador');
let cliques = 0 

botao.addEventListener('click', function(){
  cliques += 1;
  visor.innerHTML = `Você clicou ${cliques} vezes`; 
})