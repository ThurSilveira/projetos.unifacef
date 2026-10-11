import Card from "./Card";
import Contador from "./Contador";
import Imc from "./Imc";
import ListaSimples from "./ListaSimples";
import ListaTarefas from "./ListaTarefas";
import AppExercicios from "./exercicios/AppExercicios";

function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 p-6">
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
        <ListaSimples></ListaSimples>
        <ListaTarefas></ListaTarefas>
      </div>
      <AppExercicios />
    </main>
  );
}

export default App;
