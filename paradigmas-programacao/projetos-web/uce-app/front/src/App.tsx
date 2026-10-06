import Card from "./Card";
import Contador from "./Contador";
import Imc from "./Imc";

function App() {
  return (
    <div className="p-6
      flex flex-col gap-3">
      <Card
        title="Estudar"
        description="Ler cap. 4"
      />
      <Card
        title="Exercício"
        description="Fazer a lista"
      />
      <Contador />
      <Imc></Imc>
      
    </div>
  );
}

export default App;