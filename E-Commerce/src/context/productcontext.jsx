import { createContext } from "react";

const AppContext = createContext()
const AppProvider = ({children}) =>{
    return(
        <>
            <AppContext.Provider value="Ashay Gupta">{children}</AppContext.Provider>
        </>
    )
}
export {AppProvider}