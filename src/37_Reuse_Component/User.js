import User_Component from "./User_Component";

export default function User() {

  let users = [
    {
      name: "Mukul",
      email: "mukul@react.com",
      contact: 88383,
    },
    {
      name: "Sidhu",
      email: "sidhu@react.com",
      contact: 55845,
    },
    {
      name: "Sam",
      email: "sam@react.com",
      contact: 99685,
    },
    {
      name: "Peter",
      email: "peter@react.com",
      contact: 55482,
    },
  ];

  return (
    <div>
      <h1>Reuse Component with List</h1>
      {
        users.map((item) => 
        <User_Component data = {item}/>
        )
      }
    </div>
  );
}
