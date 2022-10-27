let n1 = parseInt(prompt("Informe a N1:"))
let n2 = parseInt(prompt("informe a N2:"))
let n3 = parseInt(prompt("informe a N3:"))
let n4 = parseInt(prompt("informe a N4:"))
let n5 = parseInt(prompt("informe a N5:"))

let calculo = (n1+n2+n3+n4+n5)/5

if (n1>=7 && n2>=7 && n3>=7 && n4>=7 && n5>7){
    document.write("Parabéns, passou em todos os exames e sua média é: " + calculo);
}
else if (n1>=7 && n2>=7 && n3<7 && n4>=7 && n5<7){
    document.write("Parabéns, você passou nos exames 01, 02 e 04, mas não passou nos 03 e 05. Sua média é: " + calculo);
}
else if (n1>=7 && n2>=7 && n3>=7 && n4>=7 && n5<7){
    document.write(" Parabéns, você passou nos exames 01, 02, 03 e 04, mas infelizmente não passou no 05. A sua média é: " + calculo);
}
else{
    document.write("Que pena! Reprovado, sua média é: " + calculo);
}