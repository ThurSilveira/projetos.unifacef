export default class Deque {
    #data;

    constructor() {
        this.#data = [];
    }

    insertFront(val) {
        this.#data.unshift(val);
    }

    addFront(val) {
        this.insertFront(val);
    }

    insertBack(val) {
        this.#data.push(val);
    }

    addBack(val) {
        this.insertBack(val);
    }

    removeFront() {
        return this.#data.shift();
    }

    deleteFront() {
        return this.removeFront();
    }

    removeBack() {
        return this.#data.pop();
    }

    deleteBack() {
        return this.removeBack();
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
