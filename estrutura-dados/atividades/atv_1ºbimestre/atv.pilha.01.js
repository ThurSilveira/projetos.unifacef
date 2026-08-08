import Stack from "../../lib/Stack.js";

const pilha = new Stack();

console.log(pilha.print());
console.log("Está vazia?\n", pilha.isEmpty);

pilha.push(5);
console.log(pilha.print());

pilha.push(9);
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());

pilha.push(3);
console.log(pilha.print());

pilha.push(8);
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());

pilha.push(6);
console.log(pilha.print());

pilha.push();
console.log(pilha.print());

pilha.push(2);
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());

pilha.push(10);
console.log(pilha.print());

pilha.push(1);
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());

pilha.push(15);
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());

pilha.pop();
console.log(pilha.print());
