import { useState } from "react";

interface TarefaCardProps {
  titulo: string;
}

function TarefaCard({ titulo }: TarefaCardProps) {
  const [concluida, setConcluida] = useState(false);

  return (
    <article className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 ${concluida ? "border-green-500 bg-green-50" : "border-slate-200 bg-white"}`}>
      <h3 className={concluida ? "text-slate-400 line-through" : "font-medium text-slate-900"}>{titulo}</h3>
      <button type="button" onClick={() => setConcluida((valor) => !valor)} className="rounded bg-slate-800 px-3 py-2 text-sm text-white hover:bg-slate-700">
        {concluida ? "Desfazer" : "Concluir"}
      </button>
    </article>
  );
}

export default TarefaCard;
