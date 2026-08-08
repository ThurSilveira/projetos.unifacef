import Stack from "../../lib/Stack.js";

const torreA = new Stack();
const torreB = new Stack();
const torreC = new Stack();

for (let disco = 4; disco >= 1; disco--) {
    torreA.push(disco);
}

function moverDiscos(quantidade, origem, destino, auxiliar) {
    if (quantidade === 0) return;

    moverDiscos(quantidade - 1, origem, auxiliar, destino);
    destino.push(origem.pop());
    moverDiscos(quantidade - 1, auxiliar, destino, origem);
}

console.log("Antes:", torreA.print(), torreB.print(), torreC.print());
moverDiscos(4, torreA, torreC, torreB);
console.log("Depois:", torreA.print(), torreB.print(), torreC.print());
