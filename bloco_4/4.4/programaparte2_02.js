function maiorIndice (arrayInput){

for (let i = 0; i < arrayInput.length-1; i+=1){
    if (arrayInput[i]>arrayInput[i+1]){
       console.log([i]); 
}
}

}

maiorIndice([2,3,6,7,10,1])