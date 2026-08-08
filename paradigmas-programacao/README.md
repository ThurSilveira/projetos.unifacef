# Paradigmas de Programação - UniFACEF

Exercícios de orientação a objetos, APIs Spring Boot e o projeto web UCE.

## Estrutura

```
paradigmas-programacao/
├── aulas-poo-java/
│   ├── 01-classe-objeto/
│   ├── 02-encapsulamento/
│   ├── 03-associacao/
│   ├── 04-heranca/
│   ├── 05-interfaces/
│   ├── 06-gestao-disciplinas/
│   ├── 07-todo-classe/
│   ├── 08-exe-uml/
│   ├── exercicios-notificacoes/
│   └── exercicios-revisao/
├── projetos-spring/
│   ├── banco-dados/               # Produtos com JPA e PostgreSQL
│   └── exemplo-memoria/           # Clientes e produtos em memória
└── projetos-web/uce-app/
    ├── backend/                    # Express, TypeScript, Prisma e PostgreSQL
    └── frontend/                   # Placeholder; ainda sem implementação
```

## Java

```bash
javac -d bin src/*.java
java -cp bin TestaCarro
```

## Spring Boot

```bash
./mvnw spring-boot:run
```

## Backend UCE

```bash
cd projetos-web/uce-app/backend
npm install
npm run dev
```
