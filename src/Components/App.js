import React, { useState ,useEffect} from "react";
import HomePage from "./HomeBody/HomeScreen";
import { commerce } from "../lib/Commerce";
import Loading from "./Loader/Loading";
import { MainContext } from "../services/context";


const Context = MainContext


const App = ()=>{
    const [isLoading,setIsLoading] = useState(true)
    const[products,setproducts] = useState([1])
    const [userDetails,setUserDetails] = useState({
        email:"",
        password:"",
        username:""
    })
    const [active,setActive]= useState(false)
    const [authenticated,setAuthenticated] = useState(false)
    const [cartState,setCartState] = useState ({
        items : [],
        totalPrice : 0
    })
    const [addToCart,setAddToCart] =useState(false)
    const [viewDetails,setViewDetails] = useState('')


    const fetchProducts =async ()=>{
        const {data} = await commerce.products.list()
        setproducts(data)
        setIsLoading(false)
        
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    
    return(<div> 
        
        <Context.Provider value={
            {
                products:products,
                userData:[userDetails,setUserDetails],
                hover:[active,setActive],
                authentication:[authenticated,setAuthenticated],
                cart:[cartState,setCartState],
                addToCartColor:[addToCart,setAddToCart],
                productDetails :[viewDetails,setViewDetails]
            }}>
            {isLoading?<Loading/>:<HomePage/>}
        </Context.Provider>
    </div>)
}

export default App;
export {Context};

