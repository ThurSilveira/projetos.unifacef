import { useEffect, useState } from "react";
import type { Post } from "./tipos";

function BuscaPorTitulo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function carregar() {
      try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", { signal: controller.signal });
        if (!resposta.ok) throw new Error(`Erro HTTP ${resposta.status}`);
        setPosts(await resposta.json() as Post[]);
      } catch (falha) {
        if (!controller.signal.aborted) setErro(falha instanceof Error ? falha.message : "Erro desconhecido");
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }
    void carregar();
    return () => controller.abort();
  }, []);

  const termo = busca.trim().toLocaleLowerCase("pt-BR");
  const encontrados = posts.filter((post) => post.title.toLocaleLowerCase("pt-BR").includes(termo));

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p className="text-red-600">Erro: {erro}</p>;
  if (posts.length === 0) return <p>Nenhum post disponível.</p>;

  return (
    <div className="space-y-4">
      <input type="search" value={busca} onChange={(evento) => setBusca(evento.target.value)} placeholder="Buscar no título" className="w-full rounded border border-slate-300 px-3 py-2" />
      <p className="text-sm text-slate-500">{encontrados.length} de {posts.length}</p>
      {encontrados.length === 0 ? <p>Nenhum resultado.</p> : <ul className="list-disc space-y-2 pl-6">{encontrados.map((post) => <li key={post.id}>{post.title}</li>)}</ul>}
    </div>
  );
}

export default BuscaPorTitulo;
