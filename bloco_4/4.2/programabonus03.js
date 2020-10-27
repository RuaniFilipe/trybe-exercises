let numbers = [5,9,3,19,70,8,100,2,35,27];
let m = [];

for (let i = 0; i < numbers.length; i++){
    m.push(numbers[i]);
    }

let n = [];
    for (let i = 0; i < m.length; i++){    
        if (m[i]*m[i+1] == Number){
        n.push(m[i]*m[i+1])       
    }   else {
        n.push(m[i]*2)
    }
    }
console.log(n)