// Componente figlio che contiene un solo bottone per inviare i dati.
// Riceve come props i dati compilati dall'utente (postData) e la funzione per inviarli (onSend).
export function ButtonInviaPost({ postData, onSend }) {
  
  // Gestore del click sul bottone
  const handleClick = () => {
    // Se non ci sono dati compilati, mostriamo un avviso o non facciamo nulla
    if (!postData || !postData.title || !postData.body) {
      alert("Compila il form prima di inviare!");
      return;
    }
    
    // Eseguiamo la funzione di invio passata dal padre con i dati giusti
    onSend(postData);
  };

  return (
    <button className="btn-submit-post" onClick={handleClick}>
      Invia Post all'API (POST)
    </button>
  );
}
