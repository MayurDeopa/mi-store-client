import { useState,useEffect, useContext} from "react";
import { Context } from "../App";
import Spinner from "../Loader/Spinner";
import { signUp} from "../../services/users";
import { FaLock,FaEnvelope} from "react-icons/fa";




const SignUpPage =()=>{
    const {userData}  = useContext(Context)
    const [signInError ,setSigninError] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [userDetails,setUserDetails] = userData
    

    const setEmail=(some)=>{
        setUserDetails({...userDetails,email:some})
    }

    const setpassword=(some)=>{
        setUserDetails({...userDetails,password:some})
    }
    
    const signIn =()=>{
        setIsLoading(true)
        signUp(userDetails)
        .then(response=>setSigninError(response.message))
        .then(()=>setIsLoading(false))
    }
    

    return(
        <div className ="login-page-wrapper">
            <div className="login-page">
                <h2>Sign Up</h2>
                <div className="login-page-input-wrapper"><FaEnvelope/><input type ="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="login-page-input"></input></div>
                <div className="login-page-input-wrapper"><FaLock/><input type ="password" placeholder= "Password" onChange={(e)=>setpassword(e.target.value)} className="login-page-input"></input></div>
                <p>{signInError}</p>
                <input type="button"  className="login-page-login-btn"  value="Sign Up" onClick={signIn}></input>    
            </div>
            {isLoading?<Spinner/>:""}
        </div>
    )
}

export default SignUpPage;