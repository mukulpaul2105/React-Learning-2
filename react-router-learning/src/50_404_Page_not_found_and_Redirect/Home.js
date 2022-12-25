import { Link } from "react-router-dom";

export default function Home()
{
   return (
      <div>
      <h1>Home Page</h1>
      <p>This is Home Page of our awesome App</p>
      <p>And here we are learning about Router </p>
      <Link to="/about" >Go to About Page</Link>
      </div>
   )
}