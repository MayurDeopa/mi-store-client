import React, { useEffect ,useContext} from "react";
import { NavLink } from "react-router-dom";
import {Context } from "../../App";
import Footer from "../Footer";
import Product from "./Product";
import './Products.css'


const Products =()=>{
    const {products,productDetails} = useContext(Context)
    const [viewDetails,setViewDetails] = productDetails
    return(
    <div   className="main">
        <div className = "products-display">
            {products.map(product=>{
                return<Product product ={product} key={product.id}/>
            })}
        </div>
        <Footer/>
    </div>
    )
}

export default Products;