// import { objMotoristas } from "../../data/motoristas-obj-desord.mjs";

// function prepararNome(nome) {
//     return nome
//         .trim()
//         .toUpperCase()
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "");
// }

// function selectionSort(vetor) {
//     const nomesComparacao = [];

//     // Prepara os nomes uma única vez para comparar letras com e sem acento.
//     for (let i = 0; i < vetor.length; i++) {
//         nomesComparacao[i] = prepararNome(vetor[i].nome_motorista);
//     }

//     for (let posicao = 0; posicao < vetor.length - 1; posicao++) {
//         let posicaoMenor = posicao;

//         // Procura o menor nome na parte do vetor que ainda não foi ordenada.
//         for (let i = posicao + 1; i < vetor.length; i++) {
//             if (nomesComparacao[i] < nomesComparacao[posicaoMenor]) {
//                 posicaoMenor = i;
//             }
//         }

//         // Coloca o menor nome encontrado na posição correta.
//         if (posicaoMenor !== posicao) {
//             const auxiliar = vetor[posicao];
//             vetor[posicao] = vetor[posicaoMenor];
//             vetor[posicaoMenor] = auxiliar;

//             const nomeAuxiliar = nomesComparacao[posicao];
//             nomesComparacao[posicao] = nomesComparacao[posicaoMenor];
//             nomesComparacao[posicaoMenor] = nomeAuxiliar;
//         }
//     }

//     return vetor;
// }

// console.time("selectionSort");
// selectionSort(objMotoristas);
// console.timeEnd("selectionSort");

// console.log("Motoristas em ordem alfabética:");

// for (let i = 0; i < objMotoristas.length; i++) {
//     console.log(objMotoristas[i].nome_motorista);
// }
let pass, comps, trocas;

function selectionSort(vetor, fnComp) {
  ((pass = 0), (comps = 0), (trocas = 0));

  for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
    pass++;

    let posMenor = posSel + 1;

    for (let i = posMenor + 1; i < vetor.length; i++) {
      if (fnComp(vetor[posMenor], vetor[i])) posMenor = i;
      comps++;
    }

    comps++;
    if (fnComp(vetor[posSel], vetor[posMenor])) {
      [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]];
      trocas++;
    }
  }
}

import { objMotoristas } from "../../data/motoristas-obj-desord.mjs";
console.time(selectionSort)
selectionSort(
  objMotoristas,
  (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista,
);
console.timeEnd(selectionSort)
console.log(objMotoristas);
console.log({pass, comps, trocas})