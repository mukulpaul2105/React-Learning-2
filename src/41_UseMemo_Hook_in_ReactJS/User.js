import { useMemo, useState } from "react"

export default function User ()
{
   const [count, setCount] = useState(0);
   const [item, setItem] = useState(10);

   // Now if we click on Update Item button then this method will never get called
   // because it's set for geting called only when count count state changes
   const multiCountMemo = useMemo(function multiCount()
   {
      console.warn("multiCount called")
      return count * 5;
   }, [count])
   
   return (
      <div>
         <h1>useMemo Hook in React</h1>
         <h2>Count: {count}</h2>
         <h2>Item: {item}</h2>
         <h2>MultiCount function: {multiCountMemo}</h2>
         <button onClick={() => setCount(count + 1)}>Update Count</button>
         
         <button onClick={() => setItem(item * 10)}>Update Item</button>
      </div>
   )


   // Without useMemo, Here we can see there is no relations between update item button with this
   // function even than also while we click on the update Item button this multiCount Method gets call
   // function multiCount()
   // {
   //    console.warn("multiCount called")
   //    return count * 5;
   // }

   // return (
   //    <div>
   //       <h1>useMemo Hook in React</h1>
   //       <h2>Count: {count}</h2>
   //       <h2>Item: {item}</h2>
   //       <h2>MultiCount function: {multiCount()}</h2>
   //       <button onClick={() => setCount(count + 1)}>Update Count</button>
         
   //       <button onClick={() => setItem(item * 10)}>Update Item</button>
   //    </div>
   // )
}