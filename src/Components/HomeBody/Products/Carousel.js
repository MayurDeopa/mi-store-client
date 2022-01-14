import React, { useEffect, useState } from "react";

const Carousel =({products})=>{
    useEffect(()=>{
        setItems(products)
        console.log(items)
    })
    
    const [items,setItems] =useState([])
    

    return(
            <div className="platform-wrapper">
                <div className="platform"> 
                    {items.map(product=>{
                        return (
                            <div className="platform-product">
                                <img src={product.image.url} className="product-img"></img>
                            </div>
                        )
                    })}
                </div> 
            </div>
    )
}

export default Carousel;