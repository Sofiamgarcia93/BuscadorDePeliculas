import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import Listados from "./Listados";
import Box from '@mui/material/Box';



const Home = () =>{
    return(

      <Box>
            <Carrusel />
        <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: 'space-around',
            p: 5,
        }}>
            <Listados 
            titulo="Peliculas Populares"
            url="popular"
            />

            <Listados
            titulo="Peliculas Mejor Puntuadas"
            url="top_rated"
            />
        </Box>
    
      </Box>
    )
}


export default Home;