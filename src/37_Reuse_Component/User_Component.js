export default function User_Component(props) 
{
   return (
      <div>
         <span>{props.data.name}</span>
         <span>{props.data.email}</span>
         <span>{props.data.contact}</span>
         <button onClick={() => alert(props.data.name)}>Show Name</button>
      </div>
   )
}