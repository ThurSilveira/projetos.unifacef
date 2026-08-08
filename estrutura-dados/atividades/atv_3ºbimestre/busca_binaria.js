import { nomes } from "../../data/vetor-nomes.mjs";
import { objNomes } from "../../data/vetor-obj-nomes.mjs";

function buscaBinaria(vetor, valorBusca) {
    let inicio = 0;
    let fim = vetor.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if (vetor[meio] === valorBusca) {
            return meio;
        } else if (vetor[meio] < valorBusca) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

function buscaBinariaObjetos(vetor, valorBusca, chave) {
    let inicio = 0;
    let fim = vetor.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);
        const item = vetor[meio][chave];

        if (item === valorBusca) {
            return meio;
        } else if (item < valorBusca) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

console.time("buscaBinaria");
const resultado = buscaBinaria(nomes, "ZYON");
console.timeEnd("buscaBinaria");
console.log(resultado);

console.time("buscaBinariaObjeto");
const resultadoObjeto = buscaBinariaObjetos(objNomes, "ZYON", "first_name");
console.timeEnd("buscaBinariaObjeto");
console.log(resultadoObjeto);
