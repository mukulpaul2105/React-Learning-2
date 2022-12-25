import { Link } from "react-router-dom";

export default function NavBar() 
{
   return (
      <div>
         <ul>
            <li>
               <Link to="/about" >About</Link>
            </li>
            <li>
               <Link to="/" >Home</Link>
            </li>
            <li>
               <Link to="/contact" >Contact</Link>
            </li>
         </ul>
      </div>
   )
}