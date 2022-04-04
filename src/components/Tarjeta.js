import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import { IconButton } from "@mui/material";

const Tarjeta = ( {titulo, urlImg, linkTarjeta}) => {
  return (
    <Card
      sx={{
        width: 300,
        heigth: 370,
        m: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "#bdbdbd",
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={urlImg}
        alt="imagen de pelicula"
      />
      <CardContent>
        <Typography
          sx={{
            width: 300,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            textAlign: "center",
            fontWeight: 700,
            pl: 1.5,
            pr: 1.5,
          
          }}
        >
          {titulo}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={linkTarjeta}>
          <IconButton style={{ color: "#1565c0" }}>
            <RemoveRedEyeIcon></RemoveRedEyeIcon>
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Tarjeta;
