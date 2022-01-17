import React, { useContext } from "react";
import {FaCat, FaLock} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Context } from "../../App";
import './CartPage.css'

const CartPage=()=>{
    const {authentication,cart} = useContext(Context)
    const [authenticated,setAuthenticated] = authentication
    const [cartState,setCartState] = cart

    const increase =( item  )=>{
        setCartState({
            ...cartState,
            items:cartState.items.map((x)=>x.id===item.id?{...x,quantity:x.quantity + 1,price :{...x.price,raw:x.price.raw +item.price.raw}}:x),
            totalPrice:cartState.totalPrice + item.price.raw
        })
        console.log(item.price.raw)
    }
    const remove =(item)=>{
        setCartState({
            ...cartState,
            items:cartState.items.filter((x)=>x.id!==item.id),
            totalPrice:cartState.totalPrice - item.price.raw
        })
    }
    
    return(
        <div className="cart-page-wrapper">
            {authenticated?
            <div className="cart-container-wrapper">
                <div className="continue-shopping-wrapper"><NavLink end to ='/' className="icon-anchor"><button className='continue-shopping'>Back To Shopping</button></NavLink></div>
                <div className="cart-container">
                    {cartState.totalPrice!==0? cartState.items.map((item,index)=>{
                        return  (
                            
                            <div className="cart-item" key={index}>
                                <img  className="cart-page-product-image" src={item.image.url}  />
                                <div className="cart-page-product-details">
                                    <p><strong>{item.name}</strong></p>
                                    <p>Price : {item.price.raw}</p>
                                    <p>Quantity : {item.quantity}</p>
                                </div>
                                <div className="cart-buttons">
                                    <button className="cart-buttons-button" onClick ={()=>increase(item)}>Increase</button>
                                    <button className="cart-buttons-button" onClick ={()=>remove(item)}>Remove</button>
                                </div>
                                
                            </div>
                            )
                               
                        })
                        :<div className="empty-cart-message">Cart is empty <FaCat/></div>       
                    }
                </div>
                <div className={cartState.totalPrice===0?"display-none":"cart-page-total-price"}>
                    <h3 className="total-price">Total Price : {cartState.totalPrice}</h3>
                    <button className="proceed-to-pay"><h3 className="total-price">Proceed To Pay {cartState.totalPrice}</h3></button>
                </div>
            </div>
            :<NavLink end to='/LoginPage' className="icon-anchor"><button className="log-in-to-use-cart">Log In<FaLock/></button></NavLink>}       
        </div>
    )
}

export default CartPage;
