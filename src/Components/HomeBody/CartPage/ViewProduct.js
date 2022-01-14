import React, { useContext, useEffect } from 'react'
import { Context } from '../../App';
import { FaCross, FaMinus, FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './ViewProduct.css'

const ViewProduct =()=>{
    const {productDetails} = useContext(Context)
    const [viewDetails,setViewDetails] = productDetails


    return (

            <div className="view-product-wrapper">
                {viewDetails!==''?  
                    <div className="view-product-container">
                        <img src={viewDetails.image.url}/>
                        <div className='view-product-container-right-bar'>
                            <div className='view-details-right-bar-details'>
                            <p>{viewDetails.description}</p>
                            </div>
                            <div className='view-buttons'>
                                <button className='add-to-cart-view'>Add To Cart</button>
                                <button className='buy-now-view'>Buy Now</button>
                            </div>
                        </div>
                        <NavLink className='view-details-close-button' onClick={()=>setViewDetails('')} end to ='/'>
                            <FaMinus/>
                        </NavLink>
                    </div>
                    :''}
            </div>
        

    )
}

export default ViewProduct;