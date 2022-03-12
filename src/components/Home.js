import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import Listados from "./Listados";
import "./Home.css";

const Home = () =>{
    return(
        <div className="Home">
            <h2>Soy el Home</h2>
            <Carrusel />
            <Listados 
            titulo="Peliculas Populares"
            url="popular"
            />
            <Listados
            titulo="Peliculas Mejor Puntuadas"
            url="top_rated"
            />
        </div>
        
    )
}


export default Home;