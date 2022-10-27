alert("Construa um programa que receba um número e verifique se ele é um número triangular.(Um número é triangular quando é resultado do produto de três números consecutivos.Exemplo: 24 = 2 x 3 x 4");
let valor = parseInt(prompt("Digite um valor: "));
x = 1;
cont=1;
while(x < valor){
    x = cont * (cont+1)*(cont+2);
    cont++;
}
cont-- ;
if(x == valor){
    alert("É um valor triangular. ");
}else{
    alert("Não é triangular.");
}