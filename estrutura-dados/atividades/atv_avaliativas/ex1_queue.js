// Desafio: Modifique a classe Queue para contar quantas operações foram feitas na
// fila.
//     Regras:
// 1. Crie uma variável privada #operationCount para contar quantas operações
// foram realizadas (enqueue e dequeue).
// 2. Adicione um metodo getOperationCount() que retorna o total de operações
// feitas.
// 3. Teste essa funcionalidade simulando uma fila de atendimento ao cliente.

class Queue {
    #data
    #operationCount

    constructor() {
        this.#data = []
        this.#operationCount = 0
    }

    enqueue(val) {
        this.#data.push(val)
        this.#operationCount++
    }

    dequeue() {
        if (this.isEmpty) return undefined
        this.#operationCount++
        return this.#data.shift()
    }

    peek() {
        return this.#data[0]
    }

    get isEmpty() {
        return this.#data.length === 0
    }

    get operationCount() {
        return this.#operationCount
    }

    print() {
        let output = '[ '
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") {
                output += ", "
            }
            output += `(${i + 1}º): ${this.#data[i]}`
        }
        return output + " ]"
    }
}

const fila = new Queue();

// Inserindo clientes
fila.enqueue("Ana");
fila.enqueue("Bruno");
fila.enqueue("Carlos");

console.log("Fila inicial:", fila.print());
console.log("Próximo da fila (peek):", fila.peek());

// Removendo clientes (atendimento)
console.log("Atendendo:", fila.dequeue());
console.log("Atendendo:", fila.dequeue());

// Verificando estado final
fila.enqueue("Daniela");
console.log("Fila atualizada:", fila.print());
console.log("Total de operações:", fila.operationCount);
console.log("Fila está vazia?", fila.isEmpty);