import { useEffect, useState } from "react";
import type { Comentario } from "./tipos";

function ComentariosPost() {
  const [postId, setPostId] = useState(1);
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function carregar() {
      setCarregando(true);
      setErro(null);
      try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, { signal: controller.signal });
        if (!resposta.ok) throw new Error(`Erro HTTP ${resposta.status}`);
        setComentarios(await resposta.json() as Comentario[]);
      } catch (falha) {
        if (!controller.signal.aborted) setErro(falha instanceof Error ? falha.message : "Erro desconhecido");
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }
    void carregar();
    return () => controller.abort();
  }, [postId]);

  return (
    <div className="space-y-4">
      <label className="block font-medium" htmlFor="post-id">ID do post (1 a 100)</label>
      <input id="post-id" type="number" min={1} max={100} value={postId} onChange={(evento) => setPostId(Math.min(100, Math.max(1, Number(evento.target.value) || 1)))} className="rounded border border-slate-300 px-3 py-2" />
      {carregando && <p>Carregando...</p>}
      {erro && <p className="text-red-600">Erro: {erro}</p>}
      {!carregando && !erro && <><p className="text-sm text-slate-500">{comentarios.length} comentários</p>{comentarios.length === 0 ? <p>Nenhum comentário.</p> : <ul className="space-y-3">{comentarios.map((comentario) => <li key={comentario.id} className="rounded border border-slate-200 p-3"><strong>{comentario.name}</strong><a className="ml-2 text-sm text-teal-700 underline" href={`mailto:${comentario.email}`}>{comentario.email}</a><p className="mt-1 text-sm text-slate-600">{comentario.body}</p></li>)}</ul>}</>}
    </div>
  );
}

export default ComentariosPost;
