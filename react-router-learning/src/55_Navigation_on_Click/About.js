import { Link } from "react-router-dom";

export default function About()
{
   return (
      <div>
      <h1>About Page</h1>
      <p>This is About Page of our awesome App</p>
      <p>And here we are learning about Router </p>
      <Link to="/" >Go to Home Page</Link>
            <li>
               <Link to="/user/anil" >Anil</Link>
            </li>
            <li>
               <Link to="/user/peter" >Peter</Link>
            </li>
      </div>
   )
}