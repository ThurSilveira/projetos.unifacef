import type { Todo } from "./Tipos";
const tarefas: Todo[] = [
    {userId: 1, id: 1, title: "Beber Agua", completed: true},
    {userId: 1, id: 2, title: "Beber coca", completed: false},
    {userId: 1, id: 3, title: "dormir", completed: false},
]

function ListaTarefas(){
    return(
        <ul>
            {
                tarefas.map( (todo) => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? "Completo" : "Incompleto"}
                    </li>
                ))
            }
        </ul>
    )
}

export default ListaTarefas;