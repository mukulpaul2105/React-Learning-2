export default function Child(props)
{

   const data = "Mukul Paul";
   return (
      <div>
         <button onClick={() => props.alert(data)}>Click Me!</button>
      </div>
   )











   // Receiving data from Parent to Child
   // return (
   //    <div>
   //       <h2>Child Component Name: {props.name}</h2>
   //       <button>Click Me!</button>
   //    </div>
   // )
}