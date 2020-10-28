let pecasXadrez = "RAINHA";
let escolha = pecasXadrez.toLowerCase();
let conjunto = ["peao","torre","cavalo","bispo","rainha","rei"] 

if (escolha == conjunto[0]){
    console.log("peão -> uma casa à frente; podendo andar duas à frente se movimento inicial")
} else if (escolha == conjunto[1]){
    console.log("torre -> ando para qualquer casa nas verticais e horizontais, desde que não tenha aliados no caminho")
} else if (escolha == conjunto[2]){
    console.log("cavalo -> ando em L, posso passar por cima de meus aliados")
} else if (escolha == conjunto[3]){
    console.log("bispo -> ando para qualquer casa nas diagonais, desde que não tenha aliados no caminho")
} else if (escolha == conjunto[4]){
    console.log("rainha -> ando para qualquer casa em qualquer direção, desde que não tenha aliados no caminho")
} else if (escolha == conjunto[5]){
    console.log("rei -> ando em qualquer direção, mas apenas de uma casa por vez e não pulo meus aliados")
} else {
    console.log("isso não é dama ou gamão xD")
}






