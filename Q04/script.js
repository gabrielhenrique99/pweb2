alert("Dado um inteiro não-negativo n, determinar n!");
let n = parseInt(prompt("informe um número inteiro não negativo: "));
fatorial = 1;
cont = 2;
while (cont <= n) {
    fatorial = fatorial * cont;
    cont++;
}
document.write("o valor de " + n + " fatorial é: " + fatorial);