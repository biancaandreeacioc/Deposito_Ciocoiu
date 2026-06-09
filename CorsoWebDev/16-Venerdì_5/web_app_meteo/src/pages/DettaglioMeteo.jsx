// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { citta } from "../data/citta";

// export function DettaglioMeteo() {

//     const {citta:nomeCitta}=useParams();
//     const navigate= useNavigate();

//     const [meteo, setMeteo]=useState(null);
//     const [loading, setLoading]=useState(true);

//     const API_KEY="4568ceb4a836f303e5e6fe53f51d831c";

//     // scorro l'array e restituisco il primo elemento che soddisfa la condizione
//     const cittaCorrente=citta.find((city)=>city.nome===nomeCitta);

//     useEffect(()=>{
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nomeCitta}&appid=${API_KEY}&units=metric&lang=it`)
//         .then((response)=>{
//             setMeteo(response.data)
//             setLoading(false)
//         })
//     }, [nomeCitta])

//     if (loading) return <h2>Caricamento in corso</h2>

//     return(
//         <div className="dettaglio" style={{backgroundImage: `url(${cittaCorrente.img})`}}>
//             <h1>{meteo.name}</h1>
//             <h2>
//                 Temperatura: {meteo.main.temp}°C
//             </h2>
//             <p>
//                 Meteo: {meteo.weather[0].description}
//             </p>
//             <p>
//                 Umidità: {meteo.main.humidity}%
//             </p>
//             <p>
//                 Velocità vento: {meteo.wind.speed} m/s
//             </p>
//             <button onClick={() => navigate("/")}>
//                 Torna alla Home
//             </button>
//         </div>
//     );
// }

//con zustand
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMeteoStore } from "../store/useMeteoStore";

export function DettaglioMeteo() {
    //prendo la città dall'url
    const { citta } = useParams();
    //lo utilizzerò per tornare indietro
    const navigate = useNavigate();
    //prendo i dati da zustand
    const cittaSelezionata = useMeteoStore((state) => state.cittaSelezionata);
    const meteo =useMeteoStore((state) => state.meteo);
    const loading =useMeteoStore((state) => state.loading);
    const caricaMeteo =useMeteoStore((state) => state.caricaMeteo);

    useEffect(() => {
        //quando entro nella pagina, prende la città dall'url e chiama l'API nello store
        caricaMeteo(citta);
        //cambia al primo caricamento e quando cambia una dipendenza
    }, [citta, caricaMeteo]);

    //se sta caricando o meteo ancora non esiste
    if (loading || !meteo) {
        return <h2>Caricamento in corso...</h2>;
    }

    return (
        <div className="dettaglio" style={{backgroundImage:`url(${cittaSelezionata.img})`}}>
            <h1>{meteo.name}</h1>
            <h2>
                Temperatura: {meteo.main.temp}°C
            </h2>
            <p>
                Meteo: {meteo.weather[0].description}
            </p>
            <p>
                Umidità: {meteo.main.humidity}%
            </p>
            <p>
                Vento: {meteo.wind.speed} m/s
            </p>
            <button onClick={() => navigate("/")}>
                Torna alla Home
            </button>
        </div>
    );
}