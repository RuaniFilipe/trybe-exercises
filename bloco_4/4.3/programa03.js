let x = 5;
let triangulo = "";

for (index = 1; index <= x; index += 1) {
  triangulo = "";

  for (indexS = x; indexS > index; indexS -= 1) {
    triangulo += " ";
  }

  for (indexA = 0; indexA < index; indexA += 1) {
    triangulo += "*";
  }
  console.log(triangulo);
}
