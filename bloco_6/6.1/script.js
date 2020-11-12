document.getElementById('btnCarregar').onclick = function() {
let comboEstados = document.createElement('option');

let estados = ["", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

for (i = 0; i < estados.length; i+=1){
  comboEstados = estados[i];
  console.log(comboEstados)
}
}
