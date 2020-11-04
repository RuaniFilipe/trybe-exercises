function menorIndice (arrayInput){
    let menor = [];

    for (let i = 0; i < arrayInput.length-1; i+=1){
        menor.push(arrayInput[i])
    }
    menor.sort(function(a, b){
        return a-b;
    });   
    console.log(menor[0])
} 
menorIndice ([2,4,6,7,10,1,-3])
