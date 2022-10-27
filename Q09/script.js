let n = parseInt(prompt("Informe um número:"));
cont = 0;
for (let i = 2; i <= n/2; i++) {
    if (n % i == 0) {
        cont++;
    }   
}
if (cont == 0) {
    document.write(n + " é um número primo ");
}else
    document.write(n + " não é um número primo " );