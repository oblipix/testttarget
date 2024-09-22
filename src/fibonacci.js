function fibonacci(num) {
    let a = 0, b = 1;
    const fib = [a, b];

    while (b < num) {
        const temp = b;
        b = a + b;
        a = temp;
        fib.push(b);
    }

    if (fib.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
const numero = 21; // Pode ser alterado para testar outros números
fibonacci(numero);
