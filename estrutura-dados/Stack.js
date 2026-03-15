class Stack {

    constructor() {
        this.items = [];
    }

    // Adiciona um elemento ao topo da pilha
    push(element) {
        this.items.push(element);
    }

    // Remove e retorna o elemento do topo
    pop() {
        if (this.isEmpty()) {
            return "Pilha vazia";
        }
        return this.items.pop();
    }

    // Retorna apenas o elemento do topo sem remover
    peek() {
        return this.items[this.items.length - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Retorna o tamanho da pilha
    size() {
        return this.items.length;
    }

    // Limpa a pilha
    clear() {
        this.items = [];
    }

    // Métod para imprimir a pilha
    print() {
        return this.items.join("");
    }
}
export default Stack;