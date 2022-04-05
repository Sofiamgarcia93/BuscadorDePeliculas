import Tarjeta from "./Tarjeta";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import Paginado from "./Paginado";
import { useState } from "react";

const Populares = () => {
  const [page, setPage] = useState(1);
  const { peliculas, totalPages } = useFetchPeliculas("popular", page);

  const handleClickPrimera = () => {
    setPage(1);
  };
  const handleClickUltima = (totalPages) => {
    setPage(totalPages);
  };
  const handleClickNext = () => {
    setPage(page + 1);
  };
  const handleClickPrev = () => {
    setPage(page - 1);
  };

  return (
    <Box
      sx={{
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#424242",
          bgcolor: "#fafafa",
          opacity: [0.9, 0.9, 0.8],
        }}
        variant="h5"
        letterSpacing={6}
        component="div"
      >
        Populares
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        page={page}
        handleClickPrimera={handleClickPrimera}
        handleClickUltima={() =>
          handleClickUltima(totalPages > 500 ? 500 : totalPages)
        }
        totalPages={totalPages}
      ></Paginado>
    </Box>
  );
};

export default Populares;
