export default class Queue{

    #data //Vetor print

    constructor(){
        this.#data = []
    }

    //métod de inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    //métod de remoção na fila
    dequeue(){
        return this.#data.shift()
    }

    //métod para consultar o inicio da fila sem remover o elemento
    peek(){
        return this.#data[0]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    //métod para imprimir a fila(efeitos de depuração)
    print(){
        let output = '[ '
        for(let i=0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i+1}º): ${this.#data[i]}`
        }
        return output + " ]"
    }
};