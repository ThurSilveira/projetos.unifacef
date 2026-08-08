import Queue from "../../lib/Queue.js";

const atendimento = new Queue();

atendimento.enqueue("José");
atendimento.enqueue("Sérgio");
atendimento.enqueue("Joaquim");
atendimento.enqueue("Maria");
atendimento.enqueue("João");
atendimento.enqueue("Samuel");
atendimento.enqueue("Vicente");
atendimento.enqueue("Terezinha");
atendimento.enqueue("Firmino");
atendimento.enqueue("Toninho");
atendimento.enqueue("Alexandre");

console.log("Fila inicial:");
console.log(atendimento.print());

console.log("Atendido:", atendimento.dequeue());

console.log("Fila após atendimento:");
console.log(atendimento.print());

atendimento.enqueue("Rafael");
atendimento.enqueue("Isabela");
atendimento.enqueue("Cauã");

console.log("Fila com novos pacientes:");
console.log(atendimento.print());

console.log("Próximo:", atendimento.peek());

console.log("Atendido:", atendimento.dequeue());

console.log("Fila final:");
console.log(atendimento.print());
