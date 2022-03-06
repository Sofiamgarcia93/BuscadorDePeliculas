import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Populares from "./components/Populares";
import Buscar from "./components/Buscar";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import DetallePelicula from "./components/DetallePelicula";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



 const App = () =>{
   return(

    <BrowserRouter>
     <Nav>
       
    </Nav>

    <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} />
       <Route path="/populares" element={<Populares />} />
       <Route path="/buscar" element={<Buscar />} />
       <Route path="/detalle-pelicula/:" element={<DetallePelicula/>} />
     </Routes>
      
      
      <Footer></Footer>
    </BrowserRouter>
   )
 }

export default App;
