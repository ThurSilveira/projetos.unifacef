// Desafio: Crie um metodo reverse() que inverta a ordem dos nós da lista encadeada.
// Regras:
// Após chamar reverse(), o primeiro elemento vira o último e vice-versa.
// A lista original é modificada — sem criar outra lista.
// Teste a funcionalidade com print() antes e depois de inverter.

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

    insertHead(val) {
        this.insert(0, val);
    }

    insertTail(val) {
        this.insert(this.#count, val);
    }

    reverse() {
        if (this.isEmpty || this.#count === 1) return;

        let prev = null;
        let current = this.#head;
        let nextNode = null;

        this.#tail = current;

        while (current !== null) {
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        this.#head = prev;
    }

    remove(pos) {
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined;
        }

        let removed;

        if (pos === 0) {
            removed = this.#head;
            this.#head = this.#head.next;
            if (this.#count === 1) this.#tail = null;
        }
        else {
            let before = this.#head;
            for (let i = 1; i < pos; i++) {
                before = before.next;
            }
            removed = before.next;
            let after = removed.next;
            before.next = after;
            if (pos === this.#count - 1) this.#tail = before;
        }
        this.#count--;
        return removed.data;
    }

    removeHead() {
        return this.remove(0);
    }

    removeTail() {
        return this.remove(this.#count - 1);
    }

    peekHead() {
        return this.#head?.data;
    }

    peekTail() {
        return this.#tail?.data;
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
lista.insertTail("A");
lista.insertTail("B");
lista.insertTail("C");
lista.insertTail("D");

console.log("Antes do reverse:");
console.log(lista.print());

lista.reverse();

console.log("\nDepois do reverse:");
console.log(lista.print());

console.log("\nConferindo Head e Tail após inversão:");
console.log("Nova Head (deve ser D):", lista.peekHead());
console.log("Nova Tail (deve ser A):", lista.peekTail());