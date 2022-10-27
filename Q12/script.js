let n = parseInt(prompt("Informe um valor:"))

let ultimo = 1
let penultimo = 1
let cont = 3;

if (n === 1){
    alert("1");
} else if (n === 2){
    alert("1");
} else {
    while (cont <= n){
        let termo = ultimo + penultimo;
        penultimo === ultimo;
        ultimo === termo;
        cont++;
    }
    
    alert(termo);
}