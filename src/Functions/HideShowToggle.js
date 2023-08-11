// Hide And Show Toggle using two buttons, Using one button

import React from 'react'

export default function HideShowToggle() {
    const [status, setStatus]=React.useState(false)
    const [toggle, setToggle]=React.useState(false)
    return (
        <div>
            {
                status?
                <h1>Hello</h1>
                :null
            }
            <button onClick={()=>setStatus(false)} >Hide</button>
            <button onClick={()=>setStatus(true)} >Show</button>
<br/>
<br/>
            {/* Through Single Button */}
            {
                toggle?
                <form>
                    <input type='text' placeholder='enter your name'/>
                    <br/>
                    <textarea placeholder='Write your Description'/>
                </form>
                :null
            }
            <button onClickCapture={()=>setToggle(!toggle)} >Toggle</button>
        </div>
    )
}
