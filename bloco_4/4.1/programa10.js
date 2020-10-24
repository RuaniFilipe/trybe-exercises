let custoInicial = 300;
let imposto = (custoInicial * 20)/100;
let custoProduto = custoInicial + imposto;
let valorVenda = 400;

let lucro = valorVenda - custoProduto

if (custoProduto > valorVenda) {
    console.log ("você perdeu dinheiro")
} else {
    console.log ("você lucrou ", lucro, " reais")
}
