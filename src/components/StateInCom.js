
// EVERY TIME WHEN WE CLICK ON ADD BUTTON DATA WILL INCREMENT

import {useState} from 'react'
export default function StateInCom() {
  const [data,setData] = useState(0);
  function updateData(){
    setData(data+1);
  }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateData} >Add Item</button>
    </div>
  )
}
