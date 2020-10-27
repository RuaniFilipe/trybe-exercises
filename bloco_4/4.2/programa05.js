let numbers = [5,9,3,19,70,8,100,2,35,27];
let maior = []

for (let i = 0; i < numbers.length; i++){
       maior.push(numbers[i]);
}
maior.sort(function(a, b){
    return a-b;
});

console.log(maior[maior.length-1]);
