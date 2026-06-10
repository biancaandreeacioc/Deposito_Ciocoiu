import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export function AddTask() {

  // la funzione addTask dallo store 
  const addTask = useTodoStore((state) => state.addTask);
  // testo (input)
  const [text, setText] = useState("");
  // priorità (select)
  const [priority, setPriority] = useState("");
 
  // Funzione eseguita quando il form viene inviato
  const handleSubmit = (e) => {
    // Blocca il refresh 
    e.preventDefault();
    // se il campo testo è vuoto, non faccio nulla
    // con trim elimino gli spazi vuoti
    if (text.trim() === "") return;
    // se non è stata selezionata una priorità
    if (priority === "") {
      alert("Seleziona");
      return; 
    }

    // Creo task 
    addTask(text, priority);
    // Reset dell'input dopo l'aggiunta
    setText("");
    // Reset della select dopo l'aggiunta
    setPriority("");
  };

  return (
    // Form 
    <form onSubmit={handleSubmit}>
      {/* INPUT TESTO */}
      <input
        type="text"
        placeholder="Inserisci un task"
        value={text}
        // Ogni volta che scrivo aggiorna lo stato
        onChange={(e) => setText(e.target.value)}/>

      {/* SELECT PRIORITÀ */}
      <select
        value={priority}
        // Ogni cambio aggiorna lo stato "priority"
        onChange={(e) => setPriority(e.target.value)}>

        {/* Opzione iniziale vuota*/}
        <option value="">
          Seleziona priorità
        </option>

        {/* Opzioni */}
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>

      </select>

      {/* BOTTONE*/}
      <button type="submit">
        Aggiungi Task
      </button>

    </form>
  );
}
