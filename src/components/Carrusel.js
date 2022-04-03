import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchPeliculas from "../hooks/useFetchPeliculas"
import { Link } from "react-router-dom";



const Carrusel = () => {
  const {peliculas, totalPages } = useFetchPeliculas("now_playing", 1);
  return (
    <Box>
      <Slider
        dots={true}
        arrows={false}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={2000}
        
      >
        {peliculas.map((pelicula) => (
          <Box
            key={pelicula.id}
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${pelicula.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "60vh",
              display: "flex !important",       
              flexDirection: "column !important",
              alignContent: "center !important",
              justifyContent: "flex-end !important",
              alignItems: "center !important",
            }}
          >
            <Box
              sx={{
                maxWidth: 950,
                bgcolor: '#FFFFFF',
                opacity: [0.5, 0.5, 0.5],
                boxShadow: 1,
                display: "flex !important",
                alignItems: "center !important",
                flexDirection: "column !important",
                textAlign: "center !important",
                p: 3,
                m: 1,
              }}
            >
              <Box
              sx={{color: "text.primary"}}>
                  <Typography variant="h5" component="div" >
                    {pelicula.title}
                  </Typography>
                  <Typography variant="h5"
                    sx={{ fontSize:{
                      xs: "10px",
                      sm: "12px",
                      md: "16px",

                    } }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {pelicula.overview}
                  </Typography>
                
                  <Link to={`/detalle-pelicula/${pelicula.id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small" variant="contained"
                    sx={{  textDecorationStyle:"none",
                    backgroundColor:"#78909c",
                    fontSize:{
                      xs: "10px",
                      sm: "12px",
                      md: "16px",

                    }}}>
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