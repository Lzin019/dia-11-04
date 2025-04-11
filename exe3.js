let soma = 0;
let contador = 1;
let numerosusados = 0;
while (soma < 40) {
    soma += contador;
    numerosusados++;
    contador++;
}
console.log(`soma final: ${soma}`);
console.log(`numeros usado: ${numerosusados}`);