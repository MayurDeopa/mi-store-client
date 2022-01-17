import { FaCat, FaHome, FaSearch, FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import CartIcon from "../Navbar/CartIcon"
import Logo from "../Navbar/Logo"
import UserIcon from "../Navbar/UserIcon"
import './BottomBar.css'
import BottomBarSearch from "./BottomBarSearch"


const BottomBar= ()=>{
    return(
        <nav className="bottom-bar">
            <NavLink end to='/' className="icon-anchor"><Logo/></NavLink>
            <NavLink end to='/' className="icon-anchor"><BottomBarSearch/></NavLink>
            <NavLink end to='/CartPage' className="icon-anchor"><CartIcon/></NavLink>
            <NavLink end to='/LoginPage' className="icon-anchor"><UserIcon/></NavLink>
        </nav>
    )
}

export default BottomBar;