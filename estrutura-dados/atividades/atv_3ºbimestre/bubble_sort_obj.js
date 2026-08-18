let pass, comps, trocas

function bubbleSort(vetor, fnComp) {
  // fornecer um comparador padrão quando não for passado
  if (typeof fnComp !== 'function') {
    fnComp = (a, b) => {
      if (a && b && typeof a === 'object' && 'nome_motorista' in a && 'nome_motorista' in b) {
        return a.nome_motorista > b.nome_motorista;
      }
      return a > b;
    };
  }

  pass=0, comps=0, trocas=0
  let trocou;

  do {
    pass++
    trocou = false;

    for (let i = 0; i < vetor.length - 1; i++) {
        comps++
      if (fnComp(vetor[i], vetor[i + 1])) {
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
        trocou = true;
        trocas++
      }
    }
  } while (trocou);
}

import {objMotoristas} from "../../data/motoristas-obj-desord.mjs"

// console.time('bubbleSort')
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista )
// console.timeEnd('bubbleSort')

// console.log(objMotoristas)
// console.log({pass, comps, trocas})

function buscaMotoristaPorNome(vetor, nome) {
  const q = String(nome).trim().toUpperCase();
  const results = [];
  for (let i = 0; i < vetor.length; i++) {
    const m = vetor[i];
    if (m && m.nome_motorista && m.nome_motorista.toUpperCase().includes(q)) {
      results.push({ index: i, motorista: m });
    }
  }
  return results;
}

const nomeBusca = 'ABEL';
console.time('buscaMotorista');
const encontrados = buscaMotoristaPorNome(objMotoristas, nomeBusca);
console.timeEnd('buscaMotorista');
console.log('Encontrados:', encontrados.length);
if (encontrados.length) console.log(encontrados.slice(0, 5));