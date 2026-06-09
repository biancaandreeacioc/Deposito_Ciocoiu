// import {useNavigate} from "react-router-dom";
// import { citta } from "../data/citta";

// export function ListaCitta(){
//     const navigate=useNavigate();

//     // const citta=[
//     //     {nome:"Roma",img:"/roma.jpg"},
//     //     {nome:"Milano", img:"/milano.jpg"},
//     //     {nome:"Napoli", img:"/napoli.jpeg"},
//     //     {nome:"Torino", img:"/torino.jpg"},
//     //     {nome:"Firenze", img:"/firenze.jpg"}
//     // ];

//     return(
//         <div className="contenitore">
//             {citta.map((citta)=>(
//                 <div className="card" key={citta.nome} style={{backgroundImage:`url(${citta.img})`}}>
//                     <h2>{citta.nome}</h2>
//                     <button onClick={()=>navigate(`/meteo/${citta.nome}`)}>
//                         Vedi Meteo
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

//con zustand
import { useNavigate } from "react-router-dom";
import { citta } from "../data/citta";
import { useMeteoStore } from "../store/useMeteoStore";

export function ListaCitta() {

    const navigate = useNavigate();

    const setCittaSelezionata = useMeteoStore((state) => state.setCittaSelezionata);

    return (
        <div className="contenitore">
            {/* prendo tutte le città */}
            {citta.map((city) => (
                // creo una cad con il nome e l'immagine di sfondo
                <div
                    className="card" key={city.nome} style={{backgroundImage: `url(${city.img})`}}
                >
                    <h2>{city.nome}</h2>
                    <button
                        onClick={() => {
                            //salvo la città nello store
                            setCittaSelezionata(city);
                            // cambio pagina
                            navigate(`/meteo/${city.nome}`);
                        }}
                    >
                        Vedi Meteo
                    </button>
                </div>
            ))}
        </div>
    );
}

