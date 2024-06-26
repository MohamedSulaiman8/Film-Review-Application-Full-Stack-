import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { AuthContext } from "../context/authContext";
const Login=()=>{
    const [inputs,setInputs]=useState({
        username:'',
        password:''
    })
    const [error,setError]=useState(null)
    const navigate=useNavigate();
    const {login}=useContext(AuthContext);
    const handleChange =  e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            await login(inputs)
            navigate('/home')
        }
        catch(err){
            setError(err.response.data)
        }
    
    }
    return(
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input required type="text" name="username" placeholder="Enter youe username" onChange={handleChange} />
                <input required type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                {error && <p>{error}</p>}
                
                <span>Don't have an account? <Link to="/register" >Register</Link></span>
            </form>
        </div>
    )
}

export default Login;