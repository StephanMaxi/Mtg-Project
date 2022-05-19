import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function LoginPage () {
const loginTitle = "Login Page";
const nav = useNavigate();
return(
<div className='form'>
    <div className='form-container'>
        <div className="header">
        <h1>{loginTitle}</h1>
        </div>
        <div className='body'>
            <div className='login-form-conatiner'>
            <input 
            type={"text"}
            placeholder="Email.."
            ></input>
             <input 
            type={"Passwrod"}
            placeholder="Passwrod.."
            ></input>
            </div>
        </div>
        <div className='footer'>
            <button 
            onClick={()=>{
                nav('/')
            }}>Home</button>
            <button
            onClick={()=>{
                alert("Logging in now")
            }}>Login</button>
        </div>
    </div>
</div>
);
}


export default LoginPage