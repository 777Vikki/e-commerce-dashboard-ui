import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth) {
            navigate("/");
        }
    });

    const submitForm = async () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(name && name.trim() && password &&  password.trim() && email && emailRegex.test(email)) {
            let apiResponse = await fetch("http://localhost:5000/register", {
                method: 'post',
                body: JSON.stringify({name, email, password}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            apiResponse = await apiResponse.json();
            if(apiResponse?.result) {
                navigate('/login')
            }
        } else {
            alert("Please enter valid input");
        }
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