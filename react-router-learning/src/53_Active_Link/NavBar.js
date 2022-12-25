import { Link, NavLink} from "react-router-dom";

export default function NavBar() 
{
   return (
      <div>
         <ul className="navbar">
            {/* We can use .active {} in css file Or we can do this too */}
            <li>
               <NavLink
               style={({isActive}) => {return {backgroundColor: isActive ? 'green' : 'white'}}}
               className="nav-bar-link" to="/about" >About</NavLink>
            </li>
            <li>
               <NavLink 
               style={({isActive}) => {return {backgroundColor: isActive ? 'pink' : 'white'}}}
               className="nav-bar-link" to="/" >Home</NavLink>
            </li>
            <li>
               <NavLink className="nav-bar-link" to="/contact" >Contact</NavLink>
            </li>
         </ul>
      </div>
   )
}