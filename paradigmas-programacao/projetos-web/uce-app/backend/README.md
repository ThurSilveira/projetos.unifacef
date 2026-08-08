# UCE Backend

API em Node.js com TypeScript, Express, CORS, Prisma e PostgreSQL.

## Configuração

1. Copie `.env.example` para `.env` e ajuste a conexão com o PostgreSQL.
2. Instale as dependências com `npm install`.
3. Crie a primeira migração com `npm run prisma:migrate -- --name init`.
4. Inicie a API com `npm run dev`.

A rota `GET /api/health` verifica a API e a conexão com o banco de dados.

## Scripts

- `npm run dev`: inicia em modo de desenvolvimento.
- `npm run build`: gera o Prisma Client e compila o TypeScript.
- `npm start`: executa a versão compilada.
- `npm run typecheck`: valida os tipos sem gerar arquivos.
- `npm run prisma:generate`: gera o Prisma Client.
- `npm run prisma:migrate`: cria/aplica migrações de desenvolvimento.
- `npm run prisma:studio`: abre o Prisma Studio.
