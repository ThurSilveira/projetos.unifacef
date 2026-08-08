import Stack from "../lib/Stack.js";

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
};

function dfs(grafo, inicio) {
    if (!grafo[inicio]) {
        throw new Error(`Vértice inicial inexistente: ${inicio}`);
    }

    const visitados = new Set();
    const pilha = new Stack();

    pilha.push(inicio);

    console.log(`--- Busca em Profundidade (DFS) a partir de '${inicio}' ---`);
    while (!pilha.isEmpty) {
        const no = pilha.pop();
        if (!visitados.has(no)) {
            console.log("Visitando nó:", no);
            visitados.add(no);

            const vizinhos = grafo[no] ?? [];

            // Mantém a ordem natural de visita.
            for (let i = vizinhos.length - 1; i >= 0; i--) {
                if (!visitados.has(vizinhos[i])) {
                    pilha.push(vizinhos[i]);
                }
            }
        }
    }
}

dfs(grafo, "A");
