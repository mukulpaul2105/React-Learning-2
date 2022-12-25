import React from "react";
import Cols from "./Cols";

export default function User() 
{
   return (
      // 1st was Using <div></div>
      // <div>
      //    <h1>React Fragment</h1>
      //    <h2>Using div</h2>
      // </div>

      // 2nd Way  Using Fragment
      // <React.Fragment>
      //    <h1>React Fagment</h1>
      //    <h2>Using React.Fragment</h2> 
      // </React.Fragment>

      // 3rd way using empty / blank tag
      // <>
      //    <h1>React Fragment</h1>
      //    <h2>Using blank tag</h2>
      // </>


      // Use of React Fragment
      <div>
         <h1>React Fragment</h1>
         <table>
            <tbody>
               <tr>
                  <Cols />
               </tr>
            </tbody>
         </table>
      </div>
   )
}