import React from 'react'
import { useState } from 'react'
export default function Hooks() {
    const [data, setData] = useState("Anial");
  return (
    <div>
        <h2>{data}</h2>
        <button onClick={()=>setData("Aqsa")}>Click Me</button>
    </div>
  )
}
