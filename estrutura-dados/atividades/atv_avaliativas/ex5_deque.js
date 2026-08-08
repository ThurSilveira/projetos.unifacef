// Deque sem valores duplicados.

class Deque {
    #data;

    constructor() {
        this.#data = [];
    }

    insertFront(val) {
        if (this.#data.includes(val)) return console.log("erro")
        this.#data.unshift(val);
    }

    insertBack(val) {
        if (this.#data.includes(val)) return console.log("erro")
        this.#data.push(val);
    }

    removeFront() {
        return this.#data.shift();
    }

    removeBack() {
        return this.#data.pop();
    }

    peekFront() {
        return this.#data[0];
    }

    peekBack() {
        return this.#data[this.#data.length - 1];
    }

    get isEmpty() {
        return this.#data.length === 0;
    }

    print() {
        let output = "[ ";
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") {
                output += ", ";
            }
            output += `(${i + 1}º): ${this.#data[i]}`;
        }
        return output + " ]";
    }
}

const carrinho = new Deque();

console.log("1. Adicionando itens ao carrinho...");
carrinho.insertBack("Notebook");
carrinho.insertBack("Mouse Sem Fio");
carrinho.insertFront("Monitor 4K");
console.log("Carrinho atual:", carrinho.print());

console.log("\n2. Tentando adicionar itens duplicados (deve exibir erro):");
carrinho.insertBack("Notebook");
carrinho.insertFront("Monitor 4K");

console.log("\n3. Adicionando um item novo:");
carrinho.insertBack("Teclado Mecânico");
console.log("Carrinho atual:", carrinho.print());

console.log("\n4. Removendo itens:");
console.log("Removido da frente:", carrinho.removeFront());
console.log("Removido do fim:", carrinho.removeBack());

console.log("\n5. Estado final do carrinho:");
console.log(carrinho.print());
console.log("O carrinho está vazio?", carrinho.isEmpty);
