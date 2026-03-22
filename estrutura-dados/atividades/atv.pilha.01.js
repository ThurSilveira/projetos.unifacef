import Stack from "lib/Stack.js";

let pilha = new Stack();
// Estado inicial: []

pilha.push(5);    // Adiciona 5 no topo: [5]
pilha.push(9);    // Adiciona 9 no topo: [5, 9]
pilha.pop();      // Remove o último elemento (9): [5]
pilha.push(3);    // Adiciona 3 no topo: [5, 3]
pilha.push(8);    // Adiciona 8 no topo: [5, 3, 8]
pilha.pop();      // Remove o último elemento (8): [5, 3]
pilha.pop();      // Remove o último elemento (3): [5]
pilha.push(6);    // Adiciona 6 no topo: [5, 6]


pilha.push(2);    // Adiciona 2 no topo: [5, 6, 2]
pilha.pop();      // Remove o último elemento (2): [5, 6]
pilha.push(10);   // Adiciona 10 no topo: [5, 6, 10]
pilha.push(1);    // Adiciona 1 no topo: [5, 6, 10, 1]
pilha.pop();      // Remove o último elemento (1): [5, 6, 10]
pilha.pop();      // Remove o último elemento (10): [5, 6]
pilha.push(15);   // Adiciona 15 no topo: [5, 6, 15]
pilha.pop();      // Remove o último elemento (15): [5, 6]
pilha.pop();      // Remove o último elemento (6): [5]

// Verificação final
console.log(pilha.print()); // Saída: [5]
console.log("O topo atual é:", pilha.peek()); // Saída: 5