// Pilha com capacidade máxima.

class Stack {
    #data
    #tamMax

    constructor(val){
        this.#data = []
        this.#tamMax = val
    }

    push(val){
        if (this.#data.length >= this.#tamMax) return console.log("Erro")
        this.#data.push(val)
    }

    pop(){
        return this.#data.pop()
    }

    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    print(){
        return JSON.stringify(this.#data)
    }
}

const undoStack = new Stack(3);

console.log("1. Executando ações no editor...");
undoStack.push("Digitar 'Olá'");
undoStack.push("Negritar texto");
undoStack.push("Mudar cor para azul");

console.log("Ações salvas:", undoStack.print());

console.log("\n2. Tentando realizar a 4ª ação (deve exibir erro):");
undoStack.push("Inserir imagem");

console.log("\n3. Desfazendo a última alteração (Pop):");
const acaoDesfeita = undoStack.pop();
console.log(`Ação "${acaoDesfeita}" foi desfeita.`);
console.log("Pilha atualizada:", undoStack.print());

console.log("\n4. Tentando inserir nova ação após liberar espaço:");
undoStack.push("Inserir tabela");
console.log("Estado final da pilha:", undoStack.print());

console.log("\n5. Verificando se a pilha está vazia:", undoStack.isEmpty);
