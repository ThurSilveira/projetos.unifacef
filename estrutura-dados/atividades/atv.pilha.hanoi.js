import Stack from "../lib/Stack.js";

// criando as torres
let TorreA = new Stack();
let TorreB = new Stack();
let TorreC = new Stack();

// inicio
TorreB.push(1);
TorreB.push(2);
TorreB.push(3);
TorreB.push(4);

// print antes
console.log("TorreA:", TorreA.print()); // []
console.log("TorreB:", TorreB.print()); // [1,2,3,4]
console.log("TorreC:", TorreC.print()); // []

// function para mover o disco
function mover(origem, destino){
    destino.push(origem.pop());
}

mover(TorreB, TorreC)

mover(TorreB, TorreA)

mover(TorreC, TorreA)

mover(TorreB, TorreC)

mover(TorreA, TorreB)

mover(TorreA, TorreC)

mover(TorreB, TorreC)

mover(TorreB, TorreA)

mover(TorreC, TorreA);

mover(TorreC, TorreB);

mover(TorreA, TorreB);

mover(TorreC, TorreA);

mover(TorreB, TorreC);

mover(TorreB, TorreA);

mover(TorreC, TorreA);

// print depois
console.log("TorreA:", TorreA.print());
console.log("TorreB:", TorreB.print());
console.log("TorreC:", TorreC.print());