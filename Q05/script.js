alert("Dados dois números inteiros positivos, determinar o máximo divisor comum entre eles usando o algoritmo de Euclides.");
let x = parseInt(prompt('Digite o primeiro numero: '));
let y = parseInt(prompt('Digite o segundo numero: '));

if(x >= 1 && y >= 1) {
  
    while(y != 0){
        var e = x % y;
        x = y;
        y = e;
    }
    document.write(x);
  
} else {
  document.write('Digite um valor inteiro positivo!');
}