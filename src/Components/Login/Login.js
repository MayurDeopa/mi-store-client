import {React,useContext,useEffect,useState} from "react";
import { FaLock,FaEnvelope} from "react-icons/fa";
import { NavLink ,useNavigate} from "react-router-dom";
import { login } from "../../services/users";
import { Context } from "../App";
import Spinner from "../Loader/Spinner";
import './Login.css'






const LoginPage =()=>{
    const {userData,authentication} = useContext(Context)
    const [isLoading,setIsLoading] = useState(false)
    const [userDetails,setUserDetails] = userData
    const [authenticated,setAuthenticated] = authentication
    const [loginError,setLoginError] = useState("")
    const navigate = useNavigate()

    const userLogin =async()=>{
        setIsLoading(true)
        const res = await login(userDetails)
        console.log(res)
        setIsLoading(false)
        if(res.loggedin){
            navigate('/')
            setAuthenticated(true)
        }
        else{
            setLoginError(res.message)
        }
    }
    
    const setEmail=(some)=>{
        setUserDetails({...userDetails,email:some})
    }

    const setpassword=(some)=>{
        setUserDetails({...userDetails,password:some})
    }
    return(
            <div className ="login-page-wrapper">
                <div className="login-page">
                    <h2>Log In</h2>
                    <div className="login-page-input-wrapper"><FaEnvelope/><input type ="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="login-page-input"></input></div>
                    <div className="login-page-input-wrapper"><FaLock/><input type ="password" placeholder= "Password" onChange={(e)=>setpassword(e.target.value)} className="login-page-input"></input></div>
                        <p>{loginError}</p>
                        <input type="button" value="Log In"  className="login-page-login-btn" onClick={userLogin}></input>             
                    <p>Don't have an account ? <NavLink end to="/SignUpPage" className="login-page-router">Create an account</NavLink></p> 
                    <NavLink end to= "/ForgotPassword" className="login-page-router">Forgot Password</NavLink>
                </div>
                {isLoading?<Spinner/>:''}
            </div>

    )
}
//
export default LoginPage;