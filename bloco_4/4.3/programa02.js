let x = 5;
let y = 5;
let linhas = "";

for (let indexX = 1; indexX <= x; indexX+=1){
    for (let indexY = 1; indexY <= y; indexY+=1){
        console.log(linhas += "*")
    }
    console.log("")
    break         
}


// ou 
// let x = 5;
// let linhas = "";

// for (let indexX = 1; indexX <= x; indexX+=1){
//     console.log(linhas += "*")
// }
