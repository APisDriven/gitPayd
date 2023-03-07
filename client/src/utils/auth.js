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















// ================================================
// // use this to decode a token and get the user's information out of it
// import decode from 'jwt-decode';

// // create a new class to instantiate for a user
// class AuthService {
//   // get user data
//   getProfile() {
//     return decode(this.getToken());
//   }

//   // check if user's logged in
//   loggedIn() {
//     // Checks if there is a saved token and it's still valid
//     const token = this.getToken();
//     return !!token && !this.isTokenExpired(token); // handwaiving here
//   }

//   // check if token is expired
//   isTokenExpired(token) {
//     try {
//       const decoded = decode(token);
//       if (decoded.exp < Date.now() / 1000) {
//         return true;
//       } else return false;
//     } catch (err) {
//       return false;
//     }
//   }

//   getToken() {
//     // Retrieves the user token from localStorage
//     return localStorage.getItem('id_token');
//   }

//   login(idToken) {
//     // Saves user token to localStorage
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/');
//   }

//   logout() {
//     // Clear user token and profile data from localStorage
//     localStorage.removeItem('id_token');
//     // this will reload the page and reset the state of the application
//     window.location.assign('/');
//   }
// }

// export default new AuthService();
// >>>>>>> 555dffddeb68f81dd0202c8abf72fb0a3c6d32cb
