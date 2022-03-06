import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import Listados from "./Listados";

const Main = () =>{
    return(
        <div>
            <h2>Soy el main</h2>
            <Carrusel />
            <Listados />
        </div>
        
    )
}


export default Main;