// Desafio: Modifique a classe Stack para armazenar um histórico dos elementos que
// foram removidos (pop).
//     Regras:
// 1. Crie um array privado #historyData para armazenar os elementos removidos.
// 2. Adicione um metodo history() para retornar os elementos que já foram
// retirados da pilha.
// 3. Teste essa funcionalidade simulando uma pilha de navegação em um
// navegador (ex: páginas visitadas e removidas).

class Stack {
    #data
    #historyData

    constructor(){
        this.#data = []
        this.#historyData = 0
    }

    push(val){
        this.#data.push(val)
    }

    pop(){
        if (this.isEmpty) return undefined
        this.#historyData++
        return this.#data.pop()
    }

    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    get history(){
        return this.#historyData
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
console.log("Saiu de:", browserHistory.pop()); // stackoverflow.com
console.log("Saiu de:", browserHistory.pop()); // github.com

console.log("\n3. Verificando estado atual:");
console.log("Página aberta no momento (Peek):", browserHistory.peek());
console.log("Pilha restante:", browserHistory.print());

console.log("\n4. Histórico de páginas fechadas (History):");
console.log(browserHistory.history);

// Verificação de segurança
console.log("\nA pilha está vazia?", browserHistory.isEmpty);