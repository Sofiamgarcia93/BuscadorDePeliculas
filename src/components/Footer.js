import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";



const Footer = () =>{
    return(
        <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#424242",
          textAlign: "center",
          height: 80,
        }}
      >
      
        <Typography
          sx={{
            color: "white",
          }}
          variant="h6"
          component="div"
        >
          Hecho por Sofia Garcia
        </Typography>
   <IconButton
          target="_black"
          href="https://github.com/Sofiamgarcia93/BuscadorDePeliculas"
          sx={{ color: "white"}}
        >
          <GitHubIcon fontSize='medium' ></GitHubIcon>
        </IconButton>
  
        <IconButton
          target="_black"
          href="https://www.linkedin.com/in/sofia-macarena-garcia-649bb7203/"
          sx={{ color: "white" }}
        >
          <LinkedInIcon fontSize='medium' ></LinkedInIcon>
        </IconButton>
  
        <IconButton
          target="_black"
          href="sofiamgarcia98@gmail.com"
          sx={{ color: "white" }}
        >
          <EmailIcon  fontSize='medium'></EmailIcon>
        </IconButton>

       
      </Box>
    
    )
}


export default Footer;