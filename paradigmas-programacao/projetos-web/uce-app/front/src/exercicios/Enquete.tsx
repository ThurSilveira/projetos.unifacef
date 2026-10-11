import { useState } from "react";

interface EnqueteProps {
  pergunta: string;
  opcaoA: string;
  opcaoB: string;
}

function Enquete({ pergunta, opcaoA, opcaoB }: EnqueteProps) {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const resultado = votosA === votosB ? "Empate" : `${votosA > votosB ? opcaoA : opcaoB} está na frente`;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 font-bold">{pergunta}</h3>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setVotosA((votos) => votos + 1)} className="rounded bg-teal-600 px-3 py-2 text-white hover:bg-teal-700">{opcaoA} ({votosA})</button>
        <button type="button" onClick={() => setVotosB((votos) => votos + 1)} className="rounded bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700">{opcaoB} ({votosB})</button>
        <button type="button" onClick={() => { setVotosA(0); setVotosB(0); }} className="rounded border border-slate-300 px-3 py-2 hover:bg-slate-50">Zerar votos</button>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-600">{resultado}</p>
    </section>
  );
}

export default Enquete;
