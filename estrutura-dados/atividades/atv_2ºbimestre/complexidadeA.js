// Gera a entrada compartilhada pelos exemplos.
function gerarArrayRandomico(tamanho) {
    const arr = new Array(tamanho);
    for (let i = 0; i < tamanho; i++) {
        arr[i] = Math.floor(Math.random() * tamanho * 10);
    }
    return arr;
}

function analisarPerformance(notacao, tamanho, operacoes, inicio, fim) {
    const tempo = fim - inicio;
    let memoriaUsadaMB = 'N/A';
    if (typeof process !== 'undefined' && process.memoryUsage) {
        memoriaUsadaMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(4);
    }
    console.log(`\n=== Analise ${notacao} ===`);
    console.log(`Tamanho entrada (n):   ${tamanho}`);
    console.log(`Operacoes executadas:  ${operacoes}`);
    console.log(`Tempo de execucao:     ${tempo.toFixed(4)} ms`);
    console.log(`Memoria heap usada:    ${memoriaUsadaMB} MB`);
}

function contarOperacoes(contador) {
    contador.ops++;
}

// O(1): acesso direto por índice.
function exemploO1(array) {
    let operacoes = 0;
    const inicio = performance.now();

    if (array.length === 0) return null;
    const elemento = array[Math.floor(array.length / 2)];
    operacoes = 1;

    const fim = performance.now();
    analisarPerformance('O(1) - Acesso direto', array.length, operacoes, inicio, fim);
    console.log(`Elemento acessado: ${elemento}`);
}

// O(log n): busca binária.
function exemploOLogN(array) {
    const arrOrdenado = [...array].sort((a, b) => a - b);
    const alvo = arrOrdenado[Math.floor(arrOrdenado.length / 2)];

    const contador = { ops: 0 };
    const inicio = performance.now();

    let esq = 0, dir = arrOrdenado.length - 1, encontrado = -1;
    while (esq <= dir) {
        contarOperacoes(contador);
        const meio = Math.floor((esq + dir) / 2);
        if (arrOrdenado[meio] === alvo) { encontrado = meio; break; }
        if (arrOrdenado[meio] < alvo) esq = meio + 1;
        else dir = meio - 1;
    }

    const fim = performance.now();
    analisarPerformance('O(log n) - Busca binaria', arrOrdenado.length, contador.ops, inicio, fim);
    console.log(`Alvo: ${alvo} | Indice encontrado: ${encontrado}`);
}

// O(n): soma linear.
function exemploOn(array) {
    const contador = { ops: 0 };
    const inicio = performance.now();

    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        contarOperacoes(contador);
        soma += array[i];
    }

    const fim = performance.now();
    analisarPerformance('O(n) - Soma linear', array.length, contador.ops, inicio, fim);
    console.log(`Soma total: ${soma}`);
}

// O(n log n): merge sort.
function _mergeSort(arr, contador) {
    if (arr.length <= 1) return arr;
    const meio = Math.floor(arr.length / 2);
    const esq = _mergeSort(arr.slice(0, meio), contador);
    const dir = _mergeSort(arr.slice(meio), contador);
    return _merge(esq, dir, contador);
}

function _merge(esq, dir, contador) {
    const resultado = [];
    let i = 0, j = 0;
    while (i < esq.length && j < dir.length) {
        contarOperacoes(contador);
        if (esq[i] <= dir[j]) resultado.push(esq[i++]);
        else resultado.push(dir[j++]);
    }
    while (i < esq.length) { resultado.push(esq[i++]); contarOperacoes(contador); }
    while (j < dir.length) { resultado.push(dir[j++]); contarOperacoes(contador); }
    return resultado;
}

function exemploOnLogN(array) {
    const amostra = array.slice(0, 100_000);
    const contador = { ops: 0 };

    const inicio = performance.now();
    const ordenado = _mergeSort([...amostra], contador);
    const fim = performance.now();

    analisarPerformance('O(n log n) - Merge Sort', amostra.length, contador.ops, inicio, fim);
    console.log(`Menor: ${ordenado[0]} | Maior: ${ordenado[ordenado.length - 1]}`);
}

// O(n²): bubble sort.
function exemploOn2(array) {
    const amostra = array.slice(0, 10_000);
    const arr = [...amostra];
    const contador = { ops: 0 };

    const inicio = performance.now();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            contarOperacoes(contador);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    const fim = performance.now();

    analisarPerformance('O(n²) - Bubble Sort', amostra.length, contador.ops, inicio, fim);
    console.log(`Menor: ${arr[0]} | Maior: ${arr[arr.length - 1]}`);
}

// O(2^n): Fibonacci recursivo.
function _fibRecursivo(n, contador) {
    contarOperacoes(contador);
    if (n <= 1) return n;
    return _fibRecursivo(n - 1, contador) + _fibRecursivo(n - 2, contador);
}

function exemploO2n(n = 30) {
    const contador = { ops: 0 };

    const inicio = performance.now();
    const resultado = _fibRecursivo(n, contador);
    const fim = performance.now();

    analisarPerformance(`O(2^n) - Fibonacci recursivo`, n, contador.ops, inicio, fim);
    console.log(`Fibonacci(${n}): ${resultado}`);
}

// O(n!): permutações.
function _permutacoes(arr, atual, resultado, contador) {
    if (atual.length === arr.length) {
        contarOperacoes(contador);
        resultado.push([...atual]);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!atual.includes(arr[i])) {
            atual.push(arr[i]);
            _permutacoes(arr, atual, resultado, contador);
            atual.pop();
        }
    }
}

function exemploOnFatorial(n = 8) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const resultado = [];
    const contador = { ops: 0 };

    const inicio = performance.now();
    _permutacoes(arr, [], resultado, contador);
    const fim = performance.now();

    analisarPerformance(`O(n!) - Permutacoes`, n, contador.ops, inicio, fim);
    console.log(`Total permutacoes de ${n} elementos: ${resultado.length}`);
}

const TAM = 100;
console.log(`Gerando array randomico com ${TAM.toLocaleString()} elementos...`);
const arrayGrande = gerarArrayRandomico(TAM);
console.log('Array gerado. Executando analises:\n');

exemploO1(arrayGrande);
exemploOLogN(arrayGrande);
exemploOn(arrayGrande);
exemploOnLogN(arrayGrande);
exemploOn2(arrayGrande);
exemploO2n(30);
exemploOnFatorial(8);
