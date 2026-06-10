//creo lo store
import {create} from 'zustand';

export const useTodoStore=create((set)=>({
    //stato iniziale
    tasks: [],
    //contatore id
    nextId: 1,

    //aggiungo un nuovo task:
    addTask: (text, priority) =>
        //aggiorno lo store e gli passo lo stato attuale state 
        set((state)=>({
            // creo nuovo array tasks
            tasks:[
                //copio i task esistenti
                ...state.tasks,
                //aggiungo il nuovo task
                {
                    id: state.nextId,
                    text,
                    priority,
                    isCompleted:false
                }
            ],
            // incremento contattore di 1
            nextId: state.nextId+1
        })),

        //elimino un task
        deleteTask: (id)=>set((state)=>({

            // creo un nuovo array con filter che mantiene solo i task che non hanno l'id passato
            tasks: state.tasks.filter(
                //se l'id è diverso lo mantengo
                (task)=>task.id!==id
            )
        })),

        //trovo task e inverto il valòore di isCompleted
        toggleCompletion: (id)=> set((state)=>({
            //scorro tutti i task con map
            tasks:state.tasks.map((task)=>
                // se trova il task giusto crea una copia, ci copia le proprietà e inverte il valore
                // altrimenti il task rimane uguale
                task.id===id ? {...task, isCompleted:!task.isCompleted}:task
            )
        })),
        
        //trovo il task e aggiorno la sua priorità
        updatePriority: (id, newPriority)=>set((state)=>({
            //scorro tutti i task
            tasks: state.tasks.map((task)=>
            //se trovo il task richiesto copio le proprietà e aggiorno solo priority, altrimenti rimane invariato
            task.id===id ? {...task, priority:newPriority} : task
            )
        }))
        

}));


