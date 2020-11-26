function fatorial(n) {  
  let retorno = 1;  
  for (let i = n; i > 0; i--) {       
    retorno *= i;  
  }
  console.log(retorno)
}
fatorial(4);