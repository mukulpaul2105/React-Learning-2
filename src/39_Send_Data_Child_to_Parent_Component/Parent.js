import Child from "./Child";

export default function Parent()
{
   function parentAlert(data)
   {
      alert(data);
   }

   return (
      <div>
         <h1>Lifting State Up</h1>
         <Child alert = {parentAlert} />
      </div>
   )






   // Passing Data form Parent to Child
   // let data = "Anil Sidhu";

   // return (
   //    <div>
   //       <h1>Lifting State Up</h1>
   //       <Child name = {data} />
   //    </div>
   // )
}