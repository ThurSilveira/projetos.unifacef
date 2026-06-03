import Stack from "./lib/Stack.js";

// implementação da busca em profundidade

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
}

function dfs(grafo, inicio){
    // new Set() Estrutura de dados nativa do JS (como se fosse um array)
    // mas com duas regras:
    // 1 - não permite elementos duplicados. Ex: Adicionar valor A 3x, guarda apenas 1x
    // 2 - busca instantânea, métod .has(), descobre se um elemento esta dentro mais rapido que indexof
    const visitados = new Set();
    const pilha = new Stack();

    pilha.push(inicio);

    while (!pilha.isEmpty) {
        const no = pilha.pop();
        if (!visitados.has(no)) {
            console.log(no);
            visitados.add(no);

            const vizinhos = grafo[no];

            for (let i = vizinhos.length - 1; i >= 0; i--) {
                if (!visitados.has(vizinhos[i])) {
                    pilha.push(vizinhos[i]);
                }
            }
        }
    }
}

dfs(grafo, "A");