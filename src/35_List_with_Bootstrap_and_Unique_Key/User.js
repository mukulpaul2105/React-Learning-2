import Table from 'react-bootstrap/Table';

export default function User() {
  //   let students = ['Mukul', 'Anil', 'Peter', 'Sam', 'Rahul'];

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
      <h1>Handle Array with List</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        {users.map((data, idx) => (
          data.contact !== 55482 ?
          <tbody key={idx}>
            <tr>
              <td>i{idx}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          </tbody>
          : null
        ))}
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
