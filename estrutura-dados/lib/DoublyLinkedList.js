class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList{
    #head;
    #tail;
    #count;

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

    //metodo PRIVADO que encontra um nodo por sua posição
    #findNode(pos){
        let node;
        if (pos < this.#count / 2){
            node = this.#head;
            for (let i = 0; i < pos; i++){
                node = node.next;
            }
        } else {
            node = this.#tail;
            for (let i = this.#count - 1; i > pos; i--){
                node = node.prev;
            }
        }
        return node;
    }

    insert(pos, val){
        let inserted = new Node(val);

        // 1º caso: lista vazia
        if (this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }

        // 2º caso: inserção na primeira posição
        else if (pos === 0){
            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#head = inserted;
        }

        // 3º caso: inserção na última posição
        else if (pos >= this.#count){
            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        // 4º caso: inserção em posição

    }




}