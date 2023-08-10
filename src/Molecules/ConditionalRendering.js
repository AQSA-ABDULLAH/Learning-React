import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [login, setLogin] = useState(true); 
    // if this is ture welcome aqsa print and if false welcome guest print
  return (
    <div>
        {login? <h1>Welcome Aqsa</h1> : <h1>Welcome Guest</h1>}
    </div>
  )
}
