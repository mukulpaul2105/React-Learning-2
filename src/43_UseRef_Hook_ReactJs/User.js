import { useRef } from "react"

export default function User()
{
   let inputRef = useRef(null);
   function handleInput()
   {
      console.warn("Function called")
      // inputRef.current.value = "1000";
      inputRef.current.focus();
      inputRef.current.style.color = "red";
      inputRef.current.style.display = "none";
   }
   return(
      <div>
         <h1>UseRef example for handling Focus, Color, Value etc</h1>
         <input type="text" ref={inputRef}/>
         <button onClick={handleInput}>Handle Input</button>
      </div>
   )
}