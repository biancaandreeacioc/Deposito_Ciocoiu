import axios from "axios";
import { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
//componente figlio che contiene il bottone del post
import FiglioBottonePost from "./FiglioBottonePost";


function JsonPlaceholderGet(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    // contiene i dati ottenuti dal get
    const [posts, setPosts]=useState([]);
    // contiene i dati inseriti nel form
    const [postData, setPostData]=useState(null);
    // se il form è corretto, crea l'oggetto e lo passa a data,  
    // dopodichè salva nelllo stato
    const onValid = (data) => {setPostData(data);};
    // se qualche campo non è ValidationRules, stampa l'errore
    const onInvalid = (error) => {console.log(error);};


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{setPosts(response.data);});
    }, []);

    return(
        <div>
            <h1>Inserisci il tuo Post</h1>
            {/* quando si preme il pulsante, controlla i campi */}
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                {/* quando scrivo nell'input react salva il valore in una variabile */}
                <input {...register("title", {
                    required: "Titolo richiesto"
                })}
                    placeholder="Titolo"
                 />
                {/* se è vuoto o c'è un errore sul titolo, mostra l'errore */}
                {errors.title && <span>{errors.title.message}</span>}

                <input {...register("body", {
                    required: "Corpo richiesto"
                })}
                    placeholder="Body"
                 />
                {errors.body && <span>{errors.body.message}</span>}
                
                <input {...register("userId", {
                    required: "ID richiesto"
                })}
                    placeholder="ID"
                 />
                {errors.userId && <span>{errors.userId.message}</span>}

                <button type="submit">Carica dati</button>

            </form>
            {postData && (
                // passo al figlio i dati inseriti dall'utente
                <FiglioBottonePost
                    title={postData.title}
                    body={postData.body}
                    userId={postData.userId}
                />
            )}

            <ul>
                {/* visualizzo i post */}
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
export default JsonPlaceholderGet;