import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaHeart, FaTruck, FaTruckMonster } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Context } from "../../App";
import './Product.css'



const Product =({product})=>{
    const {cart,addToCartColor,productDetails} = useContext(Context)
    const [cartState,setCartState] = cart
    const [addToCart,setAddToCart] = addToCartColor
    const [viewDetails,setViewDetails] = productDetails
    const [isVisible,setIsVisible] = useState(false)

    const add_To_Cart =(some)=>{
        const found = cartState.items.find((x)=>x.id===some.id)
        if(found){
            setCartState({
                ...cartState,
                items:cartState.items.map((x)=>x.id===found.id?{...x,quantity:x.quantity + 1,price :{...x.price,raw:x.price.raw +some.price.raw}}:x),
                totalPrice:cartState.totalPrice + some.price.raw
            })
            console.log(some.price.raw)
        }
        else{
            setCartState({
                ...cartState,
                items:[...cartState.items,{...some,quantity:1}],
                totalPrice:cartState.totalPrice + some.price.raw
            })
        }
    }

    const view_Details =(some)=>{
        setViewDetails(some)
    }



    
    return( 
            <div className="product" >
                <img src ={product.image.url}className="product-img" id="product-img"></img>
                <div className ="product-overlay">
                    <button className='add-to-cart' onClick={()=>add_To_Cart(product)}>
                        Add To Cart
                    </button>
                    <NavLink end to ='/Product'className='view-product' onClick={()=>view_Details(product)}>
                        <p>View Product</p></NavLink>
                </div>
                <div className="product-details">
                    <p>{product.name}</p>
                    <p>{product.price.formatted}</p>
                </div>
            </div>
    )
}
export default Product;