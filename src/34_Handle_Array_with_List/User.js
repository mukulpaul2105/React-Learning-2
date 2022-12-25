import { Table } from "react-bootstrap";

export default function User() {
  //   let students = ['Mukul', 'Anil', 'Peter', 'Sam', 'Rahul'];

  let students = [
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

  // Map Looping
  //   students.map((item) => {
  //    console.warn(item);
  //   })

  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
  return (
    <div>
      <h1>Handle Array with List</h1>
      <Table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {
        students.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
          </tr>
        ))
        }
      </Table>

      {/* Or */}
      {/* {
            students.map((data) => 
               <h2>Name is: {data.name}, {data.email}, {data.contact}</h2>
            )
         } */}
      {/*  For loop is not supported
         {
            for(let i = 0; i < students.length; i++) {
               console.log(students[i]);
            }
         } */}
    </div>
  );
}
