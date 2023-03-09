
// import Form from "components/Form/index.js"
import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Form, Button, Alert } from "react-bootstrap";

import { loginUser } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
// const [username, setUsername]= useState("");
const [email, setEmail]= useState("");
const [login, { error }] = useMutation(loginUser);
const [password, setPassword]= useState("");
const [validated] = useState(false);
const [showAlert, setShowAlert] = useState(false);


const handleFormSubmit = async (event) => {
  event.preventDefault();

  try {
    const { data } = await login({
      variables: { email, password },
    });
    console.log(data)
    Auth.login(data.login.token);
  } catch (err) {
    console.error(error);
    setShowAlert(true);
  }

  // setUsername("");
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
          <Form onSubmit={handleFormSubmit}>
          <p>Log In</p>
            {/* <Form.Label htmlFor="username">Username</Form.Label> */}
            {/* <Form.Control type="username"  name ="username" required  value={username} onChange={(event)=> setUsername(event.target.value)} /> */}
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email"  name ="email" required  value={email} onChange={(event)=> setEmail(event.target.value)} />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password"  name ="password" required  value={password} onChange={(event)=> setPassword(event.target.value)} />
            <Button
          disabled={
            !(
              // username &&
              email &&
              password
            )
          }
          type="submit"
          variant="success"
          style={{color: '#049A8F', backgroundColor: '#023436'}}
        >
          Submit
        </Button>
          </Form>
          <p>Need to create an account? <Link to="/signup" style={{color: '#049A8F'}}>Sign Up</Link>
</p>
            </main>
      </section>
      </>
    )
}

export default Login