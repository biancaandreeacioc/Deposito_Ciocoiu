import { create } from "zustand";
import axios from "axios";

const API_KEY = "4568ceb4a836f303e5e6fe53f51d831c";

//creo lo store zustand
export const useMeteoStore = create((set) => ({
    //definisco i dati globali
    cittaSelezionata: null,
    meteo: null,
    loading: false,

    //salvo la città cliccata
    setCittaSelezionata:(citta)=>
        set({cittaSelezionata:citta}),
    //prendo il nome della città
    caricaMeteo: (citta) => {
        set({ loading: true });

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${API_KEY}&units=metric&lang=it`)
            .then((response) => {
                //aggiorno stato globale
                set({
                    meteo: response.data,
                    loading: false
                });
            });
    }
}));