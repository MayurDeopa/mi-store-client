import React from "react";
import {Route,Routes,Navigate} from 'react-router-dom'
import BottomBar from "../BottomBar/BottomBar";
import LoginPage from "../Login/Login";
import SignUpPage from "../Login/SignUpPage";
import Navbar from "../Navbar/Navbar";
import ProfilePage from "../ProfilePage";
import Settings from "../Settings";
import CartPage from "./CartPage/CartPage";
import ViewProduct from "./CartPage/ViewProduct";
import Products from "./Products/Products";



const HomePage =()=>{
    return(
        
        <div >
            <Navbar/>
            <BottomBar/>
            <Routes>
                <Route path='/CartPage' element={<CartPage/>}></Route>
                <Route path='/Product' element={<ViewProduct/>}></Route>
                <Route path='/' element={<Products/>}></Route>
                <Route path='/ProfilePage' element={<ProfilePage/>}></Route>
                <Route path='/Settings' element ={<Settings/>}></Route>
                <Route path='/LoginPage' element={<LoginPage/>}></Route>
                <Route path='/SignUpPage' element={<SignUpPage/>}></Route>
            </Routes>
        </div>
    )
}

export default HomePage;