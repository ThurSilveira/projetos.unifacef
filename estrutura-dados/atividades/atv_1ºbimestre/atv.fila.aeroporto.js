import Queue from "../../lib/Queue.js";

const filaAeroporto = new Queue();

filaAeroporto.enqueue("Passageiro A");
filaAeroporto.enqueue("Passageiro B");
filaAeroporto.enqueue("Passageiro C");
filaAeroporto.enqueue("Passageiro D");
filaAeroporto.enqueue("Passageiro E");

console.log("Fila inicial:");
console.log(filaAeroporto.print());

console.log("Embarcou:", filaAeroporto.dequeue());

console.log("Fila após embarque:");
console.log(filaAeroporto.print());

filaAeroporto.enqueue("Passageiro F");
filaAeroporto.enqueue("Passageiro G");
filaAeroporto.enqueue("Passageiro H");

console.log("Fila com novos passageiros:");
console.log(filaAeroporto.print());

console.log("Próximo:", filaAeroporto.peek());

console.log("Embarcou:", filaAeroporto.dequeue());

console.log("Fila final:");
console.log(filaAeroporto.print());
