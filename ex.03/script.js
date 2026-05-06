let total = 0;
let valor;

while (true) {
    valor = parseFloat(prompt("Digite o valor da compra (0 para finalizar):"));

    if (valor === 0) {
        break;
    }

    total += valor;
}

alert("Total da compra: R$ " + total.toFixed(2));