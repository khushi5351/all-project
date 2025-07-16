import React, { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUser } from '../apis/handle_apis';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(email);
    // console.log(password);
    const navigate = useNavigate()
    const submitLogin = async (e) => {
        e.preventDefault()
        const res = await getUser(email, password)
        if(res){
            navigate("/Contact");

        }
        else{
            alert("register first")
            navigate('/Register')
        }
        //  const user = res.data;
        // console.log(user);
       

    }
    return (
        <div className="container">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="center">
                <h2>Please Sign In</h2>
                <form onSubmit={submitLogin}>
                    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button>Login</button>
                    <NavLink to="/Register">Already a member?</NavLink>
                    <h2>&nbsp;</h2>
                </form>
            </div>
        </div>
    );
}

export default Login;
