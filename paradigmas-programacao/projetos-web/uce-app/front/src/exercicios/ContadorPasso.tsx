import { useState } from "react";

interface ContadorPassoProps {
  passo: number;
}

function ContadorPasso({ passo }: ContadorPassoProps) {
  const [valor, setValor] = useState(0);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-3 font-semibold">Passo {passo}: <span className="text-teal-700">{valor}</span></p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setValor((atual) => Math.max(0, atual - passo))} className="rounded bg-slate-200 px-4 py-2 hover:bg-slate-300">−</button>
        <button type="button" onClick={() => setValor((atual) => atual + passo)} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">+</button>
        <button type="button" onClick={() => setValor(0)} className="rounded border border-slate-300 px-4 py-2 hover:bg-slate-50">Zerar</button>
      </div>
    </div>
  );
}

export default ContadorPasso;
