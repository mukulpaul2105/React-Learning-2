import { Link, useNavigate } from "react-router-dom";

export default function Home()
{

   const navigate = useNavigate();

   const naveToPage = (url) => {
      navigate(url);
   }
   return (
      <div>
         <h1>Home Page</h1>
         <p>This is Home Page of our awesome App</p>
         <p>And here we are learning about Router </p>
         <Link to="/about" >Go to About Page</Link><br/>

         {/* <button onClick={() => navigate('/about')}>Go to About Page</button><br />
         <button onClick={() => navigate('/filter')}>Go to Filter Page</button> */}
            {/*Or  */}
         <button onClick={() => naveToPage('/about')}>Go to About Page</button><br />
         <button onClick={() => naveToPage('/filter')}>Go to Filter Page</button>
      </div>

   )
}