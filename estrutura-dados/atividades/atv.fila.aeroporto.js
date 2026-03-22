import Queue from "../lib/Queue.js";

// criando a fila
let filaAeroporto = new Queue();

// primeiros passageiros
filaAeroporto.enqueue("Passageiro A");
filaAeroporto.enqueue("Passageiro B");
filaAeroporto.enqueue("Passageiro C");
filaAeroporto.enqueue("Passageiro D");
filaAeroporto.enqueue("Passageiro E");

// fila antes do embarque
console.log("Fila inicial:");
console.log(filaAeroporto.print());

// embarque do primeiro passageiro
console.log("Embarcou:", filaAeroporto.dequeue());

// fila após remoção
console.log("Fila após embarque:");
console.log(filaAeroporto.print());

// novos passageiros
filaAeroporto.enqueue("Passageiro F");
filaAeroporto.enqueue("Passageiro G");
filaAeroporto.enqueue("Passageiro H");

// fila atualizada
console.log("Fila com novos passageiros:");
console.log(filaAeroporto.print());

// próximo passageiro
console.log("Próximo:", filaAeroporto.peek());

// embarque do próximo
console.log("Embarcou:", filaAeroporto.dequeue());

// fila final
console.log("Fila final:");
console.log(filaAeroporto.print());