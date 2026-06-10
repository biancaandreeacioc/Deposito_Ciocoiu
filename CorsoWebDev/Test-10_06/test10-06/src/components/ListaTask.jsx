import { useTodoStore } from "../store/useTodoStore";

export function ListaTask(){
     const tasks=useTodoStore((state)=>state.tasks);

    //  recupero dallo store
    const deleteTask = useTodoStore((state) => state.deleteTask);
    const toggleCompletion = useTodoStore((state) => state.toggleCompletion);
    const updatePriority = useTodoStore((state) => state.updatePriority);

    return(
        // Contenitore principale della lista dei task
        <div className="listaTask">

            {/* Se non ci sono task*/}
            {tasks.length === 0 && (
            <p>Nessun task presente</p>
            )}

            {/* Controllo tutti i task*/}
            {tasks.map((task) => (

            // card del task
            <div
                key={task.id}
                className="cardTask"
                
            >

                {/* testo */}
                {/*  se il task è completato applica la classe "completed" */}
                <h3 className={task.isCompleted ? "completed" : ""}>
                    {task.text}
                </h3>

                {/* priorità */}
                <p>Priorità: {task.priority}</p>

                {/* cambio priorità */}
                <select
                    value={task.priority}
                    onChange={(e) =>
                        updatePriority(task.id, e.target.value)
                }>

                    {/* Opzioni */}
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                {/* Bottone */}
                {/* cambia stato completato/non completato */}
                <button onClick={() =>toggleCompletion(task.id)}>
                    {task.isCompleted ? "Annulla" : "Completa"}
                </button>

                {/* elimino task */}
                <button onClick={() => deleteTask(task.id)}>
                    Elimina
                </button>

            </div>
        ))}

        </div>
    );
    
}