import { useRef } from "react";
import Child from "./Child";

export default function User()
{
   const inputRef = useRef(null);
   function updateInput()
   {
      inputRef.current.value = "10000";
      inputRef.current.style.color = "red";
      inputRef.current.focus();
   }
   return (
      <div>
         <h1>forwardRef in ReactJS</h1>
         <Child ref = {inputRef}/>
         <button onClick={updateInput}>Update Input Box</button>
      </div>
   )
}