import { Link } from "react-router-dom";

export default function Page404()
{
   return (
      <div>
         <h1>404 Page Not Found</h1>
         <p>This URL does not exists</p>
         <Link to="/" >Go to Home Page</Link>
      </div>
   )
}