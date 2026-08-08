// Deque com capacidade máxima.

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

const test = new Deque(5)

test.insertFront(1)
test.insertFront(2)
test.insertFront(3)
test.insertFront(4)
test.insertFront(5)
test.insertFront(6)
test.insertBack(7)
console.log(test.print())
