// Pilha com histórico dos itens removidos.

class Stack {
    #data
    #historyData

    constructor(){
        this.#data = []
        this.#historyData = []
    }

    push(val){
        this.#data.push(val)
    }

    pop(){
        if (this.isEmpty) return undefined
        const removed = this.#data.pop()
        this.#historyData.push(removed)
        return removed
    }

    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    get history(){
        return [...this.#historyData]
    }

    print(){
        return JSON.stringify(this.#data)
    }
}

const browserHistory = new Stack();

console.log("1. Visitando páginas...");
browserHistory.push("google.com");
browserHistory.push("github.com");
browserHistory.push("stackoverflow.com");
console.log("Pilha atual:", browserHistory.print());

console.log("\n2. Clicando no botão 'Voltar' (Pop)...");
console.log("Saiu de:", browserHistory.pop());
console.log("Saiu de:", browserHistory.pop());

console.log("\n3. Verificando estado atual:");
console.log("Página aberta no momento (Peek):", browserHistory.peek());
console.log("Pilha restante:", browserHistory.print());

console.log("\n4. Histórico de páginas fechadas (History):");
console.log(browserHistory.history);

console.log("\nA pilha está vazia?", browserHistory.isEmpty);
