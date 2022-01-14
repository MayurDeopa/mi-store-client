import React, { useCallback, useContext, useEffect } from "react";
import {FaShoppingBag} from 'react-icons/fa';
import { Context } from "../App";
import './CartIcon.css';

const CartIcon = ()=>{
    const {cart} = useContext(Context)
    const [cartState,setCartState] = cart
    return(
        <div className="cart-wrapper">
            <FaShoppingBag/><div className="cart-count">{cartState.items.length}</div>
        </div>
    )
}

export default CartIcon;

