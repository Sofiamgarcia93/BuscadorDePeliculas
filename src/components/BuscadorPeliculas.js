import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tarjeta from "./Tarjeta";

const BuscadorPeliculas = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  // con unos poquitos cambios en tu hook, este fetch podria estar ahi! 
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=en-EN&query=${searchParams.get(
        "query"
      )}&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [searchParams]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };
  const handleClick = () => {
    setSearchParams({
      query: valorDelInput,
    });
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "200px",
            sm: "400px",
            md: "600px",
          },
          backgroundColor: "white",
          opacity: [0.8, 0.8, 0.8],
          marginTop: 15,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "100%", borderRadius: 2 }}
          id="standard-basic"
          label="Buscar Peliculas"
          variant="standard"
          onChange={handleChange}
          value={valorDelInput}
        ></TextField>

        <Button
          sx={{
            size: {
              xs: "small",
              sm: "medium",
              md: "medium",
            },
          }}
          margin="normal"
          variant="outline"
          endIcon={<SearchIcon></SearchIcon>}
          onClick={handleClick}
        >
          Buscar
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      > {/*este check siempre va a dar true, porque peliculas es un array. si queres hacer el map solo cuando
    peliculas tiene contenido, deberia ser peliculas.length && */}
         {peliculas &&
          peliculas.map((pelicula) => {
            return (
              <Tarjeta
                key={pelicula.id}
                titulo={pelicula.title}
                // si la api no te devuelve una imagen, esto se va a ver roto. necesitas una imagen que sirva en los casos donde 
                // pelicula.poster_path no existe
                urlImg={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
                linkTarjeta={`/detalle-pelicula/${pelicula.id}`}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default BuscadorPeliculas;
