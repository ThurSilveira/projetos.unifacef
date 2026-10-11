import { useState } from "react";

interface ConversorMoedaProps {
  moeda: string;
  taxa: number;
}

function ConversorMoeda({ moeda, taxa }: ConversorMoedaProps) {
  const [reais, setReais] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function converter() {
    const valor = Number(reais);
    setResultado(Number.isFinite(valor) && valor >= 0 && reais.trim() !== "" ? valor * taxa : null);
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <label className="mb-2 block font-medium" htmlFor={`valor-${moeda}`}>Valor em reais para {moeda}</label>
      <div className="flex flex-wrap gap-2">
        <input id={`valor-${moeda}`} type="number" min="0" step="0.01" value={reais} onChange={(evento) => setReais(evento.target.value)} placeholder="R$ 0,00" className="min-w-0 flex-1 rounded border border-slate-300 px-3 py-2" />
        <button type="button" onClick={converter} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">Converter</button>
      </div>
      {resultado !== null && <p className="mt-3 font-semibold">{resultado.toFixed(2)} {moeda}</p>}
    </div>
  );
}

export default ConversorMoeda;
