import { useParams } from "react-router-dom"

export default function User()
{
   const params = useParams();
   const {name} = params;
   console.log(name);
   return (
      <div>
         <h1>This is {name}'s Page</h1> 
      </div>
   )
}