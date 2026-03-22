import Queue from "../lib/Queue.js";

// criando a fila
let atendimento = new Queue();

// adicionando pessoas
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

// print inicial
console.log("Fila inicial:");
console.log(atendimento.print());

// atendendo primeira pessoa
console.log("Atendido:", atendimento.dequeue()); // José

// print após atendimento
console.log("Fila após atendimento:");
console.log(atendimento.print());

// novas pessoas
atendimento.enqueue("Rafael");
atendimento.enqueue("Isabela");
atendimento.enqueue("Cauã");

// fila nova
console.log("Fila com novos pacientes:");
console.log(atendimento.print());

// próximo a ser atendido
console.log("Próximo:", atendimento.peek()); // Sérgio

// chamando próximo
console.log("Atendido:", atendimento.dequeue()); // Sérgio

// print final
console.log("Fila final:");
console.log(atendimento.print());