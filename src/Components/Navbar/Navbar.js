import {React, useContext, useState} from "react";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
import Searchbar from "./SearchBar";
import SignIn from "./SignIn";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import UserIcon from "./UserIcon";
import { Context } from "../App";
import './Navbar.css'


const Navbar = ()=>{
    const [smallNavState,setSmallNavState] = useState(false)
    const {authentication} = useContext(Context)
    const [authenticated,setAuthenticated] = authentication

    const navbarState =()=>{
        setSmallNavState(!smallNavState)
    }

    const navUlState=()=>{
        setSmallNavState(false)
    }

    return(
        <div className ="navbar">  
            <NavLink className="icon-anchor" end to="/" onClick={navUlState}><Logo/>mi-Store</NavLink>
            <ul className={smallNavState?'nav-ul trigger-nav-ul' :'nav-ul'} onClick={navUlState}>
                <Searchbar/>
                <NavLink className="icon-anchor" end to="/CartPage"><CartIcon/></NavLink>
                {authenticated?<UserIcon/>:<NavLink className="icon-anchor" end to="/LoginPage"><SignIn/></NavLink>}
            </ul>
            <div className={smallNavState?"burger burger-rotate":"burger"} onClick={navbarState}>
                <FaBars/>
            </div>
        </div>          
    )
}
export default Navbar;