alert("Dados três números, imprimi-los em ordem crescente.");
let n1 = parseInt(prompt(" Digite um numero:"));
let n2 = parseInt(prompt(" Digite um segundo numero:"))
let n3 = parseInt(prompt(" Digite um terceiro numero:"))

if (n1 <= n2 && n2 <= n3) {
    document.write("Os números em ordem crescente é: "+ n1 + " " ,n2 + " " , n3);    
}else if (n1 <= n3 && n3 <= n2) {
    document.write("Os números em ordem crescente é: "+ n1 + " " , n3 + " ", n2);    
    
}else if (n2 <= n1 && n1 <= n3) {
    document.write("Os números em ordem crescente é: "+ n2 + " " , n1 + " ", n3);    
}else if (n2 <= n3 && n3 <= n1) {
    document.write("Os números em ordem crescente é: "+ n2 + " ", n3 + " ", n1);    
    
}else if (n3 <= n1 && n1 <= n2) {
    document.write("Os números em ordem crescente é: "+ n3 + " ", n1 + " ", n2);    
    
}else if (n3 <= n2 && n2 <= n1) {
    document.write("Os números em ordem crescente é: "+ n3 + " " , n2 + " ", n1);    
    
}