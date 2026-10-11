import { useEffect, useState } from "react";
import type { Todo } from "./tipos";

type Filtro = "todas" | "pendentes" | "concluidas";

function TarefasComFiltro() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function carregar() {
      try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1", { signal: controller.signal });
        if (!resposta.ok) throw new Error(`Erro HTTP ${resposta.status}`);
        setTodos(await resposta.json() as Todo[]);
      } catch (falha) {
        if (!controller.signal.aborted) setErro(falha instanceof Error ? falha.message : "Erro desconhecido");
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }
    void carregar();
    return () => controller.abort();
  }, []);

  const visiveis = todos.filter((todo) => filtro === "todas" || (filtro === "pendentes" ? !todo.completed : todo.completed));

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p className="text-red-600">Erro: {erro}</p>;
  if (todos.length === 0) return <p>Nenhuma tarefa.</p>;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(["todas", "pendentes", "concluidas"] as Filtro[]).map((opcao) => (
          <button key={opcao} type="button" onClick={() => setFiltro(opcao)} className={`rounded px-3 py-2 capitalize ${filtro === opcao ? "bg-teal-600 text-white" : "bg-slate-200 hover:bg-slate-300"}`}>{opcao}</button>
        ))}
      </div>
      <p className="text-sm text-slate-500">{visiveis.length} tarefas</p>
      {visiveis.length === 0 ? <p>Nenhuma tarefa neste filtro.</p> : <ul className="space-y-2">{visiveis.map((todo) => <li key={todo.id} className={todo.completed ? "text-slate-400 line-through" : ""}>{todo.completed ? "[x]" : "[ ]"} {todo.title}</li>)}</ul>}
    </div>
  );
}

export default TarefasComFiltro;
