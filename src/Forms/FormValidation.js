import React from 'react'

export default function FormValidation() {
    const [userId, setuserId]=React.useState("");
    const [password, setpassword]=React.useState("");
    const [userErr, setUserErr]= React.useState(false);
    const [passwordErr, setPasswordErr]= React.useState(false);
    function getFormData(e){
        e.preventDefault()
    }

    function userHandel(userId){
        let item = userId.target.value;
        if(item.length < 3){
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
    }

    function passwordHandle(password){
        let p = password.target.value;
        if(p.length < 5){
            setPasswordErr(true);
        }
        else{
            setPasswordErr(false);
        }
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={getFormData} >
            <input type='text' placeholder='Enter ID' onChange={userHandel} />
            <br/>
            {userErr? <span>Weak ID</span>:""}
            <br/>
            <br/>
            <input type='password' placeholder='Enter password' onChange={passwordHandle}/>
            <br/>
            {passwordErr? <span>Weak password</span>:""}
            <br/>
            <br/>
            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}
