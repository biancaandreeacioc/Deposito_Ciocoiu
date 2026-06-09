import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ButtonInviaPost } from "./ButtonInviaPost";

function JsonPlaceholderGet() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  // 1. Chiamata GET all'avvio del componente (useEffect)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei post:", error);
      });
  }, []);

  // 2. Setup di react-hook-form per gestire il form
  const { register, watch, reset } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  // watch() legge in tempo reale i valori inseriti dall'utente nei campi
  const datiCompilati = watch();

  const gestisciChiamataPost = (datiDaInviare) => {
    // Creiamo il payload esplicitamente specificando ogni singola proprietà
    const payload = {
      title: datiDaInviare.title,
      body: datiDaInviare.body,
      userId: 1,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", payload)
      .then((response) => {
        // Mostriamo un messaggio di successo
        setMessage(
          `Post inviato con successo! Creato post con ID: ${response.data.id}`
        );

        // Per mostrare subito all'utente il risultato, aggiungiamo il nuovo post
        // all'inizio della lista locale dei post
        setPosts((prevPosts) => [response.data, ...prevPosts]);

        // Resettiamo i campi del form
        reset();

        // Nascondiamo il messaggio dopo 4 secondi
        setTimeout(() => setMessage(""), 4000);
      })
      .catch((error) => {
        console.error("Errore durante l'invio del post:", error);
        setMessage("Si è verificato un errore durante l'invio del post.");
      });
  };

  return (
    <div className="jsonplaceholder-container">
      <h1>Esercitazione API: JSONPlaceholder</h1>

      {/* Form gestito nel componente Padre */}
      <div className="card form-card">
        <h2>Crea Nuovo Post (Form Padre)</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="title">Titolo:</label>
            <input
              id="title"
              type="text"
              placeholder="Inserisci il titolo del post"
              {...register("title", { required: true })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Contenuto:</label>
            <textarea
              id="body"
              placeholder="Scrivi qui il contenuto del post..."
              rows="4"
              {...register("body", { required: true })}
            ></textarea>
          </div>

          {/* Sezione in cui passiamo i dati e la funzione al componente Figlio */}
          <div className="child-section">
            <p className="section-label">Componente Figlio (ButtonInviaPost):</p>
            
            <ButtonInviaPost 
              postData={datiCompilati} 
              onSend={gestisciChiamataPost} 
            />
          </div>
        </form>

        {message && <div className="feedback-alert">{message}</div>}
      </div>

      {/* Lista di tutti i post scaricati con GET */}
      <div className="posts-section">
        <h2>Lista dei Post (GET)</h2>
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <span className="post-tag">ID: {post.id} • User: {post.userId || 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JsonPlaceholderGet;
