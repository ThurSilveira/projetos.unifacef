export default class Deque {

    #items

    constructor() {
        this.#items = [];
    }

    // adiciona no início
    addFront(val) {
        this.#items.unshift(val);
    }

    // adiciona no final
    addBack(val) {
        this.#items.push(val);
    }

    // remove do início
    removeFront() {
        if (this.isEmpty()) {
            return "Deque vazia";
        }
        return this.#items.shift();
    }

    // remove do final
    removeBack() {
        if (this.isEmpty()) {
            return "Deque vazia";
        }
        return this.#items.pop();
    }

    // ver primeiro elemento
    peekFront() {
        return this.#items[0];
    }

    // ver último elemento
    peekBack() {
        return this.#items[this.#items.length - 1];
    }

    // verifica se está vazia
    isEmpty() {
        return this.#items.length === 0 ? "Vazio" : "Cheio";
    }

    // tamanho
    size() {
        return this.#items.length;
    }

    // mostrar deque
    print(){
        let output = '[ '
        for(let i=0; i < this.#items.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i+1}º): ${this.#items[i]}`
        }
        return output + " ]"
    }
};