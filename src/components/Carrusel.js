import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchPeliculas from "../hooks/useFetchPeliculas"
import { Link } from "react-router-dom";



const Carrusel = () => {
  const peliculas = useFetchPeliculas("now_playing");
  return (
    <Box>
      <Slider
        dots={true}
        arrows={true}
        slidesToShow={1}
        // autoplay={true}
        autoplaySpeed={1500}
      >
        {peliculas.map((pelicula) => (
          <Box
            key={pelicula.id}
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${pelicula.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "60vh",
              display: "flex",       
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: 950,
                bgcolor: 'transparent',
                bgopacity: [0.9, 0.8, 0.7],
                boxShadow: 1,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: 3,
              }}
            >
              <Box
              sx={{color: "text.primary"}}>
                  <Typography variant="h5" component="div" >
                    {pelicula.title}
                  </Typography>
                  <Typography variant="h5"
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {pelicula.overview}
                  </Typography>
                
                  <Link to={`/detalle-pelicula/${pelicula.id}`}>
                    <Button size="small" variant="contained" color="secondary">
                      Ver mas..
                    </Button>
                  </Link>
                </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carrusel;