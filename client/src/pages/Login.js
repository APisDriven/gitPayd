
// import Form from "components/Form/index.js"
import { useState} from "react";
import {useAuth} from "util/auth.js"

export default function Login(){
const { handleLogin} = useAuth();
const [username, setUsername]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const loginSubmit = (event) => {
event.preventDefault();
handleLogin({username});
setUsername("");
setEmail("");
setPassword("");
};



    return(
        <>
        <section>
            <header>
                <h2>Please log in or sign up</h2>
            </header>
            <main>
          <form onSubmit={loginSubmit}>
          <p>Log In</p>
            <label htmlFor="username">Username</label>
            <input type="username"  name ="username" required  value={username} onChange={(event)=> setUsername(event.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email"  name ="email" required  value={email} onChange={(event)=> setEmail(event.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password"  name ="password" required  value={password} onChange={(event)=> setPassword(event.target.value)} />
            <input type="submit" />
          </form>

            </main>
      </section>
      </>
    )
}