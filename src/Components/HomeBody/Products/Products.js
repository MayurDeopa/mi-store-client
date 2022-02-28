import React, { useEffect ,useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import {Context } from "../../App";
import Footer from "../Footer";
import Product from "./Product";
import { commerce } from "../../../lib/Commerce";
import './Products.css'
import Spinner from "../../Loader/Spinner";
import ProductsPlaceHolder from "../../PlaceHolders/ProductsPlaceHolder";


const Products =()=>{
    const sample =[1,2,3,4,5,6,7,8,9,10]
    const [products,setproducts] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        const fetchProducts =async()=>{
            const res = await commerce.products.list()
            setproducts(res.data)
            setIsLoading(false)
            console.log(res.data)
        }
        fetchProducts()
    },[])
    return(
    <div   className="main">
        <div className = "products-display">
        {
            isLoading
            ?
            sample.map((s,i)=>{
                return <ProductsPlaceHolder key={i}/>
            })
            :
            products.map(product=>{
                return<Product product ={product} key={product.id}/>
            })
        }
        </div>
        <Footer/>
    </div>
    )
}

export default Products;