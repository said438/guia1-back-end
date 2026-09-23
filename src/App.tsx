import { Link } from "react-router";

export default function App(){
  return (
    <div>
      <h1>Mí app</h1>
      
      <ul>
        <li><Link to="/marcas"> Marcas </Link></li>
      </ul>
      
    </div>
  )
}