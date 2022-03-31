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
        width: 250,
        heigth: 370,
        m: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={urlImg}
        alt="imagen de pelicula"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            width: 350,
            whiteSpace: "nowrap",
            textOverFlow: "ellipsis",
            overflow: "hidden",
          
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
