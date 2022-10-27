alert("Dado um número inteiro positivo n, calcular a soma dos n primeiros números inteiros positivos.")
let x;
let soma=0;
x = parseInt(prompt("Digite um número: "));
while (x>=1) {
    soma = soma + x;
    x = x - 1;   
}
document.write("A soma dos números é igual a "+soma);