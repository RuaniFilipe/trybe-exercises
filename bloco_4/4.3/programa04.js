let n = 5;
let middle = (n+1)/2;
let controlLeft = middle;
let controlRight = middle;
let symbol = "*";
for (let line = 0; line < middle; line+=1) {
    let output = " ";
    for (let col = 1; col <= n; col+=1) {
        if (col < controlLeft || col > controlRight) {
            output += " ";      
        } else {
            output += symbol;
        }
    }
        controlLeft -=1
        controlRight +=1
        console.log(output);
    } 



