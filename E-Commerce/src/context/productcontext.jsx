import { createContext, useContext, useEffect} from "react";
import axios from 'axios'
const AppContext = createContext()
const API = 'api.pujakaitem.com/api/products'
const AppProvider = ({children}) =>{
    const getProducts = async (url) =>{
        const res = await axios.get(url)
        const products = await res.data
    }
    useEffect((url) => {  
      getProducts(API)
    }, [])
    
    return(
        <>
            <AppContext.Provider value={{myName:"Ashay Gupta"}}>{children}</AppContext.Provider>
        </>
    )
}
const useProductContext = () =>{
    return useContext(AppContext)
}
export {AppProvider,AppContext,useProductContext}