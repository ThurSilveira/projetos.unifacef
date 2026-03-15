class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

export default class linkedList {
    #head;
    #tail;
    #count; // quantidade de nodos da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count;
    }

    insert(pos, val){
        const inserted = new Node(val);

        if (this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }
        
    }

}