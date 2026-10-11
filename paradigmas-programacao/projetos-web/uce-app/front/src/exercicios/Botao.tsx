interface BotaoProps {
  texto: string;
  variante: "primario" | "perigo";
  onClick: () => void;
}

function Botao({ texto, variante, onClick }: BotaoProps) {
  const cor = variante === "primario" ? "bg-teal-600 hover:bg-teal-700" : "bg-red-600 hover:bg-red-700";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${cor} rounded-lg px-4 py-2 font-medium text-white transition-colors`}
    >
      {texto}
    </button>
  );
}

export default Botao;
