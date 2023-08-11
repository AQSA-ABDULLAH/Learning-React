import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [login, setLogin] = useState(2); 
    // if this is 1 welcome aqsa print and if 2 welcome Merha print and if other than guest print
  return (
    <div>
        {login==1? <h1>Welcome Aqsa</h1> : login==2? <h1>Welcome Merha</h1> : <h1>Welcome Guest</h1>}
    </div>
  )
}
