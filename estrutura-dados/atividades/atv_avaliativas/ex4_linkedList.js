// Desafio: Crie um metodo removeAll(val) que remove todas as ocorrências de um valor na lista.
// Regras:
// Percorra a lista e remova cada ocorrência de val.
// Ajuste os ponteiros corretamente após cada remoção.
// Teste com uma lista contendo vários valores repetidos.

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

    get isEmpty() { return this.#count === 0; }
    get count() { return this.#count; }

    insert(pos, val) {
        const inserted = new Node(val);
        if (this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        } else if (pos === 0) {
            inserted.next = this.#head;
            this.#head = inserted;
        } else if (pos >= this.#count) {
            this.#tail.next = inserted;
            this.#tail = inserted;
        } else {
            let before = this.#head;
            for (let i = 1; i < pos; i++) before = before.next;
            inserted.next = before.next;
            before.next = inserted;
        }
        this.#count++;
    }

    insertTail(val) { this.insert(this.#count, val); }

    // --- DESAFIO: REMOVE ALL ---
    removeAll(val) {
        if (this.isEmpty) return 0;
        let countRemoved = 0;
        let current = this.#head;
        let prev = null;

        while (current !== null) {
            if (current.data === val) {
                if (current === this.#head) {
                    this.#head = current.next;
                    current = this.#head;
                    if (this.#head === null) this.#tail = null;
                } else {
                    prev.next = current.next;
                    if (current === this.#tail) this.#tail = prev;
                    current = current.next;
                }
                this.#count--;
                countRemoved++;
            } else {
                prev = current;
                current = current.next;
            }
        }
        return countRemoved;
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

console.log("1. Inserindo valores (com repetições de '10' e '20')...");
lista.insertTail(10);
lista.insertTail(20);
lista.insertTail(10);
lista.insertTail(30);
lista.insertTail(10);
lista.insertTail(10);
lista.insertTail(40);
lista.insertTail(20);

console.log("Lista original:", lista.print());

console.log("\n2. Removendo todas as ocorrências de '10'...");
const removidos10 = lista.removeAll(10);
console.log(`Removidos: ${removidos10} itens.`);
console.log("Lista após remover 10:", lista.print());

console.log("\n3. Removendo todas as ocorrências de '20' (incluindo o fim)...");
lista.removeAll(20);
console.log("Lista após remover 20:", lista.print());

console.log("\n4. Removendo valor que não existe (50)...");
lista.removeAll(50);
console.log("Lista final:", lista.print());

console.log("\n5. Removendo o que sobrou (30 e 40) para esvaziar...");
lista.removeAll(30);
lista.removeAll(40);
console.log("Lista vazia:", lista.print());