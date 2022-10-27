let anos=parseInt(prompt("Há quantos anos você é fumante?"));
let quantidade= parseInt(prompt("Quantos cigarros você fuma por dia?"));
let valorCarteira= parseFloat(prompt("Quanto custa uma carteira da marca que você fuma?"));

let valorUnitario = valorCarteira/20;
let valorDiario = quantidade * valorUnitario;
let tempoTotal = anos * 365;
let valorTotal = tempoTotal * valorDiario;
alert("Dinheiro gasto durante todo o tempo de fumante: R$ "+ valorTotal + ",00");
alert("PARE DE FUMAR!");