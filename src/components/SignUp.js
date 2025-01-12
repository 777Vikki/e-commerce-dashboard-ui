import React, { useState } from 'react';


const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const submitForm = () => {
        console.log(name, password, email);
    }

    return (
        <div className="register">
            <h1>Add Sign Up</h1>
            <input className="input-box" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="input-box" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="input-box" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="app-button" onClick={submitForm}>Sign Up</button>
        </div>
    )
}

export default SignUp;