class MatrizDensaEsparsa{
    constructor(linhas, colunas) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.dados = [];
    }

    inserir(linha, coluna, valor){
        if (valor != 0){
            this.dados.push({linha, coluna, valor});
        }
    }

    exibir(){
        for(let item of this.dados){
            console.log(`Linha: ${item.linha},
            \nColuna: ${item.coluna},
            \nValor ${item.valor}`)
        }
    }
}

const matriz = new MatrizDensaEsparsa(4, 4);
matriz.inserir(0,0,0);