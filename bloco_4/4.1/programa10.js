let preco = 300;
let imposto = (preco * 20)/100;
let custoProduto = preco + imposto;
let valorVenda = 200;

let lucro = valorVenda - custoProduto

if (custoProduto > valorVenda) {
    console.log ("você perdeu dinheiro")
} else {
    console.log ("você lucrou ", lucro, " reais")
}
