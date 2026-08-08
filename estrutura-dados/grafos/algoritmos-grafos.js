import Queue from "../lib/Queue.js";
import Stack from "../lib/Stack.js";

// Grafos usados nos exemplos.
const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

const grafoComCiclo = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "E"],
  E: ["B", "D"],
  F: ["C"]
};

const grafoDesconexo = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
  E: []
};

function obterDistanciasEBFS(grafo, inicio) {
  if (!grafo[inicio]) {
    throw new Error(`Vértice inicial inexistente: ${inicio}`);
  }

  const visitados = new Set();
  const fila = new Queue();
  const distancias = {};
  const caminhos = {};

  fila.enqueue(inicio);
  visitados.add(inicio);
  distancias[inicio] = 0;
  caminhos[inicio] = [inicio];

  while (!fila.isEmpty) {
    const no = fila.dequeue();

    for (const vizinho of grafo[no] ?? []) {
      if (!visitados.has(vizinho)) {
        visitados.add(vizinho);
        distancias[vizinho] = distancias[no] + 1;
        caminhos[vizinho] = [...caminhos[no], vizinho];
        fila.enqueue(vizinho);
      }
    }
  }

  return { distancias, caminhos };
}

function detectarCiclo(grafo, inicio) {
  if (!grafo[inicio]) {
    throw new Error(`Vértice inicial inexistente: ${inicio}`);
  }

  const visitados = new Set();
  const pilha = new Stack();

  pilha.push({ no: inicio, pai: null });

  while (!pilha.isEmpty) {
    const { no, pai } = pilha.pop();

    if (visitados.has(no)) {
      continue;
    }

    visitados.add(no);

    for (const vizinho of grafo[no] ?? []) {
      if (!visitados.has(vizinho)) {
        pilha.push({ no: vizinho, pai: no });
      } else if (vizinho !== pai) {
        return true;
      }
    }
  }

  return false;
}

function contarComponentesConexos(grafo) {
  const visitados = new Set();
  let componentes = 0;

  for (const no in grafo) {
    if (!visitados.has(no)) {
      componentes++;

      const fila = new Queue();
      fila.enqueue(no);
      visitados.add(no);

      while (!fila.isEmpty) {
        const noAtual = fila.dequeue();

        for (const vizinho of grafo[noAtual] ?? []) {
          if (!visitados.has(vizinho)) {
            visitados.add(vizinho);
            fila.enqueue(vizinho);
          }
        }
      }
    }
  }

  return componentes;
}

console.log("BFS: distâncias e caminhos");
const resultadoBFS = obterDistanciasEBFS(grafoArvore, "A");
console.log("Distâncias a partir de 'A':", resultadoBFS.distancias);
console.log("Caminhos a partir de 'A':", resultadoBFS.caminhos);

console.log("\nDFS: detecção de ciclos");
const cicloArvore = detectarCiclo(grafoArvore, "A");
console.log("grafoArvore possui ciclo?:", cicloArvore, "(Esperado: false)");

const cicloComCiclo = detectarCiclo(grafoComCiclo, "A");
console.log("grafoComCiclo possui ciclo?:", cicloComCiclo, "(Esperado: true)");

console.log("\nComponentes conexos");
const componentesArvore = contarComponentesConexos(grafoArvore);
const componentesDesconexo = contarComponentesConexos(grafoDesconexo);
console.log("Componentes no grafoArvore:", componentesArvore, "(Esperado: 1)");
console.log("Componentes no grafoDesconexo:", componentesDesconexo, "(Esperado: 3)");
