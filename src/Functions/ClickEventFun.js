import React from 'react'

export default function ClickEventFun() {
    function click(){
        alert("Function Call");
      }
  return (
    <div>
        {/* <button onClick={click}>CLICK ME</button> */}

        {/* This is a correct way but better to use arrow function */}

        <button onClick={()=>click()} >Click Me</button>
    </div>
  )
}