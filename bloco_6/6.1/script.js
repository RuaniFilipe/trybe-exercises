let comboEstados = document.querySelector('#states');

let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

for (i = 0; i < estados.length; i+=1){
  let option = document.createElement("option")
  option.innerHTML = estados[i]
  option.value = estados[i]
  comboEstados.appendChild(option);
}

{/* <label for="date">Data:</label><br/>
    <input type="text" id="date" name="data" maxlength="10" required><br/> */}


function validacaoData (){
  let inputData = document.querySelector("#date")
  let data = inputData.value;
  let dataArray = data.split('/');
  let dia = parseInt(dataArray[0]);
  let mes = parseInt(dataArray[1]);
  let ano = parseInt(dataArray[2]);

  if (!(dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0)){
    inputData.className = 'error'
    return('Data inválida!')
  }  
  return '';
}

let botaoEnviar = document.querySelector("#submit");
botaoEnviar.addEventListener("click", function(event){
  event.preventDefault();
  let erro;
  let erros = '';
  erro = validacaoData()
  if (erro != ''){
    erros += `${erro}\n`
  }
  
  let inputsText = document.querySelectorAll("input[type=text], textarea");
  for (let i = 0; i < inputsText.length; i+=1){
    let input = inputsText[i];
    if (input.required){
      if(input.value === ''){
        inputData.className = 'error'
        erros += `O campo ${input.name} é obrigatório\n`;
      }
      if(input.minlength && input.value.length < input.minlength){
        inputData.className = 'error'
        erros += `O campo ${input.name} deve possuir no mínimo ${input.minlength} caracteres\n`;
      }
    }
  }
  alert(erros);
})
