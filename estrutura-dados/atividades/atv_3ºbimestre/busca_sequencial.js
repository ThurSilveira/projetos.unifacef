const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

const numeros = [5, 1, 2, 6, 9, 5, 8, 6, 5, 4, 3, 2, 0, 9, 7];

function buscaSequencial(vetor, valorBusca) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === valorBusca) {
            return i;
        }
    }
    return -1;
}

console.log(buscaSequencial(numeros, 7));
console.log(buscaSequencial(frutas, "uva"));
