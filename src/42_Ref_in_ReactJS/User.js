// import React from "react";

import React, {createRef} from 'react';

export default class User extends React.Component
{
   constructor()
   {
      super();
      this.inputRef = createRef();
   }

   componentDidMount()
   {
      // console.warn(this.inputRef.current.value = "10000");
   }

   getVal()
   {
      // Here we are manipulating the DOM directly
      console.warn(this.inputRef.current.value);
      this.inputRef.current.style.color = "red";
      this.inputRef.current.style.backgroundColor = "pink"
   }
   render()
   {
      return(
         <div>
            <h1>Ref in React JS</h1>
            <input type="text" ref={this.inputRef}/>
            <button onClick={() => this.getVal()}>Check Ref</button>
         </div>
      )
   }
}