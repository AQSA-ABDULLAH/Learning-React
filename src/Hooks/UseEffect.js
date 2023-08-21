import React, { useEffect, useState} from 'react'

export default function UseEffect() {
  const[count, setCount]=useState(0);
    useEffect(()=>{
        console.log("useEffect")
    })
  return (
    <div>
      <h3>USE EFFECT TUTORIAL</h3>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)} >Click me</button>
    </div>
  )
}
