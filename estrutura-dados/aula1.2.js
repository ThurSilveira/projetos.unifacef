class formaGeometrica{

    #base; // atributo privado, acessivel com get / set
    #altura;
    #tipo;

    constructor(base, altura, tipo){
        this.#base = base;
        this.#altura = altura;
        this.#tipo = tipo;
    }

    get base(){
        return this.#base;
    }

    get altura(){
        return this.#altura;
    }

    get tipo(){
        return this.#tipo;
    }

    set base(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error('ERRO! A base precisar ser númerica e maior que zero');
        }
        this.#base = valor;
    }

    set altura(valor){
        if (typeof valor !== 'number' || valor <= 0){
            throw new Error('ERRO! A altura precisar ser númerica e maior que zero');
        }
        this.#altura = valor;
    }

    set tipo(valor){
        if(!['R', 'T', 'E'].includes(valor.toUpperCase())){
            throw new Error('ERRO! O tipo precisar ser um dos valores: R, T, E');
        }
        this.#tipo = valor.toUpperCase();
    }

    calcularArea(){
        switch(this.#tipo){
            case 'R':
                return this.#base * this.#altura;
            case 'T':
                return this.#base * this.#altura / 2;
            case 'E':
                return (this.#base / 2) * (this.#altura / 2) * Math.PI;
        }
    }
}

let forma1 = new formaGeometrica(7, 12, 'T');

console.log(`Área de um triângulo de base ${forma1.base}, e altura ${forma1.altura} = ${forma1.calcularArea()}`);

class Torre {
    constructor(nome) {
        this.nome = nome;
        this.discos = [];
    }

    adicionarDisco(disco) {
        if (
            this.discos.length === 0 ||
            this.discos[this.discos.length - 1] > disco
        ) {
            this.discos.push(disco);
        } else {
            throw new Error("Movimento inválido!");
        }
    }

    removerDisco() {
        return this.discos.pop();
    }

    mostrar() {
        console.log(`${this.nome}: ${this.discos}`);
    }
}

class JogoHanoi {
    constructor(numeroDiscos) {
        this.torreA = new Torre("A");
        this.torreB = new Torre("B");
        this.torreC = new Torre("C");

        // Inicializa todos discos na torre A
        for (let i = numeroDiscos; i >= 1; i--) {
            this.torreA.adicionarDisco(i);
        }
    }

    moverDiscos(n, origem, destino, auxiliar) {
        if (n === 1) {
            const disco = origem.removerDisco();
            destino.adicionarDisco(disco);
            console.log(`Move disco ${disco} de ${origem.nome} → ${destino.nome}`);
            return;
        }

        this.moverDiscos(n - 1, origem, auxiliar, destino);

        const disco = origem.removerDisco();
        destino.adicionarDisco(disco);
        console.log(`Move disco ${disco} de ${origem.nome} → ${destino.nome}`);

        this.moverDiscos(n - 1, auxiliar, destino, origem);
    }

    resolver() {
        const total = this.torreA.discos.length;
        this.moverDiscos(total, this.torreA, this.torreC, this.torreB);
    }
}

// Executando
const jogo = new JogoHanoi(3);
jogo.resolver();