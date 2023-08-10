import React, {useState} from 'react';

export default function HandelingForm() {
    const [name, setName]=React.useState("");
    const [option, setOption]=React.useState("");
    const [tac, settac]=React.useState(false);
    function getFormData(e){
        console.log(name);
        console.log(option);
        console.log(tac);
        e.preventDefault()
    }
  return (
    <div>
        <h2>Handeling Form</h2>
        <form onSubmit={getFormData} >
            <input type='text' placeholder='Name' onChange={(name)=>setName(name.target.value)} />
            <br/>
            <br/>
            <select onChange={(option)=>setOption(option.target.value)}>
                <option>Select Option</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <br/>
            <br/>
            <input type='checkbox' onChange={(tac)=>settac(tac.target.value)}/><span>Accept Term And Condition</span>
            <br/>
            <br/>
            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}
