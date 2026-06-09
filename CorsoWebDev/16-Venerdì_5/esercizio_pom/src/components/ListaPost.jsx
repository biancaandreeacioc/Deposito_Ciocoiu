import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export function ListaPost() {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        setPosts(response.data.slice(0, 6)) // seleziono solo i primi 6 per pulizia
        })
    })

    return (
        <>
            <ul>
                {posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 50)}...</p>
                        <button onClick={() => navigate(`/posts/${post.id}`)}>Vedi dettaglio</button>
                    </div>
                ))}
            </ul>
        </>
    )
}