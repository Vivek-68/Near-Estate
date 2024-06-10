import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
const [currentUser,setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
);
const updateUser = (user) =>{
    localStorage.setItem("user",user);
    setCurrentUser(JSON.parse(user));
}
return (
<AuthContext.Provider value={{currentUser,updateUser}}>
    {children}
</AuthContext.Provider>
)
}

export {AuthContext,AuthContextProvider};