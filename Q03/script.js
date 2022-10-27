alert("Dados um inteiro x e um inteiro não-negativo n, calcular x^n.")
let x;
let n;
let potenciacao;
  x = prompt("Informe a base:");
  n = prompt("Informe o expoente (Obs: não pode ser negativo):");
  
  potenciacao = x ** n;

  document.write(x + "elevado a " + n + " = " + potenciacao);