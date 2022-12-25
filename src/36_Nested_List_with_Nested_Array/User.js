import { Table } from "react-bootstrap";

export default function User() 
{
   let users = [
      {
        name: "Mukul",
        email: "mukul@react.com",
        address: [
         {
            house_No: 10,
            city: "Kokrajhar",
            state: "Assam"
         },
         {
            house_No: 101,
            city: "Noida",
            state: "Delhi"
         },
         {
            house_No: 201,
            city: "Gurgaon",
            state: "Hariyana"
         }
        ]
      },
      {
        name: "Sidhu",
        email: "sidhu@react.com",
        address: [
         {
            house_No: 10,
            city: "Kokrajhar",
            state: "Assam"
         },
         {
            house_No: 101,
            city: "Noida",
            state: "Delhi"
         },
         {
            house_No: 201,
            city: "Gurgaon",
            state: "Hariyana"
         }
        ]
      },
      {
        name: "Sam",
        email: "sam@react.com",
        address: [
         {
            house_No: 10,
            city: "Kokrajhar",
            state: "Assam"
         },
         {
            house_No: 101,
            city: "Noida",
            state: "Delhi"
         },
         {
            house_No: 201,
            city: "Gurgaon",
            state: "Hariyana"
         }
        ]
      },
      {
        name: "Peter",
        email: "peter@react.com",
        address: [
         {
            house_No: 10,
            city: "Kokrajhar",
            state: "Assam"
         },
         {
            house_No: 101,
            city: "Noida",
            state: "Delhi"
         },
         {
            house_No: 201,
            city: "Gurgaon",
            state: "Hariyana"
         }
        ]
      },
    ];

   return (
      <div>
         <h1>Nested List</h1>
         <Table variant="dark" striped>
            <thead>
               <tr>
                  <td>S.No.</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Address</td>
               </tr>
            </thead>
            {
               users.map((data, idx) => 
                  <tbody key={idx}>
                     <tr>
                        <td>{idx + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{
                           <Table variant="dark" striped>
                              <tbody>{
                                 data.address.map((item, iddx) =>
                                 <tr key={iddx}>
                                    <td>{iddx + 1}</td>
                                    <td>{item.house_No}</td>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                 </tr>
                              )
                              }</tbody>
                           </Table> 
                        }</td>
                     </tr>
                  </tbody>
               )
            }
         </Table>
      </div>
   )
}