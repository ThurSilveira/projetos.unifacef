import { useEffect, useState } from "react";
import type { Post } from "./tipos";

const POSTS_USUARIO_1 = "https://jsonplaceholder.typicode.com/posts?userId=1";

function ListaPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function carregar() {
      try {
        const resposta = await fetch(POSTS_USUARIO_1, { signal: controller.signal });
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

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p className="text-red-600">Erro: {erro}</p>;
  if (posts.length === 0) return <p>Nenhum post.</p>;

  return (
    <ol className="list-decimal space-y-4 pl-6">
      {posts.map((post) => <li key={post.id}><strong>{post.title}</strong><p className="text-sm text-slate-500">{post.body}</p></li>)}
    </ol>
  );
}

export default ListaPosts;
