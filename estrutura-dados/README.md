# Estrutura de Dados - UniFACEF

Implementações de estruturas clássicas, testes, algoritmos de grafos e atividades da disciplina.

## Estrutura

```
estrutura-dados/
├── package.json
├── lib/                       # Estruturas reutilizáveis
│   ├── Deque.js
│   ├── DoublyLinkedList.js
│   ├── LinkedList.js
│   ├── Queue.js
│   └── Stack.js
├── tests/                     # Testes com node:assert
│   ├── testDeque.js
│   ├── testDoublyLinkedList.js
│   ├── testLinkedList.js
│   └── testQueue.js
├── grafos/                    # BFS, DFS, caminhos, ciclos e componentes
├── atividades/                # Exercícios por bimestre e avaliações
└── data/                      # Dados usados nas buscas
```

## Execução

Certifique-se de ter o **Node.js 18+** instalado.

```bash
npm test
npm run grafos
```
