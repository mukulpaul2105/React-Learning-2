import { useState } from "react";

function User()
{
   let [val, setVal] = useState("");
   let [item, setItem] = useState("");
   return (
      <div>
         <h1>Controlled Component</h1>
         <input type="text"  value = {val} defaultValue= "Default" onChange = {(e) => setVal(e.target.value)}/>
         {/* If we want to print the default value until we type any value then */}
         <input type="text" defaultValue= "Default" onChange = {(e) => setVal(e.target.value)}/>
         <input type="text" item = {item} onChange = {(e) => setItem(e.target.value)} />
         <h3>{val}</h3>
      </div>
   )
}

export default User;