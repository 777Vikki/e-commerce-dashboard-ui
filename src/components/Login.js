import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const submitForm = async () => {
        if(email && password) {
            let apiResponse = await fetch("http://localhost:5000/login", {
                method: 'post',
                body: JSON.stringify({email, password}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            apiResponse = await apiResponse.json();
            if(apiResponse.result) {
                localStorage.setItem('user', JSON.stringify(apiResponse.data[0]));
                navigate('/');
            } else {

            }
            
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input className="input-box" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="input-box" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="app-button" onClick={submitForm}>Login</button>
        </div>
    )
}

export default Login;