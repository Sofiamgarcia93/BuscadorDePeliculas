import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";


const Listados = ({ titulo, url }) => {
  const [listaPeliculas, setListaPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=96357f7f10ae428b53766292b46e8b8e&language=es-AR$page=1`
    )
      .then((res) => res.json())
      .then((data) => setListaPeliculas(data.results));
  }, []);
  return (
    <Box>
      <Box
        sx={{
          bgcolor:'#37474f',
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{
            color: "white",
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          {titulo}
        </Typography>
      </Box>
       <Box
       sx={{overflowY: "scroll",
       height: "50vh",
       backgroundColor:"#bdbdbd" }}>   
      {listaPeliculas.map((pelicula) => (
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt={`imagen de la pelicula`}
                src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
              />
            </ListItemAvatar>
            <ListItemText>{pelicula.title}</ListItemText>
            <Link to={`/detalle-pelicula/${pelicula.id}`}>
            <ListItemIcon>
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </ListItemIcon>
            </Link>
          </ListItem>

          <Divider />
        </List>
      ))}
      </Box>
    </Box>
  );
};

export default Listados;
