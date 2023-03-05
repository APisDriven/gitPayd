import { useState} from "react";
import {useAuth} from "util/auth.js"

export default function SignUp(){
const [username, setUsername]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");

const signupSubmit = (event) => {
event.preventDefault();
handleSignup({username});
setUsername("");
setEmail("");
setPassword("");
    }

return(
   <>
   <section>
   <header>
      <h2>Please sign up</h2>
   </header>
   <main>
    <form onSubmit={signupSubmit}>
      <p>Sign Up</p>
        <label htmlFor="username">Username</label>
        <input type="username"  name ="username" required  value={username} onChange={(event)=> setUsername(event.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email"  name ="email" required value={email} onChange={(event)=> setEmail(event.target.value)}  />
        <label htmlFor="password">Password</label>
        <input type="password"  name ="password" required  value={password} onChange={(event)=> setPassword(event.target.value)} />
        <input type="submit" />
    </form>
   </main>
    </section> 
    </>
)

}