let soma = 0;
let contador = 0;
let nota;

while (true) {
    nota = parseFloat(prompt("Digite uma nota (negativo para parar):"));

    if (nota < 0) {
        break;
    }

    soma += nota;
    contador++;
}

if (contador > 0) {
    let media = soma / contador;
    alert("Média das notas: " + media.toFixed(2));
} else {
    alert("Nenhuma nota válida foi digitada.");
}