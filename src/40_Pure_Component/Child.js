import React from "react";

// With Props
export default class User extends React.PureComponent
{
   render()
   {
      console.warn("User component Check rerendering");
      return (
         <div>
            <h1>Pure Component with Props {this.props.count}</h1>
         </div>
      )
   }

}
