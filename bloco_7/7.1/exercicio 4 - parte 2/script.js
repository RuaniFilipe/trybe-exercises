function exercicio(str){  
  let string = 'Tryber x aqui!'
  for (let i=0; i < string.length; i++)
    if (string[i] === 'x'){
      let retorno = `Tryber ${str} aqui!`
      return(retorno)
  }  
}

exercicio('Ruâni')

function dois(retorno){ 
  const arraySkills = ['JS', 'CSS', 'HTML', 'Eventos', 'Funções']

  arraySkills.sort()

  console.log(`${retorno}
  Minhas cinco principais habilidades são: ${arraySkills}  
  #goTrybe`)
}

dois(exercicio('Ruâni'))