alert("Dada uma sequência de números inteiros não-nulos, seguida por 0, imprimir seus quadrados")
let x = parseInt(prompt("Digite um numero."));
while (x != 0) {
    quadrado = x * x;
    document.write(`O quadrado de ${x} é ${quadrado}<br>`)
     x = parseInt(prompt("Digite um numero:"))
}