import React from "react";
import Child from './Child'

// With Props
export default class User extends React.Component
{
   constructor()
   {
      super();
      this.state = {
         count: 0 
      }
   }

   render()
   {
      return (
         <div>
            <Child count = {this.state.count} />
            <button onClick={() => this.setState({count: 1})}>Update Count</button>
         </div>
      )
   }

}


// With State
// export default class User extends React.PureComponent
// {
//    constructor()
//    {
//       super();
//       this.state = {
//          count: 0
//       }
//    }

//    render()
//    {
//       console.warn("Check rerendering");
//       return (
//          <div>
//             <h1>Pure Component in React {this.state.count}</h1>
//             <button onClick={() => this.setState({count: 1})}>Update Count</button>
//          </div>
//       )
//    }

// }



// It is Normal Class component. While we click the update count button every time component is getting
// rerendering even if the state is same

// export default class User extends Component 
// {
//    constructor() 
//    {
//       super();
//       this.state = {
//          count: 1
//       }
//    }

//    render()
//    {
//       console.warn("Check rerendering");
//       return (
//          <div>
//             <h1>Class Component in React {this.state.count}</h1>
//             <button onClick={() => this.setState({count: 1})}>Update Count</button>
//          </div>
//       )
//    }
// }