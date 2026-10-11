import { useEffect, useState } from "react";
import type { Usuario } from "./tipos";

function LinhaUsuario({ usuario }: { usuario: Usuario }) {
  return (
    <tr className="border-t border-slate-200">
      <td className="px-3 py-2 font-medium">{usuario.name}</td>
      <td className="px-3 py-2"><a className="text-teal-700 underline" href={`mailto:${usuario.email}`}>{usuario.email}</a></td>
      <td className="px-3 py-2">{usuario.address.city}</td>
      <td className="px-3 py-2">{usuario.company.name}</td>
    </tr>
  );
}

function TabelaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function carregar() {
      try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });
        if (!resposta.ok) throw new Error(`Erro HTTP ${resposta.status}`);
        setUsuarios(await resposta.json() as Usuario[]);
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
  if (usuarios.length === 0) return <p>Nenhum usuário.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <thead className="bg-slate-100"><tr><th className="px-3 py-2">Nome</th><th className="px-3 py-2">E-mail</th><th className="px-3 py-2">Cidade</th><th className="px-3 py-2">Empresa</th></tr></thead>
        <tbody>{usuarios.map((usuario) => <LinhaUsuario key={usuario.id} usuario={usuario} />)}</tbody>
      </table>
    </div>
  );
}

export default TabelaUsuarios;
