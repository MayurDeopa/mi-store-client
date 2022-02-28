import React from "react";
import { FaCat } from "react-icons/fa";
import './Loading.css'

const Loading =()=>{
    return(
        <div className="loading">
            <FaCat/>
            {/*<div className="loader-wrapper">
                <div className="loader"></div>
            </div>*/}
        </div>
    )
}

export default Loading;