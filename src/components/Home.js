import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import Listados from "./Listados";
import "./Home.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

const Home = () =>{
    return(
       <div> 
        <Grid container spacing ={4} direction="row"
        justifyContent="center"
        alignItems="center"
        >

        <Grid item xs={12} sx={{borderColor: 'error.main'}}>
        <Box >
        <h2>Soy el Home</h2>
            <Carrusel />
        </Box>
        </Grid>

        <Grid item xs={4}>
        <Box>

            <Listados 
            titulo="Peliculas Populares"
            url="popular"
            />
        </Box>
        </Grid>

        <Grid item xs={4}>
        <Box>
            <Listados
            titulo="Peliculas Mejor Puntuadas"
            url="top_rated"
            />
        </Box>
        </Grid>


            
        
      </Grid>
      </div>
    )
}


export default Home;