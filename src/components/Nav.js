import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import TheatersIcon from '@mui/icons-material/Theaters';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MenuDesplegable from "./MenuDesplegable"
const Nav = () =>{
    return (
              
        <Box sx={{ flexGrow: 1 }}>
          <AppBar 
          position="fixed"
          sx={{ bgcolor: "#424242"}}>
            <Toolbar sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <Box sx={{
               display: "flex",
               flexDirection: "row",
             }}>
              <LocalActivityIcon
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </LocalActivityIcon>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Buscador Películas
              </Typography>
              </Box>
              <Box
              sx={{
                display:{ 
                  xs: "none",
                  sm: "none",
                  md: "inline"}
              
              }}>
              <Button color="inherit">
                <Link to="/"  style={{ textDecoration: "none", color: "white" }}> Home </Link>
              </Button>
                 
              <Button>
                <Link to="/ultimos-lanzamientos"  style={{ textDecoration: "none", color: "white" }}>Ultimos Lanzamientos</Link>
              </Button> 

              <Button>
                <Link to="/populares"  style={{ textDecoration: "none", color: "white" }}>Populares </Link>
              </Button>

              <Button>
              <Link to="/BuscadorPeliculas"  style={{ textDecoration: "none", color: "white" }}>Buscar</Link>
              </Button>
              </Box>
              <Box
              sx={{
                display:{ 
                  xs: "inline",
                  sm: "inline",
                  md: "none"}
              }}>
                <MenuDesplegable/>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        
  
    )
  }
  
  export default Nav;