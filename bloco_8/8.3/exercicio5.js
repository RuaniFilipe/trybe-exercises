
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {  
  let contador = 0
  const retorno = names.reduce((acumulator, name) => acumulator + name) 
  for (let i = 0; i < retorno.length; i+=1){    
    if (retorno[i] === 'a' || retorno[i] === 'A')
    contador += 1    
  }
  return contador
  }

assert.deepEqual(containsA(), 20);