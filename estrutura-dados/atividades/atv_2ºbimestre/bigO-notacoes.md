# Notações Big O — Complexidade de Algoritmos

Big O descreve como o tempo de execução ou uso de memória **cresce** conforme o tamanho da entrada (`n`) aumenta. Ignora constantes e termos menores — importa só o comportamento dominante.

---

## O(1) — Constante

Executa **sempre o mesmo número de operações**, independente do tamanho.

```js
array[500] // acesso por índice: 1 operação, sempre
```

**Exemplos reais:**
- Acesso a elemento de array por índice
- Inserção no início de uma hash map
- Verificar se stack está vazia (`stack.length === 0`)

---

## O(log n) — Logarítmica

A cada passo, **divide o problema pela metade**. Cresce muito devagar.

```
n = 1.000.000 → ~20 operações
n = 1.000.000.000 → ~30 operações
```

```js
// Busca binária: descarta metade do array a cada iteração
while (esq <= dir) {
    const meio = Math.floor((esq + dir) / 2);
    if (arr[meio] === alvo) return meio;
    if (arr[meio] < alvo) esq = meio + 1;
    else dir = meio - 1;
}
```

**Exemplos reais:**
- Busca binária em array ordenado
- Busca em árvore binária balanceada (BST)
- Git bisect para encontrar commit com bug

---

## O(n) — Linear

Cresce **proporcionalmente** ao tamanho da entrada. Percorre cada elemento uma vez.

```js
for (let i = 0; i < array.length; i++) soma += array[i]; // n operações
```

**Exemplos reais:**
- Busca linear (encontrar elemento em array não ordenado)
- Calcular soma/média de uma lista
- Verificar se string tem caractere duplicado

---

## O(n log n) — Linear-logarítmica

Melhor complexidade possível para **algoritmos de ordenação por comparação**.

```
n = 100.000 → ~1.700.000 operações (vs O(n²) = 10.000.000.000)
```

```js
// Merge Sort: divide array ao meio recursivamente, depois mescla ordenado
mergeSort([5, 3, 8, 1]) → divide → [5,3] [8,1] → mescla → [1,3,5,8]
```

**Exemplos reais:**
- `Array.sort()` na maioria dos engines JS (TimSort)
- Merge Sort, Heap Sort, Quick Sort (caso médio)
- Algoritmos de compressão como gzip

---

## O(n²) — Quadrática

**Dois loops aninhados.** Dobrar `n` quadruplica o tempo.

```js
for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) // n × n = n² comparações
        comparar(arr[i], arr[j]);
```

**Exemplos reais:**
- Bubble Sort, Selection Sort, Insertion Sort
- Verificar todos os pares de elementos de uma lista
- Multiplicação de matrizes simples (O(n³) na versão cúbica)

---

## O(2^n) — Exponencial

Cada incremento de `n` **dobra** o número de operações. Impraticável para n > 40.

```
n = 10  →    1.024 operações
n = 30  →  1.073.741.824 operações
n = 50  →  ~1 quadrilhão de operações
```

```js
// Fibonacci recursivo: fib(n) chama fib(n-1) e fib(n-2) — árvore de chamadas dobra
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2); // 2 chamadas por nó
}
```

**Exemplos reais:**
- Fibonacci recursivo sem memoização
- Subconjuntos de um conjunto (2^n subconjuntos)
- Força bruta em problemas de satisfatibilidade booleana (SAT)

---

## O(n!) — Fatorial

**O pior caso prático.** Cresce mais rápido que qualquer exponencial.

```
n = 8  →    40.320 operações
n = 10 → 3.628.800 operações
n = 15 → 1.307.674.368.000 operações
```

```js
// Todas as permutações de um array de n elementos
permutacoes([1, 2, 3]) → [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
//                         ← 3! = 6 permutações
```

**Exemplos reais:**
- Gerar todas as permutações de uma sequência
- Problema do Caixeiro Viajante por força bruta (TSP)
- Quebra-cabeças de anagramas (força bruta)

---

## Comparação Visual

```
Operações
    │
10⁹ │                                              O(n!)
    │                                         O(2^n)
10⁶ │                                    O(n²)
    │                           O(n log n)
10³ │                      O(n)
    │             O(log n)
  1 │    O(1)
    └────────────────────────────────────── n
         10   100  1K   10K  100K   1M
```

| Notação    | n = 10 | n = 100 | n = 1.000 | n = 1.000.000 |
|------------|--------|---------|-----------|---------------|
| O(1)       | 1      | 1       | 1         | 1             |
| O(log n)   | 3      | 7       | 10        | 20            |
| O(n)       | 10     | 100     | 1.000     | 1.000.000     |
| O(n log n) | 33     | 664     | 10.000    | 20.000.000    |
| O(n²)      | 100    | 10.000  | 1.000.000 | 10¹²          |
| O(2^n)     | 1.024  | 10³⁰   | impratic. | impossível    |
| O(n!)      | 3,6M   | imposs. | impossível| impossível    |

---

## Regra prática

> Sempre prefira o algoritmo com menor Big O para entradas grandes.  
> Para n pequeno (< 100), a diferença é irrelevante — escolha o mais legível.
