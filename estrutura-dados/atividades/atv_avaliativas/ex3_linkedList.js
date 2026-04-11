// Desafio: Crie um metodo countOccurrences(val) que conta quantas vezes um valor aparece na lista.
// Regras:
// O metodo deve percorrer toda a lista.
// Retorna um número representando a quantidade de vezes que val aparece.
// Teste com inserções repetidas de um mesmo valor.

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    #head;
    #tail;
    #count;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty() {
        return this.#count === 0;
    }

    get count() {
        return this.#count;
    }

    insert(pos, val) {
        const inserted = new Node(val);
        if (this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        }
        else if (pos === 0) {
            inserted.next = this.#head;
            this.#head = inserted;
        }
        else if (pos >= this.#count) {
            this.#tail.next = inserted;
            this.#tail = inserted;
        }
        else {
            let before = this.#head;
            for (let i = 1; i < pos; i++) {
                before = before.next;
            }
            inserted.next = before.next;
            before.next = inserted;
        }
        this.#count++;
    }

    insertTail(val) {
        this.insert(this.#count, val);
    }

    countOccurrences(val) {
        let count = 0;
        let node = this.#head;
        while (node !== null) {
            if (node.data === val) {
                count++;
            }
            node = node.next;
        }
        return count;
    }

    print() {
        let output = '( ';
        let node = this.#head;
        for (let i = 0; i < this.#count; i++) {
            if (output !== '( ') output += ', ';
            output += `[${i}]: ${node.data}`;
            node = node.next;
        }
        output += ` ), count: ${this.#count}`;
        return output;
    }
}

const lista = new LinkedList();

lista.insertTail("Java");
lista.insertTail("JavaScript");
lista.insertTail("Java");
lista.insertTail("Python");
lista.insertTail("Java");

console.log("Lista atual:");
console.log(lista.print());

const termoBusca = "Java";
const total = lista.countOccurrences(termoBusca);

console.log(`\nBuscando ocorrências de: "${termoBusca}"`);
console.log(`O valor aparece ${total} vezes na lista.`);

const termoInexistente = "C++";
console.log(`\nBuscando ocorrências de: "${termoInexistente}"`);
console.log(`O valor aparece ${lista.countOccurrences(termoInexistente)} vezes.`);