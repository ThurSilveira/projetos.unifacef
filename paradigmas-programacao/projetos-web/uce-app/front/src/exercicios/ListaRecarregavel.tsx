import { useEffect, useState } from "react";
import type { Todo } from "./tipos";

function ListaRecarregavel() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [tentativa, setTentativa] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState<Date | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function carregar() {
      setCarregando(true);
      setErro(null);
      try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1", { signal: controller.signal });
        if (!resposta.ok) throw new Error(`Erro HTTP ${resposta.status}`);
        setTodos(await resposta.json() as Todo[]);
        setUltimaAtualizacao(new Date());
      } catch (falha) {
        if (!controller.signal.aborted) setErro(falha instanceof Error ? falha.message : "Erro desconhecido");
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }
    void carregar();
    return () => controller.abort();
  }, [tentativa]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" disabled={carregando} onClick={() => setTentativa((numero) => numero + 1)} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-50">{erro ? "Tentar de novo" : "Recarregar"}</button>
        {ultimaAtualizacao && <span className="text-sm text-slate-500">Última atualização: {ultimaAtualizacao.toLocaleTimeString("pt-BR")}</span>}
      </div>
      {carregando && <p>Carregando...</p>}
      {erro && <p className="text-red-600">Erro: {erro}</p>}
      {!carregando && !erro && (todos.length === 0 ? <p>Nenhuma tarefa.</p> : <ul className="space-y-1">{todos.map((todo) => <li key={todo.id}>{todo.completed ? "[x]" : "[ ]"} {todo.title}</li>)}</ul>)}
    </div>
  );
}

export default ListaRecarregavel;
