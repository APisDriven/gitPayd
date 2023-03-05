import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

const USER_STUBS = {
    HANK: {
        username: "Elena"
    },
    NONE: null,
}
 
const AuthProvider = (props)=> {
    const [user, setUser] = useState(USER_STUBS.HANK);
    const handleLogin =( username )=>{
        //at some point we will make a request to the backend here.
setUser({username});
    }
    return <AuthContext.Provider value = {{user, handleLogin}} {...props}/>
};

const useAuth = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuth
}