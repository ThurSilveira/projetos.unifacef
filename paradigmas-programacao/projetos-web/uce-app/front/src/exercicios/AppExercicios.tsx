import { useState, type ReactNode } from "react";
import Botao from "./Botao";
import BuscaPorTitulo from "./BuscaPorTitulo";
import CartaoProduto from "./CartaoProduto";
import ComentariosPost from "./ComentariosPost";
import ContadorPasso from "./ContadorPasso";
import ConversorMoeda from "./ConversorMoeda";
import Enquete from "./Enquete";
import ListaPosts from "./ListaPosts";
import ListaRecarregavel from "./ListaRecarregavel";
import TabelaUsuarios from "./TabelaUsuarios";
import TarefaCard from "./TarefaCard";
import TarefasComFiltro from "./TarefasComFiltro";

interface Exercicio {
  titulo: string;
  grupo: "Fundamentos" | "Listas e fetch";
  conteudo: ReactNode;
}

const produtos = [
  { nome: "Teclado", preco: 149.9 },
  { nome: "Mouse", preco: 79.5 },
  { nome: "Monitor", preco: 899 },
];

const exercicios: Exercicio[] = [
  { titulo: "1. Botão reutilizável", grupo: "Fundamentos", conteudo: <div className="flex flex-wrap gap-2"><Botao texto="Salvar" variante="primario" onClick={() => alert("Salvo!")} /><Botao texto="Enviar" variante="primario" onClick={() => alert("Enviado!")} /><Botao texto="Excluir" variante="perigo" onClick={() => alert("Excluído!")} /></div> },
  { titulo: "2. Contador com passo", grupo: "Fundamentos", conteudo: <div className="grid gap-3 sm:grid-cols-2"><ContadorPasso passo={1} /><ContadorPasso passo={5} /></div> },
  { titulo: "3. Cartão de produto", grupo: "Fundamentos", conteudo: <div className="grid gap-3 sm:grid-cols-3">{produtos.map((produto) => <CartaoProduto key={produto.nome} {...produto} />)}</div> },
  { titulo: "4. Cartão de tarefa", grupo: "Fundamentos", conteudo: <div className="space-y-3"><TarefaCard titulo="Estudar React" /><TarefaCard titulo="Fazer exercícios" /><TarefaCard titulo="Revisar props" /></div> },
  { titulo: "5. Conversor de moeda", grupo: "Fundamentos", conteudo: <div className="grid gap-3 sm:grid-cols-2"><ConversorMoeda moeda="USD" taxa={0.18} /><ConversorMoeda moeda="EUR" taxa={0.16} /></div> },
  { titulo: "6. Enquete", grupo: "Fundamentos", conteudo: <div className="grid gap-3 sm:grid-cols-2"><Enquete pergunta="Melhor linguagem?" opcaoA="TypeScript" opcaoB="Python" /><Enquete pergunta="Melhor editor?" opcaoA="VS Code" opcaoB="WebStorm" /></div> },
  { titulo: "1. Lista de posts", grupo: "Listas e fetch", conteudo: <ListaPosts /> },
  { titulo: "2. Tabela de usuários", grupo: "Listas e fetch", conteudo: <TabelaUsuarios /> },
  { titulo: "3. Tarefas com filtro", grupo: "Listas e fetch", conteudo: <TarefasComFiltro /> },
  { titulo: "4. Busca por título", grupo: "Listas e fetch", conteudo: <BuscaPorTitulo /> },
  { titulo: "5. Comentários de um post", grupo: "Listas e fetch", conteudo: <ComentariosPost /> },
  { titulo: "6. Botão recarregar", grupo: "Listas e fetch", conteudo: <ListaRecarregavel /> },
];

function AppExercicios() {
  const [atual, setAtual] = useState(0);
  const exercicio = exercicios[atual];

  return (
    <section className="mx-auto mt-10 w-full max-w-5xl border-t border-slate-200 px-6 py-10">
      <header className="mb-6">
        <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Soluções dos slides</p>
        <h1 className="text-3xl font-bold text-slate-950">Exercícios de React</h1>
      </header>
      <nav className="mb-6 flex flex-wrap gap-2" aria-label="Exercícios">
        {exercicios.map((item, indice) => (
          <button key={`${item.grupo}-${item.titulo}`} type="button" onClick={() => setAtual(indice)} className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${indice === atual ? "bg-teal-600 text-white" : "bg-slate-200 text-slate-800 hover:bg-slate-300"}`}>
            {item.grupo === "Fundamentos" ? "A" : "B"} · {item.titulo}
          </button>
        ))}
      </nav>
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-teal-700">{exercicio.grupo}</p>
        <h2 className="mb-5 text-2xl font-bold text-slate-900">{exercicio.titulo}</h2>
        {exercicio.conteudo}
      </article>
    </section>
  );
}

export default AppExercicios;
