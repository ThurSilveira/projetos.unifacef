class MatrizEsparsa {
    constructor(linhas, colunas) {
        if (!Number.isInteger(linhas) || !Number.isInteger(colunas) || linhas <= 0 || colunas <= 0) {
            throw new Error("As dimensões devem ser inteiros positivos.");
        }

        this.linhas = linhas;
        this.colunas = colunas;
        this.dados = new Map();
    }

    inserir(linha, coluna, valor) {
        this.#validarPosicao(linha, coluna);
        const chave = `${linha},${coluna}`;

        if (valor === 0) {
            this.dados.delete(chave);
            return;
        }

        this.dados.set(chave, valor);
    }

    obter(linha, coluna) {
        this.#validarPosicao(linha, coluna);
        return this.dados.get(`${linha},${coluna}`) ?? 0;
    }

    #validarPosicao(linha, coluna) {
        const linhaValida = Number.isInteger(linha) && linha >= 0 && linha < this.linhas;
        const colunaValida = Number.isInteger(coluna) && coluna >= 0 && coluna < this.colunas;
        if (!linhaValida || !colunaValida) {
            throw new RangeError("Posição fora dos limites da matriz.");
        }
    }

    exibir() {
        for (const [posicao, valor] of this.dados) {
            console.log(`${posicao}: ${valor}`);
        }
    }
}

const matriz = new MatrizEsparsa(4, 4);
matriz.inserir(1, 2, 8);
matriz.exibir();
