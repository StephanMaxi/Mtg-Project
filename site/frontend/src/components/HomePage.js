import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage () {
const navigate = useNavigate();

return (

    <div className='form'>
        <div className='home-container'>
            <div className='body'>
        <button 
        onClick={()=>{
            navigate("/login")
        }}>Login</button>
        <button 
        onClick={()=>{
            navigate("signup")
        }}>Sign Up</button>
        </div>
    </div>
    </div>
);

}

export default HomePage