// Desafio: Modifique a LinkedList para armazenar um histórico dos elementos removidos.
// Regras:
// Crie uma estrutura #removedHistory para armazenar os valores dos nós removidos.
// Sempre que um valor for removido (remove()), adicione-o ao histórico.
// Crie um metodo history() que retorne os elementos removidos.
// Teste com inserções e remoções, e exiba o histórico final.

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
    #removedHistory;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
        this.#removedHistory = [];
    }

    history(){
        return console.log('Elementos removidos: ', this.#removedHistory)
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

    remove(pos) {
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined;
        }

        let removed;

        if (pos === 0) {
            removed = this.#head;
            this.#head = this.#head.next;
            if (this.#count === 1) {
                this.#tail = null;
            }
        }

        else {
            let before = this.#head;
            for (let i = 1; i < pos; i++) {
                before = before.next;
            }
            removed = before.next;
            let after = removed.next;
            before.next = after;
            if (pos === this.#count - 1) {
                this.#tail = before;
            }
        }
        this.#removedHistory.push(removed.data);
        this.#count--;
        return removed.data;
    }

    removeHead(){
        return this.remove(0);
    }

    removeTail(){
        return this.remove(this.#count - 1);
    }

    indexOf(val){
        if(this.isEmpty) { return -1; }
        let node = this.#head;
        for(let i = 0; i < this.#count; i++){
            if(node.data === val){ return i; }
            node = node.next;
        }
        return -1;
    }

    peek(pos) {
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) { return undefined; }
        let node = this.#head;
        for (let i = 0; i < pos; i++) { node = node.next; }
        return node.data;
    }

    peekHead() {
        return this.peek(0);
    }

    peekTail() {
        return this.peek(this.#count - 1);
    }

    print(){
        let output = '( ';
        let node = this.#head;
        for (let i = 0; i < this.#count; i++){
            if(output !== '( ' ) {
                output += ', ';
            }
            output += `[${i}]: ${node.data}`;
            node = node.next;
        }
        output += ` ), count: ${this.#count}`;
        return output;
    }
}

const lista = new LinkedList();

lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item3");

console.log(`Lista atual: ${lista.print()}`);

let hist = lista.history();
if (!hist || hist.length === 0) {
    console.log("Histórico de remoções: Nenhuma remoção ainda.");
}

lista.remove(1);
console.log(`Lista após remoção: ${lista.print()}`);
console.log(`Histórico de remoções: [ ${lista.history()} ]`);