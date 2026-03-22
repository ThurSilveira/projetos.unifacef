import Stack from "../lib/Stack.js";

let pilha = new Stack();

// estado inicial
console.log(pilha.print()); // []
console.log("Está vazia?\n", pilha.isEmpty); // true

// push(5)
pilha.push(5);
console.log(pilha.print()); // [5]

// push(9)
pilha.push(9);
console.log(pilha.print()); // [5,9]

// pop()
pilha.pop();
console.log(pilha.print()); // [5]

// push(3)
pilha.push(3);
console.log(pilha.print()); // [5,3]

// push(8)
pilha.push(8);
console.log(pilha.print()); // [5,3,8]

// pop()
pilha.pop();
console.log(pilha.print()); // [5,3]

// pop()
pilha.pop();
console.log(pilha.print()); // [5]

// push(6)
pilha.push(6);
console.log(pilha.print()); // [5,6]

// push() -> undefined
pilha.push();
console.log(pilha.print()); // [5,6,null]

// push(2)
pilha.push(2);
console.log(pilha.print()); // [5,6,null,2]

// pop()
pilha.pop();
console.log(pilha.print()); // [5,6,null]

// push(10)
pilha.push(10);
console.log(pilha.print()); // [5,6,null,10]

// push(1)
pilha.push(1);
console.log(pilha.print()); // [5,6,null,10,1]

// pop()
pilha.pop();
console.log(pilha.print()); // [5,6,null,10]

// pop()
pilha.pop();
console.log(pilha.print()); // [5,6,null]

// push(15)
pilha.push(15);
console.log(pilha.print()); // [5,6,null,15]

// pop()
pilha.pop();
console.log(pilha.print()); // [5,6,null]

// pop()
pilha.pop();
console.log(pilha.print()); // [5,6]