import { useContext } from "react"
import { Outlet } from "react-router-dom"
import LoginPage from "../Components/Login/Login"
import SignUpPage from "../Components/Login/SignUpPage"
import { MainContext } from "../services/context"


const ProtectedRoutes =()=>{
    const {authentication} = useContext(MainContext)
    const [authenticated,setAuthenticated] = authentication
    return authenticated?<Outlet/>:<LoginPage/>
}
export default ProtectedRoutes;