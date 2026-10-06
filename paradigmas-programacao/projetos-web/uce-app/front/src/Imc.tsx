import { useState } from "react";

const campo = 'border rounded px-3 py-2'
function Imc() {
  // cria variaevis de estado
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState<number | null>(null)
  
  function calcularIMC(){
    if (peso >= 0 && altura > 0){
        const resultado = peso / (altura**2)
        setImc(resultado) // altera a variavel de estado imc com o resultado do calculo 
    }
  }
  
  return (
    <div className="p-6 flex
      flex-col gap-3 w-64">
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) =>
          setPeso(Number(e.target.value))}
        className={campo}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) =>
          setAltura(Number(e.target.value))}
        className={campo}
      />
        <button
        onClick={calcularIMC}
        className="bg-green-600
          text-white rounded py-2"
      >
        Calcular
      </button>

      {imc !== null && (
        <p>IMC: {imc.toFixed(1)}</p>
      )}
    </div>
  ) 
}

export default Imc;