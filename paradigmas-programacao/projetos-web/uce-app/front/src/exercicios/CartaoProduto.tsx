import { useState } from "react";

interface CartaoProdutoProps {
  nome: string;
  preco: number;
}

function CartaoProduto({ nome, preco }: CartaoProdutoProps) {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-bold text-slate-900">{nome}</h3>
      <p className="mb-4 text-slate-600">R$ {preco.toFixed(2)}</p>
      <button type="button" onClick={() => setCurtidas((total) => total + 1)} className="rounded bg-pink-600 px-3 py-2 text-white hover:bg-pink-700">
        Curtir · Curtidas: {curtidas}
      </button>
    </article>
  );
}

export default CartaoProduto;
