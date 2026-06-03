import Queue from "./lib/Queue.js";
import Stack from "./lib/Stack.js";

const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

// Grafo Conexo com Ciclo
const grafoComCiclo = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "E"],
  E: ["B", "D"],
  F: ["C"]
};
// Grafo Desconexo (com nós isolados)
const grafoDesconexo = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
  E: []
};

function obterDistanciasEBFS(grafo, inicio) {
  const visitados = new Set();
  const fila = new Queue();
  const distancias = {};
  const caminhos = {};

  // Inicializa o vértice inicial
  fila.enqueue(inicio);
  visitados.add(inicio);
  distancias[inicio] = 0;
  caminhos[inicio] = [inicio];

  fila.enqueue(inicio);
  visitados.add(inicio);
  distancias[inicio] = 0;
  caminhos[inicio] = [inicio];

  while (!fila.isEmpty) {
    const no = fila.dequeue();

    for (const vizinho of grafo[no]) {
      if (!visitados.has(vizinho)) {
        visitados.add(vizinho);
        distancias[vizinho] = distancias[no] + 1;
        caminhos[vizinho] = [...caminhos[no], vizinho];
    distancias: distancias,
    caminhos: caminhos
  };
}

// ==========================================
// EXERCÍCIO 2: DETECÇÃO DE CICLOS COM DFS
// ==========================================
// Em um grafo não-dirigido, um ciclo ocorre quando visitamos um vértice que já foi
// visitado anteriormente e que não é o pai direto do vértice atual na árvore de busca.
// Utiliza uma pilha (Stack) para implementar a DFS.
function detectarCiclo(grafo, inicio) {
  const visitados = new Set();
  const pilha = new Stack();

  // Estrutura para armazenar: [nó, pai]
  pilha.push({ no: inicio, pai: null });

  while (!pilha.isEmpty) {
        return true;
      }
      continue;
    }

    visitados.add(no);

    // Processa cada vizinho do nó atual
    for (const vizinho of grafo[no]) {
      // Se o vizinho não foi visitado, empilha ele com o nó atual como pai
  pilha.push({ no: inicio, pai: null });

  while (!pilha.isEmpty) {
    const { no, pai } = pilha.pop();

    if (visitados.has(no)) {
      if (no !== pai) {
        return true;
      }
      continue;
    }

    visitados.add(no);

    for (const vizinho of grafo[no]) {
      if (!visitados.has(vizinho)) {
        pilha.push({ no: vizinho, pai: no });
      }/ Se um vértice ainda não foi visitado, encontramos um novo componente
    if (!visitados.has(no)) {
      componentes++;

      // Executa BFS a partir deste vértice para marcar todos os nós da sua "ilha"
      const fila = new Queue();
      fila.enqueue(no);
      visitados.add(no);

      while (!fila.isEmpty) {
        const noAtual = fila.dequeue();

        // Processa cada vizinho
        for (const vizinho of grafo[noAtual]) {
          if (!visitados.has(vizinho)) {
            visitados.add(vizinho);
  }

  return componentes;
}for (const no in grafo) {
    if (!visitados.has(no)) {
      componentes++;

      const fila = new Queue();
      fila.enqueue(no);
      visitados.add(no);

      while (!fila.isEmpty) {
        const noAtual = fila.dequeue();

        for (const vizinho of grafo[noAtual]) {
          if (!visitados.has(vizinho)) {
            visitados.add(vizinho);
            fila.enqueue(vizinho);
          }
        }
      }
    }
  }

  return componentes;
}sConexos(grafoDesconexo);
console.log("Quantidade de Componentes no grafoArvore:", componentesArvore);
console.log("✓ Saída esperada: 1");
console.log("Quantidade de Componentes no grafoDesconexo:", componentesDesconexo);
console.log("✓ Saída esperada: 3");
console.log("\nMotivo: grafoDesconexo tem 3 ilhas desconexas: {A,B}, {C,D}, {E}\n");

console.log("========================================");
console.log("FIM DA ATIVIDADE PRÁTICA");
console.log("========================================");
