import { objNomes } from "../../data/vetor-obj-nomes.mjs";

function buscaSequencial(vetor, fnComp) {
    for (let i = 0; i < vetor.length; i++) {
        if (fnComp(vetor[i])) {
            return i;
        }
    }
    return -1;
}

function compararNome(obj) {
    return obj.first_name === "ARTHUR";
}

console.log(buscaSequencial(objNomes, compararNome));
