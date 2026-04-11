// Desafio: Modifique a classe Deque para definir um tamanho máximo e impedir
// que novos elementos sejam inseridos quando o limite for atingido.
// Regras:
// 1. O tamanho máximo da deque deve ser passado no construtor.
// 2. Se o limite for atingido, os métodos insertFront() e insertBack() devem exibir
// uma mensagem de erro e impedir a inserção.
// 3. Teste essa funcionalidade simulando um deque com capacidade de apenas 5
// elementos.

class Deque {
    #data;
    #maxValue;

    constructor(val) {
        this.#data = [];
        this.#maxValue = val;
    }

    insertFront(val) {
        if (this.#data.length >= this.#maxValue) return console.log("Erro")
        this.#data.unshift(val);
    }

    insertBack(val) {
        if (this.#data.length >= this.#maxValue) return console.log("Erro")
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
        return this.#data.length === 0 ? "Sim, está vazia!" : "Não!"
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

const test = new Deque(5)

test.insertFront(1)
test.insertFront(2)
test.insertFront(3)
test.insertFront(4)
test.insertFront(5)
test.insertFront(6)
test.insertBack(7)
console.log(test.print())
