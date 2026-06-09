import axios from "axios";

function FiglioBottonePost({title, body, userId}){

    const invia=()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{title, body, userId})
        .then((response)=>{
            console.log("Post creato: ", response.data);
        });
    };

    return(
        <button onClick={invia}>
            Invia Post
        </button>
    );
}

export default FiglioBottonePost;