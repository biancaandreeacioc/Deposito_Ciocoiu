import {NavLink} from "react-router-dom";

export function Navbar(){
    
    const visualizzaStileAttivo=({isActive})=>({
        color: isActive ? "gold" : "black",
        fontWeight: isActive ? "bold" : "normal"
    });

    return (

        <nav>
            <div className="header">
                <h2>Meteo h24</h2>
            </div>
            <NavLink to="/" style={visualizzaStileAttivo}>
                Home
            </NavLink>
        </nav>
    );
}