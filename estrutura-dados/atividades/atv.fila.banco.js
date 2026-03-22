import Queue from "../lib/Queue.js";

// criando a fila
let filaBanco = new Queue();

// inserindo clientes
filaBanco.enqueue(101);
filaBanco.enqueue(102);
filaBanco.enqueue(103);
filaBanco.enqueue(104);
filaBanco.enqueue(105);

// fila antes do atendimento
console.log("Fila inicial:");
console.log(filaBanco.print());

// atendendo primeiro cliente
console.log("Atendido:", filaBanco.dequeue());

// fila após remoção
console.log("Fila após atendimento:");
console.log(filaBanco.print());

// novos clientes
filaBanco.enqueue(106);
filaBanco.enqueue(107);

// fila atualizada
console.log("Fila com novos clientes:");
console.log(filaBanco.print());

// próximo cliente
console.log("Próximo cliente:", filaBanco.peek());

// chamando próximo cliente
console.log("Atendido:", filaBanco.dequeue());

// fila final
console.log("Fila final:");
console.log(filaBanco.print());