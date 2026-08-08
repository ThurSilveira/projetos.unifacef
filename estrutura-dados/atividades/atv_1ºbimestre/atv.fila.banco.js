import Queue from "../../lib/Queue.js";

const filaBanco = new Queue();

filaBanco.enqueue(101);
filaBanco.enqueue(102);
filaBanco.enqueue(103);
filaBanco.enqueue(104);
filaBanco.enqueue(105);

console.log("Fila inicial:");
console.log(filaBanco.print());

console.log("Atendido:", filaBanco.dequeue());

console.log("Fila após atendimento:");
console.log(filaBanco.print());

filaBanco.enqueue(106);
filaBanco.enqueue(107);

console.log("Fila com novos clientes:");
console.log(filaBanco.print());

console.log("Próximo cliente:", filaBanco.peek());

console.log("Atendido:", filaBanco.dequeue());

console.log("Fila final:");
console.log(filaBanco.print());
