import Deque from "./Deque.js";

let listaCompras = new Deque();
console.log(listaCompras.print());
console.log("Esta vazia?\n" , listaCompras.isEmpty());

// comidas no inicio
listaCompras.addFront("Arroz");
listaCompras.addFront("Feijão");
listaCompras.addFront("Farofa");
listaCompras.addFront("Cuzcuz");
console.log(listaCompras.print());

// limpeza no final
listaCompras.addBack("Omo");
listaCompras.addBack("Dove");
listaCompras.addBack("Rexona");
listaCompras.addBack("Qboa");
console.log(listaCompras.print());

listaCompras.addFront("Café");
listaCompras.addFront("Açúcar");
console.log(listaCompras.print());

