
// import Form from "components/Form/index.js"
import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { loginUser } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
const [username, setUsername]= useState("");
const [email, setEmail]= useState("");
const [login, { error }] = useMutation(loginUser);
const [password, setPassword]= useState("");
const [validated] = useState(false);
const [showAlert, setShowAlert] = useState(false);


const handleFormSubmit = async (event) => {
  event.preventDefault();

  // check if form has everything (as per react-bootstrap docs)
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  try {
    const { data } = await login({
      variables: { email, password },
    });
    Auth.login(data.login.token);
  } catch (err) {
    console.error(error);
    setShowAlert(true);
  }

  setUsername("");
  setEmail("");
  setPassword("");
};


    return(
        <>
        <section className="pad">
            <header className="pad">
                <h2>Please log in or sign up</h2>
            </header>
            <main>
          <form onSubmit={handleFormSubmit}>
          <p>Log In</p>
            <label htmlFor="username">Username</label>
            <input type="username"  name ="username" required  value={username} onChange={(event)=> setUsername(event.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email"  name ="email" required  value={email} onChange={(event)=> setEmail(event.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password"  name ="password" required  value={password} onChange={(event)=> setPassword(event.target.value)} />
            <input type="submit" />
          </form>
          <p>Need to create an account? <Link to="/signup">SignUp</Link>
</p>
            </main>
      </section>
      </>
    )
}

export default Login