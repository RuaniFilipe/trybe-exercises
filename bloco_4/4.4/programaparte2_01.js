function verificaPalindrome(palavraInput) {
  let palavraNormal = [];
  let palavraInvertida = [];

  for (let i = 0; i < palavraInput.length; i += 1) {
    palavraNormal += palavraInput[i];
  }

  for (let j = palavraNormal.length - 1; j >= 0; j -= 1) {
    palavraInvertida += palavraNormal[j];
  }
  if (palavraInvertida == palavraNormal) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindrome("arara")