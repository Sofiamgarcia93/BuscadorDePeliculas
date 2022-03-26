import Tarjeta from "./Tarjeta"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import useFetchPeliculas from "../hooks/useFetchPeliculas"

const Populares = () =>{
    const peliculas = useFetchPeliculas("popular");
    
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
    </Box>
      
    )
}


export default Populares;