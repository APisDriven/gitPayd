import React, { useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addOneUser } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";

import Auth from "../utils/auth";

export default function SignUp(){
const [username, setUsername]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
// set state for alert
const [showAlert, setShowAlert] = useState(false);

const [addUser, { error }] = useMutation(addOneUser);

const signupSubmit = async (event) => {
    console.log('here')
    event.preventDefault();

    // const form = event.currentTarget;

    // if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    // }



    try {
        const { data, error } = await addUser({
        variables: { username, password, email  },
        });
        Auth.login(data.addUser.token);
    } catch (err) {
        console.log('Errored here')
        console.error(error);
        setShowAlert(true);
    }

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
    <Form onSubmit={signupSubmit}>
    <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
      <p>Sign Up</p>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control type="username"  name ="username" required  value={username} onChange={(event)=> setUsername(event.target.value)} />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email"  name ="email" required value={email} onChange={(event)=> setEmail(event.target.value)}  />
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control type="password"  name ="password" required  value={password} onChange={(event)=> setPassword(event.target.value)} />
        <Button
          disabled={
            !(
              username &&
              email &&
              password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
    </Form>
    <p>Have an account already? <Link to="/">Login</Link>
</p>
   </main>
    </section> 
    </>
)

}
