let n = 5;
let middle = (n+1)/2;
let controlLeft = middle;
let controlRight = middle;
let symbol = "*";

//dividindo o problema em partes pequenas (primeiro fazer as linhas, depois as colunas, depois separar cada coisa em cada coluna)


for (let line = 0; line < middle; line+=1) { //aqui é a linha sendo formada - o loop se encerra em 22
    let output = " "; //aqui pra resetar a variavel
    for (let col = 1; col <= n; col+=1) { //criação das colunas - loop se encerra em 18
        if (col == controlLeft || col == controlRight || line == middle -1) {//considerando que a linha tem n colunas, para imprimir * ou espaço necessita desse if)
            output += symbol; //aqui imprime *     
        } else {
            output += " "; //aqui imprime espaço
        }
    }
        controlLeft -=1//diminuindo porque a coluna de impressão vai direcionando para esquerda
        controlRight +=1//aumentando porque a coluna de impressão vai direcionando para a direita
        console.log(output);//imprime a linha criada
    } //encerra o for maior e passa para a linha 2



