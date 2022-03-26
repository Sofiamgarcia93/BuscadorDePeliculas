import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Populares from "./components/Populares";
import BuscadorPeliculas from "./components/BuscadorPeliculas";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import DetallePelicula from "./components/DetallePelicula";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



 const App = () =>{
   return(

    <BrowserRouter>
     <Nav>
       
    </Nav>

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} />
       <Route path="/populares" element={<Populares />} />
       <Route path="/BuscadorPeliculas" element={<BuscadorPeliculas />} />
       <Route path="/detalle-pelicula/:idPelicula" element={<DetallePelicula/>} />
     </Routes>
      
      
      <Footer></Footer>
    </BrowserRouter>
   )
 }

export default App;
