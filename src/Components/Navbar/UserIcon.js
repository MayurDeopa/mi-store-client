import React, { useContext } from "react";
import { FaArchive, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import './UserIcon.css'

const UserIcon = ()=>{
    const {hover,authentication} = useContext(Context)
    const [active,setActive] = hover
    const [authenticated,setAuthenticated] = authentication

    const setActivityOnFocus = ()=>{
        setActive(true)
    }

    const setActivityOnBlur = ()=>{
        setActive(false)
    }

    const handleAuthetication=()=>{
        setAuthenticated(false)
    }

    

    return(
        <button className="signin-wrapper" onFocus={setActivityOnFocus} onBlur={setActivityOnBlur}>
            <FaUser/>
            <ul className={active?"profile-drop-down":"profile-drop-down empty"} >
                <NavLink className="icon-anchor" end to='/ProfilePage' onClick={()=>setActive(false)}><li>Profile <FaUser/></li></NavLink>
                <NavLink className="icon-anchor" end to='/Settings' onClick={()=>setActive(false)}><li>Settings<FaArchive/></li></NavLink>
                <li onClick={handleAuthetication}>LogOut<FaSignOutAlt/></li>
            </ul>
                
        </button>
    )
}

export default UserIcon;