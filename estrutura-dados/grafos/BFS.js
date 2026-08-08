import Queue from "../lib/Queue.js";

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
};

function bfs(grafo, inicio) {
    if (!grafo[inicio]) {
        throw new Error(`Vértice inicial inexistente: ${inicio}`);
    }

    const visitados = new Set();
    const fila = new Queue();

    fila.enqueue(inicio);

    console.log(`--- Busca em Largura (BFS) a partir de '${inicio}' ---`);
    while (!fila.isEmpty) {
        const no = fila.dequeue();
        if (!visitados.has(no)) {
            console.log("Visitando nó:", no);
            visitados.add(no);
            for (const vizinho of grafo[no] ?? []) {
                if (!visitados.has(vizinho)) {
                    fila.enqueue(vizinho);
                }
            }
        }
    }
}

bfs(grafo, "A");
