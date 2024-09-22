function calcularSoma(indice) {
    let soma = 0;
    let k = 1;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    return soma;
}

// Exemplo de uso
const indice = 12;
const resultado = calcularSoma(indice);
console.log(`O valor da variável SOMA é: ${resultado}`);
