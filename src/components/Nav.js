import { Link } from "react-router-dom";


const Nav = () =>{
    return(
        <div>
            <ul>
            <li><Link to="/">Home</Link> </li> 
              <li><Link to="/ultimos-lanzamientos">Ultimos Lanzamientos</Link></li>
              <li><Link to="/populares">Populares</Link></li>  
              <li><Link to="/buscar">Buscar</Link></li> 
            </ul>
        </div>

    )
}


export default Nav;