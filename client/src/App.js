// import {useQuery} from "@apollo/client";

// import{ QUERY_WHERE} from "./utils/queries";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { AuthProvider } from "utils/auth.js";

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/Signup.js";
import NewReceipt from "./pages/NewReceipt.js";
import Receipts from "./pages/Receipts.js";
import Profile from "./pages/Profile.js";
import NotFound from "./pages/NotFound.js";


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
 
  return (
        <ApolloProvider client={client}>
    <BrowserRouter>
  <Header />
  <main className="pad">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/receipts" element={<Receipts />} />
      <Route path="/newReceipt" element={<NewReceipt />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </main>
 <Footer />
  
  </BrowserRouter>
  </ApolloProvider>
  );
}

export default App;