class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList {
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

    #findNode(pos) {
        let node;
        if (pos < this.#count / 2) {
            node = this.#head;
            for (let i = 0; i < pos; i++) {
                node = node.next;
            }
        } else {
            node = this.#tail;
            for (let i = this.#count - 1; i > pos; i--) {
                node = node.prev;
            }
        }
        return node;
    }

    insert(pos, val) {
        const inserted = new Node(val);

        if (this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        }

        else if (pos <= 0) {
            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#head = inserted;
        }

        else if (pos >= this.#count) {
            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        else {
            const nodePos = this.#findNode(pos);
            const before = nodePos.prev;
            before.next = inserted;
            inserted.prev = before;
            inserted.next = nodePos;
            nodePos.prev = inserted;
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
        if (this.isEmpty || pos < 0 || pos >= this.#count) {
            return undefined;
        }

        let removed;

        if (pos === 0) {
            removed = this.#head;
            this.#head = removed.next;
            if (this.#head) { this.#head.prev = null; }
            if (this.#count === 1) { this.#tail = null; }
        }

        else if (pos === this.#count - 1) {
            removed = this.#tail;
            this.#tail = removed.prev;
            if (this.#tail) { this.#tail.next = null; }
            if (this.#count === 1) { this.#head = null; }
        }

        else {
            removed = this.#findNode(pos);
            const before = removed.prev;
            const after = removed.next;

            before.next = after;
            after.prev = before;
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

    peek(pos) {
        if (this.isEmpty || pos < 0 || pos >= this.#count) return undefined;
        const node = this.#findNode(pos);
        return node.data;
    }

    peekHead() {
        return this.peek(0);
    }

    peekTail() {
        return this.peek(this.#count - 1);
    }

    indexOf(val) {
        let node = this.#head;
        for (let pos = 0; pos < this.#count; pos++) {
            if (val === node.data) return pos;
            node = node.next;
        }
        return -1;
    }

    print() {
        let output = "( ";
        let node = this.#head;

        for (let i = 0; i < this.#count; i++) {
            if (output !== "( ") output += ", ";
            output += `[${i}]: ${node.data}`;
            node = node.next;
        }
        output += ` ), count: ${this.#count}`;
        return output;
    }
}
