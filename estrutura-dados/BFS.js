import Queue from "./lib/Queue.js";

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
}

function bfs(grafo, inicio){
    // new Set() Estrutura de dados nativa do JS (como se fosse um array)
    // mas com duas regras:
    // 1 - não permite elementos duplicados. Ex: Adicionar valor A 3x, guarda apenas 1x
    // 2 - busca instantânea, métod .has(), descobre se um elemento esta dentro mais rapido que indexof
    const visitados = new Set();
    const fila = new Queue();

    fila.enqueue(inicio);

    while(!fila.isEmpty){
        const no = fila.dequeue();
        if(!visitados.has(no)){
            console.log(no);
            visitados.add(no);
            for(const vizinho of grafo[no]){
                if(!visitados.has(vizinho)){
                    fila.enqueue(vizinho);
                }
            }
        }
    }
}
bfs(grafo, "A");
console.log(bfs);