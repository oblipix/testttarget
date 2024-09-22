function contarLetraA(string) {
    const regex = /a/gi; // 'i' para ignorar maiúsculas/minúsculas
    const ocorrencias = string.match(regex);

    if (ocorrencias) {
        console.log(`A letra 'a' aparece ${ocorrencias.length} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// Exemplo de uso
const texto = "A programação é uma arte.";
contarLetraA(texto);
