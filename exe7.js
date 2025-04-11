let total = 0;
let moedas = 0;
while (total < 12) {
    moedas++;
    total += 3;
    console.log(`Passo ${moedas}: Total = ${total} reais`);

}
console.log(`Total de moedas: ${moedas}`);