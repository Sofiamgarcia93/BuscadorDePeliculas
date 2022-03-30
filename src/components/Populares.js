import Tarjeta from "./Tarjeta"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import useFetchPeliculas from "../hooks/useFetchPeliculas"
import Paginado from "./Paginado"
import { useState } from "react"


const Populares = () =>{
  const [page, setPage] = useState (1)
  const {peliculas, totalPages }= useFetchPeliculas("popular", page);
  
  const handleClickPrimera = () =>{
    setPage(1)
  }
  const handleClickUltima = ( totalPages) =>{
    setPage(totalPages)
  }
 const handleClickNext = () =>{
    setPage( page + 1)
  } 
  const handleClickPrev = () =>{
    setPage( page - 1)
  } 
  
    
  
    return(
     
        <Box
        sx={{
          marginTop: 10,
          height: 80,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{
            bgcolor: "#6fbf73",
            color: "white",
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Populares
        </Typography>

      <Box sx={{
          display: "flex",
          flexWrap: "wrap",
        
        }}>
      {peliculas.map((pelicula) => (
         <Tarjeta
         key={pelicula.id}
         titulo={pelicula.title}
         urlImg={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
         linkTarjeta={`/detalle-pelicula/${pelicula.id}`}
       />
      ))}
      </Box>

      <Paginado
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 100
        }}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        page={page}  
        handleClickPrimera={handleClickPrimera} 
        handleClickUltima={() => handleClickUltima(totalPages > 500 ? 500 : totalPages)} 
      >
  </Paginado>
      
    </Box>
      
    )
}


export default Populares;