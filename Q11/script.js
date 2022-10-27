let n1 = parseInt(prompt("Digite um número:"))
let n2 = parseInt(prompt("Digite outro número:"))
let n3 = parseInt(prompt("Digite um terceiro número:"))

if ((n1 > n2 && n1 > n3) && n2 > n3) {
    soma = n1+n2;
}else if ((n1 > n2 && n1 > n3) && n3 > n2) {
    soma = n1 + n3;
}else if ((n2 > n1 && n2 > n3) && n1 > n3) {
    soma = n2 + n1;
}else if ((n2 > n1 && n2 > n3 ) && n3 > n1) {
    soma = n2 = n3;
}else if ((n3 > n1 && n3 > n2) && n1 > n2) {
    soma = n3 + n1;
}else if ((n3 > n1 && n3 > n2) && n2 > n1 ) {
    soma = n3 + n2;
}
document.write("A soma dos dois maiores números é: " + soma);