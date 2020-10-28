let n = [];
for (let i = 1; i <= 25; i++) {
  n.push(i);
}
console.log(n);

for (let i = 0; i <= n.length; i++) {
  console.log("A divisão de ", i, "por 2 é igual a:", i / 2);
}

for (let i = 0; i <= n.length; i++) {
    console.log("Dividindo ", i, "por 2, tem resto igual a: ", i % 2);
  }
